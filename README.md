# FAGNUS - Service Company Website Template

A professional, production-ready service company website built with Laravel, Inertia.js, React, and Tailwind CSS.

## 🚀 Features

- ✅ **Mobile-First Design** - Fully responsive across all devices
- ✅ **SEO Optimized** - Proper meta tags and semantic HTML
- ✅ **Reusable Components** - DRY principles with component-driven architecture
- ✅ **5 Complete Service Pages** - CCTV, Solar, Gates, Locks, PC Repair
- ✅ **Clean URL Structure** - SEO-friendly routes
- ✅ **Gallery/Projects Page** - Ready for Filament integration
- ✅ **Contact Form** - Functional with validation
- ✅ **Legal Pages** - Privacy Policy & Terms
- ✅ **Modern UI/UX** - Smooth animations and interactions
- ✅ **SOLID Principles** - Clean, maintainable code

## 📦 Tech Stack

- **Backend:** Laravel 11
- **Frontend:** React 18 + Inertia.js
- **Styling:** Tailwind CSS
- **Admin:** Filament (Gallery only)
- **Build:** Vite
- **Animations:** Framer Motion

## 🏗️ Project Structure

```
├── Components/          # Reusable React components
│   ├── ServiceCard.jsx
│   ├── SectionHeader.jsx
│   ├── CTASection.jsx
│   ├── FeatureList.jsx
│   └── FAQ.jsx
├── Layouts/
│   └── MainLayout.jsx   # Main app layout (Navbar + Footer)
├── Pages/
│   ├── Home.jsx
│   ├── Services/        # All service pages
│   ├── Gallery.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   └── Legal/
└── Controllers/
    ├── HomeController.php
    ├── ServiceController.php
    └── PageController.php
```

## 🎨 Pages Included

### Public Pages
- **Home** - Hero, services preview, about, CTA
- **Services Index** - Grid of all services
- **CCTV Installation** - Complete service page
- **Solar Energy Solutions** - Complete service page
- **Automatic Gate Systems** - Complete service page
- **Fingerprint Lock Systems** - Complete service page
- **Laptop & PC Repair** - Complete service page
- **Gallery/Projects** - Portfolio showcase
- **About Us** - Company story and values
- **Contact Us** - Contact form
- **Privacy Policy** - Legal page
- **Terms & Conditions** - Legal page

## 🛠️ Quick Start

### Installation
```bash
# Install PHP dependencies
composer install

# Install Node dependencies
npm install

# Copy environment file
cp .env.example .env

# Generate app key
php artisan key:generate

# Run migrations
php artisan migrate

# Build assets
npm run dev
```

### Development
```bash
# Terminal 1: Laravel server
php artisan serve

# Terminal 2: Vite dev server
npm run dev
```

### Production Build
```bash
npm run build
```

## 🌐 Routes

| Page | URL |
|------|-----|
| Home | `/` |
| Services | `/services` |
| CCTV | `/services/cctv-installation` |
| Solar | `/services/solar-solutions` |
| Gates | `/services/automatic-gate-systems` |
| Locks | `/services/fingerprint-lock-systems` |
| PC Repair | `/services/laptop-pc-repair` |
| Gallery | `/gallery` or `/projects` |
| About | `/about` |
| Contact | `/contact` |
| Privacy | `/privacy` |
| Terms | `/terms` |

## 🎯 Service Page Template

Each service page follows a consistent, reusable structure:

1. Hero section with CTA
2. What We Offer (features)
3. Our Process (steps)
4. Use Cases (residential/commercial/industrial)
5. FAQ section
6. Final CTA

This makes it easy to add new services by copying and modifying content.

## 🔧 Customization

### Adding a New Service

1. **Create Page:** `resources/js/Pages/Services/NewService.jsx`
2. **Add Route:** in `routes/web.php`
3. **Add Controller Method:** in `ServiceController.php`
4. **Update Services List:** in `Services/Index.jsx` and `Home.jsx`

### Changing Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  brand: {
    primary: '#YourColor',
    secondary: '#YourColor',
    ...
  }
}
```

### Changing Font

1. Add font files to `public/fonts/`
2. Update `tailwind.config.js`
3. Update font-face declarations in CSS

## 📝 TODO Items

- [ ] Connect Filament Gallery to frontend
- [ ] Implement contact form email/database storage
- [ ] Add testimonials section
- [ ] Add team member showcase
- [ ] Implement quote request system

## 📖 Full Documentation

See `PROJECT_DOCUMENTATION.md` for complete documentation including:
- Component API reference
- Design system details
- Development workflow
- Deployment checklist
- Best practices

## 🎨 Design Philosophy

- **Mobile-First:** All UI designed for mobile, then enhanced for desktop
- **Component-Driven:** Reusable, composable React components
- **SEO-First:** Every page optimized for search engines
- **Performance:** Optimized images, lazy loading, efficient code
- **Accessibility:** Semantic HTML, proper ARIA labels, keyboard navigation

## 🚢 Deployment

1. Update `.env` for production
2. Run `npm run build`
3. Configure web server (Nginx/Apache)
4. Set up SSL certificate
5. Configure domain DNS
6. Test all functionality
7. Submit sitemap to search engines

## 📄 License

Proprietary - FAGNUS

---

**Version:** 1.0.0  
**Last Updated:** January 2026  
**Created With:** ❤️ by Antigravity AI
