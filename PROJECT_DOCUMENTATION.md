# FAGNUS Laravel - Project Documentation

## Project Overview

A professional, mobile-first service company website built with:
- **Backend:** Laravel 11
- **Frontend:** React 18 + Inertia.js
- **Styling:** Tailwind CSS
- **Admin:** Filament (for Gallery management only)
- **Build Tool:** Vite

## Project Structure

```
fagnus-laravel/
├── app/
│   └── Http/
│       └── Controllers/
│           ├── HomeController.php          # Home page
│           ├── ServiceController.php       # All service pages
│           └── PageController.php          # Gallery, About, Contact, Legal
├── resources/
│   └── js/
│       ├── Components/
│       │   ├── ServiceCard.jsx            # Reusable service card
│       │   ├── SectionHeader.jsx          # Section headers
│       │   ├── CTASection.jsx             # Call-to-action sections
│       │   ├── FeatureList.jsx            # Feature/benefit lists
│       │   ├── FAQ.jsx                    # FAQ accordion
│       │   ├── Navigation/
│       │   │   ├── Navbar.jsx            # Main navigation
│       │   │   ├── MenuButton.jsx
│       │   │   └── MobileMenu.jsx
│       │   ├── Footer/
│       │   │   └── Footer.jsx            # Site footer
│       │   └── UI/
│       │       └── Arrow.jsx
│       ├── Layouts/
│       │   └── MainLayout.jsx            # Main layout wrapper
│       ├── Pages/
│       │   ├── Home.jsx                  # Homepage
│       │   ├── Services/
│       │   │   ├── Index.jsx            # Services listing
│       │   │   ├── CCTV.jsx             # CCTV service page
│       │   │   ├── Solar.jsx            # Solar service page
│       │   │   ├── AutomaticGates.jsx   # Gates service page
│       │   │   ├── FingerprintLocks.jsx # Locks service page
│       │   │   └── PCRepair.jsx         # PC repair service page
│       │   ├── Gallery.jsx              # Project gallery
│       │   ├── About.jsx                # About page
│       │   ├── Contact.jsx              # Contact form
│       │   └── Legal/
│       │       ├── Privacy.jsx          # Privacy policy
│       │       └── Terms.jsx            # Terms & conditions
│       ├── Sections/
│       │   └── StoryParallax.jsx        # Story section
│       └── Utils/
│           └── constants.js
└── routes/
    └── web.php                           # All public routes
```

## Routes

### Public Routes

| URL | Controller | Method | Page |
|-----|------------|--------|------|
| `/` | HomeController | index | Home |
| `/services` | ServiceController | index | Services Index |
| `/services/cctv-installation` | ServiceController | cctv | CCTV Service |
| `/services/solar-solutions` | ServiceController | solar | Solar Service |
| `/services/automatic-gate-systems` | ServiceController | automaticGates | Gates Service |
| `/services/fingerprint-lock-systems` | ServiceController | fingerprintLocks | Locks Service |
| `/services/laptop-pc-repair` | ServiceController | pcRepair | PC Repair Service |
| `/gallery` | PageController | gallery | Project Gallery |
| `/projects` | PageController | gallery | Gallery (alias) |
| `/about` | PageController | about | About Us |
| `/contact` | PageController | contact | Contact Form |
| `POST /contact` | PageController | contactSubmit | Form Submission |
| `/privacy` | PageController | privacy | Privacy Policy |
| `/terms` | PageController | terms | Terms & Conditions |

## Reusable Components

### ServiceCard
Located: `resources/js/Components/ServiceCard.jsx`

Displays service information in a card format with icon, title, description, and link.

**Props:**
- `title` (string): Service title
- `description` (string): Service description
- `icon` (JSX): Service icon
- `href` (string): Link to service page
- `index` (number): For staggered animations

### SectionHeader
Located: `resources/js/Components/SectionHeader.jsx`

Consistent section headers across all pages.

**Props:**
- `title` (string): Main heading
- `subtitle` (string, optional): Small subtitle above title
- `description` (string, optional): Description below title
- `centered` (boolean, default: true): Center alignment
- `tag` (string, optional): Small tag/label above content

