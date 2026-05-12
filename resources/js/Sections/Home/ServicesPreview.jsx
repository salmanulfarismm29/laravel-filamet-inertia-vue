import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ALL_SERVICES } from '@/Utils/services';

/**
 * ServicesPreview — Homepage section
 *
 * Shows 6 prominent services as elevated hover cards.
 * Service order: Solar Power first (business priority), then CCTV, Networking,
 * Access Control, Home Automation, Laptop & Desktop.
 * Driven by ALL_SERVICES from Utils/services.js.
 *
 * Card hover effects:
 *  - Coloured top-border slides in from 0 width
 *  - Icon background fills with brand-primary colour
 *  - Card lifts with translateY(-4px) + deeper shadow
 *  - "Learn More →" arrow slides right on hover
 */

const FEATURED_SLUGS = [
    'solar-power-systems',
    'cctv-surveillance',
    'structured-cabling-networking',
    'access-control',
    'home-automation',
    'laptop-desktop-systems',
];

const featuredServices = FEATURED_SLUGS
    .map((slug) => ALL_SERVICES.find((s) => s.slug === slug))
    .filter(Boolean);

export default function ServicesPreview() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                {/* Section heading */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block font-eina text-sm font-medium text-brand-primary uppercase tracking-widest mb-3"
                    >
                        What We Do
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 }}
                        className="font-eina font-bold text-4xl md:text-5xl lg:text-6xl text-brand-neutral-900 mb-6 tracking-tight"
                    >
                        Our Services
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-eina font-light text-lg md:text-xl text-brand-neutral-600 max-w-3xl mx-auto"
                    >
                        Comprehensive technology solutions — from renewable energy to advanced security and IT hardware
                    </motion.p>
                </div>

                {/* 6-card grid (3-col on desktop, 2-col on tablet, 1-col on mobile) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredServices.map((service, index) => (
                        <motion.div
                            key={service.slug}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                        >
                            <Link
                                href={service.href}
                                className="
                                    group relative block p-7 rounded-2xl bg-white
                                    border border-brand-neutral-200
                                    hover:border-brand-primary/30
                                    hover:-translate-y-1
                                    hover:shadow-[0_8px_30px_rgba(235,83,38,0.12)]
                                    transition-all duration-300
                                    overflow-hidden
                                "
                            >
                                {/*
                                 * Coloured accent bar — slides in from the left on hover.
                                 * Acts as a visual focus indicator for keyboard users too.
                                 */}
                                <span
                                    className="
                                        absolute top-0 left-0 h-0.5 w-0
                                        bg-gradient-to-r from-brand-primary to-brand-accent
                                        group-hover:w-full transition-all duration-500 ease-out
                                    "
                                />

                                {/* Icon */}
                                <div className="mb-5 w-14 h-14 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={service.iconPath} />
                                    </svg>
                                </div>

                                {/* Title */}
                                <h3 className="font-eina font-bold text-lg text-brand-neutral-900 group-hover:text-brand-primary transition-colors duration-300 mb-2">
                                    {service.title}
                                </h3>

                                {/* Short description */}
                                <p className="font-eina font-light text-sm text-brand-neutral-500 leading-relaxed mb-5">
                                    {service.shortDesc}
                                </p>

                                {/* Learn More arrow */}
                                <span className="inline-flex items-center gap-1.5 text-brand-primary font-eina font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                                    Learn More
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* View All Services CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-14"
                >
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-2 font-eina font-semibold text-lg px-10 py-4 rounded-lg border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-300"
                    >
                        View All Services
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}