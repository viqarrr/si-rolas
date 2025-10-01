<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use App\Enums\PostType;
use Illuminate\Support\Facades\Auth;

class PostRequest extends FormRequest
{
  public function authorize(): bool
  {
    /** @var \App\Models\User $user */
    $user = Auth::user();
    return $user->isAdmin();
  }

  public function rules(): array
  {
    $postId = $this->route('post')?->id;

    return [
      'category_id' => 'required|exists:post_categories,id',
      'type' => ['required', Rule::enum(PostType::class)],
      'title' => 'required|string|max:255',
      'slug' => [
        'required',
        'string',
        'max:255',
        'regex:/^[a-z0-9]+(?:-[a-z0-9]+)*$/',
        Rule::unique('posts')->ignore($postId),
      ],
      'content' => 'required|string',
      'image_url' => 'required|string',
    ];
  }

  public function messages(): array
  {
    return [
      'slug.regex' => 'The slug must contain only lowercase letters, numbers, and hyphens.',
    ];
  }
}