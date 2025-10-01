<?php

namespace Database\Seeders;

use App\Models\Major;
use Illuminate\Database\Seeder;

class MajorSeeder extends Seeder
{
    public function run(): void
    {
        $majors = [
            [
                'name' => 'Software Engineering',
                'description' => 'Learn to develop software applications, web systems, and mobile applications using modern programming languages and frameworks.',
                'slug' => 'software-engineering',
            ],
            [
                'name' => 'Computer Network Engineering',
                'description' => 'Master computer network infrastructure, cybersecurity, and system administration for enterprise environments.',
                'slug' => 'computer-network-engineering',
            ],
            [
                'name' => 'Multimedia',
                'description' => 'Create digital content including graphic design, video production, animation, and interactive media.',
                'slug' => 'multimedia',
            ],
            [
                'name' => 'Mechanical Engineering',
                'description' => 'Study mechanical systems, manufacturing processes, and industrial automation.',
                'slug' => 'mechanical-engineering',
            ],
        ];

        foreach ($majors as $major) {
            Major::create($major);
        }
    }
}