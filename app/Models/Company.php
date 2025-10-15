<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Traits\HandleImageUploads;

class Company extends Model
{
    use HasFactory, SoftDeletes, HandleImageUploads;

    protected $fillable = [
        'user_id',
        'name',
        'email',
        'phone',
        'address',
        'description',
        'logo_path',
        'website',
        'status',
        'approved_at',
        'approved_by',
        'rejection_reason',
    ];

    protected $casts = [
        'approved_at' => 'datetime',
    ];

    protected $appends = [
        'logo_url',
    ];

    // Relationships
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function approver(): BelongsTo
    {
        return $this->belongsTo(User::class, 'approved_by');
    }

    public function partnerships(): HasMany
    {
        return $this->hasMany(Partnership::class);
    }

    public function jobPostings(): HasMany
    {
        return $this->hasMany(JobPosting::class);
    }

    // Accessors
    public function getLogoUrlAttribute(): ?string
    {
        return $this->getImageUrl($this->logo_path);
    }

    // Scopes
    public function scopeApproved($query)
    {
        return $query->where('status', 'approved');
    }

    public function scopePending($query)
    {
        return $query->where('status', 'pending');
    }

    public function scopeRejected($query)
    {
        return $query->where('status', 'rejected');
    }

    // Helper Methods
    public function isPending(): bool
    {
        return $this->status === 'pending';
    }

    public function isApproved(): bool
    {
        return $this->status === 'approved';
    }

    public function isRejected(): bool
    {
        return $this->status === 'rejected';
    }

    public function approve(int $approvedBy): void
    {
        $this->update([
            'status' => 'approved',
            'approved_at' => now(),
            'approved_by' => $approvedBy,
            'rejection_reason' => null,
        ]);
    }

    public function reject(int $rejectedBy, ?string $reason = null): void
    {
        $this->update([
            'status' => 'rejected',
            'approved_by' => $rejectedBy,
            'rejection_reason' => $reason,
            'approved_at' => null,
        ]);
    }
}