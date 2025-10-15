<?php

namespace App\Mail;

use App\Models\JobPosting;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class JobPostingApprovalMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */
    public function __construct(
        public JobPosting $jobPosting
    ) {}

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Job Posting Approved - ' . $this->jobPosting->title,
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'emails.job-posting-approval',
            with: [
                'jobPosting' => $this->jobPosting,
                'company' => $this->jobPosting->company,
                'jobUrl' => route('info-lowongan.show', $this->jobPosting->id),
                'dashboardUrl' => $this->jobPosting->company->user_id 
                    ? route('company.dashboard') 
                    : null,
            ],
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}