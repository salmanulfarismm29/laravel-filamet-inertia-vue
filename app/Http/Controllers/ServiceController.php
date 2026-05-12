<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use Inertia\Inertia;
use Artesaos\SEOTools\Facades\SEOTools;

/**
 * ServiceController
 *
 * Handles all individual service page renders.
 * Each method sets SEO metadata then returns the corresponding Inertia view.
 *
 * Naming convention: method names mirror the route names defined in web.php
 * (e.g. services.solar-power → solarPower())
 */
class ServiceController extends Controller
{
    // -------------------------------------------------------------------------
    // Services Listing
    // -------------------------------------------------------------------------

    public function index(): \Inertia\Response
    {
        SEOTools::setTitle('Our Services - FAGNUS');
        SEOTools::setDescription(
            'Comprehensive solutions across solar energy, ELV security, air conditioning, and IT hardware. Professional installation, maintenance, and after-sales support.'
        );

        return Inertia::render('Services/Index');
    }

    // -------------------------------------------------------------------------
    // Solar & Energy
    // -------------------------------------------------------------------------

    public function solarPower(): \Inertia\Response
    {
        SEOTools::setTitle('Solar Power Systems - FAGNUS');
        SEOTools::setDescription(
            'Design, installation, and maintenance of on-grid, off-grid, and hybrid solar power systems. Customized rooftop solar installations for homes, offices, and commercial buildings.'
        );

        return Inertia::render('Services/Solar');
    }

    public function solarInvertersBatteries(): \Inertia\Response
    {
        SEOTools::setTitle('Solar Inverters & Batteries - FAGNUS');
        SEOTools::setDescription(
            'High-quality inverters and energy storage solutions for uninterrupted power supply. Keep your home and business powered around the clock.'
        );

        return Inertia::render('Services/SolarInvertersBatteries');
    }

    public function solarWaterHeating(): \Inertia\Response
    {
        SEOTools::setTitle('Solar Water Heating Systems - FAGNUS');
        SEOTools::setDescription(
            'Energy-efficient solar water heating solutions for residential and commercial use. Reduce water heating costs with clean, renewable energy.'
        );

        return Inertia::render('Services/SolarWaterHeating');
    }

    public function evCharging(): \Inertia\Response
    {
        SEOTools::setTitle('EV Charging Solutions - FAGNUS');
        SEOTools::setDescription(
            'Installation of electric vehicle charging points powered by renewable energy. Future-proof your home or business with professional EV charging infrastructure.'
        );

        return Inertia::render('Services/EvCharging');
    }

    // -------------------------------------------------------------------------
    // ELV Solutions
    // -------------------------------------------------------------------------

    public function cctvSurveillance(): \Inertia\Response
    {
        SEOTools::setTitle('CCTV Surveillance Systems - FAGNUS');
        SEOTools::setDescription(
            'Installation and maintenance of high-quality security camera systems for complete monitoring and protection. HD, 4K, and night-vision surveillance for homes and businesses.'
        );

        return Inertia::render('Services/CCTV');
    }

    public function accessControl(): \Inertia\Response
    {
        SEOTools::setTitle('Access Control Systems - FAGNUS');
        SEOTools::setDescription(
            'Biometric systems, RFID card access, and door access solutions for secure entry management. Protect your premises with advanced access control technology.'
        );

        return Inertia::render('Services/AccessControl');
    }

    public function videoDoorPhones(): \Inertia\Response
    {
        SEOTools::setTitle('Video Door Phones & Intercom Systems - FAGNUS');
        SEOTools::setDescription(
            'Advanced video door phone and intercom communication systems for homes, apartments, and offices. See and speak with visitors before granting access.'
        );

        return Inertia::render('Services/VideoDoorPhones');
    }

    public function fireAlarms(): \Inertia\Response
    {
        SEOTools::setTitle('Fire Alarm Systems - FAGNUS');
        SEOTools::setDescription(
            'Design and installation of fire detection and alarm systems to ensure safety and regulatory compliance for residential and commercial properties.'
        );

        return Inertia::render('Services/FireAlarms');
    }

    public function structuredCabling(): \Inertia\Response
    {
        SEOTools::setTitle('Structured Cabling & Networking - FAGNUS');
        SEOTools::setDescription(
            'Organized data, voice, and video cabling solutions for smooth connectivity. Professional structured cabling installation for offices, buildings, and campuses.'
        );

        return Inertia::render('Services/StructuredCabling');
    }

    public function publicAddress(): \Inertia\Response
    {
        SEOTools::setTitle('Public Address (PA) Systems - FAGNUS');
        SEOTools::setDescription(
            'Clear and efficient audio solutions for public announcements and communication. Professional PA system design and installation for any venue size.'
        );

        return Inertia::render('Services/PublicAddress');
    }

    public function automaticGateSystems(): \Inertia\Response
    {
        SEOTools::setTitle('Automatic Gate Systems - FAGNUS');
        SEOTools::setDescription(
            'Smart automated gate solutions for residential and commercial properties. Motorised sliding, swing gates, and barrier arms with remote and smartphone control.'
        );

        return Inertia::render('Services/AutomaticGateSystems');
    }

    public function homeAutomation(): \Inertia\Response
    {
        SEOTools::setTitle('Home Automation Systems - FAGNUS');
        SEOTools::setDescription(
            'Intelligent home automation solutions controlling lighting, security, HVAC, and entertainment systems from a single interface. Smart homes for modern living.'
        );

        return Inertia::render('Services/HomeAutomation');
    }

    // -------------------------------------------------------------------------
    // IT Hardware Solutions
    // -------------------------------------------------------------------------

    public function airConditioning(): \Inertia\Response
    {
        SEOTools::setTitle('Air Conditioning Solutions - FAGNUS');
        SEOTools::setDescription(
            'Complete air conditioning solutions designed to deliver comfort, energy efficiency, and reliable performance for residential and commercial spaces.'
        );

        return Inertia::render('Services/AirConditioning');
    }

    public function laptopDesktop(): \Inertia\Response
    {
        SEOTools::setTitle('Laptop & Desktop Systems - FAGNUS');
        SEOTools::setDescription(
            'Branded and custom-built computers and laptops for home, office, and commercial needs. Hardware and software diagnosis, repair, and upgrades.'
        );

        return Inertia::render('Services/LaptopDesktop');
    }

    public function projectors(): \Inertia\Response
    {
        SEOTools::setTitle('Projectors - FAGNUS');
        SEOTools::setDescription(
            'Supply and installation of high-quality projectors for boardrooms, classrooms, and home theatres. Business, interactive, and home cinema projector solutions.'
        );

        return Inertia::render('Services/Projectors');
    }

    public function printers(): \Inertia\Response
    {
        SEOTools::setTitle('Printers - FAGNUS');
        SEOTools::setDescription(
            'Supply, installation, and maintenance of inkjet, laser, and multifunction printers for home, office, and commercial use. Expert printer repair and network setup.'
        );

        return Inertia::render('Services/Printers');
    }
}
