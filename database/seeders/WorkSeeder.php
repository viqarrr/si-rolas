<?php

namespace Database\Seeders;

use App\Models\Work;
use App\Models\Major;
use Illuminate\Database\Seeder;

class WorkSeeder extends Seeder
{
    public function run(): void
    {
        $softwareEngineering = Major::where('slug', 'software-engineering')->first();
        $multimedia = Major::where('slug', 'multimedia')->first();

        $works = [
            [
                'major_id' => $softwareEngineering->id,
                'title' => 'E-Learning Platform',
                'slug' => 'e-learning-platform',
                'description' => 'A comprehensive online learning management system built with Laravel and React, featuring course management, student progress tracking, and interactive assessments.',
                'year' => 2024,
            ],
            [
                'major_id' => $softwareEngineering->id,
                'title' => 'Inventory Management System',
                'slug' => 'inventory-management-system',
                'description' => 'A web-based inventory management system for small to medium businesses, featuring real-time stock tracking, supplier management, and automated reordering.',
                'year' => 2023,
            ],
            [
                'major_id' => $multimedia->id,
                'title' => 'School Promotional Video',
                'slug' => 'school-promotional-video',
                'description' => 'A 5-minute promotional video showcasing school facilities, programs, and student achievements, created using professional video production techniques.',
                'year' => 2024,
            ],
        ];

        foreach ($works as $work) {
            Work::create($work);
        }
    }
}