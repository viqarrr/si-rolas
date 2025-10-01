<?php

namespace App\Http\Controllers;

use App\Models\VisionMission;
use App\Models\OrganizationalStructure;
use App\Models\PostCategory;
use App\Models\Post;
use App\Models\Major;
use App\Models\Competency;
use App\Models\Contact;
use App\Models\JobProspect;
use App\Models\Work;
use App\Models\WorkImage;
use App\Models\WorkLink;
use App\Models\Inquiry;
use App\Models\History;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(): Response
    {
        $stats = [
            'visions_missions' => VisionMission::count(),
            'organizational_structures' => OrganizationalStructure::count(),
            'post_categories' => PostCategory::count(),
            'posts' => Post::count(),
            'majors' => Major::count(),
            'competencies' => Competency::count(),
            'job_prospects' => JobProspect::count(),
            'works' => Work::count(),
            'work_images' => WorkImage::count(),
            'work_links' => WorkLink::count(),
            'school_contacts' => Contact::count(),
            'inquiries' => Inquiry::count(),
            'histories' => History::count(),
        ];

        $recentInquiries = Inquiry::where('status', 'new')->latest()->take(5)->get();
        $recentPosts = Post::with('category')->latest()->take(5)->get();

        return Inertia::render('dashboard', [
            'stats' => $stats,
            'recentInquiries' => $recentInquiries,
            'recentPosts' => $recentPosts,
        ]);
    }
}