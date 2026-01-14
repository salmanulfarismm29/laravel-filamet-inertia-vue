<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Artesaos\SEOTools\Facades\SEOTools;

class HomeController extends Controller
{
    public function index()
    {
        SEOTools::setTitle('FAGNUS | Smart Energy & Technology Solutions');
        SEOTools::setDescription(
            'FAGNUS provides renewable energy solutions, security camera systems, and PC & laptop repair services.'
        );

        return Inertia::render('Home');
    }

    public function colors()
    {
        SEOTools::setTitle('FAGNUS | Color Palette Test');
        SEOTools::setDescription('Test page for verifying all brand colors are properly configured.');

        return Inertia::render('Tests/Colors');
    }

    public function fonts()
    {
        SEOTools::setTitle('FAGNUS | Font Test');
        SEOTools::setDescription('Test page for verifying Eina04 font weights and styles.');

        return Inertia::render('Tests/Fonts');
    }
}

