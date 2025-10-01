<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class VisionMissionRequest extends FormRequest
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
            'title' => 'required|string|max:255',
            'content' => 'required|string',
        ];
    }
}