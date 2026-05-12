import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';

/**
 * CTASection — Reusable Call-to-Action component
 *
 * Design: vibrant brand-primary orange gradient with a subtle dot-grid
 * overlay so it feels distinct from the dark footer and energises the
 * bottom of every service page.
 *
 * Props:
 *  - title              string   — Required headline
 *  - description        string   — Optional sub-copy
 *  - primaryButtonText  string   — CTA button label (default "Get Started")
 *  - primaryButtonHref  string   — CTA button href (default "/contact")
 *  - secondaryButtonText string  — Optional second button label
 *  - secondaryButtonHref string  — Optional second button href
 */
export function CTASection({
    title,
    description,
    primaryButtonText = 'Get Started',
    primaryButtonHref = '/contact',
    secondaryButtonText,
    secondaryButtonHref,
}) {
    return (
        <section className="relative overflow-hidden py-20 md:py-28">
            {/* ── Orange gradient background ───────────────────────────── */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        'linear-gradient(135deg, #EB5326 0%, #C1431F 55%, #8B2800 100%)',
                }}
            />

            {/* ── Subtle dot-grid overlay for texture ──────────────────── */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.08]"
                style={{
                    backgroundImage:
                        'radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)',
                    backgroundSize: '24px 24px',
                }}
            />

            {/* ── Decorative glow blobs ────────────────────────────────── */}
            <div
                className="absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
                style={{ background: '#F5A623' }}   // brand-accent (amber)
            />
            <div
                className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full opacity-20 blur-3xl pointer-events-none"
                style={{ background: '#0F172A' }}
            />

            {/* ── Content ──────────────────────────────────────────────── */}
            <div className="relative z-10 max-w-4xl mx-auto text-center px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Title */}
                    <h2 className="font-eina font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 tracking-tight">
                        {title}
                    </h2>

                    {/* Description */}
                    {description && (
                        <p className="font-eina font-light text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
                            {description}
                        </p>
                    )}

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        {/* Primary — white pill on orange */}
                        <Link
                            href={primaryButtonHref}
                            className="bg-white text-brand-primary hover:bg-brand-neutral-100 font-eina font-semibold text-lg px-10 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            {primaryButtonText}
                        </Link>

                        {/* Optional secondary — outlined white */}
                        {secondaryButtonText && secondaryButtonHref && (
                            <Link
                                href={secondaryButtonHref}
                                className="border border-white/50 hover:border-white text-white hover:bg-white/10 font-eina font-semibold text-lg px-10 py-4 rounded-lg transition-all duration-300"
                            >
                                {secondaryButtonText}
                            </Link>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default CTASection;
