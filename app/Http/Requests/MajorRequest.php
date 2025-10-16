<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class MajorRequest extends FormRequest
{
  public function authorize(): bool
  {
    /** @var \App\Models\User $user */
    $user = Auth::user();

    return $user->isAdmin();
  }

  public function rules(): array
  {
    $majorId = $this->route('major')?->id;

    return [
      // Main major fields
      'name' => 'required|string|max:255',
      'description' => 'nullable|string',
      'slug' => [
        'required',
        'string',
        'max:255',
        'regex:/^[a-z0-9]+(?:-[a-z0-9]+)*$/',
        Rule::unique('majors')->ignore($majorId),
      ],

      // Competencies - array validation
      'competencies' => 'nullable|array|max:3',
      'competencies.*.name' => 'required_with:competencies|string|max:255',
      'competencies.*.description' => 'nullable|string',
      'competencies.*.image_url' => 'required_with:competencies|url|max:2048',

      // Job Prospects - array validation
      'job_prospects' => 'nullable|array|max:3',
      'job_prospects.*.name' => 'required_with:job_prospects|string|max:255',
      'job_prospects.*.description' => 'nullable|string',
      'job_prospects.*.image_url' => 'required_with:job_prospects|url|max:2048',
    ];
  }

  public function messages(): array
  {
    return [
      'slug.regex' => 'The slug must contain only lowercase letters, numbers, and hyphens.',
      'competencies.max' => 'You can add a maximum of 3 competencies.',
      'job_prospects.max' => 'You can add a maximum of 3 job prospects.',
      'competencies.*.name.required_with' => 'Competency name is required when adding competencies.',
      'job_prospects.*.name.required_with' => 'Job prospect name is required when adding job prospects.',
    ];
  }
}