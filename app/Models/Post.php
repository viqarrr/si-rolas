<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Enums\PostType;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'category_id',
        'type',
        'title',
        'slug',
        'content',
    'image_url'
    ];

    protected function casts(): array
    {
        return [
            'type' => PostType::class
        ];
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(PostCategory::class, 'category_id');
    }
}