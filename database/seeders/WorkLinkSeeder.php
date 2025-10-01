<?php

namespace Database\Seeders;

use App\Models\WorkLink;
use App\Models\Work;
use App\Enums\WorkLinkPlatform;
use Illuminate\Database\Seeder;

class WorkLinkSeeder extends Seeder
{
    public function run(): void
    {
        $promotionalVideo = Work::where('slug', 'school-promotional-video')->first();

        if ($promotionalVideo) {
            WorkLink::create([
                'work_id' => $promotionalVideo->id,
                'url' => 'https://youtube.com/watch?v=example',
                'platform' => WorkLinkPlatform::YOUTUBE,
            ]);

            WorkLink::create([
                'work_id' => $promotionalVideo->id,
                'url' => 'https://instagram.com/p/example',
                'platform' => WorkLinkPlatform::INSTAGRAM,
            ]);
        }
    }
}