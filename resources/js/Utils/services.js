/**
 * @file services.js
 * @description Single source of truth for all Fagnus services.
 *
 * Exports:
 *  - ALL_SERVICES         → used by Services/Index page (full catalogue)
 *  - SERVICE_CATEGORIES   → used by Services/Index grouped display
 *  - NAVBAR_CATEGORIES    → used by MobileMenu (exact user-defined structure)
 *
 * Category names intentionally differ between service index groupings
 * and the navbar structure to match the user's navigation spec.
 */

// ---------------------------------------------------------------------------
// Full service catalogue — drives the Services Index page
// ---------------------------------------------------------------------------

/**
 * @typedef {Object} Service
 * @property {string}  title       - Display name
 * @property {string}  slug        - URL slug (without /services/ prefix)
 * @property {string}  href        - Full URL path
 * @property {string}  shortDesc   - One-line description for cards/nav
 * @property {string}  description - Full description paragraph
 * @property {string}  category    - Category key matching SERVICE_CATEGORIES
 * @property {string}  iconPath    - SVG path `d` attribute
 * @property {boolean} [featured]  - Show "Featured" badge on the card
 */

/** @type {Service[]} */
export const ALL_SERVICES = [
    // -----------------------------------------------------------------------
    // Energy Solutions — Solar first (highest business priority)
    // -----------------------------------------------------------------------
    {
        title: "Solar Power Systems",
        slug: "solar-power-systems",
        href: "/services/solar-power-systems",
        shortDesc: "On-Grid, Off-Grid & Hybrid Systems",
        description:
            "Design, installation, and maintenance of on-grid, off-grid, and hybrid solar power systems. Customized rooftop solar installations for homes, offices, and commercial buildings.",
        category: "Energy Solutions",
        iconPath:
            "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
        featured: true,
    },
    {
        title: "Solar Inverters & Batteries",
        slug: "solar-inverters-batteries",
        href: "/services/solar-inverters-batteries",
        shortDesc: "Uninterrupted Power Storage Solutions",
        description:
            "High-quality inverters and energy storage solutions for uninterrupted power supply.",
        category: "Energy Solutions",
        iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
    },
    {
        title: "Solar Water Heating Systems",
        slug: "solar-water-heating",
        href: "/services/solar-water-heating",
        shortDesc: "Energy-Efficient Water Heating",
        description:
            "Energy-efficient water heating solutions for residential and commercial use.",
        category: "Energy Solutions",
        iconPath:
            "M12 2a10 10 0 110 20A10 10 0 0112 2zm0 0v20M2 12h20",
    },
    {
        title: "EV Charging Solutions",
        slug: "ev-charging",
        href: "/services/ev-charging",
        shortDesc: "Renewable-Powered EV Chargers",
        description:
            "Installation of electric vehicle charging points powered by renewable energy.",
        category: "Energy Solutions",
        iconPath:
            "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
    },

    // -----------------------------------------------------------------------
    // ELV Solutions
    // -----------------------------------------------------------------------
    {
        title: "CCTV Surveillance Systems",
        slug: "cctv-surveillance",
        href: "/services/cctv-surveillance",
        shortDesc: "HD Security Camera Installation",
        description:
            "Installation and maintenance of high-quality security camera systems for complete monitoring and protection.",
        category: "ELV Solutions",
        iconPath:
            "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
    },
    {
        title: "Structured Cabling & Networking",
        slug: "structured-cabling-networking",
        href: "/services/structured-cabling-networking",
        shortDesc: "Data, Voice & Video Connectivity",
        description:
            "Organized data, voice, and video cabling solutions for smooth connectivity.",
        category: "ELV Solutions",
        iconPath:
            "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
    },
    {
        title: "Automatic Gate Systems",
        slug: "automatic-gate-systems",
        href: "/services/automatic-gate-systems",
        shortDesc: "Smart Automated Gate Solutions",
        description:
            "Smart automated gate solutions for residential and commercial properties with advanced access control and safety features.",
        category: "ELV Solutions",
        iconPath:
            "M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z",
    },
    {
        title: "Home Automation Systems",
        slug: "home-automation",
        href: "/services/home-automation",
        shortDesc: "Smart Control for Modern Homes",
        description:
            "Intelligent home automation solutions controlling lighting, security, HVAC, and entertainment systems from a single interface.",
        category: "ELV Solutions",
        iconPath:
            "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    },
    {
        title: "Access Control Systems",
        slug: "access-control",
        href: "/services/access-control",
        shortDesc: "Biometric, RFID & Door Access",
        description:
            "Biometric systems, RFID card access, and door access solutions for secure entry management.",
        category: "ELV Solutions",
        iconPath:
            "M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4",
    },
    {
        title: "Video Door Phones & Intercom",
        slug: "video-door-phones-intercom",
        href: "/services/video-door-phones-intercom",
        shortDesc: "Smart Communication Systems",
        description:
            "Advanced communication systems for homes, apartments, and offices.",
        category: "ELV Solutions",
        iconPath:
            "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
    },
    {
        title: "Fire Alarm Systems",
        slug: "fire-alarm-systems",
        href: "/services/fire-alarm-systems",
        shortDesc: "Detection & Safety Compliance",
        description:
            "Design and installation of fire detection and alarm systems to ensure safety and compliance.",
        category: "ELV Solutions",
        iconPath:
            "M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z",
    },
    {
        title: "Public Address (PA) Systems",
        slug: "public-address-systems",
        href: "/services/public-address-systems",
        shortDesc: "Audio Announcements & Communication",
        description:
            "Clear and efficient audio solutions for announcements and communication.",
        category: "ELV Solutions",
        iconPath:
            "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z",
    },

    // -----------------------------------------------------------------------
    // IT Hardware Solutions
    // -----------------------------------------------------------------------
    {
        title: "Air Conditioning Solutions",
        slug: "air-conditioning",
        href: "/services/air-conditioning",
        shortDesc: "Comfort & Energy-Efficient AC",
        description:
            "Complete air conditioning solutions designed to deliver comfort, energy efficiency, and reliable performance for residential and commercial spaces.",
        category: "Other Services",
        iconPath:
            "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    },
    {
        title: "Laptop & Desktop Systems",
        slug: "laptop-desktop-systems",
        href: "/services/laptop-desktop-systems",
        shortDesc: "Sales, Repair & Maintenance",
        description:
            "Branded and custom-built computers and laptops for home, office, and commercial needs. Diagnosis and repair of hardware and software issues, including motherboard, display, power, and performance problems.",
        category: "IT Hardware Solutions",
        iconPath:
            "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    },
    {
        title: "Projectors",
        slug: "projectors",
        href: "/services/projectors",
        shortDesc: "Supply & Installation",
        description:
            "Supply and installation of high-quality projectors for boardrooms, classrooms, and home theatres.",
        category: "IT Hardware Solutions",
        iconPath:
            "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
    },
    {
        title: "Printers",
        slug: "printers",
        href: "/services/printers",
        shortDesc: "Supply, Setup & Maintenance",
        description:
            "Supply, installation, and maintenance of inkjet, laser, and multifunction printers for home, office, and commercial use.",
        category: "IT Hardware Solutions",
        iconPath:
            "M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z",
    },
];

// ---------------------------------------------------------------------------
// SERVICE_CATEGORIES — drives the grouped grid on the Services Index page
// ---------------------------------------------------------------------------

/**
 * @type {Array<{ category: string, services: Service[] }>}
 */
export const SERVICE_CATEGORIES = [
    {
        category: "Energy Solutions",
        services: ALL_SERVICES.filter((s) => s.category === "Energy Solutions"),
    },
    {
        category: "ELV Solutions",
        services: ALL_SERVICES.filter((s) => s.category === "ELV Solutions"),
    },
    {
        category: "IT Hardware Solutions",
        services: ALL_SERVICES.filter((s) => s.category === "IT Hardware Solutions"),
    },
    {
        category: "Other Services",
        services: ALL_SERVICES.filter((s) => s.category === "Other Services"),
    },
];

// ---------------------------------------------------------------------------
// NAVBAR_CATEGORIES — drives the MobileMenu "Our Services" right column.
//
// This follows the EXACT structure the client specified:
//   1. Energy Solutions  →  On-Grid, Off-Grid, Hybrid, Solar Water Heater, Inverters & Batteries
//   2. ELV Solutions     →  CCTV, Networking, Automatic Gates, Home Automation, Access Control
//   3. IT Hardware       →  Computer Systems, Laptop Systems, Projectors, Printers
//
// Note: On-Grid / Off-Grid / Hybrid all link to the Solar Power Systems page
// because they are covered under a single combined service.
// ---------------------------------------------------------------------------

/**
 * @typedef {Object} NavItem
 * @property {string} label - Display label in the navbar
 * @property {string} href  - Destination URL
 */

/**
 * @typedef {Object} NavCategory
 * @property {string}    category - Category heading in the navbar
 * @property {NavItem[]} items    - Links listed under this category
 */

/** @type {NavCategory[]} */
export const NAVBAR_CATEGORIES = [
    {
        category: "Energy Solutions",
        items: [
            { label: "On-Grid Systems",          href: "/services/solar-power-systems" },
            { label: "Off-Grid Systems",          href: "/services/solar-power-systems" },
            { label: "Hybrid Systems",            href: "/services/solar-power-systems" },
            { label: "Solar Water Heater",        href: "/services/solar-water-heating" },
            { label: "Inverters & Batteries",     href: "/services/solar-inverters-batteries" },
        ],
    },
    {
        category: "ELV Solutions",
        items: [
            { label: "CCTV Systems",              href: "/services/cctv-surveillance" },
            { label: "Networking",                href: "/services/structured-cabling-networking" },
            { label: "Automatic Gate Systems",    href: "/services/automatic-gate-systems" },
            { label: "Home Automation Systems",   href: "/services/home-automation" },
            { label: "Access Control Systems",    href: "/services/access-control" },
        ],
    },
    {
        category: "IT Hardware Solutions",
        items: [
            { label: "Computer Systems",          href: "/services/laptop-desktop-systems" },
            { label: "Laptop Systems",            href: "/services/laptop-desktop-systems" },
            { label: "Projectors",                href: "/services/projectors" },
            { label: "Printers",                  href: "/services/printers" },
        ],
    },
];
