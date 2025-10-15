<?php

namespace App\Jobs;

use App\Models\JobPosting;
use App\Mail\JobPostingApprovalMail;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;

class SendJobPostingApprovalEmail implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    public function __construct(
        public JobPosting $jobPosting
    ) {}

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $this->jobPosting->load('company');

        Mail::to($this->jobPosting->company->email)->send(
            new JobPostingApprovalMail($this->jobPosting)
        );
    }
}