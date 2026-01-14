import { useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { MenuButton } from "./MenuButton";
import { MobileMenu } from "./MobileMenu";
import { Link } from "@inertiajs/react";
import { SCROLL, Z_INDEX } from "../../Utils/constants";

/**
 * @typedef {Object} NavbarProps
 * @property {boolean} [isPageLoaded=true]
 */

/**
 * Hut8-style transparent fixed navbar
 * 
 * Features:
 * - Fixed transparent full-width (no borders, no blur)
 * - Logo shrinks from ~240px to ~140px on scroll (trigger >100px)
 * - Smooth spring animation for logo shrink
 * - Menu button FIXED in top-right (never moves)
 * - Menu button morphs to X when open
 * 
 * @param {NavbarProps} props
 */
export function Navbar({ isPageLoaded = true }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll-based animations
  const { scrollY } = useScroll();

  // Logo size transforms: 240px → 140px
  // Trigger: 0-100px scroll
  const logoWidth = useTransform(scrollY, [0, SCROLL.NAVBAR_SHRINK_THRESHOLD], [240, 140]);
  const logoHeight = useTransform(scrollY, [0, SCROLL.NAVBAR_SHRINK_THRESHOLD], [80, 47]);

  // Apply spring physics for smoother animation (power2.out feel)
  const smoothLogoWidth = useSpring(logoWidth, {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  });
  const smoothLogoHeight = useSpring(logoHeight, {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  });

  const toggleMenu = () => {
    if (isPageLoaded) {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Smooth scroll to top
  const handleLogoClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Logo Container - Fixed, but logo shrinks */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
        className="fixed top-0 left-0 z-[60] px-6 md:px-10 lg:px-20 py-4 md:py-6"
      >
        <Link
          href="/"
          onClick={handleLogoClick}
          className="block outline-none focus:outline-none select-none"
          aria-label="Fagnus Home"
          style={{ WebkitTapHighlightColor: "transparent" }}
        >
          <motion.div
            style={{
              width: smoothLogoWidth,
              height: smoothLogoHeight,
            }}
            animate={{
              opacity: isMenuOpen ? 0 : 1,
              pointerEvents: isMenuOpen ? "none" : "auto",
            }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <img
              src="/assets/logos/Fagnus_Horizontal.svg"
              alt="Fagnus"
              className="object-contain object-left w-full h-full"
              sizes="(max-width: 768px) 180px, 240px"
              draggable={false}
              loading="eager"
            />
          </motion.div>
        </Link>
      </motion.div>

      {/* Menu Button - FIXED position, never moves */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
        className="fixed top-4 md:top-6 right-6 md:right-10 lg:right-20 z-[70]"
      >
        <MenuButton
          isOpen={isMenuOpen}
          onClick={toggleMenu}
          isDisabled={!isPageLoaded}
        />
      </motion.div>

      {/* Mobile Menu Panel */}
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
}

export default Navbar;