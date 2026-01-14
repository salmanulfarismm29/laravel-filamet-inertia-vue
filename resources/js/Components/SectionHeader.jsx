import { motion } from 'framer-motion';

/**
 * Reusable section header component
 * Provides consistent styling across all pages
 */
export function SectionHeader({
    title,
    subtitle,
    description,
    centered = true,
    tag
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={centered ? "text-center max-w-3xl mx-auto" : ""}
        >
            {/* Optional Tag */}
            {tag && (
                <span className="inline-block text-sm font-eina font-medium text-brand-primary uppercase tracking-wider mb-4">
                    {tag}
                </span>
            )}

            {/* Subtitle */}
            {subtitle && (
                <p className="font-eina font-medium text-base text-brand-primary mb-3 uppercase tracking-wide">
                    {subtitle}
                </p>
            )}

            {/* Title */}
            <h2 className="font-eina font-bold text-4xl md:text-5xl lg:text-6xl text-brand-neutral-900 mb-6 tracking-tight leading-tight">
                {title}
            </h2>

            {/* Description */}
            {description && (
                <p className="font-eina font-light text-lg md:text-xl text-brand-neutral-700 leading-relaxed">
                    {description}
                </p>
            )}
        </motion.div>
    );
}

export default SectionHeader;
