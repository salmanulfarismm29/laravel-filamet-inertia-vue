import { Head } from '@inertiajs/react';
import SectionHeader from '@/Components/SectionHeader';
import FeatureList from '@/Components/FeatureList';
import FAQ from '@/Components/FAQ';
import CTASection from '@/Components/CTASection';

const features = [
    {
        title: "Solar Inverters",
        description: "Grid-tie, off-grid, and hybrid inverters from leading brands ensuring maximum energy conversion efficiency.",
    },
    {
        title: "Lithium Battery Storage",
        description: "High-capacity lithium-ion battery banks for extended backup and stable power delivery day and night.",
    },
    {
        title: "Lead-Acid Battery Systems",
        description: "Cost-effective VRLA and tubular battery solutions for standard backup applications.",
    },
    {
        title: "UPS Integration",
        description: "Seamless integration of inverter-battery systems with existing UPS infrastructure for zero-downtime switching.",
    },
    {
        title: "Smart Monitoring",
        description: "Real-time battery health and charge-state monitoring through dedicated apps and dashboards.",
    },
    {
        title: "Professional Installation",
        description: "Safe, code-compliant wiring and installation by certified technicians with full load testing.",
    },
];

const processSteps = [
    {
        title: "Load Assessment",
        description: "We calculate your critical load requirements to right-size the inverter and battery bank.",
    },
    {
        title: "System Selection",
        description: "We recommend the most suitable inverter model and battery chemistry for your use case and budget.",
    },
    {
        title: "Installation & Wiring",
        description: "Safe, standards-compliant installation with proper earthing, fusing, and cable management.",
    },
    {
        title: "Testing & Commissioning",
        description: "Full load testing and handover with user training on system operation and monitoring.",
    },
];

const useCases = [
    {
        title: "Homes & Apartments",
        description: "Keep lights, fans, and essential appliances running during power cuts with a well-sized inverter-battery system.",
    },
    {
        title: "Offices & Retail",
        description: "Protect business-critical equipment and ensure uninterrupted operations during utility outages.",
    },
    {
        title: "Solar Power Plants",
        description: "Pair with rooftop solar panels for a complete self-sufficient energy ecosystem.",
    },
];

const faqs = [
    {
        question: "What is the difference between a solar inverter and a regular inverter?",
        answer: "A solar inverter converts DC electricity from solar panels to AC electricity for household use. A regular inverter draws from batteries charged by the grid. A hybrid inverter does both — it can charge batteries from both solar and the grid.",
    },
    {
        question: "How long will the battery backup last?",
        answer: "Backup duration depends on battery capacity and your load. We size the battery bank to meet your specific backup requirements during the assessment phase.",
    },
    {
        question: "Which battery type is better — lithium or lead-acid?",
        answer: "Lithium batteries offer a longer lifespan (8–15 years), deeper discharge, and lighter weight. Lead-acid is more affordable upfront. We'll recommend the best fit based on your budget and usage pattern.",
    },
    {
        question: "Can I add batteries to my existing solar system?",
        answer: "Yes, in most cases. We assess your existing inverter's compatibility and can retrofit battery storage to upgrade your system.",
    },
];

export default function SolarInvertersBatteries() {
    return (
        <>
            <Head>
                <title>Solar Inverters & Batteries - FAGNUS</title>
                <meta
                    name="description"
                    content="High-quality solar inverters and energy storage battery solutions for uninterrupted power supply. Keep your home and business powered around the clock."
                />
            </Head>

            {/* Hero */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-brand-neutral-100 to-white">
                <div className="max-w-5xl mx-auto px-6 lg:px-12">
                    <SectionHeader
                        tag="Energy Solutions"
                        title="Solar Inverters & Batteries"
                        description="High-quality inverters and energy storage solutions that keep your home and business powered — even when the grid goes down."
                    />
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/contact"
                            className="bg-brand-primary hover:bg-brand-primary-dark text-white font-eina font-semibold text-lg px-10 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-center"
                        >
                            Get Free Quote
                        </a>
                        <a
                            href="/services/solar-power-systems"
                            className="bg-brand-neutral-900 hover:bg-brand-neutral-800 text-white font-eina font-semibold text-lg px-10 py-4 rounded-lg transition-all duration-300 text-center"
                        >
                            View Solar Systems
                        </a>
                    </div>
                </div>
            </section>

            {/* What We Offer */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6 lg:px-12">
                    <SectionHeader
                        subtitle="What We Offer"
                        title="Inverter & Battery Solutions"
                        description="From solar inverters to lithium battery banks — complete energy storage tailored to your needs."
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
                        title="How We Set Up Your System"
                        description="A structured four-step process ensuring the right-sized, correctly installed power backup solution."
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
                        title="Who Needs This?"
                        description="Inverter and battery solutions for every scale — from homes to solar power plants."
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
                        description="Everything you need to know about inverters and battery storage."
                    />
                    <div className="mt-16">
                        <FAQ faqs={faqs} />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CTASection
                title="Power Your Life Without Interruption"
                description="Get expert advice on the right inverter and battery solution for your home or business."
                primaryButtonText="Schedule Consultation"
                primaryButtonHref="/contact"
            />
        </>
    );
}
