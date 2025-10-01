<?php

namespace Database\Seeders;

use App\Models\PostCategory;
use Illuminate\Database\Seeder;

class PostCategorySeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            ['name' => 'School News', 'slug' => 'school-news'],
            ['name' => 'Academic', 'slug' => 'academic'],
            ['name' => 'Events', 'slug' => 'events'],
            ['name' => 'Competitions', 'slug' => 'competitions'],
            ['name' => 'Alumni', 'slug' => 'alumni'],
        ];

        foreach ($categories as $category) {
            PostCategory::create($category);
        }
    }
}