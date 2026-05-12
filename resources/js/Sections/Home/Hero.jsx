import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';

/**
 * Hero section — Homepage
 *
 * Title animation: each word slides up independently with a stagger,
 * creating a cinematic word-by-word reveal.
 *
 * "Defined by Quality" gets the brand-primary orange treatment.
 * "Quality" gets a subtle scale punch on entry for emphasis.
 */

// Animation variants for the word container
const sentenceVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.09,
        },
    },
};

// Each word slides up from below and fades in
const wordVariants = {
    hidden: { opacity: 0, y: 40, rotateX: -15 },
    visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: {
            type: 'spring',
            damping: 18,
            stiffness: 120,
        },
    },
};

// "Quality" gets an extra scale punch
const accentWordVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.85 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: 'spring',
            damping: 14,
            stiffness: 130,
        },
    },
};

/** Wraps each word in a motion span that clips overflow so the slide-up is clean */
function AnimatedWord({ word, variants = wordVariants, className = '' }) {
    return (
        // Outer span clips the overflow so the word slides UP into view
        <span className="inline-block overflow-hidden leading-none">
            <motion.span
                variants={variants}
                className={`inline-block ${className}`}
            >
                {word}
            </motion.span>
        </span>
    );
}

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-brand-neutral-100">
            <div className="text-center px-6 py-32">

                {/* ── Animated Title ─────────────────────────────────────── */}
                <motion.h1
                    variants={sentenceVariants}
                    initial="hidden"
                    animate="visible"
                    className="font-eina font-bold text-5xl md:text-7xl lg:text-8xl text-brand-neutral-900 mb-6 tracking-tight"
                    style={{ perspective: 800 }}
                >
                    {/* Line 1: "Driven by Expertise," */}
                    <span className="flex flex-wrap justify-center gap-x-4 gap-y-1">
                        <AnimatedWord word="Driven" />
                        <AnimatedWord word="by" />
                        <AnimatedWord word="Expertise," />
                    </span>

                    {/* Line 2: "Defined by Quality" — orange accent */}
                    <span className="flex flex-wrap justify-center gap-x-4 gap-y-1 mt-2 md:mt-4 text-brand-primary">
                        <AnimatedWord word="Defined" />
                        <AnimatedWord word="by" />
                        {/* "Quality" gets a slightly punchier scale animation */}
                        <AnimatedWord word="Quality" variants={accentWordVariants} />
                    </span>
                </motion.h1>

                {/* ── Sub-heading ─────────────────────────────────────────── */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.85, ease: 'easeOut' }}
                    className="font-eina font-light text-lg md:text-xl text-brand-neutral-700 max-w-2xl mx-auto mb-10"
                >
                    Premium Energy and security solutions with cutting‑edge technology.
                    Scroll down to explore our services.
                </motion.p>

                {/* ── CTA Button ──────────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 1.05, ease: 'easeOut' }}
                >
                    <Link
                        href="/services"
                        className="inline-block bg-brand-primary hover:bg-brand-primary-dark text-white font-eina font-semibold text-lg px-10 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        Explore Services
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}