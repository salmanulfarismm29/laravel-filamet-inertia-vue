import { Head } from '@inertiajs/react';
import SectionHeader from '@/Components/SectionHeader';
import FeatureList from '@/Components/FeatureList';
import FAQ from '@/Components/FAQ';
import CTASection from '@/Components/CTASection';

const features = [
    {
        title: "Smart Lighting Control",
        description: "Automate and schedule lighting scenes throughout your home — from sunrise wake-up to cinema mode.",
    },
    {
        title: "Climate Control Integration",
        description: "Control your air conditioning and thermostats from a single interface or automate based on occupancy and time.",
    },
    {
        title: "Security System Integration",
        description: "Link CCTV, access control, and alarm systems into a unified smart home security dashboard.",
    },
    {
        title: "Motorised Curtains & Blinds",
        description: "Automate your curtains and blinds — scheduled to open at sunrise or controlled via an app.",
    },
    {
        title: "Centralised Control Panel",
        description: "A single touchscreen panel to control all home systems — lighting, AC, gates, cameras, and entertainment.",
    },
    {
        title: "Remote Smartphone Control",
        description: "Monitor and control every aspect of your home from anywhere in the world via a smartphone app.",
    },
];

const processSteps = [
    {
        title: "Needs Assessment",
        description: "We understand your lifestyle, daily routines, and which systems you want to automate and integrate.",
    },
    {
        title: "System Design",
        description: "We design a tailored automation architecture specifying devices, controllers, and network requirements.",
    },
    {
        title: "Installation & Integration",
        description: "Professional installation of all controllers, sensors, actuators, and integration with existing systems.",
    },
    {
        title: "Programming & Training",
        description: "Full system programming including scenes, schedules, and automations — with hands-on user training.",
    },
];

const useCases = [
    {
        title: "Residential Villas",
        description: "Transform your home into a fully automated smart villa — controlling lighting, climate, security, and entertainment seamlessly.",
    },
    {
        title: "Apartments",
        description: "Smart apartment solutions with automated lighting, climate control, and remote access management.",
    },
    {
        title: "Commercial Offices",
        description: "Automated office environments reducing energy waste and improving comfort with scheduled climate and lighting control.",
    },
];

const faqs = [
    {
        question: "Do I need to rewire my whole house?",
        answer: "Not necessarily. We offer both wired and wireless smart home solutions. Wireless systems can be retrofitted with minimal disruption to existing wiring, making them ideal for completed homes.",
    },
    {
        question: "Can I automate my existing AC and lights?",
        answer: "Yes. Most existing lights and AC units can be integrated into a smart home system using smart switches, IR blasters, and compatible controllers — without replacing your existing appliances.",
    },
    {
        question: "What if the internet goes down?",
        answer: "Well-designed smart home systems continue to work locally even without internet. Core functions like lighting and climate control remain fully operational on the local network.",
    },
    {
        question: "Can the system be expanded later?",
        answer: "Yes. All our home automation systems are designed to be modular and expandable. You can start with a basic setup and add more devices and automations over time.",
    },
];

export default function HomeAutomation() {
    return (
        <>
            <Head>
                <title>Home Automation Systems - FAGNUS</title>
                <meta
                    name="description"
                    content="Intelligent home automation solutions controlling lighting, security, HVAC, and entertainment from a single interface. Smart homes for modern living."
                />
            </Head>

            {/* Hero */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-brand-neutral-100 to-white">
                <div className="max-w-5xl mx-auto px-6 lg:px-12">
                    <SectionHeader
                        tag="ELV Solutions"
                        title="Home Automation Systems"
                        description="Intelligent automation solutions for modern homes — control lighting, climate, security, and entertainment from a single app or panel, from anywhere."
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
                        title="Complete Smart Home Solutions"
                        description="Lighting, climate, security, curtains, and entertainment — all in one system."
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
                        title="From Consultation to Smart Living"
                        description="A four-step process tailored to your lifestyle and home."
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
                        title="Smart Solutions for Every Home"
                        description="Villas, apartments, and commercial offices."
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
                        description="Common questions about home automation systems."
                    />
                    <div className="mt-16">
                        <FAQ faqs={faqs} />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CTASection
                title="Make Your Home Smarter"
                description="Get a free consultation and smart home system design for your property."
                primaryButtonText="Schedule Consultation"
                primaryButtonHref="/contact"
            />
        </>
    );
}
