<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('job_postings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('company_id')->constrained('companies')->cascadeOnDelete();
            $table->string('title');
            $table->text('description');
            $table->text('requirements');
            $table->enum('job_type', ['full_time', 'part_time', 'internship', 'contract', 'freelance'])->default('full_time');
            $table->enum('work_location', ['onsite', 'remote', 'hybrid'])->default('onsite');
            $table->string('location')->nullable();
            $table->string('salary_range')->nullable();
            $table->enum('apply_method', ['link', 'email'])->default('link');
            $table->string('apply_link_or_email');
            $table->date('deadline');
            $table->integer('positions_available')->default(1);
            $table->json('skills_required')->nullable();
            $table->enum('experience_level', ['entry', 'mid', 'senior', 'lead'])->default('entry');
            $table->enum('status', ['pending', 'approved', 'rejected'])->default('pending');
            $table->boolean('is_active')->default(true);
            $table->timestamp('approved_at')->nullable();
            $table->foreignId('approved_by')->nullable()->constrained('users')->nullOnDelete();
            $table->text('rejection_reason')->nullable();
            $table->integer('views_count')->default(0);
            $table->timestamps();
            $table->softDeletes();

            $table->index('company_id');
            $table->index('status');
            $table->index('is_active');
            $table->index('deadline');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('job_postings');
    }
};