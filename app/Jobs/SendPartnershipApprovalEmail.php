<?php

namespace App\Jobs;

use App\Models\Partnership;
use App\Mail\PartnershipApprovalMail;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;

class SendPartnershipApprovalEmail implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    public function __construct(
        public Partnership $partnership
    ) {}

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $this->partnership->load('company');

        Mail::to($this->partnership->contact_email)->send(
            new PartnershipApprovalMail($this->partnership)
        );
    }
}