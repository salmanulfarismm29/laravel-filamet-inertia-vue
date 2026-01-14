import { Head } from '@inertiajs/react';
import SectionHeader from '@/Components/SectionHeader';
import FeatureList from '@/Components/FeatureList';
import FAQ from '@/Components/FAQ';
import CTASection from '@/Components/CTASection';

const features = [
    {
        title: "HD & 4K Camera Systems",
        description: "Crystal-clear video quality for detailed surveillance and evidence collection."
    },
    {
        title: "24/7 Remote Monitoring",
        description: "Access your camera feeds from anywhere via mobile app or web browser."
    },
    {
        title: "Night Vision Technology",
        description: "Advanced infrared cameras for clear footage in complete darkness."
    },
    {
        title: "Motion Detection Alerts",
        description: "Instant notifications when movement is detected in monitored areas."
    },
    {
        title: "Cloud & Local Storage",
        description: "Flexible recording options with secure backup solutions."
    },
    {
        title: "Professional Installation",
        description: "Expert setup ensuring optimal camera placement and coverage."
    },
];

const processSteps = [
    {
        title: "Site Assessment",
        description: "Our experts visit your property to identify vulnerable areas and recommend optimal camera placements."
    },
    {
        title: "Custom System Design",
        description: "We design a tailored CCTV solution based on your security needs and budget."
    },
    {
        title: "Professional Installation",
        description: "Certified technicians install cameras with minimal disruption to your operations."
    },
    {
        title: "System Configuration",
        description: "Complete setup of recording, remote access, and notification systems."
    },
    {
        title: "Training & Support",
        description: "Comprehensive training on system operation with ongoing technical support."
    },
];

const useCases = [
    {
        title: "Residential Security",
        description: "Protect your home and family with comprehensive surveillance coverage of entry points, driveways, and perimeter areas."
    },
    {
        title: "Commercial Properties",
        description: "Secure retail stores, offices, and warehouses with advanced monitoring to prevent theft and ensure employee safety."
    },
    {
        title: "Industrial Facilities",
        description: "Monitor large-scale operations, equipment, and restricted areas with robust camera systems built for demanding environments."
    },
];

const faqs = [
    {
        question: "How many cameras do I need for my property?",
        answer: "The number of cameras depends on your property size, layout, and security concerns. During our site assessment, we'll recommend optimal camera placement to ensure complete coverage of critical areas while staying within your budget."
    },
    {
        question: "Can I view camera feeds from my smartphone?",
        answer: "Yes! All our modern CCTV systems include mobile app access, allowing you to view live feeds, playback recordings, and receive alerts from anywhere in the world with an internet connection."
    },
    {
        question: "How long is video footage stored?",
        answer: "Storage duration depends on your recording quality settings and storage capacity. Typically, we configure systems to store 7-30 days of footage. We offer both local storage (DVR/NVR) and cloud backup options."
    },
    {
        question: "Do you provide installation and maintenance?",
        answer: "Absolutely! We provide complete end-to-end service including professional installation, system configuration, user training, and ongoing maintenance support to ensure your system operates flawlessly."
    },
    {
        question: "What happens if the internet goes down?",
        answer: "Our systems continue recording to local storage (DVR/NVR) even without internet. You'll only lose remote viewing capability during an outage. Once reconnected, you can access all recorded footage."
    },
];

export default function CCTV() {
    return (
        <>
            <Head>
                <title>CCTV Installation & Services - FAGNUS</title>
                <meta name="description" content="Professional CCTV camera installation with HD quality, 24/7 monitoring, night vision, and remote access. Protect your property with advanced surveillance systems." />
            </Head>

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-brand-neutral-100 to-white">
                <div className="max-w-5xl mx-auto px-6 lg:px-12">
                    <SectionHeader
                        tag="Security Solutions"
                        title="CCTV Installation & Services"
                        description="Advanced surveillance systems that provide complete security coverage with crystal-clear footage, intelligent alerts, and 24/7 remote monitoring capabilities."
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

            {/* What We Offer */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6 lg:px-12">
                    <SectionHeader
                        subtitle="What We Offer"
                        title="Comprehensive CCTV Solutions"
                        description="State-of-the-art surveillance technology tailored to your security needs."
                    />
                    <div className="mt-16">
                        <FeatureList features={features} columns={3} />
                    </div>
                </div>
            </section>

            {/* Process Steps */}
            <section className="py-20 bg-brand-neutral-100">
                <div className="max-w-6xl mx-auto px-6 lg:px-12">
                    <SectionHeader
                        subtitle="Our Process"
                        title="How We Install Your CCTV System"
                        description="A systematic approach ensuring optimal security coverage and system performance."
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
                        description="Scalable security solutions designed for diverse environments."
                    />
                    <div className="mt-16">
                        <FeatureList features={useCases} columns={3} />
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-brand-neutral-100">
                <div className="max-w-6xl mx-auto px-6 lg:px-12">
                    <SectionHeader
                        subtitle="FAQ"
                        title="Frequently Asked Questions"
                        description="Everything you need to know about our CCTV installation services."
                    />
                    <div className="mt-16">
                        <FAQ faqs={faqs} />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CTASection
                title="Ready to Secure Your Property?"
                description="Get a free consultation and custom quote for your CCTV installation today."
                primaryButtonText="Schedule Consultation"
                primaryButtonHref="/contact"
            />
        </>
    );
}
