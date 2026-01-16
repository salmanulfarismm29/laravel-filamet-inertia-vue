import './bootstrap'
import '../css/app.css'

import { createInertiaApp, router } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import MainLayout from '@/Layouts/MainLayout'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// Clean up GSAP ScrollTrigger on Inertia navigation
// This fixes blank page issues when navigating from pages with pinned sections
router.on('before', () => {
  // Kill all ScrollTriggers before navigation
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  // Clear any pinned elements
  ScrollTrigger.clearScrollMemory()
  // Reset scroll position memory
  if (typeof window !== 'undefined') {
    window.scrollTo(0, 0)
  }
})

// Refresh ScrollTrigger after navigation completes
router.on('finish', () => {
  // Small delay to ensure DOM is ready
  setTimeout(() => {
    ScrollTrigger.refresh()
  }, 100)
})

createInertiaApp({
  // Progress bar configuration (Inertia v2)
  progress: {
    color: '#EB5326',
    showSpinner: true,
  },
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
    const page = pages[`./Pages/${name}.jsx`]

    // Safely handle if the page doesn't exist (though typical structure ensures it does)
    if (!page) {
      console.error(`Page not found: ./Pages/${name}.jsx`)
      return null // Or some fallback
    }

    const pageComponent = page.default

    // Set default persistent layout if not defined in the page component
    pageComponent.layout = pageComponent.layout || ((page) => <MainLayout>{page}</MainLayout>)

    return pageComponent
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
})
