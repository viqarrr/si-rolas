<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use App\Enums\WorkLinkPlatform;
use Illuminate\Support\Facades\Auth;

class WorkRequest extends FormRequest
{
  public function authorize(): bool
  {
    /** @var \App\Models\User $user */
    $user = Auth::user();

    return $user->isAdmin();
  }

  public function rules(): array
  {
    $workId = $this->route('work')?->id;

    return [
      // Main work fields
      'major_id' => 'required|exists:majors,id',
      'title' => 'required|string|max:255',
      'slug' => [
        'required',
        'string',
        'max:255',
        'regex:/^[a-z0-9]+(?:-[a-z0-9]+)*$/',
        Rule::unique('works')->ignore($workId),
      ],
      'description' => 'required|string',
      'year' => 'required|integer|min:1900|max:' . (date('Y') + 10),

      // Work Images - file upload validation
      'image_files' => 'nullable|array|max:10',
      'image_files.*' => 'nullable|file|mimes:jpg,jpeg,png,gif,webp|max:5120',

      // Work Links - array validation
      'links' => 'nullable|array|max:10',
      'links.*.url' => 'required_with:links|url|max:2048',
      'links.*.platform' => ['required_with:links', Rule::enum(WorkLinkPlatform::class)],

      // Existing image paths (for updates)
      'existing_images' => 'nullable|array',
      'existing_images.*' => 'string',
    ];
  }

  public function messages(): array
  {
    return [
      'slug.regex' => 'The slug must contain only lowercase letters, numbers, and hyphens.',
      'image_files.max' => 'You can upload a maximum of 10 images.',
      'image_files.*.mimes' => 'Images must be jpg, jpeg, png, gif, or webp format.',
      'image_files.*.max' => 'Each image must not exceed 5MB.',
      'links.max' => 'You can add a maximum of 10 links.',
    ];
  }
}