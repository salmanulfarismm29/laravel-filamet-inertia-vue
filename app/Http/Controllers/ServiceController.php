<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Artesaos\SEOTools\Facades\SEOTools;

class ServiceController extends Controller
{
    public function index()
    {
        SEOTools::setTitle('Our Services - FAGNUS');
        SEOTools::setDescription(
            'Comprehensive technology and security solutions including CCTV, Solar Energy, Automatic Gates, Fingerprint Locks, and PC Repair services.'
        );

        return Inertia::render('Services/Index');
    }

    public function cctv()
    {
        SEOTools::setTitle('CCTV Installation & Services - FAGNUS');
        SEOTools::setDescription(
            'Professional CCTV camera installation with HD quality, 24/7 monitoring, night vision, and remote access. Protect your property with advanced surveillance systems.'
        );

        return Inertia::render('Services/CCTV');
    }

    public function solar()
    {
        SEOTools::setTitle('Solar Energy Solutions - FAGNUS');
        SEOTools::setDescription(
            'Sustainable solar power systems for homes and businesses. Reduce energy costs by up to 90% with high-efficiency panels, battery storage, and professional installation.'
        );

        return Inertia::render('Services/Solar');
    }

    public function automaticGates()
    {
        SEOTools::setTitle('Automatic Gate Systems - FAGNUS');
        SEOTools::setDescription(
            'Smart automated gate solutions with remote control, safety sensors, and access control integration for residential and commercial properties.'
        );

        return Inertia::render('Services/AutomaticGates');
    }

    public function fingerprintLocks()
    {
        SEOTools::setTitle('Fingerprint Lock Systems - FAGNUS');
        SEOTools::setDescription(
            'Advanced biometric fingerprint lock systems offering keyless entry, multi-user access, and comprehensive security for homes and businesses.'
        );

        return Inertia::render('Services/FingerprintLocks');
    }

    public function pcRepair()
    {
        SEOTools::setTitle('Laptop & PC Repair Services - FAGNUS');
        SEOTools::setDescription(
            'Professional laptop and PC repair services including hardware diagnostics, software troubleshooting, upgrades, and data recovery with same-day service available.'
        );

        return Inertia::render('Services/PCRepair');
    }
}
