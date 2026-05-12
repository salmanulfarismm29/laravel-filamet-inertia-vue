import { Head } from '@inertiajs/react';
import SectionHeader from '@/Components/SectionHeader';
import FeatureList from '@/Components/FeatureList';
import FAQ from '@/Components/FAQ';
import CTASection from '@/Components/CTASection';

const features = [
    {
        title: "Biometric Fingerprint Systems",
        description: "Keyless entry using unique fingerprint recognition — no keys or cards to lose or duplicate.",
    },
    {
        title: "RFID Card & Fob Access",
        description: "Contactless smart card and key fob systems for fast, convenient access management.",
    },
    {
        title: "PIN Code Entry",
        description: "Standalone and networked PIN keypad systems for single or multi-user access control.",
    },
    {
        title: "Door Access Controllers",
        description: "Centralized controllers managing multiple access points across a building from one interface.",
    },
    {
        title: "Time & Attendance Integration",
        description: "Link access control data with attendance management systems for seamless HR reporting.",
    },
    {
        title: "Access Audit Trails",
        description: "Detailed logs of every entry and exit event — who accessed which door and when.",
    },
];

const processSteps = [
    {
        title: "Security Consultation",
        description: "We assess your premises, identify access points, and determine the right level of control needed.",
    },
    {
        title: "System Design",
        description: "Custom access control architecture including door controllers, readers, locking hardware, and wiring plan.",
    },
    {
        title: "Installation",
        description: "Professional installation of all hardware with proper cabling and tamper-proof mounting.",
    },
    {
        title: "Programming & Testing",
        description: "User enrollment, access level configuration, and full system testing before handover.",
    },
    {
        title: "Training & Support",
        description: "Staff training on user management, access logs, and adding or revoking credentials.",
    },
];

const useCases = [
    {
        title: "Office Buildings",
        description: "Control staff access to different floors, server rooms, and restricted areas with granular permission levels.",
    },
    {
        title: "Residential Communities",
        description: "Secure apartment complexes and gated communities with resident-only access systems.",
    },
    {
        title: "Educational Institutions",
        description: "Protect students and staff by restricting access to labs, admin offices, and server rooms.",
    },
];

const faqs = [
    {
        question: "What happens if the power goes out?",
        answer: "Our systems include battery backup and can be configured as 'fail-safe' (door unlocks on power loss for fire safety) or 'fail-secure' (door stays locked) depending on your requirements.",
    },
    {
        question: "How many users can the system support?",
        answer: "Depending on the controller chosen, systems can support from 500 to over 100,000 users. We right-size the system for your current needs with room to scale.",
    },
    {
        question: "Can I revoke access instantly?",
        answer: "Yes. Access credentials can be added, modified, or revoked instantly from the management software — no need to collect keys or cards.",
    },
    {
        question: "Can access control integrate with CCTV?",
        answer: "Absolutely. We can integrate access control events with your CCTV system to automatically capture footage whenever a door is accessed, creating a comprehensive security audit trail.",
    },
];

export default function AccessControl() {
    return (
        <>
            <Head>
                <title>Access Control Systems - FAGNUS</title>
                <meta
                    name="description"
                    content="Biometric systems, RFID card access, and door access solutions for secure entry management. Protect your premises with advanced access control technology."
                />
            </Head>

            {/* Hero */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-brand-neutral-100 to-white">
                <div className="max-w-5xl mx-auto px-6 lg:px-12">
                    <SectionHeader
                        tag="ELV Solutions"
                        title="Access Control Systems"
                        description="Biometric systems, RFID card access, and door access solutions for secure entry management. Control who enters your premises — and when."
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
                        title="Comprehensive Access Control"
                        description="From standalone fingerprint readers to enterprise-grade multi-door systems."
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
                        title="How We Secure Your Entry Points"
                        description="A structured five-step process from consultation to a fully operational system."
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
                        title="Access Control for Every Facility"
                        description="Scalable solutions for offices, residences, and educational institutions."
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
                        description="Common questions about access control systems."
                    />
                    <div className="mt-16">
                        <FAQ faqs={faqs} />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CTASection
                title="Secure Your Premises Today"
                description="Get a free security consultation and quote for your access control system."
                primaryButtonText="Schedule Consultation"
                primaryButtonHref="/contact"
            />
        </>
    );
}
