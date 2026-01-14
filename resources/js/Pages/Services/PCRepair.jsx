import { Head } from '@inertiajs/react';
import SectionHeader from '@/Components/SectionHeader';
import FeatureList from '@/Components/FeatureList';
import FAQ from '@/Components/FAQ';
import CTASection from '@/Components/CTASection';

const features = [
    {
        title: "Hardware Repairs",
        description: "Expert repair of screens, keyboards, batteries, motherboards, and more."
    },
    {
        title: "Software Troubleshooting",
        description: "Fixing OS issues, drivers, viruses, malware, and performance optimization."
    },
    {
        title: "Data Recovery",
        description: "Advanced recovery services for lost files from damaged hard drives or SSDs."
    },
    {
        title: "System Upgrades",
        description: "Boost performance with RAM upgrades, SSD installation, and graphics cards."
    },
    {
        title: "Custom PC Builds",
        description: "Building high-performance gaming or workstation PCs tailored to your specs."
    },
    {
        title: "On-Site Support",
        description: "We come to your home or office for urgent repairs and network setup."
    },
];

const processSteps = [
    {
        title: "Diagnosis",
        description: "We run comprehensive tests to identify the root cause of hardware or software issues."
    },
    {
        title: "Quote & Approval",
        description: "You receive a transparent quote for parts and labor before we start any work."
    },
    {
        title: "Repair & Upgrade",
        description: "Our certified technicians perform the necessary repairs using high-quality parts."
    },
    {
        title: "Quality Testing",
        description: "Rigorous stress testing ensures your device is stable and performing optimally."
    },
    {
        title: "Pickup & Warranty",
        description: "Collect your device with a warranty on all repairs and parts replaced."
    },
];

const useCases = [
    {
        title: "Personal Devices",
        description: "Fast, reliable repairs for laptops, desktops, and all-in-one PCs for students and families."
    },
    {
        title: "Business IT Support",
        description: "Ongoing maintenance, networking, and repair services for small to medium businesses."
    },
    {
        title: "Gaming & Content Creation",
        description: "High-performance tuning, cooling solutions, and upgrades for gamers and creators."
    },
];

const faqs = [
    {
        question: "Do you offer free diagnostics?",
        answer: "Yes! We offer free initial diagnostics. Bring your device to our service center, and we'll identify the problem and provide a quote. If you choose to proceed with the repair, the diagnostic fee is waived."
    },
    {
        question: "How long will my repair take?",
        answer: "Most common repairs (screen replacement, battery, software issues) are completed within 24 hours. Complex motherboard repairs or data recovery may take 2-5 days depending on parts availability."
    },
    {
        question: "Is my data safe during repair?",
        answer: "We prioritize data privacy and security. We recommend backing up data before service if possible, but we take strict measures to ensure your files remain confidential and secure throughout the repair process."
    },
    {
        question: "Do you provide a warranty?",
        answer: "Yes, we provide a 90-day warranty on all repairs and a manufacturer's warranty on all new parts installed. If the same issue reoccurs within the warranty period, we'll fix it for free."
    },
    {
        question: "Can you upgrade my old laptop?",
        answer: "Absolutely! Installing an SSD and adding more RAM can make an old laptop feel brand new. We can assess your device and recommend cost-effective upgrades to extend its lifespan."
    },
];

export default function PCRepair() {
    return (
        <>
            <Head>
                <title>Laptop & PC Repair Services - FAGNUS</title>
                <meta name="description" content="Professional laptop and PC repair services including hardware diagnostics, software troubleshooting, upgrades, and data recovery with same-day service available." />
            </Head>

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-brand-neutral-100 to-white">
                <div className="max-w-5xl mx-auto px-6 lg:px-12">
                    <SectionHeader
                        tag="Tech Support"
                        title="Laptop & PC Repair Services"
                        description="Expert diagnostics, repairs, and upgrades for all major brands. We bring your devices back to life with professional service and quick turnaround times."
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
                        title="Comprehensive Computer Services"
                        description="From hardware fixes to software optimization, we handle it all."
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
                        title="How We Fix Your Device"
                        description="Transparent, efficient, and professional repair workflow."
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
                        subtitle="Who We Serve"
                        title="Support for Everyone"
                        description="Reliable tech solutions for individuals, businesses, and enthusiasts."
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
                        description="Common questions about our repair services."
                    />
                    <div className="mt-16">
                        <FAQ faqs={faqs} />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CTASection
                title="Need a Quick Fix?"
                description="Don't let device issues slow you down. Get expert repair service today."
                primaryButtonText="Book Repair"
                primaryButtonHref="/contact"
            />
        </>
    );
}
