<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Company;
use App\Models\Partnership;
use App\Models\JobPosting;

class JobPortalSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create Admin User
        $admin = User::firstOrCreate(
            ['email' => 'admin@example.com'],
            [
                'name' => 'Admin User',
                'password' => Hash::make('password'),
                'role' => 'admin',
            ]
        );

        echo "✅ Admin user created: admin@example.com / password\n";

        // Create Approved Company with User
        $companyUser1 = User::firstOrCreate(
            ['email' => 'tech.innovations@example.com'],
            [
                'name' => 'Tech Innovations Ltd',
                'password' => Hash::make('password'),
                'role' => 'company',
            ]
        );

        $company1 = Company::firstOrCreate(
            ['email' => 'tech.innovations@example.com'],
            [
                'user_id' => $companyUser1->id,
                'name' => 'Tech Innovations Ltd',
                'phone' => '+62 21 1234 5678',
                'address' => 'Jl. Sudirman No. 123, Jakarta Pusat, DKI Jakarta 10220',
                'website' => 'https://techinnovations.example.com',
                'description' => 'Leading technology company specializing in software development and digital transformation solutions.',
                'status' => 'approved',
                'approved_at' => now(),
                'approved_by' => $admin->id,
            ]
        );

        echo "✅ Approved company created: tech.innovations@example.com / password\n";

        // Create Pending Company
        $company2 = Company::firstOrCreate(
            ['email' => 'global.solutions@example.com'],
            [
                'name' => 'Global Solutions Inc',
                'phone' => '+62 21 9876 5432',
                'address' => 'Jl. Thamrin No. 456, Jakarta Pusat, DKI Jakarta 10230',
                'website' => 'https://globalsolutions.example.com',
                'description' => 'International consulting firm providing business solutions across various industries.',
                'status' => 'pending',
            ]
        );

        echo "✅ Pending company created: global.solutions@example.com\n";

        // Create Another Approved Company
        $companyUser2 = User::firstOrCreate(
            ['email' => 'creative.designs@example.com'],
            [
                'name' => 'Creative Designs Studio',
                'password' => Hash::make('password'),
                'role' => 'company',
            ]
        );

        $company3 = Company::firstOrCreate(
            ['email' => 'creative.designs@example.com'],
            [
                'user_id' => $companyUser2->id,
                'name' => 'Creative Designs Studio',
                'phone' => '+62 21 5555 6666',
                'address' => 'Jl. Gatot Subroto No. 789, Jakarta Selatan, DKI Jakarta 12930',
                'website' => 'https://creativedesigns.example.com',
                'description' => 'Award-winning design studio focusing on branding, UI/UX, and digital marketing.',
                'status' => 'approved',
                'approved_at' => now(),
                'approved_by' => $admin->id,
            ]
        );

        echo "✅ Approved company created: creative.designs@example.com / password\n";

        // Create Partnerships
        Partnership::firstOrCreate(
            [
                'company_id' => $company1->id,
                'contact_email' => 'partnership@techinnovations.example.com',
            ],
            [
                'contact_person' => 'John Doe',
                'contact_phone' => '+62 812 3456 7890',
                'proposal_description' => 'We propose a comprehensive internship program for computer science students, offering hands-on experience in software development, cloud computing, and DevOps practices.',
                'cover_letter' => 'Our company has a strong track record of mentoring young talents and helping them transition into successful tech careers.',
                'partnership_type' => 'internship',
                'proposed_start_date' => now()->addMonth(),
                'proposed_end_date' => now()->addMonths(6),
                'status' => 'approved',
                'approved_at' => now(),
                'approved_by' => $admin->id,
                'admin_notes' => 'Excellent partnership proposal with clear objectives.',
            ]
        );

        Partnership::firstOrCreate(
            [
                'company_id' => $company2->id,
                'contact_email' => 'hr@globalsolutions.example.com',
            ],
            [
                'contact_person' => 'Jane Smith',
                'contact_phone' => '+62 813 9876 5432',
                'proposal_description' => 'We are interested in establishing a job placement partnership to recruit fresh graduates for our business analyst and project management positions.',
                'partnership_type' => 'job_placement',
                'status' => 'pending',
            ]
        );

        echo "✅ Partnerships created\n";

        // Create Job Postings
        JobPosting::firstOrCreate(
            [
                'company_id' => $company1->id,
                'title' => 'Full Stack Developer',
            ],
            [
                'description' => "We are looking for a talented Full Stack Developer to join our dynamic team. You will work on cutting-edge projects using modern technologies and frameworks.\n\nResponsibilities:\n- Develop and maintain web applications\n- Collaborate with cross-functional teams\n- Write clean, maintainable code\n- Participate in code reviews",
                'requirements' => "Required Skills:\n- 2+ years of experience in web development\n- Proficiency in React, Node.js, and PostgreSQL\n- Strong understanding of RESTful APIs\n- Experience with Git version control\n- Excellent problem-solving skills\n\nPreferred:\n- Experience with TypeScript\n- Knowledge of Docker and CI/CD\n- Bachelor's degree in Computer Science",
                'job_type' => 'full_time',
                'work_location' => 'hybrid',
                'location' => 'Jakarta, Indonesia',
                'salary_range' => '12-18 million IDR per month',
                'apply_method' => 'link',
                'apply_link_or_email' => 'https://techinnovations.example.com/careers/apply/fullstack',
                'deadline' => now()->addMonths(2),
                'positions_available' => 3,
                'skills_required' => ['React', 'Node.js', 'PostgreSQL', 'TypeScript', 'Git'],
                'experience_level' => 'mid',
                'status' => 'approved',
                'is_active' => true,
                'approved_at' => now(),
                'approved_by' => $admin->id,
            ]
        );

        JobPosting::firstOrCreate(
            [
                'company_id' => $company1->id,
                'title' => 'Software Engineering Intern',
            ],
            [
                'description' => "Join our internship program and gain valuable experience in software development. This is a paid internship opportunity for students or recent graduates.\n\nWhat you'll do:\n- Work on real projects with our development team\n- Learn modern development practices\n- Receive mentorship from senior engineers\n- Attend tech talks and training sessions",
                'requirements' => "Requirements:\n- Currently pursuing or recently completed a degree in Computer Science or related field\n- Basic knowledge of programming (any language)\n- Eagerness to learn and grow\n- Good communication skills\n- Available for 3-6 months internship\n\nBonus:\n- Experience with any web framework\n- Personal projects or GitHub portfolio",
                'job_type' => 'internship',
                'work_location' => 'onsite',
                'location' => 'Jakarta, Indonesia',
                'salary_range' => '3-5 million IDR per month',
                'apply_method' => 'email',
                'apply_link_or_email' => 'internship@techinnovations.example.com',
                'deadline' => now()->addMonth(),
                'positions_available' => 5,
                'skills_required' => ['Programming', 'Problem Solving', 'Teamwork'],
                'experience_level' => 'entry',
                'status' => 'approved',
                'is_active' => true,
                'approved_at' => now(),
                'approved_by' => $admin->id,
            ]
        );

        JobPosting::firstOrCreate(
            [
                'company_id' => $company3->id,
                'title' => 'UI/UX Designer',
            ],
            [
                'description' => "We're seeking a creative UI/UX Designer to help us create beautiful and intuitive user experiences for our clients' digital products.\n\nYou will:\n- Design user interfaces for web and mobile applications\n- Create wireframes, prototypes, and mockups\n- Conduct user research and usability testing\n- Collaborate with developers and clients\n- Maintain design systems and guidelines",
                'requirements' => "Must Have:\n- 1-2 years of UI/UX design experience\n- Proficiency in Figma or Adobe XD\n- Strong portfolio showcasing your work\n- Understanding of design principles and user-centered design\n- Good communication skills\n\nNice to Have:\n- Experience with design systems\n- Basic HTML/CSS knowledge\n- Animation and motion design skills",
                'job_type' => 'full_time',
                'work_location' => 'remote',
                'location' => 'Remote (Indonesia)',
                'salary_range' => '8-12 million IDR per month',
                'apply_method' => 'link',
                'apply_link_or_email' => 'https://creativedesigns.example.com/careers/uiux',
                'deadline' => now()->addMonths(1)->addWeeks(2),
                'positions_available' => 2,
                'skills_required' => ['Figma', 'Adobe XD', 'Wireframing', 'Prototyping', 'User Research'],
                'experience_level' => 'mid',
                'status' => 'approved',
                'is_active' => true,
                'approved_at' => now(),
                'approved_by' => $admin->id,
            ]
        );

        JobPosting::firstOrCreate(
            [
                'company_id' => $company2->id,
                'title' => 'Business Analyst',
            ],
            [
                'description' => "Looking for a detail-oriented Business Analyst to join our consulting team and help clients optimize their business processes.",
                'requirements' => "Requirements:\n- Bachelor's degree in Business, IT, or related field\n- 1-3 years of experience as Business Analyst\n- Strong analytical and problem-solving skills\n- Excellent documentation skills\n- Experience with requirement gathering",
                'job_type' => 'full_time',
                'work_location' => 'onsite',
                'location' => 'Jakarta, Indonesia',
                'salary_range' => '10-15 million IDR per month',
                'apply_method' => 'email',
                'apply_link_or_email' => 'careers@globalsolutions.example.com',
                'deadline' => now()->addMonths(2),
                'positions_available' => 2,
                'skills_required' => ['Business Analysis', 'Requirements Gathering', 'Documentation', 'SQL'],
                'experience_level' => 'mid',
                'status' => 'pending',
                'is_active' => true,
            ]
        );

        echo "✅ Job postings created\n";
        echo "\n";
        echo "========================================\n";
        echo "📊 Seeding Complete!\n";
        echo "========================================\n";
        echo "Admin: admin@example.com / password\n";
        echo "Company 1: tech.innovations@example.com / password\n";
        echo "Company 2: creative.designs@example.com / password\n";
        echo "========================================\n";
    }
}