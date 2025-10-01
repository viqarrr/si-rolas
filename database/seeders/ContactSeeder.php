<?php

namespace Database\Seeders;

use App\Models\Contact;
use App\Enums\ContactType;
use Illuminate\Database\Seeder;

class ContactSeeder extends Seeder
{
    public function run(): void
    {
        $contacts = [
            [
                'type' => ContactType::EMAIL,
                'label' => 'General Information',
                'value' => 'info@schoolname.sch.id',
            ],
            [
                'type' => ContactType::EMAIL,
                'label' => 'Admissions',
                'value' => 'admissions@schoolname.sch.id',
            ],
            [
                'type' => ContactType::PHONE,
                'label' => 'Main Office',
                'value' => '+62 21 1234 5678',
            ],
            [
                'type' => ContactType::WHATSAPP,
                'label' => 'Admissions WhatsApp',
                'value' => '+62 812 3456 7890',
            ],
            [
                'type' => ContactType::ADDRESS,
                'label' => 'School Address',
                'value' => 'Jl. Pendidikan No. 123, Jakarta Selatan 12345',
            ],
            [
                'type' => ContactType::YOUTUBE,
                'label' => 'Official YouTube',
                'value' => 'https://youtube.com/@schoolname',
            ],
            [
                'type' => ContactType::INSTAGRAM,
                'label' => 'Official Instagram',
                'value' => 'https://instagram.com/schoolname_official',
            ],
        ];

        foreach ($contacts as $contact) {
            Contact::create($contact);
        }
    }
}