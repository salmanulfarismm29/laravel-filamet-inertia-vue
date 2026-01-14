import { motion, AnimatePresence } from "framer-motion";
import { Arrow } from "../UI/Arrow";
import { Link } from "@inertiajs/react";
import { useEffect } from "react";
import { Z_INDEX } from "../../Utils/constants";

/**
 * @typedef {Object} MobileMenuProps
 * @property {boolean} isOpen
 * @property {Function} onClose
 */

// Navigation items for left column
const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

// Business/Services items for right column (Hut8-style)
const businessItems = [
  {
    category: "Security Solutions",
    items: [
      { label: "CCTV Installation", href: "/services/cctv" },
      { label: "Fingerprint Locks", href: "/services/fingerprint" },
      { label: "Automatic Gates", href: "/services/gates" },
    ],
  },
  {
    category: "Energy & Tech",
    items: [
      { label: "Solar Solutions", href: "/services/solar" },
      { label: "AC Services", href: "/services/ac" },
      { label: "PC Sales & Repair", href: "/services/pc" },
    ],
  },
];

/**
 * Hut8-style mega menu with slide-down animation
 * 
 * Animation specs:
 * - Panel: y: -100% → 0, duration 0.5s, spring(damping: 25, stiffness: 200)
 * - Backdrop: fade in with blur
 * - Items: stagger reveal (0.05s delay each, y: 30 → 0, opacity: 0 → 1)
 * 
 * @param {MobileMenuProps} props
 */
export function MobileMenu({ isOpen, onClose }) {
  // Panel animation variants with smooth closing
  const panelVariants = {
    closed: {
      y: "-100%",
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: [0.33, 1, 0.68, 1],
      },
    },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 200,
      },
    },
  };

  // Backdrop animation variants with smooth fade
  const backdropVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  // Stagger container for menu items with exit animation
  const containerVariants = {
    closed: {
      transition: {
        staggerChildren: 0.03,
        staggerDirection: -1, // Reverse order on close
      },
    },
    open: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  // Individual item animation with smooth exit
  const itemVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: [0.33, 1, 0.68, 1],
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.33, 1, 0.68, 1], // power2.out equivalent
      },
    },
  };

  // Close menu on scroll
  useEffect(() => {
    if (!isOpen) return;

    let hasScrolled = false;

    const handleScroll = () => {
      // Only close if user actually scrolled (not just menu opening)
      if (hasScrolled) {
        onClose();
      }
    };

    // Wait a bit before enabling scroll-to-close to avoid immediate closure
    const enableTimeoutId = setTimeout(() => {
      hasScrolled = true;
    }, 300);

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      clearTimeout(enableTimeoutId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with blur */}
          <motion.div
            variants={backdropVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xl"
            aria-hidden="true"
            style={{ WebkitTapHighlightColor: "transparent" }}
          />

          {/* Menu Panel */}
          <motion.div
            variants={panelVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 200,
            }}
            className="fixed top-0 left-0 right-0 z-[60] w-full overflow-y-auto"
            style={{
              maxHeight: "70vh",
            }}
          >
            {/* Solid background layer - Primary Orange */}
            <div className="absolute inset-0 bg-brand-primary" />

            {/* Pattern overlay with low opacity */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: "url('/patterns/Fagnus_Pattern.svg')",
                backgroundSize: "200px",
                backgroundRepeat: "repeat",
                opacity: 0.1,
              }}
            />

            {/* Content container - Full width usage */}
            <motion.div
              variants={containerVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="relative z-10 w-full flex flex-col pt-20 md:pt-24 pb-6 md:pb-8 px-6 md:px-10 lg:px-16 xl:px-20"
            >
              {/* Two column layout - Full width */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-20">
                {/* Left Column - Navigation - Full width */}
                <nav className="space-y-3 md:space-y-4 lg:space-y-5">
                  <motion.span 
                    variants={itemVariants}
                    className="block text-xs uppercase tracking-widest text-white/60 mb-4"
                  >
                    Navigation
                  </motion.span>
                  {navigationItems.map((item) => (
                    <motion.div key={item.label} variants={itemVariants}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="group flex items-center gap-2 md:gap-3 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-eina font-light text-white hover:text-black transition-colors duration-300"
                      >
                        <span className="relative whitespace-nowrap">
                          {item.label}
                          {/* Hover underline - white */}
                          <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-white transition-all duration-300 group-hover:w-full" />
                        </span>
                        <span className="transform transition-transform duration-300 group-hover:translate-x-2 text-white opacity-0 group-hover:opacity-100 flex-shrink-0">
                          <Arrow size={20} />
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Right Column - Businesses/Services - Full width on desktop */}
                <div className="hidden lg:block space-y-4 lg:space-y-5">
                  <motion.span 
                    variants={itemVariants}
                    className="block text-xs uppercase tracking-widest text-white/60 mb-4"
                  >
                    Our Services
                  </motion.span>
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8 xl:gap-10">
                    {businessItems.map((category) => (
                      <motion.div key={category.category} variants={itemVariants}>
                        <h3 className="text-lg lg:text-xl font-eina font-semibold text-white mb-4">
                          {category.category}
                        </h3>
                        <ul className="space-y-2.5">
                          {category.items.map((item, idx) => (
                            <li key={item.label} className="flex items-center gap-2 text-base">
                              {idx > 0 && (
                                <span className="text-white/40 flex-shrink-0">|</span>
                              )}
                              <Link
                                href={item.href}
                                onClick={onClose}
                                className="group inline-flex items-center gap-1 font-eina text-white/80 hover:text-white transition-colors duration-300"
                              >
                                <span className="relative">
                                  {item.label}
                                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer - Copyright inside menu */}
              <motion.div 
                variants={itemVariants}
                className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-white/20"
              >
                <p className="text-xs md:text-sm font-eina text-white/60">
                  © 2025 Fagnus. Driven by Expertise.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default MobileMenu;