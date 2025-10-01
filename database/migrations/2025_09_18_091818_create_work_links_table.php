<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('work_links', function (Blueprint $table) {
            $table->id();
            $table->foreignId('work_id')->constrained()->onDelete('cascade');
            $table->text('url');
            $table->enum('platform', ['youtube', 'tiktok', 'instagram', 'other'])->default('other');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('work_links');
    }
};