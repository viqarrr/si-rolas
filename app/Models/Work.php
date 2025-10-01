<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Work extends Model
{
    use HasFactory;

    protected $fillable = [
        'major_id',
        'title',
        'slug',
        'description',
        'year',
    ];

    public function major(): BelongsTo
    {
        return $this->belongsTo(Major::class);
    }

    public function images(): HasMany
    {
        return $this->hasMany(WorkImage::class);
    }

    public function links(): HasMany
    {
        return $this->hasMany(WorkLink::class);
    }
}