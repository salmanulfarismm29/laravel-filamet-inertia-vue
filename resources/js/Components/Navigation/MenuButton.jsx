import { motion } from "framer-motion";

/**
 * @typedef {Object} MenuButtonProps
 * @property {boolean} isOpen
 * @property {Function} onClick
 * @property {boolean} [isDisabled]
 */

/**
 * Hut8-style menu button with text + hamburger icon
 * Morphs to centered X when menu is open
 * 
 * Animation specs:
 * - Top line: rotates 45° + moves to center
 * - Middle line: fades out (opacity 0)
 * - Bottom line: rotates -45° + moves to center
 * - Duration: 0.3s, Easing: cubic-bezier(0.86, 0, 0.07, 1)
 */
/**
 * @param {MenuButtonProps} props
 */
export function MenuButton({ isOpen, onClick, isDisabled = false }) {
  // Easing: hut8 style (cubic-bezier)
  const easing = /** @type {[number, number, number, number]} */ ([0.86, 0, 0.07, 1]);
  const duration = 0.3;

  return (
    <motion.button
      onClick={onClick}
      disabled={isDisabled}
      className={`
        relative flex items-center justify-center gap-2
        bg-brand-primary text-white
        py-2.5 px-4 md:py-3 md:px-5 rounded-md
        font-eina font-medium text-sm
        transition-colors duration-200
        hover:bg-brand-primary-dark
        outline-none focus:outline-none
        select-none
        ${isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
      `}
      style={{ WebkitTapHighlightColor: "transparent" }}
      whileHover={!isDisabled ? { scale: 1.02 } : undefined}
      whileTap={!isDisabled ? { scale: 0.98 } : undefined}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
    >
      {/* Menu text - fades out when open */}
      <motion.span
        initial={false}
        animate={{
          opacity: isOpen ? 0 : 1,
          width: isOpen ? 0 : "auto",
          marginRight: isOpen ? 0 : undefined,
        }}
        transition={{ duration, ease: easing }}
        className="overflow-hidden whitespace-nowrap"
      >
        Menu
      </motion.span>

      {/* Hamburger / X icon container */}
      <div className="relative w-5 h-4 flex items-center justify-center">
        {/* Top line */}
        <motion.span
          initial={false}
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 0 : -6,
          }}
          transition={{ duration, ease: easing }}
          className="absolute w-full h-[2px] bg-white rounded-full"
          style={{ transformOrigin: "center" }}
        />
        
        {/* Middle line */}
        <motion.span
          initial={false}
          animate={{
            opacity: isOpen ? 0 : 1,
            scaleX: isOpen ? 0 : 1,
          }}
          transition={{ duration: duration * 0.5, ease: easing }}
          className="absolute w-full h-[2px] bg-white rounded-full"
        />
        
        {/* Bottom line */}
        <motion.span
          initial={false}
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? 0 : 6,
          }}
          transition={{ duration, ease: easing }}
          className="absolute w-full h-[2px] bg-white rounded-full"
          style={{ transformOrigin: "center" }}
        />
      </div>
    </motion.button>
  );
}

export default MenuButton;