import { Link } from '@inertiajs/react'

export default function AppLayout({ children }) {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-900">
      <header className="h-20 flex items-center px-6 border-b">
        <a href="/" className="text-xl font-bold">
          FAGNUS
        </a>
      </header>

      <main>{children}</main>

      <footer className="border-t py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} FAGNUS. All rights reserved.
      </footer>
    </div>
  )
}

