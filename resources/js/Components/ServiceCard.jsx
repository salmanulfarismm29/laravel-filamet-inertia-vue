import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';

/**
 * Reusable service card component
 * Used on Services index page
 */
export function ServiceCard({ title, description, icon, href, index = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Link
                href={href}
                className="group block h-full bg-white border border-brand-neutral-300 rounded-2xl p-8 hover:border-brand-primary hover:shadow-xl transition-all duration-300"
            >
                {/* Icon */}
                <div className="mb-6 w-16 h-16 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                    {icon}
                </div>

                {/* Title */}
                <h3 className="font-eina font-semibold text-2xl text-brand-neutral-900 mb-4 group-hover:text-brand-primary transition-colors">
                    {title}
                </h3>

                {/* Description */}
                <p className="font-eina font-light text-base text-brand-neutral-700 mb-6 leading-relaxed">
                    {description}
                </p>

                {/* CTA Arrow */}
                <div className="flex items-center text-brand-primary font-eina font-medium">
                    <span className="mr-2">Learn More</span>
                    <svg
                        className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </div>
            </Link>
        </motion.div>
    );
}

export default ServiceCard;
