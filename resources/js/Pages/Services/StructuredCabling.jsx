import { Head } from '@inertiajs/react';
import SectionHeader from '@/Components/SectionHeader';
import FeatureList from '@/Components/FeatureList';
import FAQ from '@/Components/FAQ';
import CTASection from '@/Components/CTASection';

const features = [
    {
        title: "Cat6 & Cat6A Data Cabling",
        description: "High-performance copper cabling supporting speeds up to 10 Gbps for futureproof network infrastructure.",
    },
    {
        title: "Fibre Optic Cabling",
        description: "Single-mode and multi-mode fibre solutions for high-bandwidth, long-distance backbone connections.",
    },
    {
        title: "Voice & Telephone Cabling",
        description: "Structured voice cabling systems including VoIP-ready infrastructure for modern office telephony.",
    },
    {
        title: "Network Rack & Patch Panel",
        description: "Professional rack installation with organised patch panels, cable management, and proper labelling.",
    },
    {
        title: "Wi-Fi Access Point Installation",
        description: "Strategically placed access points for seamless wireless coverage across your entire facility.",
    },
    {
        title: "Testing & Certification",
        description: "Every cable link tested and certified with documentation ensuring full performance compliance.",
    },
];

const processSteps = [
    {
        title: "Network Audit",
        description: "We survey your existing infrastructure and understand your bandwidth, device density, and growth requirements.",
    },
    {
        title: "Design & Planning",
        description: "Detailed cabling layout, rack design, and wireless coverage plan with cable pathway routing.",
    },
    {
        title: "Installation",
        description: "Neat, organised installation with proper cable management, containment, and labelling standards.",
    },
    {
        title: "Testing & Certification",
        description: "End-to-end link testing with certified testers and full documentation handover.",
    },
];

const useCases = [
    {
        title: "Office Buildings",
        description: "Complete structured cabling infrastructure for data, voice, and wireless connectivity across all floors.",
    },
    {
        title: "Educational Campuses",
        description: "High-density Wi-Fi and cabling systems supporting hundreds of simultaneous devices across classrooms.",
    },
    {
        title: "Data Centres & Server Rooms",
        description: "Organised, labelled cabling infrastructure with proper patch panel management and airflow considerations.",
    },
];

const faqs = [
    {
        question: "What is structured cabling?",
        answer: "Structured cabling is a standardised approach to building telecommunications infrastructure using a hierarchy of cables, patch panels, and connectors — rather than a jumble of individual point-to-point cables. It's easier to manage, troubleshoot, and expand.",
    },
    {
        question: "Should I choose Cat6 or fibre optic cabling?",
        answer: "Cat6/Cat6A copper cabling is ideal for horizontal runs up to 90 metres. Fibre optic is recommended for backbone connections, inter-building links, or runs exceeding 90 metres. Most modern networks use a combination of both.",
    },
    {
        question: "How long does a cabling installation take?",
        answer: "A typical small office (10–20 points) takes 1–2 days. Larger facilities are planned in phases. We work around your operational hours to minimise disruption.",
    },
    {
        question: "Do you provide a warranty on cabling work?",
        answer: "Yes. We provide a workmanship warranty on all our cabling installations. We also offer manufacturer warranties on the cabling and connectivity components we supply.",
    },
];

export default function StructuredCabling() {
    return (
        <>
            <Head>
                <title>Structured Cabling & Networking - FAGNUS</title>
                <meta
                    name="description"
                    content="Organised data, voice, and video cabling solutions for smooth connectivity. Professional structured cabling installation for offices, buildings, and campuses."
                />
            </Head>

            {/* Hero */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-brand-neutral-100 to-white">
                <div className="max-w-5xl mx-auto px-6 lg:px-12">
                    <SectionHeader
                        tag="ELV Solutions"
                        title="Structured Cabling & Networking"
                        description="Organised data, voice, and video cabling solutions for smooth, reliable connectivity — from single-floor offices to multi-building campuses."
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
                        title="Complete Cabling Solutions"
                        description="Data, voice, fibre, and wireless infrastructure — installed to industry standards."
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
                        title="Building Your Network Infrastructure"
                        description="A four-step process ensuring a clean, certified, and scalable cabling installation."
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
                        title="Networking Solutions for Every Space"
                        description="Offices, campuses, and data centres."
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
                        description="Common questions about structured cabling and networking."
                    />
                    <div className="mt-16">
                        <FAQ faqs={faqs} />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CTASection
                title="Build a Network That Lasts"
                description="Get a free consultation and quote for your structured cabling project."
                primaryButtonText="Schedule Consultation"
                primaryButtonHref="/contact"
            />
        </>
    );
}
