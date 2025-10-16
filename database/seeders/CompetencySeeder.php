<?php

namespace Database\Seeders;

use App\Models\Competency;
use App\Models\Major;
use Illuminate\Database\Seeder;

class CompetencySeeder extends Seeder
{
    public function run(): void
    {
        $softwareEngineering = Major::where('slug', 'software-engineering')->first();
        $networkEngineering = Major::where('slug', 'computer-network-engineering')->first();
        $multimedia = Major::where('slug', 'multimedia')->first();

        $competencies = [
            // Software Engineering
            [
                'major_id' => $softwareEngineering->id,
                'name' => 'Web Development',
                'description' => 'HTML, CSS, JavaScript, PHP, Python, React, Vue.js',
            ],
            [
                'major_id' => $softwareEngineering->id,
                'name' => 'Mobile App Development',
                'description' => 'Android (Java/Kotlin), iOS (Swift), Flutter, React Native',
            ],
            [
                'major_id' => $softwareEngineering->id,
                'name' => 'Database Management',
                'description' => 'MySQL, PostgreSQL, MongoDB, Database Design',
            ],
            // Network Engineering
            [
                'major_id' => $networkEngineering->id,
                'name' => 'Network Administration',
                'description' => 'Cisco, Mikrotik, Windows Server, Linux Server',
            ],
            [
                'major_id' => $networkEngineering->id,
                'name' => 'Cybersecurity',
                'description' => 'Network Security, Ethical Hacking, Vulnerability Assessment',
            ],
            // Multimedia
            [
                'major_id' => $multimedia->id,
                'name' => 'Graphic Design',
                'description' => 'Adobe Photoshop, Illustrator, InDesign, CorelDRAW',
            ],
            [
                'major_id' => $multimedia->id,
                'name' => 'Video Production',
                'description' => 'Adobe Premiere Pro, After Effects, Final Cut Pro',
            ],
        ];

        foreach ($competencies as $competency) {
            Competency::create($competency);
        }
    }
}