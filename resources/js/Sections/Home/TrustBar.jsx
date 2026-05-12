import { motion } from 'framer-motion';

/**
 * TrustBar — Brand & Partner logos marquee
 *
 * Auto-scrolling horizontal ticker of technology brand names and trust badges.
 * Uses a CSS animation doubling the list so the scroll loops seamlessly.
 * No external libraries needed — pure CSS + Framer Motion for the section fade-in.
 */

const BRANDS = [
    { name: 'Hikvision',   category: 'CCTV' },
    { name: 'Dahua',       category: 'CCTV' },
    { name: 'SolarEdge',   category: 'Solar' },
    { name: 'Victron',     category: 'Solar' },
    { name: 'Schneider',   category: 'Energy' },
    { name: 'HP',          category: 'IT' },
    { name: 'Dell',        category: 'IT' },
    { name: 'Lenovo',      category: 'IT' },
    { name: 'Bosch',       category: 'Security' },
    { name: 'Daikin',      category: 'AC' },
    { name: 'Samsung',     category: 'AC' },
    { name: 'ZKTeco',      category: 'Access' },
    { name: 'Honeywell',   category: 'Fire' },
    { name: 'Epson',       category: 'IT' },
    { name: 'Hikvision',   category: 'CCTV' },   // Duplicate for seamless loop
    { name: 'Dahua',       category: 'CCTV' },
    { name: 'SolarEdge',   category: 'Solar' },
    { name: 'Victron',     category: 'Solar' },
];

/** Single brand pill in the ticker */
function BrandPill({ name, category }) {
    return (
        <div className="flex-shrink-0 flex items-center gap-3 mx-8 group">
            {/* Category dot */}
            <span className="w-2 h-2 rounded-full bg-brand-primary opacity-60 group-hover:opacity-100 transition-opacity" />
            {/* Brand name */}
            <span className="font-eina font-semibold text-lg text-brand-neutral-600 group-hover:text-brand-neutral-900 transition-colors duration-300 whitespace-nowrap">
                {name}
            </span>
            {/* Category tag */}
            <span className="font-eina text-xs text-brand-neutral-400 uppercase tracking-wider hidden sm:inline">
                {category}
            </span>
        </div>
    );
}

export default function TrustBar() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="py-12 bg-brand-neutral-100 border-y border-brand-neutral-200 overflow-hidden"
        >
            {/* Header label */}
            <p className="text-center font-eina text-xs uppercase tracking-widest text-brand-neutral-400 mb-8">
                Trusted Brands We Work With
            </p>

            {/* Marquee track */}
            <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]">
                {/*
                 * Two identical lists placed side by side.
                 * The CSS animation scrolls them left continuously.
                 * When the first list is fully off-screen, it wraps back,
                 * creating a seamless infinite loop.
                 */}
                <div className="flex animate-marquee whitespace-nowrap">
                    {BRANDS.map((brand, i) => (
                        <BrandPill key={`a-${i}`} {...brand} />
                    ))}
                </div>
                <div className="flex animate-marquee whitespace-nowrap" aria-hidden="true">
                    {BRANDS.map((brand, i) => (
                        <BrandPill key={`b-${i}`} {...brand} />
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
