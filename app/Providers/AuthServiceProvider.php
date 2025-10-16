<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;
use App\Models\Partnership;
use App\Models\JobPosting;
use App\Policies\PartnershipPolicy;
use App\Policies\JobPostingPolicy;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        Partnership::class => PartnershipPolicy::class,
        JobPosting::class => JobPostingPolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     */
    public function boot(): void
    {
        $this->registerPolicies();

        // Optional: bikin rule admin override
        Gate::before(function ($user, $ability) {
            if ($user->role === 'admin') {
                return true;
            }
            return null;
        });
    }
}
