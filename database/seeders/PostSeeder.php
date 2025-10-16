<?php

namespace Database\Seeders;

use App\Models\Post;
use App\Models\PostCategory;
use App\Enums\PostType;
use Illuminate\Database\Seeder;

class PostSeeder extends Seeder
{
    public function run(): void
    {
        $newsCategory = PostCategory::where('slug', 'school-news')->first();
        $eventsCategory = PostCategory::where('slug', 'events')->first();
        $competitionsCategory = PostCategory::where('slug', 'competitions')->first();

        $posts = [
            [
                'category_id' => $newsCategory->id,
                'type' => PostType::NEWS,
                'title' => 'New Computer Lab Opening',
                'slug' => 'new-computer-lab-opening',
                'content' => 'We are excited to announce the opening of our new state-of-the-art computer laboratory equipped with the latest technology.',
                'image_url' => 'https://via.placeholder.com/800x600',
                'post_date' => now()->subDays(5),
            ],
            [
                'category_id' => $eventsCategory->id,
                'type' => PostType::ANNOUNCEMENT,
                'title' => 'School Fair 2024',
                'slug' => 'school-fair-2024',
                'content' => 'Join us for our annual school fair featuring student projects, performances, and exhibitions from all departments.',
                'image_url' => 'https://via.placeholder.com/800x600',
                'post_date' => now()->addDays(10),
            ],
            [
                'category_id' => $competitionsCategory->id,
                'type' => PostType::ACHIEVEMENT,
                'title' => 'Students Win National Programming Contest',
                'slug' => 'students-win-national-programming-contest',
                'content' => 'Our software engineering students have won first place in the National Programming Contest 2024.',
                'image_url' => 'https://via.placeholder.com/800x600',
                'post_date' => now()->subDays(15),
            ],
        ];

        foreach ($posts as $post) {
            Post::create($post);
        }
    }
}