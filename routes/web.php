<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\DashboardController;
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

Route::middleware('guest')->group(function () {
    Route::get('login', [AuthenticatedSessionController::class, 'create'])
        ->name('login');
    Route::post('login', [AuthenticatedSessionController::class, 'store']);
});

Route::middleware(['auth', 'admin'])->group(function () {
    // Logout
    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])
        ->name('logout');

    // Dashboard
    Route::get('dashboard', [DashboardController::class, 'index'])
        ->name('dashboard');

    // Vision Missions
    Route::resource('dashboard/visi-misi', VisionMissionController::class)
        ->except(['show']);

    // Organizational Structures
    Route::resource('dashboard/struktur-organisasi', OrganizationalStructureController::class)
        ->except(['show']);

    // Histories
    Route::resource('dashboard/sejarah', HistoryController::class)
        ->except(['show']);

    // Posts
    Route::resource('dashboard/postingan', PostController::class)
        ->except(['show']);

    // Majors
    Route::resource('dashboard/jurusan', MajorController::class)
        ->except(['show']);

    // Works
    Route::resource('dashboard/karya', WorkController::class)
        ->except(['show']);

    // School Contacts
    Route::resource('dashboard/kontak', ContactController::class)
        ->except(['show']);

    // Inquiries (read-only with status updates)
    Route::get('dashboard/pesan', [InquiryController::class, 'index'])
        ->name('pesan.index');
    Route::get('dashboard/pesan/{inquiry}', [InquiryController::class, 'show'])
        ->name('pesan.show');
    Route::patch('dashboard/pesan/{inquiry}', [InquiryController::class, 'update'])
        ->name('pesan.update');
    Route::delete('dashboard/pesan/{inquiry}', [InquiryController::class, 'destroy'])
        ->name('pesan.destroy');
});

// Register admin middleware
Route::aliasMiddleware('admin', \App\Http\Middleware\AdminMiddleware::class);

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
