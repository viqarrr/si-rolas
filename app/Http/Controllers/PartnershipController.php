<?php

namespace App\Http\Controllers;

use App\Models\Company;
use App\Models\Partnership;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;
use App\Jobs\SendPartnershipApprovalEmail;
use App\Jobs\SendCompanyCredentialsEmail;

class PartnershipController extends Controller
{
    /**
     * Show the form for creating a new partnership (public).
     */
    public function create(): Response
    {
        return Inertia::render('Partnerships/Create');
    }

    /**
     * Store a newly created partnership (public submission).
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
            
            'contact_person' => 'required|string|max:255',
            'contact_email' => 'required|email|max:255',
            'contact_phone' => 'required|string|max:20',
            'proposal_description' => 'required|string',
            'cover_letter' => 'nullable|string',
            'proposal_file' => 'nullable|file|mimes:pdf,doc,docx|max:10240',
            'partnership_type' => 'required|in:internship,job_placement,research,training,other',
            'proposed_start_date' => 'nullable|date|after_or_equal:today',
            'proposed_end_date' => 'nullable|date|after:proposed_start_date',
        ]);

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

            // Create partnership
            $partnership = new Partnership();
            $partnership->company_id = $company->id;
            $partnership->contact_person = $validated['contact_person'];
            $partnership->contact_email = $validated['contact_email'];
            $partnership->contact_phone = $validated['contact_phone'];
            $partnership->proposal_description = $validated['proposal_description'];
            $partnership->cover_letter = $validated['cover_letter'] ?? null;
            $partnership->partnership_type = $validated['partnership_type'];
            $partnership->proposed_start_date = $validated['proposed_start_date'] ?? null;
            $partnership->proposed_end_date = $validated['proposed_end_date'] ?? null;
            $partnership->status = 'pending';

            // Handle proposal file upload
            if ($request->hasFile('proposal_file')) {
                $partnership->proposal_file_path = $partnership->uploadImage(
                    $request->file('proposal_file'),
                    'partnerships/proposals'
                );
            }

            $partnership->save();

            DB::commit();

            return redirect()->back()->with('success', 'Partnership proposal submitted successfully! We will review and contact you soon.');
        } catch (\Exception $e) {
            DB::rollBack();
            return redirect()->back()->with('error', 'Failed to submit partnership proposal. Please try again.');
        }
    }

    /**
     * Display a listing of partnerships (admin).
     */
    public function index(Request $request): Response
    {
        $this->authorize('viewAny', Partnership::class);

        $query = Partnership::with(['company', 'approver'])
            ->latest();

        // Filter by status
        if ($request->has('status') && $request->status !== 'all') {
            $query->where('status', $request->status);
        }

        // Search
        if ($request->has('search') && $request->search) {
            $search = $request->search;
            $query->whereHas('company', function ($q) use ($search) {
                $q->where('name', 'ilike', "%{$search}%")
                    ->orWhere('email', 'ilike', "%{$search}%");
            })->orWhere('contact_person', 'ilike', "%{$search}%");
        }

        $partnerships = $query->paginate(15)->withQueryString();

        return Inertia::render('Admin/Partnerships/Index', [
            'partnerships' => $partnerships,
            'filters' => $request->only(['status', 'search']),
        ]);
    }

    /**
     * Display the specified partnership (admin).
     */
    public function show(Partnership $partnership): Response
    {
        $this->authorize('view', $partnership);

        $partnership->load(['company', 'approver']);

        return Inertia::render('Admin/Partnerships/Show', [
            'partnership' => $partnership,
        ]);
    }

    /**
     * Approve the partnership (admin).
     */
    public function approve(Request $request, Partnership $partnership): RedirectResponse
    {
        $this->authorize('approve', $partnership);

        $request->validate([
            'admin_notes' => 'nullable|string',
        ]);

        DB::beginTransaction();
        try {
            $company = $partnership->company;

            // Approve partnership
            $partnership->approve(
                auth()->id(),
                $request->admin_notes
            );

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
            SendPartnershipApprovalEmail::dispatch($partnership);

            DB::commit();

            return redirect()->back()->with('success', 'Partnership approved successfully!');
        } catch (\Exception $e) {
            DB::rollBack();
            return redirect()->back()->with('error', 'Failed to approve partnership. Please try again.');
        }
    }

    /**
     * Reject the partnership (admin).
     */
    public function reject(Request $request, Partnership $partnership): RedirectResponse
    {
        $this->authorize('reject', $partnership);

        $request->validate([
            'rejection_reason' => 'required|string',
            'admin_notes' => 'nullable|string',
        ]);

        $partnership->reject(
            auth()->id(),
            $request->rejection_reason,
            $request->admin_notes
        );

        return redirect()->back()->with('success', 'Partnership rejected.');
    }
}