<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Enums\ContactType;

class Contact extends Model
{
    use HasFactory;

    protected $fillable = [
        'type',
        'label',
        'value',
    ];

    protected function casts(): array
    {
        return [
            'type' => ContactType::class,
        ];
    }
}