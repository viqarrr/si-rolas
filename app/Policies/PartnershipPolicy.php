<?php

namespace App\Policies;

use App\Models\Partnership;
use App\Models\User;

class PartnershipPolicy
{
    /**
     * Determine whether the user can view any partnerships.
     */
    public function viewAny(User $user): bool
    {
        return $user->isAdmin();
    }

    /**
     * Determine whether the user can view the partnership.
     */
    public function view(User $user, Partnership $partnership): bool
    {
        return $user->isAdmin();
    }

    /**
     * Determine whether the user can approve the partnership.
     */
    public function approve(User $user, Partnership $partnership): bool
    {
        return $user->isAdmin() && $partnership->isPending();
    }

    /**
     * Determine whether the user can reject the partnership.
     */
    public function reject(User $user, Partnership $partnership): bool
    {
        return $user->isAdmin() && $partnership->isPending();
    }
}