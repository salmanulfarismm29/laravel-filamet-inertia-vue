import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import SectionHeader from '@/Components/SectionHeader';
import CTASection from '@/Components/CTASection';
import { SERVICE_CATEGORIES } from '@/Utils/services';

/**
 * ServicesIndex
 *
 * Displays all 12 services grouped into 3 categories.
 * Solar & Energy is always the first group (business priority).
 */
export default function ServicesIndex() {
    return (
        <>
            <Head>
                <title>Our Services - FAGNUS</title>
                <meta
                    name="description"
                    content="Comprehensive solutions across solar energy, ELV security, air conditioning, and IT hardware. Professional installation, maintenance, and after-sales support."
                />
            </Head>

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-brand-neutral-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <SectionHeader
                        tag="Our Services"
                        title="Comprehensive Solutions for Modern Needs"
                        description="From renewable energy and advanced security to air conditioning and IT systems — we deliver end-to-end solutions backed by a skilled technical team."
                    />
                </div>
            </section>

            {/* Services — grouped by category */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-20">
                    {SERVICE_CATEGORIES.map((group, groupIndex) => (
                        <div key={group.category}>
                            {/* Category heading */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="mb-10"
                            >
                                <span className="inline-block text-xs font-eina font-semibold uppercase tracking-widest text-brand-primary mb-3">
                                    0{groupIndex + 1}
                                </span>
                                <h2 className="font-eina font-bold text-3xl md:text-4xl text-brand-neutral-900">
                                    {group.category}
                                </h2>
                                <div className="mt-3 h-0.5 w-16 bg-brand-primary" />
                            </motion.div>

                            {/* Service cards grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {group.services.map((service, cardIndex) => (
                                    <ServiceCard
                                        key={service.slug}
                                        service={service}
                                        index={cardIndex}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <CTASection
                title="Need a Custom Solution?"
                description="Every project is unique. Let's discuss how we can tailor our services to meet your specific requirements."
                primaryButtonText="Contact Us"
                primaryButtonHref="/contact"
                secondaryButtonText="View Projects"
                secondaryButtonHref="/gallery"
            />
        </>
    );
}

// ---------------------------------------------------------------------------
// ServiceCard — local component (used only on this page)
// ---------------------------------------------------------------------------

/**
 * @param {{ service: import('@/Utils/services').Service, index: number }} props
 */
function ServiceCard({ service, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.07 }}
        >
            <Link
                href={service.href}
                className="group relative flex flex-col h-full p-8 rounded-2xl border border-brand-neutral-200 hover:border-brand-primary hover:shadow-xl transition-all duration-300 bg-white overflow-hidden"
            >
                {/* Featured badge */}
                {service.featured && (
                    <span className="absolute top-4 right-4 text-xs font-eina font-semibold uppercase tracking-widest text-white bg-brand-primary px-3 py-1 rounded-full">
                        Featured
                    </span>
                )}

                {/* Icon */}
                <div className="mb-5 w-14 h-14 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-300 flex-shrink-0">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={service.iconPath} />
                    </svg>
                </div>

                {/* Text */}
                <h3 className="font-eina font-bold text-xl text-brand-neutral-900 group-hover:text-brand-primary transition-colors duration-300 mb-2">
                    {service.title}
                </h3>
                <p className="font-eina font-light text-brand-neutral-600 text-sm leading-relaxed flex-grow">
                    {service.description}
                </p>

                {/* Arrow */}
                <div className="mt-6 flex items-center gap-2 text-brand-primary font-eina font-semibold text-sm">
                    <span>Learn More</span>
                    <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
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
