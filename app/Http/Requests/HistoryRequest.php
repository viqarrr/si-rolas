<?php
// app/Http/Requests/HistoryRequest.php
namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class HistoryRequest extends FormRequest
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
      'year' => 'required|integer|min:1900|max:' . (date('Y') + 10),
      'photo_url' => 'required|string',
      'description' => 'nullable|string',
    ];
  }
}