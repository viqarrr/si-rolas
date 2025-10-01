<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class PostCategoryRequest extends FormRequest
{
  public function authorize(): bool
  {
    /** @var \App\Models\User $user */
    $user = Auth::user();
    return $user->isAdmin();
  }

  public function rules(): array
  {
    $postCategoryId = $this->route('post_category')?->id;

    return [
      'name' => 'required|string|max:255',
      'slug' => [
        'required',
        'string',
        'max:255',
        'regex:/^[a-z0-9]+(?:-[a-z0-9]+)*$/',
        Rule::unique('post_categories')->ignore($postCategoryId),
      ],
    ];
  }

  public function messages(): array
  {
    return [
      'slug.regex' => 'The slug must contain only lowercase letters, numbers, and hyphens.',
    ];
  }
}