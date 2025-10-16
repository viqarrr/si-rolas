<?php
// app/Http/Requests/InquiryRequest.php
namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use App\Enums\InquiryStatus;
use Illuminate\Support\Facades\Auth;

class InquiryRequest extends FormRequest
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
      'status' => ['required', Rule::enum(InquiryStatus::class)],
    ];
  }
}