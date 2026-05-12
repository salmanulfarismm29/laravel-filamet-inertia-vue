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

    // Services listing page
    Route::get('/', [ServiceController::class, 'index'])->name('index');

    // -----------------------------------------------------------------
    // Solar & Energy
    // -----------------------------------------------------------------
    Route::get('/solar-power-systems', [ServiceController::class, 'solarPower'])->name('solar-power');
    Route::get('/solar-inverters-batteries', [ServiceController::class, 'solarInvertersBatteries'])->name('solar-inverters-batteries');
    Route::get('/solar-water-heating', [ServiceController::class, 'solarWaterHeating'])->name('solar-water-heating');
    Route::get('/ev-charging', [ServiceController::class, 'evCharging'])->name('ev-charging');

    // -----------------------------------------------------------------
    // ELV Solutions
    // -----------------------------------------------------------------
    Route::get('/cctv-surveillance', [ServiceController::class, 'cctvSurveillance'])->name('cctv-surveillance');
    Route::get('/access-control', [ServiceController::class, 'accessControl'])->name('access-control');
    Route::get('/video-door-phones-intercom', [ServiceController::class, 'videoDoorPhones'])->name('video-door-phones-intercom');
    Route::get('/fire-alarm-systems', [ServiceController::class, 'fireAlarms'])->name('fire-alarm-systems');
    Route::get('/structured-cabling-networking', [ServiceController::class, 'structuredCabling'])->name('structured-cabling-networking');
    Route::get('/public-address-systems', [ServiceController::class, 'publicAddress'])->name('public-address-systems');
    Route::get('/automatic-gate-systems', [ServiceController::class, 'automaticGateSystems'])->name('automatic-gate-systems');
    Route::get('/home-automation', [ServiceController::class, 'homeAutomation'])->name('home-automation');

    // -----------------------------------------------------------------
    // IT Hardware Solutions
    // -----------------------------------------------------------------
    Route::get('/air-conditioning', [ServiceController::class, 'airConditioning'])->name('air-conditioning');
    Route::get('/laptop-desktop-systems', [ServiceController::class, 'laptopDesktop'])->name('laptop-desktop-systems');
    Route::get('/projectors', [ServiceController::class, 'projectors'])->name('projectors');
    Route::get('/printers', [ServiceController::class, 'printers'])->name('printers');

    // -----------------------------------------------------------------
    // Backward-compatible redirects (old slugs → new slugs)
    // Keeps existing external links and bookmarks working.
    // -----------------------------------------------------------------
    Route::redirect('/solar-solutions', '/services/solar-power-systems', 301);
    Route::redirect('/cctv-installation', '/services/cctv-surveillance', 301);
    Route::redirect('/fingerprint-lock-systems', '/services/access-control', 301);
    Route::redirect('/laptop-pc-repair', '/services/laptop-desktop-systems', 301);
});

// Other Pages
Route::get('/gallery', [PageController::class, 'gallery'])->name('gallery');
Route::get('/projects', [PageController::class, 'gallery'])->name('projects'); // Alias for gallery
Route::get('/about', [PageController::class, 'about'])->name('about');
Route::get('/contact', [PageController::class, 'contact'])->name('contact');
Route::post('/contact', [PageController::class, 'contactSubmit'])->name('contact.submit');



/*
|--------------------------------------------------------------------------
| Test Routes (can be removed in production)
|--------------------------------------------------------------------------
*/
Route::get('/colors', [HomeController::class, 'colors'])->name('colors.test');
Route::get('/font-test', [HomeController::class, 'fonts'])->name('fonts.test');
