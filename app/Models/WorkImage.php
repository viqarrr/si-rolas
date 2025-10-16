<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class WorkImage extends Model
{
    use HasFactory;

    protected $fillable = [
        'work_id',
        'image_url',
    ];

    public function work(): BelongsTo
    {
        return $this->belongsTo(Work::class);
    }
}