<?php

namespace Database\Seeders;

use App\Models\History;
use Illuminate\Database\Seeder;

class HistorySeeder extends Seeder
{
    public function run(): void
    {
        $histories = [
            [
                'year' => 1985,
                'photo_url' => 'https://via.placeholder.com/800x600?text=1985+School+Foundation',
                'description' => 'School was founded with the vision to provide quality vocational education to the community.',
            ],
            [
                'year' => 1992,
                'photo_url' => 'https://via.placeholder.com/800x600?text=1992+First+Graduation',
                'description' => 'First batch of students graduated, marking a significant milestone in our educational journey.',
            ],
            [
                'year' => 2000,
                'photo_url' => 'https://via.placeholder.com/800x600?text=2000+New+Building',
                'description' => 'Construction of new academic building completed, expanding our capacity to serve more students.',
            ],
            [
                'year' => 2010,
                'photo_url' => 'https://via.placeholder.com/800x600?text=2010+IT+Department',
                'description' => 'Establishment of Information Technology department to meet growing demand for tech professionals.',
            ],
            [
                'year' => 2020,
                'photo_url' => 'https://via.placeholder.com/800x600?text=2020+Digital+Transformation',
                'description' => 'Successfully transitioned to digital learning during the pandemic, ensuring continuity of education.',
            ],
        ];

        foreach ($histories as $history) {
            History::create($history);
        }
    }
}