### CTASection
Located: `resources/js/Components/CTASection.jsx`

Call-to-action section with buttons.

**Props:**
- `title` (string): CTA heading
- `description` (string, optional): CTA description
- `primaryButtonText` (string, default: "Get Started")
- `primaryButtonHref` (string, default: "/contact")
- `secondaryButtonText` (string, optional)
- `secondaryButtonHref` (string, optional)
- `dark` (boolean, default: true): Dark or light theme

### FeatureList
Located: `resources/js/Components/FeatureList.jsx`

Displays features/benefits in a grid.

**Props:**
- `features` (array): Array of `{ title, description }` objects
- `columns` (number, default: 2): Number of columns (2 or 3)

### FAQ
Located: `resources/js/Components/FAQ.jsx`

Accordion-style FAQ section.

**Props:**
- `faqs` (array): Array of `{ question, answer }` objects

## Service Page Structure

Each service page follows this consistent structure:

1. **Hero Section** - Title, description, and CTA buttons
2. **What We Offer** - Key features
3. **Our Process** - Step-by-step process
4. **Use Cases** - Applications (Home/Commercial/Industrial)
5. **FAQ Section** - Common questions
6. **CTA Section** - Final call-to-action

This ensures consistency and maintainability across all service pages.

## Design System

### Colors (Tailwind Config)
- **Primary:** `#EB5326` (brand-primary)
- **Secondary:** `#1E293B` (brand-secondary)
- **Accent:** `#F5A623` (brand-accent)
- **Neutrals:** 100-900 scale

### Typography
- **Font:** Eina04 (custom font)
- **Weights:** Light, Regular, Medium, Semibold, Bold

### Spacing
Mobile-first responsive design with consistent padding/margin scales.

## SEO Best Practices

Every page includes:
- Unique page title via Inertia `<Head>`
- Meta description
- Semantic HTML structure
- Server-rendered content for search engines (Inertia SSR-ready)

SEO is managed via `artesaos/seotools` package in Laravel controllers.

## Development Workflow

### Run Development Server
```bash
npm run dev
php artisan serve
```

### Build for Production
```bash
npm run build
```

### Clear Caches
```bash
php artisan cache:clear
php artisan config:clear
php artisan route:clear
php artisan view:clear
```

## Filament Integration

**Gallery Management:**
Filament is used ONLY for managing gallery/project images.

Images uploaded through Filament should be accessible in the Gallery page.

**Gallery Model Integration (TODO):**
Update `PageController::gallery()` to load images from your Filament gallery resource.

## Contact Form (TODO)

The contact form is functional but needs backend implementation:

**Current:** Basic validation only  
**TODO:** Add email sending or database storage in `PageController::contactSubmit()`

Example implementation:
```php
public function contactSubmit()
{
    $validated = request()->validate([...]);
    
    // Option 1: Send email
    Mail::to('info@fagnus.com')->send(new ContactMail($validated));
    
    // Option 2: Store in database
    ContactSubmission::create($validated);
    
    return redirect()->back()->with('success', 'Message sent!');
}
```

## Mobile-First Principles

- All components  are mobile-optimized
- Responsive breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- Touch-friendly interactive elements
- Optimized images and lazy loading

## Future Enhancements

1. **Gallery Integration:** Connect Filament gallery images to frontend
2. **Contact Form:** Implement email or database storage
3. **Blog/News:** Add content management system
4. **Quote System:** Custom quote request functionality
5. **Customer Portal:** Client dashboard for project tracking

## Reusable Template

This project is designed to be reused for other service-based companies:

1. Update branding (colors, logo, fonts)
2. Modify service offerings
3. Update content in pages
4. Configure SEO metadata
5. Deploy!

## Deployment Checklist

- [ ] Update `.env` with production credentials
- [ ] Run `npm run build`
- [ ] Configure web server (Nginx/Apache)
- [ ] Set up SSL certificate
- [ ] Configure domain DNS
- [ ] Test all routes and forms
- [ ] Submit sitemap to search engines
- [ ] Set up analytics (Google Analytics, etc.)

---

**Maintained By:** FAGNUS Development Team  
**Last Updated:** January 2026
