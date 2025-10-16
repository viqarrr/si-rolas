<?php

namespace App\Policies;

use App\Models\JobPosting;
use App\Models\User;

class JobPostingPolicy
{
    /**
     * Determine whether the user can view any job postings.
     */
    public function viewAny(User $user): bool
    {
        return $user->isAdmin();
    }

    /**
     * Determine whether the user can view the job posting.
     */
    public function view(User $user, JobPosting $jobPosting): bool
    {
        return $user->isAdmin();
    }

    /**
     * Determine whether the user can approve the job posting.
     */
    public function approve(User $user, JobPosting $jobPosting): bool
    {
        return $user->isAdmin() && $jobPosting->isPending();
    }
    /**
     * Determine whether the user can reject the job posting.
     */
    public function reject(User $user, JobPosting $jobPosting): bool
    {
        return $user->isAdmin() && $jobPosting->isPending();
    }
}
