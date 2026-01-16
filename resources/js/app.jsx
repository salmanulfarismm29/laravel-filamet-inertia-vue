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
  
  // Handle scroll restoration behavior
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual'
  }
  
  // Scroll to top on initial page load
  window.addEventListener('load', () => {
    // Small timeout to ensure DOM is ready
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1);
  });
}

// Force scroll to top helper
const forceScrollReset = (immediate = false) => {
  // Use GSAP's scroll setter for compatibility with ScrollTrigger
  const scrollFunc = ScrollTrigger.getScrollFunc(window)
  if (scrollFunc) {
    scrollFunc(0)
  }
  // Also use native methods as fallback
  if (immediate) {
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  } else {
    // For smoother behavior, especially on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }
}

// Handle initial page load (refresh case)
// Check if this is a fresh page load vs. Inertia navigation
if (document.readyState === 'loading' || document.readyState === 'interactive') {
  document.addEventListener('DOMContentLoaded', () => {
    forceScrollReset(true)
  })
} else {
  // DOM already loaded
  forceScrollReset(true)
}

// Clean up GSAP ScrollTrigger on Inertia navigation
router.on('before', () => {
  // First, get all ScrollTriggers and kill them with full revert
  const triggers = ScrollTrigger.getAll()
  triggers.forEach(trigger => {
    // Disable the trigger first
    trigger.disable()
    // Then kill with revert
    trigger.kill(true)
  })
  
  // Clear scroll memory
  ScrollTrigger.clearScrollMemory()
  ScrollTrigger.clearMatchMedia()
  
  // Force scroll reset
  forceScrollReset()
})

// Reset scroll after navigation
router.on('success', () => {
  forceScrollReset()
})

router.on('finish', () => {
  // Final scroll reset and refresh
  requestAnimationFrame(() => {
    forceScrollReset()
    ScrollTrigger.refresh(true)
  })
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
