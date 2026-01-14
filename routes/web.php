<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\PageController;

/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/

// Home
Route::get('/', [HomeController::class, 'index'])->name('home');

// Services
Route::prefix('services')->name('services.')->group(function () {
    Route::get('/', [ServiceController::class, 'index'])->name('index');
    Route::get('/cctv-installation', [ServiceController::class, 'cctv'])->name('cctv');
    Route::get('/solar-solutions', [ServiceController::class, 'solar'])->name('solar');
    Route::get('/automatic-gate-systems', [ServiceController::class, 'automaticGates'])->name('automatic-gates');
    Route::get('/fingerprint-lock-systems', [ServiceController::class, 'fingerprintLocks'])->name('fingerprint-locks');
    Route::get('/laptop-pc-repair', [ServiceController::class, 'pcRepair'])->name('pc-repair');
});

// Other Pages
Route::get('/gallery', [PageController::class, 'gallery'])->name('gallery');
Route::get('/projects', [PageController::class, 'gallery'])->name('projects'); // Alias for gallery
Route::get('/about', [PageController::class, 'about'])->name('about');
Route::get('/contact', [PageController::class, 'contact'])->name('contact');
Route::post('/contact', [PageController::class, 'contactSubmit'])->name('contact.submit');

// Legal Pages
Route::get('/privacy', [PageController::class, 'privacy'])->name('privacy');
Route::get('/terms', [PageController::class, 'terms'])->name('terms');

/*
|--------------------------------------------------------------------------
| Test Routes (can be removed in production)
|--------------------------------------------------------------------------
*/
Route::get('/colors', [HomeController::class, 'colors'])->name('colors.test');
Route::get('/font-test', [HomeController::class, 'fonts'])->name('fonts.test');
