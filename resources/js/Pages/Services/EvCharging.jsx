import { Head } from '@inertiajs/react';
import SectionHeader from '@/Components/SectionHeader';
import FeatureList from '@/Components/FeatureList';
import FAQ from '@/Components/FAQ';
import CTASection from '@/Components/CTASection';

const features = [
    {
        title: "AC Level 1 & Level 2 Chargers",
        description: "Residential and light commercial AC chargers for overnight and daytime EV charging needs.",
    },
    {
        title: "DC Fast Chargers",
        description: "High-power DC chargers for commercial locations — charge most EVs to 80% in under 30 minutes.",
    },
    {
        title: "Solar-Powered Charging",
        description: "Charge your EV directly from rooftop solar panels — zero-emission driving powered by clean energy.",
    },
    {
        title: "Smart Load Management",
        description: "Intelligent systems that balance EV charging load alongside your building's existing electrical demand.",
    },
    {
        title: "Multi-Point Charging Stations",
        description: "Scalable multi-port charging stations for parking lots, apartment complexes, and fleet depots.",
    },
    {
        title: "Remote Monitoring & Control",
        description: "App-based monitoring to track energy usage, charging sessions, and costs in real time.",
    },
];

const processSteps = [
    {
        title: "Site Assessment",
        description: "We evaluate your electrical infrastructure, parking layout, and power availability to determine the right charger type.",
    },
    {
        title: "System Design",
        description: "Custom charging station design — including cable management, earthing, and future expansion capacity.",
    },
    {
        title: "Installation",
        description: "Certified electricians install the charger, distribution board, and all safety protection devices.",
    },
    {
        title: "Commissioning & Training",
        description: "Full charger testing, OCPP network setup if required, and user training on operation and monitoring.",
    },
];

const useCases = [
    {
        title: "Residential Homes",
        description: "Install a home charger to wake up every morning with a fully charged vehicle — no more petrol station visits.",
    },
    {
        title: "Commercial & Retail",
        description: "Attract EV-driving customers with dedicated charging bays at shopping centres, offices, and hotels.",
    },
    {
        title: "Fleet & Corporate",
        description: "Manage and charge your entire fleet efficiently with multi-point stations and smart load balancing.",
    },
];

const faqs = [
    {
        question: "Is my home's electrical system suitable for an EV charger?",
        answer: "Most modern homes can support a Level 2 charger with minor electrical upgrades if needed. We assess your electrical panel capacity during the site survey and advise on any required upgrades.",
    },
    {
        question: "How long does it take to charge an EV?",
        answer: "A Level 1 charger adds 6–8 km per hour. A Level 2 charger adds 25–40 km per hour. DC fast chargers can charge to 80% in 20–30 minutes. The right charger depends on your daily driving distance.",
    },
    {
        question: "Can I power the EV charger with solar panels?",
        answer: "Yes. We specialize in solar-integrated EV charging setups. Your car charges directly from your rooftop solar — true zero-emission driving.",
    },
    {
        question: "Do you handle the permits and approvals?",
        answer: "Yes, we manage all required permits, electrical inspections, and compliance documentation as part of our installation service.",
    },
];

export default function EvCharging() {
    return (
        <>
            <Head>
                <title>EV Charging Solutions - FAGNUS</title>
                <meta
                    name="description"
                    content="Installation of electric vehicle charging points powered by renewable energy. Future-proof your home or business with professional EV charging infrastructure."
                />
            </Head>

            {/* Hero */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-brand-neutral-100 to-white">
                <div className="max-w-5xl mx-auto px-6 lg:px-12">
                    <SectionHeader
                        tag="Energy Solutions"
                        title="EV Charging Solutions"
                        description="Professional installation of electric vehicle charging points — powered by renewable energy for truly clean, sustainable mobility."
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
                            Pair with Solar
                        </a>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6 lg:px-12">
                    <SectionHeader
                        subtitle="What We Offer"
                        title="EV Charging Infrastructure"
                        description="From single-port home chargers to multi-point commercial stations — we design and install it all."
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
                        title="Your Charging Station in 4 Steps"
                        description="A structured installation process that gets you charging safely and quickly."
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
                        title="EV Charging for Every Setting"
                        description="Residential, commercial, or fleet — we have the right solution."
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
                        description="Common questions about EV charging installation."
                    />
                    <div className="mt-16">
                        <FAQ faqs={faqs} />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CTASection
                title="Ready to Charge Smarter?"
                description="Get a free consultation and quote for your home or commercial EV charging installation."
                primaryButtonText="Schedule Consultation"
                primaryButtonHref="/contact"
            />
        </>
    );
}
