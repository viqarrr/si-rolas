<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'role',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    /**
     * Get the company associated with the user.
     */
    public function company(): HasOne
    {
        return $this->hasOne(Company::class);
    }

    /**
     * Get partnerships approved by this user.
     */
    public function approvedPartnerships(): HasMany
    {
        return $this->hasMany(Partnership::class, 'approved_by');
    }

    /**
     * Get job postings approved by this user.
     */
    public function approvedJobPostings(): HasMany
    {
        return $this->hasMany(JobPosting::class, 'approved_by');
    }

    /**
     * Get companies approved by this user.
     */
    public function approvedCompanies(): HasMany
    {
        return $this->hasMany(Company::class, 'approved_by');
    }

    /**
     * Check if user is admin.
     */
    public function isAdmin(): bool
    {
        return $this->role === 'admin';
    }

    /**
     * Check if user is company.
     */
    public function isCompany(): bool
    {
        return $this->role === 'company';
    }

    /**
     * Check if user is guest.
     */
    public function isGuest(): bool
    {
        return $this->role === 'guest';
    }

}
