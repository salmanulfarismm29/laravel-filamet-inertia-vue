import { Head } from '@inertiajs/react';
import SectionHeader from '@/Components/SectionHeader';
import FeatureList from '@/Components/FeatureList';
import FAQ from '@/Components/FAQ';
import CTASection from '@/Components/CTASection';

const features = [
    {
        title: "Flat Plate Collectors",
        description: "Durable and efficient flat plate solar collectors for consistent hot water generation throughout the year.",
    },
    {
        title: "Evacuated Tube Collectors",
        description: "Superior performance in low-light and cold conditions with vacuum-insulated tube technology.",
    },
    {
        title: "Pressurized Systems",
        description: "High-pressure systems compatible with multi-story buildings ensuring consistent water pressure.",
    },
    {
        title: "Non-Pressurized Systems",
        description: "Cost-effective gravity-fed systems ideal for ground-level applications and rural settings.",
    },
    {
        title: "Electric Backup Element",
        description: "Integrated electric backup heater ensures hot water availability even on cloudy days.",
    },
    {
        title: "Anti-Freeze Protection",
        description: "Glycol-based heat transfer fluid prevents system damage in cold climates.",
    },
];

const processSteps = [
    {
        title: "Site Survey",
        description: "We assess roof orientation, shading, and local solar irradiance to select the optimal collector type and size.",
    },
    {
        title: "System Design",
        description: "Custom system design tailored to your daily hot water demand, number of occupants, and budget.",
    },
    {
        title: "Installation",
        description: "Professional mounting of collectors, tank, and plumbing with pressure testing before handover.",
    },
    {
        title: "Commissioning & Training",
        description: "Full system startup checks, user training, and documentation for ongoing care.",
    },
];

const useCases = [
    {
        title: "Residential Homes",
        description: "Eliminate water heating costs for families by using free solar energy for daily bathing and domestic hot water needs.",
    },
    {
        title: "Hotels & Hospitality",
        description: "High-capacity solar water heating systems to reduce energy costs while meeting large guest hot water demands.",
    },
    {
        title: "Commercial Premises",
        description: "Cafeterias, laundries, and clinics benefit from reliable, low-cost solar hot water for operational needs.",
    },
];

const faqs = [
    {
        question: "How much hot water does a solar water heater produce?",
        answer: "A well-sized system can meet 60–80% of your annual hot water needs. On sunny days it can meet 100%. The electric backup handles the remainder on overcast days.",
    },
    {
        question: "How long does a solar water heater last?",
        answer: "Quality systems typically last 15–25 years with minimal maintenance. The collectors and tank are designed for long-term outdoor exposure.",
    },
    {
        question: "Does it work on cloudy days?",
        answer: "Yes, it still generates heat on cloudy days — just at reduced efficiency. The integrated electric backup element ensures you always have hot water.",
    },
    {
        question: "What maintenance is required?",
        answer: "Annual inspection of the collector glazing, tank insulation, and heat transfer fluid level is recommended. We offer maintenance contracts for ongoing peace of mind.",
    },
];

export default function SolarWaterHeating() {
    return (
        <>
            <Head>
                <title>Solar Water Heating Systems - FAGNUS</title>
                <meta
                    name="description"
                    content="Energy-efficient solar water heating solutions for residential and commercial use. Reduce water heating costs with clean, renewable solar energy."
                />
            </Head>

            {/* Hero */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-brand-neutral-100 to-white">
                <div className="max-w-5xl mx-auto px-6 lg:px-12">
                    <SectionHeader
                        tag="Energy Solutions"
                        title="Solar Water Heating Systems"
                        description="Energy-efficient solar water heating solutions that harness the sun to deliver reliable hot water for residential and commercial use — reducing your energy bills significantly."
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
                        title="Solar Water Heating Solutions"
                        description="From flat plate to evacuated tube collectors — we supply, install, and maintain the right system for you."
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
                        title="From Survey to Hot Water"
                        description="A four-step process ensuring a correctly sized, professionally installed system."
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
                        title="Solar Water Heating for Every Use"
                        description="From single homes to large commercial facilities, we design the right system."
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
                        description="Everything you need to know about solar water heating systems."
                    />
                    <div className="mt-16">
                        <FAQ faqs={faqs} />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CTASection
                title="Switch to Solar Water Heating Today"
                description="Get a free site survey and custom quote for your solar water heating system."
                primaryButtonText="Schedule a Survey"
                primaryButtonHref="/contact"
            />
        </>
    );
}
