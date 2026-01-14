<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\HomeController;

Route::get('/', [HomeController::class, 'index'])->name('home');



//tests
Route::get('/colors', [HomeController::class, 'colors'])->name('colors.test');
Route::get('/font-test', [HomeController::class, 'fonts'])->name('fonts.test');
Route::get('/test-tailwind', function () {
    return view('test-tailwind');
});
