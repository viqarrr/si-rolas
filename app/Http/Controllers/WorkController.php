<?php

namespace App\Http\Controllers;

use App\Models\Work;
use App\Models\Major;
use App\Models\WorkImage;
use App\Models\WorkLink;
use App\Http\Requests\WorkRequest;
use App\Traits\HandleImageUploads;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class WorkController extends Controller
{
    use HandleImageUploads;

    public function index(): Response
    {
        return Inertia::render('admin/works/index', [
            'works' => Work::with(['major', 'images', 'links'])
                ->withCount(['images', 'links'])
                ->orderBy('created_at', 'desc')
                ->get()
                ->map(function ($work) {
                    return [
                        'id' => $work->id,
                        'title' => $work->title,
                        'slug' => $work->slug,
                        'year' => $work->year,
                        'major' => $work->major,
                        'images_count' => $work->images_count,
                        'links_count' => $work->links_count,
                        'featured_image_url' => $work->images->first()
                            ? $this->getImageUrl($work->images->first()->image_url)
                            : null,
                        'created_at' => $work->created_at,
                    ];
                }),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('admin/works/create', [
            'majors' => Major::orderBy('name')->get(['id', 'name']),
        ]);
    }

    public function store(WorkRequest $request): RedirectResponse
    {
        try {
            DB::beginTransaction();

            $validated = $request->validated();

            // Create the main work
            $work = Work::create([
                'major_id' => $validated['major_id'],
                'title' => $validated['title'],
                'slug' => $validated['slug'],
                'description' => $validated['description'],
                'year' => $validated['year'],
            ]);

            // Handle image uploads
            $this->handleImageUploads($work, $request);

            // Create work links
            $this->createWorkLinks($work, $validated['links'] ?? []);

            DB::commit();

            return redirect()->route('works.index')
                ->with('success', 'Work created successfully with all images uploaded.');

        } catch (\Exception $e) {
            DB::rollback();
            Log::error('Work creation failed: ' . $e->getMessage());

            return back()
                ->withInput()
                ->with('error', 'Failed to create work. Please try again.');
        }
    }

    public function edit(Work $work): Response
    {
        return Inertia::render('admin/works/edit', [
            'work' => [
                'id' => $work->id,
                'major_id' => $work->major_id,
                'title' => $work->title,
                'slug' => $work->slug,
                'description' => $work->description,
                'year' => $work->year,
                'major' => $work->major,
                'images' => $work->images->map(fn($img) => [
                    'id' => $img->id,
                    'image_url' => $img->image_url, // Store path in DB
                    'image_display_url' => $this->getImageUrl($img->image_url), // Display URL for frontend
                    'filename' => basename($img->image_url),
                ]),
                'links' => $work->links->map(fn($link) => [
                    'id' => $link->id,
                    'url' => $link->url,
                    'platform' => $link->platform->value,
                ]),
            ],
            'majors' => Major::orderBy('name')->get(['id', 'name']),
        ]);
    }

    public function update(WorkRequest $request, Work $work): RedirectResponse
    {
        try {
            DB::beginTransaction();

            $validated = $request->validated();

            // Update the main work
            $work->update([
                'major_id' => $validated['major_id'],
                'title' => $validated['title'],
                'slug' => $validated['slug'],
                'description' => $validated['description'],
                'year' => $validated['year'],
            ]);

            // Handle image updates
            $this->handleImageUpdates($work, $request);

            // Update work links (delete existing and recreate)
            $this->updateWorkLinks($work, $validated['links'] ?? []);

            DB::commit();

            return redirect()->route('works.index')
                ->with('success', 'Work updated successfully.');

        } catch (\Exception $e) {
            DB::rollback();
            Log::error('Work update failed: ' . $e->getMessage());

            return back()
                ->withInput()
                ->with('error', 'Failed to update work. Please try again.');
        }
    }

    public function destroy(Work $work): RedirectResponse
    {
        try {
            DB::beginTransaction();

            // Delete all associated images from MinIO
            foreach ($work->images as $image) {
                $this->deleteImage($image->image_url);
            }

            // Delete related records
            $work->images()->delete();
            $work->links()->delete();

            // Delete the work itself
            $work->delete();

            DB::commit();

            return redirect()->route('works.index')
                ->with('success', 'Work deleted successfully.');

        } catch (\Exception $e) {
            DB::rollback();
            Log::error('Work deletion failed: ' . $e->getMessage());

            return back()
                ->with('error', 'Failed to delete work. Please try again.');
        }
    }

    /**
     * Handle image uploads for new work
     */
    private function handleImageUploads(Work $work, WorkRequest $request): void
    {
        if (!$request->hasFile('image_files')) {
            return;
        }

        foreach ($request->file('image_files') as $file) {
            if ($file && $this->validateImage($file)) {
                try {
                    $path = $this->uploadImage($file, 'works');

                    WorkImage::create([
                        'work_id' => $work->id,
                        'image_url' => $path, // Store the MinIO path
                    ]);
                } catch (\Exception $e) {
                    Log::error("Failed to upload work image: " . $e->getMessage());
                    throw $e;
                }
            }
        }
    }

    /**
     * Handle image updates (keep existing + add new + remove deleted)
     */
    private function handleImageUpdates(Work $work, WorkRequest $request): void
    {
        $existingImages = $request->input('existing_images', []);
        $currentImageIds = $work->images->pluck('id')->toArray();
        $keepImageIds = [];

        // Process existing images that should be kept
        foreach ($work->images as $image) {
            if (in_array($image->image_url, $existingImages)) {
                $keepImageIds[] = $image->id;
            } else {
                // Image was removed, delete from MinIO and database
                $this->deleteImage($image->image_url);
                $image->delete();
            }
        }

        // Add new uploaded images
        $this->handleImageUploads($work, $request);
    }

    /**
     * Create work links
     */
    private function createWorkLinks(Work $work, array $links): void
    {
        foreach ($links as $linkData) {
            if (!empty($linkData['url']) && !empty($linkData['platform'])) {
                WorkLink::create([
                    'work_id' => $work->id,
                    'url' => $linkData['url'],
                    'platform' => $linkData['platform'],
                ]);
            }
        }
    }

    /**
     * Update work links (delete existing and recreate)
     */
    private function updateWorkLinks(Work $work, array $links): void
    {
        // Delete existing links
        $work->links()->delete();

        // Create new links
        $this->createWorkLinks($work, $links);
    }
}