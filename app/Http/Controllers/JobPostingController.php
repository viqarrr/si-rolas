<?php

namespace App\Http\Controllers;

use App\Models\Company;
use App\Models\JobPosting;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;
use App\Jobs\SendJobPostingApprovalEmail;
use App\Jobs\SendCompanyCredentialsEmail;

class JobPostingController extends Controller
{
    /**
     * Show the form for creating a new job posting (public).
     */
    public function create(): Response
    {
        return Inertia::render('JobPostings/Create');
    }

    /**
     * Store a newly created job posting (public submission).
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'company_name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:20',
            'address' => 'required|string',
            'website' => 'nullable|url|max:255',
            'description' => 'nullable|string',
            'logo' => 'nullable|image|mimes:jpg,jpeg,png,gif,webp|max:5120',
            
            'title' => 'required|string|max:255',
            'job_description' => 'required|string',
            'requirements' => 'required|string',
            'job_type' => 'required|in:full_time,part_time,internship,contract,freelance',
            'work_location' => 'required|in:onsite,remote,hybrid',
            'location' => 'nullable|string|max:255',
            'salary_range' => 'nullable|string|max:100',
            'apply_method' => 'required|in:link,email',
            'apply_link_or_email' => 'required|string|max:255',
            'deadline' => 'required|date|after:today',
            'positions_available' => 'nullable|integer|min:1',
            'skills_required' => 'nullable|array',
            'skills_required.*' => 'string|max:100',
            'experience_level' => 'required|in:entry,mid,senior,lead',
        ]);

        // Validate apply_link_or_email based on method
        if ($validated['apply_method'] === 'link') {
            $request->validate([
                'apply_link_or_email' => 'url',
            ]);
        } else {
            $request->validate([
                'apply_link_or_email' => 'email',
            ]);
        }

        DB::beginTransaction();
        try {
            // Find or create company
            $company = Company::where('email', $validated['email'])->first();

            if (!$company) {
                $company = new Company();
                $company->name = $validated['company_name'];
                $company->email = $validated['email'];
                $company->phone = $validated['phone'];
                $company->address = $validated['address'];
                $company->website = $validated['website'] ?? null;
                $company->description = $validated['description'] ?? null;
                $company->status = 'pending';

                // Handle logo upload
                if ($request->hasFile('logo')) {
                    $company->logo_path = $company->uploadImage(
                        $request->file('logo'),
                        'companies/logos'
                    );
                }

                $company->save();
            }

            // Create job posting
            $jobPosting = new JobPosting();
            $jobPosting->company_id = $company->id;
            $jobPosting->title = $validated['title'];
            $jobPosting->description = $validated['job_description'];
            $jobPosting->requirements = $validated['requirements'];
            $jobPosting->job_type = $validated['job_type'];
            $jobPosting->work_location = $validated['work_location'];
            $jobPosting->location = $validated['location'] ?? null;
            $jobPosting->salary_range = $validated['salary_range'] ?? null;
            $jobPosting->apply_method = $validated['apply_method'];
            $jobPosting->apply_link_or_email = $validated['apply_link_or_email'];
            $jobPosting->deadline = $validated['deadline'];
            $jobPosting->positions_available = $validated['positions_available'] ?? 1;
            $jobPosting->skills_required = $validated['skills_required'] ?? null;
            $jobPosting->experience_level = $validated['experience_level'];
            $jobPosting->status = 'pending';

            $jobPosting->save();

            DB::commit();

            return redirect()->back()->with('success', 'Job posting submitted successfully! We will review and contact you soon.');
        } catch (\Exception $e) {
            DB::rollBack();
            return redirect()->back()->with('error', 'Failed to submit job posting. Please try again.');
        }
    }

    /**
     * Display a listing of job postings (admin).
     */
    public function index(Request $request): Response
    {
        $this->authorize('viewAny', JobPosting::class);

        $query = JobPosting::with(['company', 'approver'])
            ->latest();

        // Filter by status
        if ($request->has('status') && $request->status !== 'all') {
            $query->where('status', $request->status);
        }

        // Filter by job type
        if ($request->has('job_type') && $request->job_type !== 'all') {
            $query->where('job_type', $request->job_type);
        }

        // Search
        if ($request->has('search') && $request->search) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('title', 'ilike', "%{$search}%")
                    ->orWhereHas('company', function ($q) use ($search) {
                        $q->where('name', 'ilike', "%{$search}%");
                    });
            });
        }

        $jobPostings = $query->paginate(15)->withQueryString();

        return Inertia::render('Admin/JobPostings/Index', [
            'jobPostings' => $jobPostings,
            'filters' => $request->only(['status', 'job_type', 'search']),
        ]);
    }

    /**
     * Display the specified job posting (admin).
     */
    public function show(JobPosting $jobPosting): Response
    {
        $this->authorize('view', $jobPosting);

        $jobPosting->load(['company', 'approver']);

        return Inertia::render('Admin/JobPostings/Show', [
            'jobPosting' => $jobPosting,
        ]);
    }

    /**
     * Approve the job posting (admin).
     */
    public function approve(JobPosting $jobPosting): RedirectResponse
    {
        $this->authorize('approve', $jobPosting);

        DB::beginTransaction();
        try {
            $company = $jobPosting->company;

            // Approve job posting
            $jobPosting->approve(auth()->id());

            // Approve company if still pending
            if ($company->isPending()) {
                $company->approve(auth()->id());

                // Create user account if doesn't exist
                if (!$company->user_id) {
                    $password = Str::random(12);
                    
                    $user = User::create([
                        'name' => $company->name,
                        'email' => $company->email,
                        'password' => Hash::make($password),
                        'role' => 'company',
                    ]);

                    $company->update(['user_id' => $user->id]);

                    // Send credentials email
                    SendCompanyCredentialsEmail::dispatch($user, $password);
                }
            }

            // Send approval email
            SendJobPostingApprovalEmail::dispatch($jobPosting);

            DB::commit();

            return redirect()->back()->with('success', 'Job posting approved successfully!');
        } catch (\Exception $e) {
            DB::rollBack();
            return redirect()->back()->with('error', 'Failed to approve job posting. Please try again.');
        }
    }

    /**
     * Reject the job posting (admin).
     */
    public function reject(Request $request, JobPosting $jobPosting): RedirectResponse
    {
        $this->authorize('reject', $jobPosting);

        $request->validate([
            'rejection_reason' => 'required|string',
        ]);

        $jobPosting->reject(
            auth()->id(),
            $request->rejection_reason
        );

        return redirect()->back()->with('success', 'Job posting rejected.');
    }

    /**
     * Display public job listings page.
     */
    public function publicIndex(Request $request): Response
    {
        $query = JobPosting::with('company')
            ->published()
            ->latest('created_at');

        // Filter by job type
        if ($request->has('job_type') && $request->job_type !== 'all') {
            $query->where('job_type', $request->job_type);
        }

        // Filter by work location
        if ($request->has('work_location') && $request->work_location !== 'all') {
            $query->where('work_location', $request->work_location);
        }

        // Filter by experience level
        if ($request->has('experience_level') && $request->experience_level !== 'all') {
            $query->where('experience_level', $request->experience_level);
        }

        // Search
        if ($request->has('search') && $request->search) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('title', 'ilike', "%{$search}%")
                    ->orWhere('description', 'ilike', "%{$search}%")
                    ->orWhereHas('company', function ($q) use ($search) {
                        $q->where('name', 'ilike', "%{$search}%");
                    });
            });
        }

        $jobPostings = $query->paginate(12)->withQueryString();

        return Inertia::render('InfoLowongan', [
            'jobPostings' => $jobPostings,
            'filters' => $request->only(['job_type', 'work_location', 'experience_level', 'search']),
        ]);
    }

    /**
     * Display public job detail page.
     */
    public function publicShow(JobPosting $jobPosting): Response
    {
        abort_if(!$jobPosting->isApproved() || !$jobPosting->isActive(), 404);

        $jobPosting->load('company');
        $jobPosting->incrementViews();

        // Get related jobs
        $relatedJobs = JobPosting::with('company')
            ->published()
            ->where('id', '!=', $jobPosting->id)
            ->where(function ($query) use ($jobPosting) {
                $query->where('company_id', $jobPosting->company_id)
                    ->orWhere('job_type', $jobPosting->job_type);
            })
            ->limit(3)
            ->get();

        return Inertia::render('InfoLowongan/Show', [
            'jobPosting' => $jobPosting,
            'relatedJobs' => $relatedJobs,
        ]);
    }
}