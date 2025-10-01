<?php

namespace Database\Seeders;

use App\Models\Inquiry;
use App\Enums\InquiryStatus;
use Illuminate\Database\Seeder;

class InquirySeeder extends Seeder
{
    public function run(): void
    {
        $inquiries = [
            [
                'name' => 'Sari Indah',
                'email' => 'sari.indah@gmail.com',
                'phone' => '+62 812 1234 5678',
                'subject' => 'Admission Requirements',
                'message' => 'Hello, I would like to know about the admission requirements for the Software Engineering program.',
                'status' => InquiryStatus::NEW,
            ],
            [
                'name' => 'Budi Hartono',
                'email' => 'budi.hartono@yahoo.com',
                'phone' => '+62 813 2345 6789',
                'subject' => 'School Facilities',
                'message' => 'Can you provide information about the computer laboratory facilities available for students?',
                'status' => InquiryStatus::READ,
            ],
            [
                'name' => 'Maria Santos',
                'email' => 'maria.santos@gmail.com',
                'phone' => '+62 814 3456 7890',
                'subject' => 'Scholarship Information',
                'message' => 'I am interested in applying for scholarships. What are the available scholarship programs?',
                'status' => InquiryStatus::ARCHIVED,
            ],
        ];

        foreach ($inquiries as $inquiry) {
            Inquiry::create($inquiry);
        }
    }
}