import './bootstrap'
import '../css/app.css'

import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import { InertiaProgress } from '@inertiajs/progress'
import MainLayout from '@/Layouts/MainLayout'

createInertiaApp({
  progress: {
    delay: 200,
    color: '#EB5326', // Use brand primary color
    includeCSS: true,
    showSpinner: true,
  },
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
    const page = pages[`./Pages/${name}.jsx`]

    // Safely handle if the page doesn't exist (though typical structure ensures it does)
    if (!page) {
      console.error(`Page not found: ./Pages/${name}.jsx`);
      return null; // Or some fallback
    }

    const pageComponent = page.default;

    // Set default persistent layout if not defined in the page component
    pageComponent.layout = pageComponent.layout || ((page) => <MainLayout>{page}</MainLayout>)

    return pageComponent
  },
  progress: {
    delay: 200,
    color: '#EB5326', // Use brand primary color
    includeCSS: true,
    showSpinner: true,
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
})
