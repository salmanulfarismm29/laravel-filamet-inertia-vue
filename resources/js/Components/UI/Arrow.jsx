import { motion } from "framer-motion";

/**
 * @typedef {Object} ArrowProps
 * @property {"right"|"down"|"left"|"up"} [direction="right"]
 * @property {number} [size=16]
 * @property {string} [className=""]
 * @property {boolean} [animate=false]
 */

/**
 * Hut8-style arrow icon with optional hover animation
 * Used for menu items and CTAs
 * 
 * @param {ArrowProps} props
 */
export function Arrow({ 
  direction = "right", 
  size = 16, 
  className = "",
  animate = false 
}) {
  const rotation = {
    right: 0,
    down: 90,
    left: 180,
    up: -90,
  };

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-current ${className}`}
      style={{ rotate: `${rotation[direction]}deg` }}
      animate={animate ? { x: [0, 4, 0] } : undefined}
      transition={animate ? { 
        duration: 1.5, 
        repeat: Infinity, 
        ease: "easeInOut" 
      } : undefined}
    >
      {/* Horizontal line */}
      <motion.rect 
        x="0" 
        y="7.5" 
        width="12" 
        height="1" 
        fill="currentColor"
      />
      {/* Arrow head */}
      <motion.path
        d="M8 2L14 8L8 14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </motion.svg>
  );
}

export default Arrow;