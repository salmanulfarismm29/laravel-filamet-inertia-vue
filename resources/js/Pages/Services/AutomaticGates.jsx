import { Head } from '@inertiajs/react';
import SectionHeader from '@/Components/SectionHeader';
import FeatureList from '@/Components/FeatureList';
import FAQ from '@/Components/FAQ';
import CTASection from '@/Components/CTASection';

const features = [
    {
        title: "Sliding & Swing Gates",
        description: "Automated sliding and swing gate systems for driveways and entry points."
    },
    {
        title: "Remote Control Access",
        description: "Operate gates from your vehicle or smartphone for maximum convenience."
    },
    {
        title: "Safety Sensors",
        description: "Advanced obstacle detection to prevent accidents and property damage."
    },
    {
        title: "Access Control Integration",
        description: "Connect with RFID cards, intercoms, and biometric systems."
    },
    {
        title: "Backup Power Systems",
        description: "Battery backup ensures gate operation during power outages."
    },
    {
        title: "Durable Motors",
        description: "Heavy-duty motors built to withstand frequent use and harsh weather."
    },
];

const processSteps = [
    {
        title: "Site Evaluation",
        description: "We assess your gate type, weight, and space to recommend the best automation solution."
    },
    {
        title: "System Selection",
        description: "Choose from sliding, swing, or barrier gate motors based on your requirements."
    },
    {
        title: "Professional Installation",
        description: "Expert installation ensuring proper alignment, safety sensor placement, and motor calibration."
    },
    {
        title: "Testing & Calibration",
        description: "Comprehensive testing of all safety features, remote controls, and access systems."
    },
    {
        title: "User Training",
        description: "Complete demonstration of operation, remote programming, and troubleshooting."
    },
];

const useCases = [
    {
        title: "Residential Properties",
        description: "Enhance home security and convenience with automated driveway gates and pedestrian access control."
    },
    {
        title: "Commercial Complexes",
        description: "Manage vehicle entry for offices, shopping centers, and parking facilities with automated barriers."
    },
    {
        title: "Industrial Sites",
        description: "Heavy-duty gate automation for warehouses, factories, and logistics centers requiring robust access control."
    },
];

const faqs = [
    {
        question: "Can you automate my existing gate?",
        answer: "Yes! In most cases, we can retrofit your existing gate with automation motors and control systems. Our technicians will assess your gate's condition and recommend the appropriate motor and installation approach."
    },
    {
        question: "What happens if there's a power outage?",
        answer: "All our automatic gate systems include battery backup options that allow the gate to continue operating during power failures. You can also manually operate the gate using a release mechanism."
    },
    {
        question: "How fast does the gate open and close?",
        answer: "Opening/closing speed depends on gate size and motor specifications. Typically, residential gates take 10-20 seconds, while larger commercial gates may take 20-30 seconds. Speed is balanced with safety to prevent accidents."
    },
    {
        question: "Can I integrate the gate with my smartphone?",
        answer: "Absolutely! We offer smart gate controllers that connect to WiFi, allowing you to operate gates via smartphone apps, receive notifications, and even grant temporary access to visitors remotely."
    },
    {
        question: "What safety features are included?",
        answer: "Our systems include multiple safety features: obstacle detection sensors, auto-reverse on obstruction, flashing warning lights, audible alarms, and emergency stop buttons for complete peace of mind."
    },
];

export default function AutomaticGates() {
    return (
        <>
            <Head>
                <title>Automatic Gate Systems - FAGNUS</title>
                <meta name="description" content="Smart automated gate solutions with remote control, safety sensors, and access control integration for residential and commercial properties." />
            </Head>

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-brand-neutral-100 to-white">
                <div className="max-w-5xl mx-auto px-6 lg:px-12">
                    <SectionHeader
                        tag="Access Control"
                        title="Automatic Gate Systems"
                        description="Modern automated gate solutions that combine security, convenience, and advanced access control technology for seamless property entry management."
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
                        title="Advanced Gate Automation"
                        description="Complete automation solutions with cutting-edge safety and convenience features."
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
                        title="How We Automate Your Gate"
                        description="Professional installation ensuring reliable operation and maximum safety."
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
                        title="Solutions for Every Property"
                        description="From residential driveways to industrial facilities, we automate all gate types."
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
                        description="Everything you need to know about automatic gate installation."
                    />
                    <div className="mt-16">
                        <FAQ faqs={faqs} />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CTASection
                title="Ready to Automate Your Gate?"
                description="Experience the convenience and security of automated gate systems."
                primaryButtonText="Schedule Consultation"
                primaryButtonHref="/contact"
            />
        </>
    );
}
