import { Head } from '@inertiajs/react';
import SectionHeader from '@/Components/SectionHeader';
import FeatureList from '@/Components/FeatureList';
import FAQ from '@/Components/FAQ';
import CTASection from '@/Components/CTASection';

const features = [
    {
        title: "Addressable Fire Detection",
        description: "Advanced addressable panels that pinpoint the exact detector triggered — enabling faster, more targeted response.",
    },
    {
        title: "Conventional Detection",
        description: "Cost-effective zonal detection systems suitable for smaller buildings and straightforward layouts.",
    },
    {
        title: "Smoke & Heat Detectors",
        description: "Industry-standard optical smoke detectors and fixed/rate-of-rise heat detectors for comprehensive coverage.",
    },
    {
        title: "Audible & Visual Alarms",
        description: "Sounder-beacon combinations ensuring all occupants are alerted quickly and clearly during an emergency.",
    },
    {
        title: "Manual Call Points",
        description: "Strategically placed break-glass call points enabling immediate manual alarm activation.",
    },
    {
        title: "Regulatory Compliance",
        description: "Systems designed and installed to meet local fire safety codes and international standards.",
    },
];

const processSteps = [
    {
        title: "Risk Assessment",
        description: "We evaluate your building type, occupancy, and fire risk to select the appropriate detection system.",
    },
    {
        title: "System Design",
        description: "Detailed design specifying detector types, panel location, alarm zones, and compliance documentation.",
    },
    {
        title: "Installation",
        description: "Professional installation of all detectors, call points, sounder-beacons, and the control panel.",
    },
    {
        title: "Commissioning & Testing",
        description: "Full system walk-test, panel programming verification, and handover documentation.",
    },
    {
        title: "Maintenance Contracts",
        description: "Annual and bi-annual servicing to ensure your system remains fully operational and compliant.",
    },
];

const useCases = [
    {
        title: "Commercial Buildings",
        description: "Protect staff, customers, and assets with a fully compliant fire detection and alarm system.",
    },
    {
        title: "Residential Properties",
        description: "Multi-zone fire alarm systems for apartment buildings and large residential properties.",
    },
    {
        title: "Industrial & Warehouses",
        description: "Heavy-duty detection systems designed for harsh environments with early warning capabilities.",
    },
];

const faqs = [
    {
        question: "Is a fire alarm system legally required?",
        answer: "In most commercial, public, and multi-residential buildings, fire detection and alarm systems are legally mandated by local building codes and civil defence requirements. We ensure full compliance.",
    },
    {
        question: "What is the difference between addressable and conventional systems?",
        answer: "Addressable systems identify the specific detector that triggered the alarm — useful for large or complex buildings. Conventional systems identify the zone only. We recommend addressable systems for buildings with more than two zones.",
    },
    {
        question: "How often should the system be maintained?",
        answer: "Fire safety standards typically require at least one full service per year, with a visual inspection every six months. We offer maintenance contracts to keep your system fully compliant.",
    },
    {
        question: "Can the system be integrated with other security systems?",
        answer: "Yes. Fire alarm systems can be integrated with access control (for automatic door release), CCTV (for alarm-triggered recording), and building management systems.",
    },
];

export default function FireAlarms() {
    return (
        <>
            <Head>
                <title>Fire Alarm Systems - FAGNUS</title>
                <meta
                    name="description"
                    content="Design and installation of fire detection and alarm systems to ensure safety and regulatory compliance for residential and commercial properties."
                />
            </Head>

            {/* Hero */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-brand-neutral-100 to-white">
                <div className="max-w-5xl mx-auto px-6 lg:px-12">
                    <SectionHeader
                        tag="ELV Solutions"
                        title="Fire Alarm Systems"
                        description="Design and installation of fire detection and alarm systems that protect lives, property, and ensure full regulatory compliance."
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
                        title="Complete Fire Detection Solutions"
                        description="From simple conventional systems to advanced addressable networks."
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
                        title="From Risk Assessment to Compliance"
                        description="A thorough five-step process ensuring a properly designed, installed, and maintained system."
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
                        title="Protecting Every Building Type"
                        description="Commercial, residential, and industrial fire alarm solutions."
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
                        description="Common questions about fire alarm systems and compliance."
                    />
                    <div className="mt-16">
                        <FAQ faqs={faqs} />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CTASection
                title="Don't Wait for a Fire to Act"
                description="Get a free fire risk assessment and system design consultation today."
                primaryButtonText="Schedule Consultation"
                primaryButtonHref="/contact"
            />
        </>
    );
}
