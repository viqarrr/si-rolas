<?php

namespace App\Http\Controllers;

use App\Models\History;
use App\Http\Requests\HistoryRequest;
use App\Traits\HandleImageUploads;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Inertia\Response;

class HistoryController extends Controller
{
    use HandleImageUploads;

    public function index(): Response
    {
        return Inertia::render('admin/history/index', [
            'histories' => History::orderBy('year', 'desc')
                ->get()
                ->map(function ($history) {
                    return [
                        'id' => $history->id,
                        'year' => $history->year,
                        'description' => $history->description,
                        'photo_url' => $this->getImageUrl($history->photo_url),
                        'created_at' => $history->created_at,
                    ];
                }),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('admin/history/create');
    }

    public function store(HistoryRequest $request): RedirectResponse
    {
        try {
            DB::beginTransaction();

            $validated = $request->validated();

            // Handle photo upload
            $photoPath = null;
            if ($request->hasFile('photo_file') && $this->validateImage($request->file('photo_file'))) {
                $photoPath = $this->uploadImage($request->file('photo_file'), 'histories');
            }

            History::create([
                'year' => $validated['year'],
                'photo_url' => $photoPath,
                'description' => $validated['description'],
            ]);

            DB::commit();

            return redirect()->route('histories.index')
                ->with('success', 'History created successfully.');
        } catch (\Exception $e) {
            DB::rollback();
            Log::error('History creation failed: ' . $e->getMessage());

            return back()
                ->withInput()
                ->with('error', 'Failed to create history. Please try again.');
        }
    }

    public function edit(History $history): Response
    {
        return Inertia::render('admin/history/edit', [
            'history' => [
                'id' => $history->id,
                'year' => $history->year,
                'description' => $history->description,
                'photo_url' => $history->photo_url,
                'photo_display_url' => $this->getImageUrl($history->photo_url),
            ],
        ]);
    }

    public function update(HistoryRequest $request, History $history): RedirectResponse
    {
        try {
            DB::beginTransaction();

            $validated = $request->validated();

            // Handle photo update
            $photoPath = $history->photo_url; // Keep existing by default

            if ($request->hasFile('photo_file') && $this->validateImage($request->file('photo_file'))) {
                // Delete old photo if exists
                if ($history->photo_url) {
                    $this->deleteImage($history->photo_url);
                }

                // Upload new photo
                $photoPath = $this->uploadImage($request->file('photo_file'), 'histories');
            } elseif ($request->input('remove_photo')) {
                // Remove photo if requested
                if ($history->photo_url) {
                    $this->deleteImage($history->photo_url);
                }
                $photoPath = null;
            }

            $history->update([
                'year' => $validated['year'],
                'photo_url' => $photoPath,
                'description' => $validated['description'],
            ]);

            DB::commit();

            return redirect()->route('histories.index')
                ->with('success', 'History updated successfully.');
        } catch (\Exception $e) {
            DB::rollback();
            Log::error('History update failed: ' . $e->getMessage());

            return back()
                ->withInput()
                ->with('error', 'Failed to update history. Please try again.');
        }
    }

    public function destroy(History $history): RedirectResponse
    {
        try {
            DB::beginTransaction();

            // Delete photo from MinIO if exists
            if ($history->photo_url) {
                $this->deleteImage($history->photo_url);
            }

            $history->delete();

            DB::commit();

            return redirect()->route('histories.index')
                ->with('success', 'History deleted successfully.');
        } catch (\Exception $e) {
            DB::rollback();
            Log::error('History deletion failed: ' . $e->getMessage());

            return back()
                ->with('error', 'Failed to delete history. Please try again.');
        }
    }
}
