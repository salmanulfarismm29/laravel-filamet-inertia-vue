import { Head } from '@inertiajs/react';
import SectionHeader from '@/Components/SectionHeader';
import FeatureList from '@/Components/FeatureList';
import FAQ from '@/Components/FAQ';
import CTASection from '@/Components/CTASection';

const features = [
    {
        title: "Video Door Phones",
        description: "See and speak with visitors at your door before granting access — from any room in the building.",
    },
    {
        title: "Apartment Intercom Systems",
        description: "Multi-tenant intercom systems allowing lobby-to-apartment communication with door release control.",
    },
    {
        title: "IP-Based Intercom",
        description: "Network-connected intercoms accessible from smartphones — answer your door from anywhere.",
    },
    {
        title: "2-Wire & IP Wiring",
        description: "Both traditional 2-wire and modern IP-based installations to suit new builds and retrofits.",
    },
    {
        title: "Electric Door Release",
        description: "Integrate with electric strikes and magnetic locks for remote door release at the press of a button.",
    },
    {
        title: "Multi-Panel Systems",
        description: "Complex systems with multiple outdoor panels and indoor stations for large residential or commercial sites.",
    },
];

const processSteps = [
    {
        title: "Site Visit",
        description: "We assess your building layout, entry points, and number of units or floors to design the right system.",
    },
    {
        title: "System Design",
        description: "Custom intercom architecture specifying outdoor stations, indoor monitors, cabling, and door hardware.",
    },
    {
        title: "Installation",
        description: "Professional installation with careful cable routing and neat, tamper-resistant mounting.",
    },
    {
        title: "Programming & Testing",
        description: "Full system programming, door release testing, and audio/video quality verification.",
    },
];

const useCases = [
    {
        title: "Residential Villas",
        description: "Know who's at your gate before opening it — with a high-definition video door phone at the entrance.",
    },
    {
        title: "Apartment Buildings",
        description: "Complete lobby-to-apartment intercom systems allowing residents to communicate with visitors and release the main door remotely.",
    },
    {
        title: "Offices & Commercial",
        description: "Manage visitor access at reception and restrict entry to secure areas with integrated door phone and access control.",
    },
];

const faqs = [
    {
        question: "Can I answer my door from my smartphone?",
        answer: "Yes. Our IP-based video door phone systems connect to your home Wi-Fi network and include a smartphone app — so you can see, speak, and open the door from anywhere.",
    },
    {
        question: "What is the difference between a video door phone and an intercom?",
        answer: "A video door phone adds a camera so you can see the visitor. An intercom is audio-only. We recommend video door phones for all new installations as they offer significantly better security.",
    },
    {
        question: "Can your system work in an existing apartment building?",
        answer: "Yes. We have solutions for both new installations and retrofit projects in existing buildings, including 2-wire systems that minimise the need for extensive re-wiring.",
    },
    {
        question: "How many monitors can be connected per outdoor station?",
        answer: "Depending on the system, a single outdoor panel can connect to multiple indoor monitors — ideal for large homes or offices with multiple rooms.",
    },
];

export default function VideoDoorPhones() {
    return (
        <>
            <Head>
                <title>Video Door Phones & Intercom Systems - FAGNUS</title>
                <meta
                    name="description"
                    content="Advanced video door phone and intercom communication systems for homes, apartments, and offices. See and speak with visitors before granting access."
                />
            </Head>

            {/* Hero */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-brand-neutral-100 to-white">
                <div className="max-w-5xl mx-auto px-6 lg:px-12">
                    <SectionHeader
                        tag="ELV Solutions"
                        title="Video Door Phones & Intercom Systems"
                        description="Advanced communication systems for homes, apartments, and offices — see and verify visitors before granting access, from anywhere."
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
                        title="Complete Intercom Solutions"
                        description="From simple video door phones to complex multi-tenant intercom systems."
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
                        title="How We Install Your System"
                        description="A four-step process from assessment to a fully operational intercom system."
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
                        title="Intercom Solutions for Every Building"
                        description="Residential, apartment, and commercial intercom systems."
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
                        description="Common questions about video door phones and intercom systems."
                    />
                    <div className="mt-16">
                        <FAQ faqs={faqs} />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CTASection
                title="Know Who's at Your Door"
                description="Get a free consultation and quote for your video door phone or intercom system."
                primaryButtonText="Schedule Consultation"
                primaryButtonHref="/contact"
            />
        </>
    );
}
