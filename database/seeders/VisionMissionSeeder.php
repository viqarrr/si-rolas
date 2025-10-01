<?php
// database/seeders/VisionMissionSeeder.php
namespace Database\Seeders;

use App\Models\VisionMission;
use Illuminate\Database\Seeder;

class VisionMissionSeeder extends Seeder
{
    public function run(): void
    {
        $visionsMissions = [
            [
                'title' => 'Vision',
                'content' => 'To become a leading vocational school that produces skilled, innovative, and character-driven graduates who are ready to compete in the global job market and contribute to sustainable national development.',
            ],
            [
                'title' => 'Mission',
                'content' => '1. Provide quality vocational education that aligns with industry standards and technological developments.
2. Develop students\' technical skills, creativity, and entrepreneurial spirit.
3. Foster character building based on noble values and national culture.
4. Build partnerships with industry, government, and educational institutions.
5. Continuously improve facilities, infrastructure, and teaching quality.',
            ],
        ];

        foreach ($visionsMissions as $vm) {
            VisionMission::create($vm);
        }
    }
}