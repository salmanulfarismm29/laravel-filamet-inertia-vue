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
  
  // Disable browser's automatic scroll restoration
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual'
  }
}

// Force scroll to top helper
const forceScrollReset = () => {
  // Use GSAP's scroll setter for compatibility with ScrollTrigger
  const scrollFunc = ScrollTrigger.getScrollFunc(window)
  if (scrollFunc) {
    scrollFunc(0)
  }
  // Also use native methods as fallback
  window.scrollTo(0, 0)
  document.documentElement.scrollTop = 0
  document.body.scrollTop = 0
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
