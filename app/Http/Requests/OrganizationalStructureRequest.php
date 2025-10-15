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
      'name' => 'required|string|max:255',
      'position' => 'required|string|max:255',
      'photo' => 'nullable|image|max:5120',

    ];
  }
}