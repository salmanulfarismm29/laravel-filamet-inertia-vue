import { Navbar } from '@/Components/Navigation/Navbar';
import { Footer } from '@/Components/Footer/Footer';

/**
 * Main application layout
 * Implements Single Responsibility Principle - handles global layout only
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Page content
 */
export default function AppLayout({ children }) {
  return (
    <div className="min-h-screen font-eina bg-white text-black antialiased">
      {/* Global navigation */}
      <Navbar isPageLoaded={true} />
      
      {/* Main content area */}
      <main>
        {children}
      </main>
      
      {/* Global footer */}
      <Footer />
    </div>
  );
}

