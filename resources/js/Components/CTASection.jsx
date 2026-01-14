import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';

/**
 * Reusable CTA (Call-to-Action) section component
 */
export function CTASection({
    title,
    description,
    primaryButtonText = "Get Started",
    primaryButtonHref = "/contact",
    secondaryButtonText,
    secondaryButtonHref,
    dark = true
}) {
    const bgClass = dark ? "bg-brand-secondary-dark" : "bg-brand-neutral-100";
    const titleClass = dark ? "text-white" : "text-brand-neutral-900";
    const descClass = dark ? "text-brand-neutral-400" : "text-brand-neutral-700";

    return (
        <section className={`py-20 md:py-28 ${bgClass}`}>
            <div className="max-w-4xl mx-auto text-center px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Title */}
                    <h2 className={`font-eina font-bold text-4xl md:text-5xl lg:text-6xl ${titleClass} mb-6 tracking-tight`}>
                        {title}
                    </h2>

                    {/* Description */}
                    {description && (
                        <p className={`font-eina font-light text-lg md:text-xl ${descClass} mb-10 leading-relaxed`}>
                            {description}
                        </p>
                    )}

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href={primaryButtonHref}
                            className="bg-brand-primary hover:bg-brand-primary-dark text-white font-eina font-semibold text-lg px-10 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            {primaryButtonText}
                        </Link>

                        {secondaryButtonText && secondaryButtonHref && (
                            <Link
                                href={secondaryButtonHref}
                                className={`font-eina font-semibold text-lg px-10 py-4 rounded-lg transition-all duration-300 ${dark
                                        ? "bg-white/10 hover:bg-white/20 text-white border border-white/20"
                                        : "bg-brand-neutral-900 hover:bg-brand-neutral-800 text-white"
                                    }`}
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
