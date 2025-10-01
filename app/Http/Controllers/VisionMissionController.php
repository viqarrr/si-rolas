<?php

namespace App\Http\Controllers;

use App\Models\VisionMission;
use App\Http\Requests\VisionMissionRequest;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class VisionMissionController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('admin/vission-missions/index', [
            'visionMissions' => VisionMission::orderBy('created_at', 'desc')->get(),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('admin/vission-missions/create');
    }

    public function store(VisionMissionRequest $request): RedirectResponse
    {
        VisionMission::create($request->validated());

        return redirect()->route('vision-missions.index')
            ->with('success', 'Vision Mission created successfully.');
    }

    public function edit(VisionMission $visionMission): Response
    {
        return Inertia::render('admin/vission-missions/edit', [
            'visionMission' => $visionMission,
        ]);
    }

    public function update(VisionMissionRequest $request, VisionMission $visionMission): RedirectResponse
    {
        $visionMission->update($request->validated());

        return redirect()->route('vision-missions.index')
            ->with('success', 'Vision Mission updated successfully.');
    }

    public function destroy(VisionMission $visionMission): RedirectResponse
    {
        $visionMission->delete();

        return redirect()->route('vision-missions.index')
            ->with('success', 'Vision Mission deleted successfully.');
    }
}