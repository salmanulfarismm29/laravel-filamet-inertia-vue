<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/colors', [HomeController::class, 'colors'])->name('colors.test');
Route::get('/fonts', [HomeController::class, 'fonts'])->name('fonts.test');

Route::get('/test-tailwind', function () {
    return view('test-tailwind');
});
