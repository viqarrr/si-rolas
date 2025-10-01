<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Enums\WorkLinkPlatform;

class WorkLink extends Model
{
    use HasFactory;

    protected $fillable = [
        'work_id',
        'url',
        'platform',
    ];

    protected function casts(): array
    {
        return [
            'platform' => WorkLinkPlatform::class,
        ];
    }

    public function work(): BelongsTo
    {
        return $this->belongsTo(Work::class);
    }
}