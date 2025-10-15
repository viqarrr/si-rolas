<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        User::firstOrCreate(
        ['email' => 'test@example.com'],
        [
            'name' => 'Test User',
            'password' => Hash::make('password'),
            'role' => 'admin',
            'email_verified_at' => now(),
        ]
        );
        
        $this->call([
            // VisionMissionSeeder::class,
            // OrganizationalStructureSeeder::class,
            // PostCategorySeeder::class,
            // MajorSeeder::class,
            // PostSeeder::class,
            // CompetencySeeder::class,
            // JobProspectSeeder::class,
            // WorkSeeder::class,
            // WorkImageSeeder::class,
            // WorkLinkSeeder::class,
            // SchoolContactSeeder::class,
            // InquirySeeder::class,
            // HistorySeeder::class,
            // JobPortalSeeder::class,
        ]);
    }
}
