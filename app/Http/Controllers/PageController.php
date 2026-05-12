<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\ContactMessage;
use App\Models\GalleryItem;
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

        // Load published gallery items with their Spatie media,
        // ordered by sort_order as set by the admin.
        $galleryItems = GalleryItem::published()
            ->with('media')
            ->get()
            ->map(fn (GalleryItem $item) => [
                'id'          => $item->id,
                'title'       => $item->title,
                'description' => $item->description,
                'images'      => $item->getMedia('projects')->map(fn ($media) => [
                    'url'       => $media->getUrl(),
                    'thumb'     => $media->getUrl('thumb'),
                    'medium'    => $media->getUrl('medium'),
                    'alt'       => $item->title,
                ]),
            ]);

        return Inertia::render('Gallery', [
            'galleryItems' => $galleryItems,
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


    public function contactSubmit()
    {
        $validated = request()->validate([
            'name'    => 'required|string|max:255',
            'email'   => 'required|email|max:255',
            'phone'   => 'nullable|string|max:20',
            'service' => 'nullable|string|max:255',
            'message' => 'required|string|max:1000',
        ]);

        // Persist the message so the admin can view it in the Filament panel.
        // The ip_address is captured for spam/abuse tracking.
        ContactMessage::create([
            ...$validated,
            'ip_address' => request()->ip(),
        ]);

        return redirect()->back()->with('success', 'Thank you for contacting us! We will get back to you soon.');
    }
}
