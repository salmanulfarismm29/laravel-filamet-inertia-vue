/**
 * Application Constants
 * Centralized configuration for consistent values across the application
 */

// Animation durations
export const ANIMATION = {
  DURATION: {
    FAST: 0.2,
    NORMAL: 0.3,
    SLOW: 0.5,
    TRANSITION: 0.6,
  },
  EASING: {
    DEFAULT: [0.33, 1, 0.68, 1],
    EASE_OUT: "easeOut",
    EASE_IN_OUT: "easeInOut",
  },
};

// Breakpoints (should match Tailwind breakpoints)
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  XXL: 1536,
};

// Z-index layers
export const Z_INDEX = {
  AUTO: "auto",
  BASE: 0,
  DROPDOWN: 1000,
  STICKY: 1020,
  FIXED: 1030,
  MODAL_BACKDROP: 1040,
  MODAL: 1050,
  POPOVER: 1060,
  TOOLTIP: 1070,
  NAVBAR: 60,
  MENU_BUTTON: 70,
};

// Scroll thresholds
export const SCROLL = {
  NAVBAR_SHRINK_THRESHOLD: 100,
  HEADER_HEIGHT: 80,
};

// Paths and URLs
export const PATHS = {
  ASSETS: "/assets",
  IMAGES: "/images",
  LOGOS: "/assets/logos",
  PATTERNS: "/patterns",
  STORY: "/story",
};

// Brand text
export const BRAND = {
  NAME: "Fagnus",
  TAGLINE: "Driven by Expertise, Defined by Quality",
  DESCRIPTION: "Premium security solutions with cutting-edge technology.",
};

export default {
  ANIMATION,
  BREAKPOINTS,
  Z_INDEX,
  SCROLL,
  PATHS,
  BRAND,
};