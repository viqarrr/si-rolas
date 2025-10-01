<?php

namespace Database\Seeders;

use App\Models\OrganizationalStructure;
use Illuminate\Database\Seeder;

class OrganizationalStructureSeeder extends Seeder
{
    public function run(): void
    {
        $principal = OrganizationalStructure::create([
            'name' => 'Dr. Ahmad Wijaya, M.Pd.',
            'position' => 'Principal',
            'photo_url' => 'https://via.placeholder.com/300x400',
        ]);

        $vicePrincipalAcademic = OrganizationalStructure::create([
            'parent_id' => $principal->id,
            'name' => 'Siti Nurhaliza, S.Pd., M.M.',
            'position' => 'Vice Principal - Academic Affairs',
            'photo_url' => 'https://via.placeholder.com/300x400',
        ]);

        $vicePrincipalStudent = OrganizationalStructure::create([
            'parent_id' => $principal->id,
            'name' => 'Budi Santoso, S.Pd.',
            'position' => 'Vice Principal - Student Affairs',
            'photo_url' => 'https://via.placeholder.com/300x400',
        ]);

        OrganizationalStructure::create([
            'parent_id' => $vicePrincipalAcademic->id,
            'name' => 'Indira Sari, S.Kom.',
            'position' => 'Head of IT Department',
            'photo_url' => 'https://via.placeholder.com/300x400',
        ]);

        OrganizationalStructure::create([
            'parent_id' => $vicePrincipalAcademic->id,
            'name' => 'Raden Mas Suryo, S.T.',
            'position' => 'Head of Engineering Department',
            'photo_url' => 'https://via.placeholder.com/300x400',
        ]);
    }
}