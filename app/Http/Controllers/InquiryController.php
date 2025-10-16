<?php
// app/Http/Controllers/InquiryController.php
namespace App\Http\Controllers;

use App\Models\Inquiry;
use App\Http\Requests\InquiryRequest;
use App\Enums\InquiryStatus;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class InquiryController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Inquiries/Index', [
            'inquiries' => Inquiry::orderBy('created_at', 'desc')
                ->get()
                ->map(function ($inquiry) {
                    return [
                        'id' => $inquiry->id,
                        'name' => $inquiry->name,
                        'email' => $inquiry->email,
                        'subject' => $inquiry->subject,
                        'status' => $inquiry->status,
                        'created_at' => $inquiry->created_at,
                    ];
                }),
            'statusOptions' => InquiryStatus::options(),
        ]);
    }

    public function show(Inquiry $inquiry): Response
    {
        // Mark as read when viewed
        if ($inquiry->status === InquiryStatus::NEW) {
            $inquiry->update(['status' => InquiryStatus::READ]);
        }

        return Inertia::render('Inquiries/Show', [
            'inquiry' => $inquiry,
            'statusOptions' => InquiryStatus::options(),
        ]);
    }

    public function update(InquiryRequest $request, Inquiry $inquiry): RedirectResponse
    {
        $inquiry->update($request->validated());

        return redirect()->route('inquiries.index')
            ->with('success', 'Inquiry updated successfully.');
    }

    public function destroy(Inquiry $inquiry): RedirectResponse
    {
        $inquiry->delete();

        return redirect()->route('inquiries.index')
            ->with('success', 'Inquiry deleted successfully.');
    }
}