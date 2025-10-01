<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use App\Enums\ContactType;
use Illuminate\Support\Facades\Auth;

class ContactRequest extends FormRequest
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
      'type' => ['required', Rule::enum(ContactType::class)],
      'label' => 'required|string|max:255',
      'value' => 'required|string',
    ];
  }
}