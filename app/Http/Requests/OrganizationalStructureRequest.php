<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class OrganizationalStructureRequest extends FormRequest
{
  public function authorize(): bool
  {
    /** @var \App\Models\User $user */
    $user = Auth::user();
    return $user->isAdmin();
  }

  public function rules(): array
  {
    return [
      'parent_id' => 'nullable|exists:organizational_structures,id',
      'name' => 'required|string|max:255',
      'position' => 'required|string|max:255',
      'photo_url' => 'required|string',
    ];
  }
}