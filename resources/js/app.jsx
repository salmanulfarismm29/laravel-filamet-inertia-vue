import './bootstrap'
import '../css/app.css'

import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import MainLayout from '@/Layouts/MainLayout'

createInertiaApp({
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
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
})
