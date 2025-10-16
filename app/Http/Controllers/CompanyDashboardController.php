<?php

namespace App\Http\Controllers;

use App\Models\Company;
use App\Models\JobPosting;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;

class CompanyDashboardController extends Controller
{
    /**
     * Display company dashboard.
     */
    public function index(): Response
    {
        $user = auth()->user();
        $company = $user->company;

        abort_if(!$company, 404, 'Company profile not found.');

        $stats = [
            'total_job_postings' => $company->jobPostings()->count(),
            'active_job_postings' => $company->jobPostings()->published()->count(),
            'pending_job_postings' => $company->jobPostings()->pending()->count(),
            'total_partnerships' => $company->partnerships()->count(),
            'approved_partnerships' => $company->partnerships()->approved()->count(),
        ];

        $recentJobPostings = $company->jobPostings()
            ->latest()
            ->limit(5)
            ->get();

        return Inertia::render('Company/Dashboard', [
            'company' => $company,
            'stats' => $stats,
            'recentJobPostings' => $recentJobPostings,
        ]);
    }

    /**
     * Display company profile edit page.
     */
    public function editProfile(): Response
    {
        $company = auth()->user()->company;

        abort_if(!$company, 404, 'Company profile not found.');

        return Inertia::render('Company/Profile/Edit', [
            'company' => $company,
        ]);
    }

    /**
     * Update company profile.
     */
    public function updateProfile(Request $request): RedirectResponse
    {
        $company = auth()->user()->company;

        abort_if(!$company, 404, 'Company profile not found.');

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'phone' => 'required|string|max:20',
            'address' => 'required|string',
            'website' => 'nullable|url|max:255',
            'description' => 'nullable|string',
            'logo' => 'nullable|image|mimes:jpg,jpeg,png,gif,webp|max:5120',
        ]);

        // Handle logo upload
        if ($request->hasFile('logo')) {
            // Delete old logo
            if ($company->logo_path) {
                $company->deleteImage($company->logo_path);
            }

            $company->logo_path = $company->uploadImage(
                $request->file('logo'),
                'companies/logos'
            );
        }

        $company->update([
            'name' => $validated['name'],
            'phone' => $validated['phone'],
            'address' => $validated['address'],
            'website' => $validated['website'] ?? null,
            'description' => $validated['description'] ?? null,
        ]);

        return redirect()->back()->with('success', 'Company profile updated successfully!');
    }

    /**
     * Display company job postings.
     */
    public function jobPostings(Request $request): Response
    {
        $company = auth()->user()->company;

        abort_if(!$company, 404, 'Company profile not found.');

        $query = $company->jobPostings()->latest();

        // Filter by status
        if ($request->has('status') && $request->status !== 'all') {
            $query->where('status', $request->status);
        }

        $jobPostings = $query->paginate(10)->withQueryString();

        return Inertia::render('Company/JobPostings/Index', [
            'jobPostings' => $jobPostings,
            'filters' => $request->only(['status']),
        ]);
    }

    /**
     * Show form to create new job posting.
     */
    public function createJobPosting(): Response
    {
        $company = auth()->user()->company;

        abort_if(!$company, 404, 'Company profile not found.');

        return Inertia::render('Company/JobPostings/Create', [
            'company' => $company,
        ]);
    }

    /**
     * Store new job posting.
     */
    public function storeJobPosting(Request $request): RedirectResponse
    {
        $company = auth()->user()->company;

        abort_if(!$company, 404, 'Company profile not found.');

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
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

        $jobPosting = $company->jobPostings()->create([
            'title' => $validated['title'],
            'description' => $validated['description'],
            'requirements' => $validated['requirements'],
            'job_type' => $validated['job_type'],
            'work_location' => $validated['work_location'],
            'location' => $validated['location'] ?? null,
            'salary_range' => $validated['salary_range'] ?? null,
            'apply_method' => $validated['apply_method'],
            'apply_link_or_email' => $validated['apply_link_or_email'],
            'deadline' => $validated['deadline'],
            'positions_available' => $validated['positions_available'] ?? 1,
            'skills_required' => $validated['skills_required'] ?? null,
            'experience_level' => $validated['experience_level'],
            'status' => 'pending',
        ]);

        return redirect()->route('company.job-postings.index')
            ->with('success', 'Job posting created successfully! It will be published after admin approval.');
    }

    /**
     * Show form to edit job posting.
     */
    public function editJobPosting(JobPosting $jobPosting): Response
    {
        $company = auth()->user()->company;

        abort_if(!$company || $jobPosting->company_id !== $company->id, 403);

        return Inertia::render('Company/JobPostings/Edit', [
            'jobPosting' => $jobPosting,
        ]);
    }

    /**
     * Update job posting.
     */
    public function updateJobPosting(Request $request, JobPosting $jobPosting): RedirectResponse
    {
        $company = auth()->user()->company;

        abort_if(!$company || $jobPosting->company_id !== $company->id, 403);

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
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

        $jobPosting->update($validated);

        return redirect()->back()->with('success', 'Job posting updated successfully!');
    }

    /**
     * Toggle job posting active status.
     */
    public function toggleJobPosting(JobPosting $jobPosting): RedirectResponse
    {
        $company = auth()->user()->company;

        abort_if(!$company || $jobPosting->company_id !== $company->id, 403);

        if ($jobPosting->is_active) {
            $jobPosting->deactivate();
            $message = 'Job posting deactivated successfully!';
        } else {
            $jobPosting->activate();
            $message = 'Job posting activated successfully!';
        }

        return redirect()->back()->with('success', $message);
    }

    /**
     * Delete job posting.
     */
    public function destroyJobPosting(JobPosting $jobPosting): RedirectResponse
    {
        $company = auth()->user()->company;

        abort_if(!$company || $jobPosting->company_id !== $company->id, 403);

        $jobPosting->delete();

        return redirect()->route('company.job-postings.index')
            ->with('success', 'Job posting deleted successfully!');
    }
}