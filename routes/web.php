<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\CompanyDashboardController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\JobPostingController;
use App\Http\Controllers\PartnershipController;
use App\Http\Controllers\VisionMissionController;
use App\Http\Controllers\OrganizationalStructureController;
use App\Http\Controllers\PostCategoryController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\MajorController;
use App\Http\Controllers\CompetencyController;
use App\Http\Controllers\JobProspectController;
use App\Http\Controllers\WorkController;
use App\Http\Controllers\WorkImageController;
use App\Http\Controllers\WorkLinkController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\InquiryController;
use App\Http\Controllers\HistoryController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

// Route::middleware(['auth', 'verified'])->group(function () {
//     Route::get('dashboard', function () {
//         return Inertia::render('dashboard');
//     })->name('dashboard');
// });

// Public routes (guest access)
Route::get('/kerja-sama/create', [PartnershipController::class, 'create'])
    ->name('partnerships.create');
Route::post('/kerja-sama', [PartnershipController::class, 'store'])
    ->name('partnerships.store');

Route::get('/info-lowongan/create', [JobPostingController::class, 'create'])
    ->name('job-postings.create');
Route::post('/info-lowongan', [JobPostingController::class, 'store'])
    ->name('job-postings.store');

// Public job listings (students/alumni)
Route::get('/info-lowongan', [JobPostingController::class, 'publicIndex'])
    ->name('info-lowongan.index');
Route::get('/info-lowongan/{jobPosting}', [JobPostingController::class, 'publicShow'])
    ->name('info-lowongan.show');


Route::middleware('guest')->group(function () {
    Route::get('login', [AuthenticatedSessionController::class, 'create'])
        ->name('login');
    Route::post('login', [AuthenticatedSessionController::class, 'store']);
});

Route::middleware(['auth', 'admin', 'role:admin'])->prefix('admin')->name('admin.')->group(function () {
    // Logout
    Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])
        ->name('logout');

        Route::get('/profile/edit', [CompanyDashboardController::class, 'editProfile'])
        ->name('profile.edit');
    Route::put('/profile', [CompanyDashboardController::class, 'updateProfile'])
        ->name('profile.update');

    // Dashboard
    Route::get('/dashboard', [DashboardController::class, 'index'])
        ->name('dashboard');

    // Vision Missions
    Route::resource('/visi-misi', VisionMissionController::class)
        ->names('vission-misssions')->except(['show']);

    // Organizational Structures
    Route::resource('/struktur-organisasi', OrganizationalStructureController::class)
        ->names('organizational-structures')->parameters(['struktur-organisasi' => 'organizationalStructure'])->except(['show']);

    // Histories
    Route::resource('/sejarah', HistoryController::class)
        ->names('histories')->except(['show']);

    // Posts
    Route::resource('/postingan', PostController::class)
        ->names('posts')->except(['show']);

    // Majors
    Route::resource('/jurusan', MajorController::class)
        ->names('majors')->except(['show']);

    // Works
    Route::resource('/karya', WorkController::class)
        ->names('works')->except(['show']);

    // School Contacts
    Route::resource('/kontak', ContactController::class)
        ->names('contacts')->except(['show']);

    Route::resource('/pesan', InquiryController::class)
        ->names('messages')->except(['create']);
    // // Inquiries (read-only with status updates)
    // Route::get('/pesan', [InquiryController::class, 'index'])
    //     ->name('pesan.index');
    // Route::get('/pesan/{inquiry}', [InquiryController::class, 'show'])
    //     ->name('pesan.show');
    // Route::patch('/pesan/{inquiry}', [InquiryController::class, 'update'])
    //     ->name('pesan.update');
    // Route::delete('/pesan/{inquiry}', [InquiryController::class, 'destroy'])
    //     ->name('pesan.destroy');

    // Partnerships management
    Route::get('/kerja-sama', [PartnershipController::class, 'index'])
        ->name('partnerships.index');
    Route::get('/kerja-sama/{partnership}', [PartnershipController::class, 'show'])
        ->name('partnerships.show');
    Route::post('/kerja-sama/{partnership}/approve', [PartnershipController::class, 'approve'])
        ->name('partnerships.approve');
    Route::post('/kerja-sama/{partnership}/reject', [PartnershipController::class, 'reject'])
        ->name('partnerships.reject');

    // Job postings management
    Route::get('/info-lowongan', [JobPostingController::class, 'index'])
        ->name('job-postings.index');
    Route::get('/info-lowongan/{jobPosting}', [JobPostingController::class, 'show'])
        ->name('job-postings.show');
    Route::post('/info-lowongan/{jobPosting}/approve', [JobPostingController::class, 'approve'])
        ->name('job-postings.approve');
    Route::post('/info-lowongan/{jobPosting}/reject', [JobPostingController::class, 'reject'])
        ->name('job-postings.reject');
});

// Company dashboard routes (authenticated, role: company)
Route::middleware(['auth', 'verified', 'role:company'])->prefix('company')->name('company.')->group(function () {
    Route::get('/dashboard', [CompanyDashboardController::class, 'index'])
        ->name('dashboard');

    // Company profile
    Route::get('/profile/edit', [CompanyDashboardController::class, 'editProfile'])
        ->name('profile.edit');
    Route::put('/profile', [CompanyDashboardController::class, 'updateProfile'])
        ->name('profile.update');

    // Company job postings
    Route::get('/info-lowongan', [CompanyDashboardController::class, 'jobPostings'])
        ->name('job-postings.index');
    Route::get('/info-lowongan/create', [CompanyDashboardController::class, 'createJobPosting'])
        ->name('job-postings.create');
    Route::post('/info-lowongan', [CompanyDashboardController::class, 'storeJobPosting'])
        ->name('job-postings.store');
    Route::get('/info-lowongan/{jobPosting}/edit', [CompanyDashboardController::class, 'editJobPosting'])
        ->name('job-postings.edit');
    Route::put('/info-lowongan/{jobPosting}', [CompanyDashboardController::class, 'updateJobPosting'])
        ->name('job-postings.update');
    Route::post('/info-lowongan/{jobPosting}/toggle', [CompanyDashboardController::class, 'toggleJobPosting'])
        ->name('job-postings.toggle');
    Route::delete('/info-lowongan/{jobPosting}', [CompanyDashboardController::class, 'destroyJobPosting'])
        ->name('job-postings.destroy');
});

// Register admin middleware
Route::aliasMiddleware('admin', \App\Http\Middleware\AdminMiddleware::class);

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
