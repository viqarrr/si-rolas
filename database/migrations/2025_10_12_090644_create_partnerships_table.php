<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('partnerships', function (Blueprint $table) {
            $table->id();
            $table->foreignId('company_id')->constrained('companies')->cascadeOnDelete();
            $table->string('contact_person');
            $table->string('contact_email');
            $table->string('contact_phone');
            $table->text('proposal_description');
            $table->text('cover_letter')->nullable();
            $table->string('proposal_file_path')->nullable();
            $table->enum('partnership_type', ['internship', 'job_placement', 'research', 'training', 'other'])->default('other');
            $table->date('proposed_start_date')->nullable();
            $table->date('proposed_end_date')->nullable();
            $table->enum('status', ['pending', 'approved', 'rejected'])->default('pending');
            $table->timestamp('approved_at')->nullable();
            $table->foreignId('approved_by')->nullable()->constrained('users')->nullOnDelete();
            $table->text('rejection_reason')->nullable();
            $table->text('admin_notes')->nullable();
            $table->timestamps();
            $table->softDeletes();

            $table->index('company_id');
            $table->index('status');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('partnerships');
    }
};