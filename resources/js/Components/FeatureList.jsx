import { motion } from 'framer-motion';

/**
 * Reusable feature list component
 * Displays features/benefits in a grid layout
 */
export function FeatureList({ features, columns = 2 }) {
    const gridClass = columns === 3
        ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        : "grid-cols-1 md:grid-cols-2";

    return (
        <div className={`grid ${gridClass} gap-8`}>
            {features.map((feature, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4"
                >
                    {/* Icon/Check */}
                    <div className="shrink-0">
                        <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center">
                            <svg
                                className="w-5 h-5 text-brand-primary"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2.5}
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Content */}
                    <div>
                        <h4 className="font-eina font-semibold text-xl text-brand-neutral-900 mb-2">
                            {feature.title}
                        </h4>
                        {feature.description && (
                            <p className="font-eina font-light text-base text-brand-neutral-700 leading-relaxed">
                                {feature.description}
                            </p>
                        )}
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

export default FeatureList;
