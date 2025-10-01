<?php

namespace Database\Seeders;

use App\Models\WorkImage;
use App\Models\Work;
use Illuminate\Database\Seeder;

class WorkImageSeeder extends Seeder
{
    public function run(): void
    {
        $works = Work::all();

        foreach ($works as $work) {
            for ($i = 1; $i <= 3; $i++) {
                WorkImage::create([
                    'work_id' => $work->id,
                    'image_url' => "https://via.placeholder.com/800x600?text=Work+{$work->id}+Image+{$i}",
                ]);
            }
        }
    }
}