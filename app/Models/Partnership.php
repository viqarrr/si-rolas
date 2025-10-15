<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Traits\HandleImageUploads;

class Partnership extends Model
{
    use HasFactory, SoftDeletes, HandleImageUploads;

    protected $fillable = [
        'company_id',
        'contact_person',
        'contact_email',
        'contact_phone',
        'proposal_description',
        'cover_letter',
        'proposal_file_path',
        'partnership_type',
        'proposed_start_date',
        'proposed_end_date',
        'status',
        'approved_at',
        'approved_by',
        'rejection_reason',
        'admin_notes',
    ];

    protected $casts = [
        'proposed_start_date' => 'date',
        'proposed_end_date' => 'date',
        'approved_at' => 'datetime',
    ];

    protected $appends = [
        'proposal_file_url',
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

    // Accessors
    public function getProposalFileUrlAttribute(): ?string
    {
        return $this->getImageUrl($this->proposal_file_path);
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

    public function approve(int $approvedBy, ?string $notes = null): void
    {
        $this->update([
            'status' => 'approved',
            'approved_at' => now(),
            'approved_by' => $approvedBy,
            'rejection_reason' => null,
            'admin_notes' => $notes,
        ]);
    }

    public function reject(int $rejectedBy, string $reason, ?string $notes = null): void
    {
        $this->update([
            'status' => 'rejected',
            'approved_by' => $rejectedBy,
            'rejection_reason' => $reason,
            'admin_notes' => $notes,
            'approved_at' => null,
        ]);
    }
}