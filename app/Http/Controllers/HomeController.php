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
}

