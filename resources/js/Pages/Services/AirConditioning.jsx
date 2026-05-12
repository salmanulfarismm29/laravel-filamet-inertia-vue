import { Head } from '@inertiajs/react';
import SectionHeader from '@/Components/SectionHeader';
import FeatureList from '@/Components/FeatureList';
import FAQ from '@/Components/FAQ';
import CTASection from '@/Components/CTASection';

const features = [
    {
        title: "Split AC Systems",
        description: "Energy-efficient inverter split AC units for individual rooms and small to medium spaces — quiet and cost-effective.",
    },
    {
        title: "Ducted Central AC",
        description: "Centralised ducted systems for uniform cooling across large commercial buildings and villas.",
    },
    {
        title: "Cassette AC Units",
        description: "Four-way cassette units ideal for open-plan offices and commercial spaces requiring even air distribution.",
    },
    {
        title: "VRF/VRV Systems",
        description: "Variable refrigerant flow systems for large buildings requiring independent temperature control in multiple zones.",
    },
    {
        title: "AC Maintenance & Service",
        description: "Regular cleaning, gas top-up, electrical checks, and preventive maintenance to extend equipment life.",
    },
    {
        title: "Energy Efficiency Audits",
        description: "AC energy audits identifying inefficiencies and recommending upgrades to reduce cooling costs.",
    },
];

const processSteps = [
    {
        title: "Site Assessment",
        description: "We calculate the cooling load for your space based on room dimensions, orientation, glazing, and occupancy.",
    },
    {
        title: "System Selection",
        description: "We recommend the most suitable AC type and brand for your space, usage pattern, and budget.",
    },
    {
        title: "Installation",
        description: "Professional installation including indoor/outdoor unit mounting, refrigerant piping, drainage, and electrical connections.",
    },
    {
        title: "Commissioning & Handover",
        description: "System startup checks, gas pressure verification, and full user training on operation and filter maintenance.",
    },
];

const useCases = [
    {
        title: "Residential Homes & Villas",
        description: "Keep every room at the perfect temperature with energy-efficient split or ducted AC systems.",
    },
    {
        title: "Offices & Commercial Spaces",
        description: "Maintain a comfortable, productive working environment with zoned commercial AC solutions.",
    },
    {
        title: "Retail & Hospitality",
        description: "Consistent, comfortable temperatures that enhance the experience for customers and guests.",
    },
];

const faqs = [
    {
        question: "What size AC do I need for my room?",
        answer: "AC capacity is measured in BTU or tons. The right size depends on room area, ceiling height, insulation, sun exposure, and the number of occupants. We calculate this precisely during the site assessment — oversized units are just as problematic as undersized ones.",
    },
    {
        question: "How often should AC units be serviced?",
        answer: "We recommend a full service every 6 months, including filter cleaning, coil cleaning, drain flush, and refrigerant level check. Regular servicing extends equipment life and maintains energy efficiency.",
    },
    {
        question: "Do you supply and install, or only install?",
        answer: "We do both. We supply quality units from leading brands and handle the complete installation. We can also install units you've already purchased.",
    },
    {
        question: "Can old AC units be repaired or should I replace them?",
        answer: "It depends on the age and fault type. Units under 8 years old are usually worth repairing. Older units with compressor failure or refrigerant leaks are often more economical to replace. We provide an honest assessment.",
    },
];

export default function AirConditioning() {
    return (
        <>
            <Head>
                <title>Air Conditioning Solutions - FAGNUS</title>
                <meta
                    name="description"
                    content="Complete air conditioning solutions designed to deliver comfort, energy efficiency, and reliable performance for residential and commercial spaces."
                />
            </Head>

            {/* Hero */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-brand-neutral-100 to-white">
                <div className="max-w-5xl mx-auto px-6 lg:px-12">
                    <SectionHeader
                        tag="Other Services"
                        title="Air Conditioning Solutions"
                        description="Complete air conditioning solutions designed to deliver comfort, energy efficiency, and reliable performance for residential and commercial spaces."
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
                        title="Complete AC Solutions"
                        description="Supply, installation, and maintenance of all types of air conditioning systems."
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
                        title="From Assessment to Cool Comfort"
                        description="A four-step process ensuring the right system, correctly installed and commissioned."
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
                        title="AC Solutions for Every Space"
                        description="Homes, offices, and commercial premises."
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
                        description="Common questions about AC installation and maintenance."
                    />
                    <div className="mt-16">
                        <FAQ faqs={faqs} />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CTASection
                title="Stay Cool All Year Round"
                description="Get a free cooling load assessment and quote for your AC installation or service."
                primaryButtonText="Schedule Consultation"
                primaryButtonHref="/contact"
            />
        </>
    );
}
