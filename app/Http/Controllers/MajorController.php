<?php
// app/Http/Controllers/MajorController.php
namespace App\Http\Controllers;

use App\Models\Major;
use App\Http\Requests\MajorRequest;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class MajorController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Majors/Index', [
            'majors' => Major::withCount(['competencies', 'jobProspects', 'works'])
                ->orderBy('created_at', 'desc')
                ->get(),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Majors/Create');
    }

    public function store(MajorRequest $request): RedirectResponse
    {
        Major::create($request->validated());

        return redirect()->route('majors.index')
            ->with('success', 'Major created successfully.');
    }

    public function edit(Major $major): Response
    {
        return Inertia::render('Majors/Edit', [
            'major' => $major,
        ]);
    }

    public function update(MajorRequest $request, Major $major): RedirectResponse
    {
        $major->update($request->validated());

        return redirect()->route('majors.index')
            ->with('success', 'Major updated successfully.');
    }

    public function destroy(Major $major): RedirectResponse
    {
        $major->delete();

        return redirect()->route('majors.index')
            ->with('success', 'Major deleted successfully.');
    }
}