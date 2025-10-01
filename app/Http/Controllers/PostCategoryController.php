<?php

namespace App\Http\Controllers;

use App\Models\PostCategory;
use App\Http\Requests\PostCategoryRequest;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class PostCategoryController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('PostCategories/Index', [
            'postCategories' => PostCategory::withCount('posts')
                ->orderBy('created_at', 'desc')
                ->get(),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('PostCategories/Create');
    }

    public function store(PostCategoryRequest $request): RedirectResponse
    {
        PostCategory::create($request->validated());

        return redirect()->route('post-categories.index')
            ->with('success', 'Post Category created successfully.');
    }

    public function edit(PostCategory $postCategory): Response
    {
        return Inertia::render('PostCategories/Edit', [
            'postCategory' => $postCategory,
        ]);
    }

    public function update(PostCategoryRequest $request, PostCategory $postCategory): RedirectResponse
    {
        $postCategory->update($request->validated());

        return redirect()->route('post-categories.index')
            ->with('success', 'Post Category updated successfully.');
    }

    public function destroy(PostCategory $postCategory): RedirectResponse
    {
        $postCategory->delete();

        return redirect()->route('post-categories.index')
            ->with('success', 'Post Category deleted successfully.');
    }
}