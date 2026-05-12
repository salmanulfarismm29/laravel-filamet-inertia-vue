import { Head } from '@inertiajs/react';
import SectionHeader from '@/Components/SectionHeader';
import FeatureList from '@/Components/FeatureList';
import FAQ from '@/Components/FAQ';
import CTASection from '@/Components/CTASection';

const features = [
    {
        title: "Sliding Automatic Gates",
        description: "Space-efficient motorised sliding gates for driveways and large commercial entrances.",
    },
    {
        title: "Swing Automatic Gates",
        description: "Single and double-leaf swing gate operators for residential villas and traditional gated entrances.",
    },
    {
        title: "Barrier Arms",
        description: "Fast-lifting barrier arms for car parks, toll points, and controlled vehicle access zones.",
    },
    {
        title: "Remote & Smartphone Control",
        description: "Open and close your gate via remote control or smartphone app — from inside or away from home.",
    },
    {
        title: "Safety Sensors",
        description: "Built-in obstacle detection and safety photo-beams ensure the gate stops if anything is in its path.",
    },
    {
        title: "Intercom & Access Integration",
        description: "Seamless integration with video door phones and access control systems for unified gate management.",
    },
];

const processSteps = [
    {
        title: "Site Survey",
        description: "We assess your gate opening, driveway surface, and power supply to select the right operator.",
    },
    {
        title: "System Selection",
        description: "We recommend the appropriate motor type, duty cycle, and safety features for your usage pattern.",
    },
    {
        title: "Installation",
        description: "Professional installation of the motor, control board, safety sensors, and remote receivers.",
    },
    {
        title: "Programming & Handover",
        description: "Full programming of remote controls, safety limits, and speed settings — with user training.",
    },
];

const useCases = [
    {
        title: "Residential Villas",
        description: "Motorise your existing driveway gate or install a new automated gate system — arrive and leave without leaving your car.",
    },
    {
        title: "Commercial Premises",
        description: "Control vehicle access to office car parks, warehouses, and industrial sites with robust barrier systems.",
    },
    {
        title: "Residential Communities",
        description: "Gated community entrance automation with intercom integration and visitor management.",
    },
];

const faqs = [
    {
        question: "Can my existing gate be automated?",
        answer: "In most cases, yes. We assess the weight, size, and condition of your existing gate to determine if it can be automated. Most standard residential swing and sliding gates can be motorised.",
    },
    {
        question: "What happens during a power cut?",
        answer: "Our gate operators include battery backup systems that keep the gate operational during power outages. Gates can also be manually released if needed.",
    },
    {
        question: "How many remote controls are included?",
        answer: "We typically provide 2 remote controls with each installation. Additional remotes and smartphone apps can be added at any time.",
    },
    {
        question: "How often does the system need servicing?",
        answer: "We recommend an annual service check covering lubrication of moving parts, safety sensor testing, and control board inspection to maintain reliable operation.",
    },
];

export default function AutomaticGateSystems() {
    return (
        <>
            <Head>
                <title>Automatic Gate Systems - FAGNUS</title>
                <meta
                    name="description"
                    content="Smart automated gate solutions for residential and commercial properties. Motorised sliding, swing gates and barrier arms with remote and smartphone control."
                />
            </Head>

            {/* Hero */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-brand-neutral-100 to-white">
                <div className="max-w-5xl mx-auto px-6 lg:px-12">
                    <SectionHeader
                        tag="ELV Solutions"
                        title="Automatic Gate Systems"
                        description="Smart automated gate solutions for residential and commercial properties — motorised, remote-controlled, and integrated with your security systems."
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
                        title="Complete Gate Automation Solutions"
                        description="Sliding gates, swing gates, barrier arms, and integrated access control."
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
                        title="From Survey to Smooth Operation"
                        description="A four-step process from site assessment to a fully commissioned gate system."
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
                        title="Automated Gates for Every Property"
                        description="Residential villas, commercial premises, and gated communities."
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
                        description="Common questions about automatic gate systems."
                    />
                    <div className="mt-16">
                        <FAQ faqs={faqs} />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CTASection
                title="Automate Your Gate Today"
                description="Get a free site survey and quote for your automatic gate system."
                primaryButtonText="Schedule Consultation"
                primaryButtonHref="/contact"
            />
        </>
    );
}
