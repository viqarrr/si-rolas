<?php

namespace Database\Seeders;

use App\Models\JobProspect;
use App\Models\Major;
use Illuminate\Database\Seeder;

class JobProspectSeeder extends Seeder
{
    public function run(): void
    {
        $softwareEngineering = Major::where('slug', 'software-engineering')->first();
        $networkEngineering = Major::where('slug', 'computer-network-engineering')->first();
        $multimedia = Major::where('slug', 'multimedia')->first();

        $jobProspects = [
            // Software Engineering
            [
                'major_id' => $softwareEngineering->id,
                'name' => 'Full Stack Developer',
                'description' => 'Develop both front-end and back-end applications for web and mobile platforms.',
            ],
            [
                'major_id' => $softwareEngineering->id,
                'name' => 'Mobile App Developer',
                'description' => 'Create mobile applications for Android and iOS platforms.',
            ],
            [
                'major_id' => $softwareEngineering->id,
                'name' => 'Software Quality Assurance',
                'description' => 'Test and ensure software quality meets industry standards.',
            ],
            // Network Engineering
            [
                'major_id' => $networkEngineering->id,
                'name' => 'Network Administrator',
                'description' => 'Manage and maintain computer networks in organizations.',
            ],
            [
                'major_id' => $networkEngineering->id,
                'name' => 'Cybersecurity Specialist',
                'description' => 'Protect organizations from cyber threats and security breaches.',
            ],
            // Multimedia
            [
                'major_id' => $multimedia->id,
                'name' => 'Graphic Designer',
                'description' => 'Create visual content for print and digital media.',
            ],
            [
                'major_id' => $multimedia->id,
                'name' => 'Video Editor',
                'description' => 'Edit and produce video content for various media platforms.',
            ],
        ];

        foreach ($jobProspects as $jobProspect) {
            JobProspect::create($jobProspect);
        }
    }
}