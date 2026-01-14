import { Head } from '@inertiajs/react';
import SectionHeader from '@/Components/SectionHeader';
import FeatureList from '@/Components/FeatureList';
import FAQ from '@/Components/FAQ';
import CTASection from '@/Components/CTASection';

const features = [
    {
        title: "Biometric Recognition",
        description: "Advanced fingerprint scanning technology for secure, keyless entry."
    },
    {
        title: "Multiple User Storage",
        description: "Store hundreds of fingerprints for family members, employees, or authorized personnel."
    },
    {
        title: "Backup Access Methods",
        description: "Include PIN codes, RFID cards, and mechanical keys as backup options."
    },
    {
        title: "Audit Trail Logging",
        description: "Track who entered and when with comprehensive access logs."
    },
    {
        title: "Weatherproof Design",
        description: "Durable construction suitable for outdoor and indoor installation."
    },
    {
        title: "Quick Installation",
        description: "Easy retrofit on existing doors with minimal modifications required."
    },
];

const processSteps = [
    {
        title: "Security Assessment",
        description: "We evaluate your property to recommend the right fingerprint lock system for your doors."
    },
    {
        title: "Lock Selection",
        description: "Choose from deadbolts, lever locks, or smart locks based on door type and security needs."
    },
    {
        title: "Professional Installation",
        description: "Expert fitting ensuring proper alignment and secure mounting."
    },
    {
        title: "Fingerprint Enrollment",
        description: "We help register all authorized users' fingerprints into the system."
    },
    {
        title: "System Training",
        description: "Complete walkthrough of features, backup access, and troubleshooting."
    },
];

const useCases = [
    {
        title: "Residential Homes",
        description: "Eliminate the need for keys with secure, convenient biometric access for your family."
    },
    {
        title: "Offices & Commercial",
        description: "Control employee access to restricted areas with detailed entry logs and time-based permissions."
    },
    {
        title: "Labs & Facilities",
        description: "High-security fingerprint locks for sensitive areas requiring strict access control and audit trails."
    },
];

const faqs = [
    {
        question: "How secure are fingerprint locks?",
        answer: "Fingerprint locks are highly secure as they use unique biometric data that cannot be duplicated or shared like keys or PIN codes. Modern sensors can detect fake fingerprints and typically have a false acceptance rate of less than 0.001%."
    },
    {
        question: "What if the battery dies?",
        answer: "All our fingerprint locks provide low battery warnings well in advance. Most models include emergency power input via USB or 9V battery for emergency access. Additionally, backup PIN codes and mechanical keys ensure you're never locked out."
    },
    {
        question: "Can children use fingerprint locks?",
        answer: "Yes! Fingerprint locks work for all ages. We recommend enrolling multiple fingers for children as their fingerprints may change slightly as they grow. The system can store dozens of fingerprints for maximum flexibility."
    },
    {
        question: "Will it work with wet or dirty fingers?",
        answer: "High-quality fingerprint sensors can read through minor dirt and moisture. However, very wet or muddy fingers may require cleaning. That's why we recommend setting up backup access methods like PIN codes for such situations."
    },
    {
        question: "How long does installation take?",
        answer: "Standard installation takes 1-2 hours per door. This includes fitting the lock, testing all features, and enrolling fingerprints for authorized users. We ensure everything is working perfectly before we leave."
    },
];

export default function FingerprintLocks() {
    return (
        <>
            <Head>
                <title>Fingerprint Lock Systems - FAGNUS</title>
                <meta name="description" content="Advanced biometric fingerprint lock systems offering keyless entry, multi-user access, and comprehensive security for homes and businesses." />
            </Head>

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-brand-neutral-100 to-white">
                <div className="max-w-5xl mx-auto px-6 lg:px-12">
                    <SectionHeader
                        tag="Biometric Security"
                        title="Fingerprint Lock Systems"
                        description="State-of-the-art biometric security providing keyless convenience, enhanced protection, and complete control over who accesses your property."
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

            {/* What We Offer */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6 lg:px-12">
                    <SectionHeader
                        subtitle="What We Offer"
                        title="Advanced Biometric Security"
                        description="Cutting-edge fingerprint recognition technology for ultimate convenience and security."
                    />
                    <div className="mt-16">
                        <FeatureList features={features} columns={3} />
                    </div>
                </div>
            </section>

            {/* Process Steps */}
            <section className="py-20 bg-brand-neutral-100">
                <div className="max-w-6xl mx-auto px-6 lg:px-12">
                    <SectionHeader
                        subtitle="Our Process"
                        title="How We Install Fingerprint Locks"
                        description="Professional installation with complete setup and user training."
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
                        title="Secure Access for Every Environment"
                        description="From homes to high-security facilities, keyless biometric access for all."
                    />
                    <div className="mt-16">
                        <FeatureList features={useCases} columns={3} />
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-brand-neutral-100">
                <div className="max-w-6xl mx-auto px-6 lg:px-12">
                    <SectionHeader
                        subtitle="FAQ"
                        title="Frequently Asked Questions"
                        description="Common questions about fingerprint lock systems."
                    />
                    <div className="mt-16">
                        <FAQ faqs={faqs} />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CTASection
                title="Upgrade to Keyless Security"
                description="Experience the convenience and peace of mind of biometric access control."
                primaryButtonText="Schedule Consultation"
                primaryButtonHref="/contact"
            />
        </>
    );
}
