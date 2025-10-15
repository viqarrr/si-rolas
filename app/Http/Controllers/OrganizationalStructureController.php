<?php

namespace App\Http\Controllers;

use App\Models\OrganizationalStructure;
use App\Http\Requests\OrganizationalStructureRequest;
use App\Traits\HandleImageUploads;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Inertia\Response;

class OrganizationalStructureController extends Controller
{
    use HandleImageUploads;

    public function index(): Response
    {
        return Inertia::render('admin/organizational-structure/index', [
            'organizationalStructures' => OrganizationalStructure::with('parent')
                ->orderBy('created_at', 'desc')
                ->get()
                ->map(function ($structure) {
                    return [
                        'id' => $structure->id,
                        'name' => $structure->name,
                        'position' => $structure->position,
                        'parent' => $structure->parent,
                        'photo_url' => $this->getImageUrl($structure->photo_url),
                        'created_at' => $structure->created_at,
                    ];
                }),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('admin/organizational-structure/create', [
            'parents' => OrganizationalStructure::all(['id', 'name', 'position']),
        ]);
    }

    public function store(OrganizationalStructureRequest $request): RedirectResponse
    {
        try {
            DB::beginTransaction();

            $validated = $request->validated();

            // Handle photo upload
            $photoPath = null;
            if ($request->hasFile('photo') && $this->validateImage($request->file('photo'))) {
                $photoPath = $this->uploadImage($request->file('photo'), 'organizational-structure');
            }

            OrganizationalStructure::create([
                'parent_id' => $validated['parent_id'] ?? null,
                'name' => $validated['name'],
                'position' => $validated['position'],
                'photo_url' => $photoPath,
            ]);

            DB::commit();

            return redirect()->route('admin.organizational-structures.index')
                ->with('success', 'Organizational Structure created successfully.');
        } catch (\Exception $e) {
            DB::rollback();
            Log::error('Organizational Structure creation failed: ' . $e->getMessage());

            return back()
                ->withInput()
                ->with('error', 'Failed to create organizational structure. Please try again.');
        }
    }

    public function edit(OrganizationalStructure $organizationalStructure): Response
    {
        return Inertia::render('admin/organizational-structure/edit', [
            'member' => [
                'id' => $organizationalStructure->id,
                'name' => $organizationalStructure->name,
                'position' => $organizationalStructure->position,
                'photo_url' => $organizationalStructure->photo_url,
                'photo_display_url' => $this->getImageUrl($organizationalStructure->photo_url),
            ],
        ]);
    }

    public function update(OrganizationalStructureRequest $request, OrganizationalStructure $organizationalStructure): RedirectResponse
    {
        Log::info('Updating organizationalStructure:', $request->all() );
        try {
            DB::beginTransaction();

            $validated = $request->validated();

            // Handle photo update
            $photoPath = $organizationalStructure->photo_url; // Keep existing by default

            if ($request->hasFile('photo') && $this->validateImage($request->file('photo'))) {
                // Delete old photo if exists
                if ($organizationalStructure->photo_url) {
                    $this->deleteImage($organizationalStructure->photo_url);
                }

                // Upload new photo
                $photoPath = $this->uploadImage($request->file('photo'), 'organizational-structure');
            } elseif ($request->input('remove_photo')) {
                // Remove photo if requested
                if ($organizationalStructure->photo_url) {
                    $this->deleteImage($organizationalStructure->photo_url);
                }
                $photoPath = null;
            }

            $organizationalStructure->update([
                'name' => $validated['name'],
                'position' => $validated['position'],
                'photo_url' => $photoPath,
            ]);

            DB::commit();

            return redirect()->route('admin.organizational-structures.index')
                ->with('success', 'Organizational Structure updated successfully.');
        } catch (\Exception $e) {
            DB::rollback();
            Log::error('Organizational Structure update failed: ' . $e->getMessage());

            return back()
                ->withInput()
                ->with('error', 'Failed to update organizational structure. Please try again.');
        }
    }

    public function destroy(OrganizationalStructure $organizationalStructure): RedirectResponse
    {
        try {
            DB::beginTransaction();

            // Delete photo from MinIO if exists
            if ($organizationalStructure->photo_url) {
                $this->deleteImage($organizationalStructure->photo_url);
            }

            $organizationalStructure->delete();

            DB::commit();

            return redirect()->route('admin.organizational-structures.index')
                ->with('success', 'Organizational Structure deleted successfully.');
        } catch (\Exception $e) {
            DB::rollback();
            Log::error('Organizational Structure deletion failed: ' . $e->getMessage());

            return back()
                ->with('error', 'Failed to delete organizational structure. Please try again.');
        }
    }
}
