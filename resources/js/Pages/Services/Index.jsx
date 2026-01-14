import { Head } from '@inertiajs/react';
import SectionHeader from '@/Components/SectionHeader';
import ServiceCard from '@/Components/ServiceCard';
import CTASection from '@/Components/CTASection';

const services = [
    {
        title: "CCTV Installation & Services",
        description: "Advanced surveillance systems with 24/7 monitoring capabilities, HD recording, and remote access for complete security coverage.",
        href: "/services/cctv-installation",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        title: "Solar Energy Solutions",
        description: "Sustainable solar power systems designed to reduce energy costs and carbon footprint with maximum efficiency and reliability.",
        href: "/services/solar-solutions",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        ),
    },
    {
        title: "Automatic Gate Systems",
        description: "Smart automated gate solutions for residential and commercial properties with advanced access control and safety features.",
        href: "/services/automatic-gate-systems",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        title: "Fingerprint Lock Systems",
        description: "Biometric security solutions offering keyless entry with advanced fingerprint recognition technology for enhanced protection.",
        href: "/services/fingerprint-lock-systems",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
            </svg>
        ),
    },
    {
        title: "Laptop & PC Repair Services",
        description: "Professional computer repair and maintenance with expert diagnostics, hardware upgrades, and software solutions.",
        href: "/services/laptop-pc-repair",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
    },
];

export default function ServicesIndex() {
    return (
        <>
            <Head>
                <title>Our Services - FAGNUS</title>
                <meta name="description" content="Comprehensive technology and security solutions including CCTV, Solar Energy, Automatic Gates, Fingerprint Locks, and PC Repair services." />
            </Head>

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-brand-neutral-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <SectionHeader
                        tag="Our Services"
                        title="Comprehensive Solutions for Modern Needs"
                        description="From advanced security systems to sustainable energy solutions, we deliver cutting-edge technology backed by over two decades of expertise."
                    />
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={service.title}
                                {...service}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
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
