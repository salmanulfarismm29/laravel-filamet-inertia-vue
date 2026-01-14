<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Artesaos\SEOTools\Facades\SEOTools;

class PageController extends Controller
{
    public function gallery()
    {
        SEOTools::setTitle('Our Projects - FAGNUS');
        SEOTools::setDescription(
            'Browse our portfolio of completed projects including CCTV installations, solar energy solutions, automated gates, and more.'
        );

        // TODO: Load images from Filament Gallery model
        $images = [];

        return Inertia::render('Gallery', [
            'images' => $images,
        ]);
    }

    public function about()
    {
        SEOTools::setTitle('About Us - FAGNUS');
        SEOTools::setDescription(
            'Learn about FAGNUS - 20+ years of expertise in providing premium security solutions, solar energy systems, and professional technology services.'
        );

        return Inertia::render('About');
    }

    public function contact()
    {
        SEOTools::setTitle('Contact Us - FAGNUS');
        SEOTools::setDescription(
            'Get in touch with FAGNUS for free consultations and quotes on CCTV, Solar Energy, Automatic Gates, and more.'
        );

        return Inertia::render('Contact');
    }

    public function privacy()
    {
        SEOTools::setTitle('Privacy Policy - FAGNUS');
        SEOTools::setDescription(
            'FAGNUS Privacy Policy - Learn how we collect, use, and protect your personal information.'
        );

        return Inertia::render('Legal/Privacy');
    }

    public function terms()
    {
        SEOTools::setTitle('Terms & Conditions - FAGNUS');
        SEOTools::setDescription(
            'FAGNUS Terms and Conditions - Read our terms of service for using our website and services.'
        );

        return Inertia::render('Legal/Terms');
    }

    public function contactSubmit()
    {
        request()->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:20',
            'service' => 'nullable|string',
            'message' => 'required|string|max:1000',
        ]);

        // TODO: Implement email sending or database storage
        // For now, just return success

        return redirect()->back()->with('success', 'Thank you for contacting us! We will get back to you soon.');
    }
}
