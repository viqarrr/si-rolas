<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\PostCategory;
use App\Http\Requests\PostRequest;
use App\Traits\HandleImageUploads;
use App\Enums\PostType;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Inertia\Response;

class PostController extends Controller
{
    use HandleImageUploads;

    public function index(): Response
    {
        return Inertia::render('admin/posts/index', [
            'posts' => Post::with('category')
                ->orderBy('created_at', 'desc')
                ->get()
                ->map(function ($post) {
                    return [
                        'id' => $post->id,
                        'title' => $post->title,
                        'type' => $post->type,
                        'category' => $post->category,
                        'post_date' => $post->post_date->format('Y-m-d'),
                        'image_url' => $this->getImageUrl($post->image_url),
                        'created_at' => $post->created_at,
                    ];
                }),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('admin/posts/create', [
            'categories' => PostCategory::all(['id', 'name']),
            'postTypes' => PostType::options(),
        ]);
    }

    public function store(PostRequest $request): RedirectResponse
    {
        try {
            DB::beginTransaction();

            $validated = $request->validated();

            // Handle image upload
            $imagePath = null;
            if ($request->hasFile('image_file') && $this->validateImage($request->file('image_file'))) {
                $imagePath = $this->uploadImage($request->file('image_file'), 'posts');
            }

            // Create post
            Post::create([
                'category_id' => $validated['category_id'],
                'type' => $validated['type'],
                'title' => $validated['title'],
                'slug' => $validated['slug'],
                'content' => $validated['content'],
                'image_url' => $imagePath,
                'post_date' => $validated['post_date'],
            ]);

            DB::commit();

            return redirect()->route('posts.index')
                ->with('success', 'Post created successfully.');
        } catch (\Exception $e) {
            DB::rollback();
            Log::error('Post creation failed: ' . $e->getMessage());

            return back()
                ->withInput()
                ->with('error', 'Failed to create post. Please try again.');
        }
    }

    public function edit(Post $post): Response
    {
        return Inertia::render('admin/posts/edit', [
            'post' => [
                'id' => $post->id,
                'category_id' => $post->category_id,
                'type' => $post->type->value,
                'title' => $post->title,
                'slug' => $post->slug,
                'content' => $post->content,
                'image_url' => $post->image_url,
                'image_display_url' => $this->getImageUrl($post->image_url),
                'post_date' => $post->post_date->format('Y-m-d'),
            ],
            'categories' => PostCategory::all(['id', 'name']),
            'postTypes' => PostType::options(),
        ]);
    }

    public function update(PostRequest $request, Post $post): RedirectResponse
    {
        try {
            DB::beginTransaction();

            $validated = $request->validated();

            // Handle image update
            $imagePath = $post->image_url; // Keep existing by default

            if ($request->hasFile('image_file') && $this->validateImage($request->file('image_file'))) {
                // Delete old image if exists
                if ($post->image_url) {
                    $this->deleteImage($post->image_url);
                }

                // Upload new image
                $imagePath = $this->uploadImage($request->file('image_file'), 'posts');
            } elseif ($request->input('remove_image')) {
                // Remove image if requested
                if ($post->image_url) {
                    $this->deleteImage($post->image_url);
                }
                $imagePath = null;
            }

            // Update post
            $post->update([
                'category_id' => $validated['category_id'],
                'type' => $validated['type'],
                'title' => $validated['title'],
                'slug' => $validated['slug'],
                'content' => $validated['content'],
                'image_url' => $imagePath,
                'post_date' => $validated['post_date'],
            ]);

            DB::commit();

            return redirect()->route('posts.index')
                ->with('success', 'Post updated successfully.');
        } catch (\Exception $e) {
            DB::rollback();
            Log::error('Post update failed: ' . $e->getMessage());

            return back()
                ->withInput()
                ->with('error', 'Failed to update post. Please try again.');
        }
    }

    public function destroy(Post $post): RedirectResponse
    {
        try {
            DB::beginTransaction();

            // Delete image from MinIO if exists
            if ($post->image_url) {
                $this->deleteImage($post->image_url);
            }

            $post->delete();

            DB::commit();

            return redirect()->route('posts.index')
                ->with('success', 'Post deleted successfully.');
        } catch (\Exception $e) {
            DB::rollback();
            Log::error('Post deletion failed: ' . $e->getMessage());

            return back()
                ->with('error', 'Failed to delete post. Please try again.');
        }
    }
}
