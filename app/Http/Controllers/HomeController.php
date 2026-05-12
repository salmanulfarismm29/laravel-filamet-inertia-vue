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

        // Fetch the 6 most recent published gallery items for the portfolio section
        $galleryItems = \App\Models\GalleryItem::published()
            ->with('media')
            ->orderBy('sort_order')
            ->take(6)
            ->get()
            ->map(fn (\App\Models\GalleryItem $item) => [
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

        return Inertia::render('Home', [
            'galleryItems' => $galleryItems,
        ]);
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

