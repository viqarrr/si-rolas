<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class JobPosting extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'company_id',
        'title',
        'description',
        'requirements',
        'job_type',
        'work_location',
        'location',
        'salary_range',
        'apply_method',
        'apply_link_or_email',
        'deadline',
        'positions_available',
        'skills_required',
        'experience_level',
        'status',
        'is_active',
        'approved_at',
        'approved_by',
        'rejection_reason',
        'views_count',
    ];

    protected $casts = [
        'deadline' => 'date',
        'approved_at' => 'datetime',
        'is_active' => 'boolean',
        'skills_required' => 'array',
        'views_count' => 'integer',
        'positions_available' => 'integer',
    ];

    // Relationships
    public function company(): BelongsTo
    {
        return $this->belongsTo(Company::class);
    }

    public function approver(): BelongsTo
    {
        return $this->belongsTo(User::class, 'approved_by');
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

    public function scopeActive($query)
    {
        return $query->where('is_active', true)
            ->where('deadline', '>=', now()->toDateString());
    }

    public function scopePublished($query)
    {
        return $query->approved()->active();
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

    public function isActive(): bool
    {
        return $this->is_active && $this->deadline >= now()->toDateString();
    }

    public function isExpired(): bool
    {
        return $this->deadline < now()->toDateString();
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

    public function reject(int $rejectedBy, string $reason): void
    {
        $this->update([
            'status' => 'rejected',
            'approved_by' => $rejectedBy,
            'rejection_reason' => $reason,
            'approved_at' => null,
        ]);
    }

    public function deactivate(): void
    {
        $this->update(['is_active' => false]);
    }

    public function activate(): void
    {
        $this->update(['is_active' => true]);
    }

    public function incrementViews(): void
    {
        $this->increment('views_count');
    }
}