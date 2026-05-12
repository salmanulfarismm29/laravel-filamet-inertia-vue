import { Head } from '@inertiajs/react';
import SectionHeader from '@/Components/SectionHeader';
import FeatureList from '@/Components/FeatureList';
import FAQ from '@/Components/FAQ';
import CTASection from '@/Components/CTASection';

const features = [
    {
        title: "HD & 4K Camera Systems",
        description: "Crystal-clear video quality for detailed surveillance, identification, and evidence collection.",
    },
    {
        title: "24/7 Remote Monitoring",
        description: "Access your camera feeds from anywhere via mobile app or web browser, any time of day.",
    },
    {
        title: "Night Vision Technology",
        description: "Advanced infrared cameras for clear, detailed footage in complete darkness.",
    },
    {
        title: "Motion Detection Alerts",
        description: "Instant push notifications when movement is detected in monitored areas.",
    },
    {
        title: "Cloud & Local Storage",
        description: "Flexible recording options with both on-site NVR/DVR storage and cloud backup.",
    },
    {
        title: "Professional Installation",
        description: "Expert camera placement for optimal coverage with minimal blind spots.",
    },
];

const processSteps = [
    {
        title: "Site Assessment",
        description: "Our experts visit your property to identify vulnerable areas and recommend optimal camera placement.",
    },
    {
        title: "Custom System Design",
        description: "We design a tailored CCTV solution based on your security needs, property layout, and budget.",
    },
    {
        title: "Professional Installation",
        description: "Certified technicians install cameras with minimal disruption to your day-to-day operations.",
    },
    {
        title: "System Configuration",
        description: "Complete setup of recording schedules, remote access, and motion detection notifications.",
    },
    {
        title: "Training & Support",
        description: "Full user training on system operation with ongoing technical support and maintenance contracts.",
    },
];

const useCases = [
    {
        title: "Residential Security",
        description: "Protect your home and family with comprehensive coverage of entry points, driveways, and perimeter areas.",
    },
    {
        title: "Commercial Properties",
        description: "Secure retail stores, offices, and warehouses with advanced monitoring to prevent theft and ensure staff safety.",
    },
    {
        title: "Industrial Facilities",
        description: "Monitor large-scale operations, equipment areas, and restricted zones with robust, weatherproof camera systems.",
    },
];

const faqs = [
    {
        question: "How many cameras do I need?",
        answer: "The number depends on your property size, layout, and specific security concerns. During our site assessment, we'll recommend optimal camera count and placement to ensure complete coverage within your budget.",
    },
    {
        question: "Can I view footage from my smartphone?",
        answer: "Yes. All our CCTV systems include mobile app access for live viewing, playback, and alerts — from anywhere in the world with an internet connection.",
    },
    {
        question: "How long is footage stored?",
        answer: "Storage duration depends on recording quality and storage capacity. We typically configure 7–30 days of footage. We offer both local DVR/NVR storage and cloud backup options.",
    },
    {
        question: "What happens if the internet goes down?",
        answer: "Your system continues recording to local storage (DVR/NVR) regardless of internet connectivity. You'll only lose remote viewing during an outage — all footage remains safely stored locally.",
    },
    {
        question: "Do you provide ongoing maintenance?",
        answer: "Yes. We offer annual maintenance contracts including camera cleaning, system health checks, firmware updates, and priority technical support.",
    },
];

export default function CCTV() {
    return (
        <>
            <Head>
                <title>CCTV Surveillance Systems - FAGNUS</title>
                <meta
                    name="description"
                    content="Installation and maintenance of high-quality CCTV security camera systems for complete monitoring and protection. HD, 4K, and night-vision surveillance for homes and businesses."
                />
            </Head>

            {/* Hero */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-brand-neutral-100 to-white">
                <div className="max-w-5xl mx-auto px-6 lg:px-12">
                    <SectionHeader
                        tag="ELV Solutions"
                        title="CCTV Surveillance Systems"
                        description="Advanced surveillance systems that provide complete security coverage with crystal-clear footage, intelligent motion alerts, and 24/7 remote monitoring capabilities."
                    />
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/contact"
                            className="bg-brand-primary hover:bg-brand-primary-dark text-white font-eina font-semibold text-lg px-10 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-center"
                        >
                            Get Free Quote
                        </a>
                        <a
                            href="/gallery"
                            className="bg-brand-neutral-900 hover:bg-brand-neutral-800 text-white font-eina font-semibold text-lg px-10 py-4 rounded-lg transition-all duration-300 text-center"
                        >
                            View Projects
                        </a>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6 lg:px-12">
                    <SectionHeader
                        subtitle="What We Offer"
                        title="Comprehensive CCTV Solutions"
                        description="State-of-the-art surveillance technology tailored to your security requirements."
                    />
                    <div className="mt-16">
                        <FeatureList features={features} columns={3} />
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-20 bg-brand-neutral-100">
                <div className="max-w-6xl mx-auto px-6 lg:px-12">
                    <SectionHeader
                        subtitle="Our Process"
                        title="How We Install Your CCTV System"
                        description="A systematic five-step approach ensuring optimal coverage and reliable system performance."
                    />
                    <div className="mt-16">
                        <FeatureList features={processSteps} columns={2} />
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6 lg:px-12">
                    <SectionHeader
                        subtitle="Applications"
                        title="Perfect for Every Property Type"
                        description="Scalable security solutions designed for diverse residential and commercial environments."
                    />
                    <div className="mt-16">
                        <FeatureList features={useCases} columns={3} />
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-brand-neutral-100">
                <div className="max-w-6xl mx-auto px-6 lg:px-12">
                    <SectionHeader
                        subtitle="FAQ"
                        title="Frequently Asked Questions"
                        description="Everything you need to know about CCTV installation and surveillance systems."
                    />
                    <div className="mt-16">
                        <FAQ faqs={faqs} />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CTASection
                title="Ready to Secure Your Property?"
                description="Get a free consultation and custom quote for your CCTV surveillance system today."
                primaryButtonText="Schedule Consultation"
                primaryButtonHref="/contact"
            />
        </>
    );
}
