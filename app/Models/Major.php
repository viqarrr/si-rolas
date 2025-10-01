<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Major extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'slug',
    ];

    public function competencies(): HasMany
    {
        return $this->hasMany(Competency::class);
    }

    public function jobProspects(): HasMany
    {
        return $this->hasMany(JobProspect::class);
    }

    public function works(): HasMany
    {
        return $this->hasMany(Work::class);
    }
}