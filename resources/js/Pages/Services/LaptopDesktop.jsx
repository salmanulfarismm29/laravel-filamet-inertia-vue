import { Head } from '@inertiajs/react';
import SectionHeader from '@/Components/SectionHeader';
import FeatureList from '@/Components/FeatureList';
import FAQ from '@/Components/FAQ';
import CTASection from '@/Components/CTASection';

const features = [
    {
        title: "Branded Laptops & Desktops",
        description: "Authorised supply of HP, Dell, Lenovo, Acer, and other leading brands for home, office, and commercial use.",
    },
    {
        title: "Custom-Built Systems",
        description: "Bespoke desktops configured to your exact specifications — ideal for gaming, content creation, or heavy workloads.",
    },
    {
        title: "Hardware Repair & Diagnostics",
        description: "Expert diagnosis and repair of motherboards, displays, power supplies, keyboards, and all major components.",
    },
    {
        title: "Software Troubleshooting",
        description: "OS reinstallation, driver conflicts, virus removal, performance optimisation, and software configuration.",
    },
    {
        title: "Data Recovery",
        description: "Recovery of important files from failed hard drives, corrupted storage devices, and accidentally deleted data.",
    },
    {
        title: "Hardware Upgrades",
        description: "RAM upgrades, SSD migrations, graphics card installations, and other performance-enhancing upgrades.",
    },
];

const processSteps = [
    {
        title: "Free Diagnosis",
        description: "We diagnose your device thoroughly and provide a clear fault report before any work begins.",
    },
    {
        title: "Transparent Quotation",
        description: "You receive a detailed quote with parts and labour costs — no hidden charges.",
    },
    {
        title: "Approved Repair",
        description: "Work begins only after your approval. We use quality parts with appropriate warranties.",
    },
    {
        title: "Testing & Quality Check",
        description: "Completed devices undergo full functional testing before return — including burn-in tests for hardware repairs.",
    },
];

const useCases = [
    {
        title: "Home Users",
        description: "Laptop and desktop repairs, OS issues, and upgrades for everyday home computing needs.",
    },
    {
        title: "Small & Medium Businesses",
        description: "Bulk procurement, multi-device setup, and ongoing IT hardware maintenance for business operations.",
    },
    {
        title: "Students & Professionals",
        description: "Performance upgrades and repairs keeping your workstation or laptop running at its peak.",
    },
];

const faqs = [
    {
        question: "How long does a typical repair take?",
        answer: "Most software issues and minor hardware repairs are completed within 24–48 hours. Complex motherboard or display repairs may take 3–5 working days depending on parts availability.",
    },
    {
        question: "Do you provide a warranty on repairs?",
        answer: "Yes. We provide a 30–90 day warranty on all repairs depending on the type of work performed. Replaced parts carry the manufacturer's warranty.",
    },
    {
        question: "Can you recover data from a completely dead laptop?",
        answer: "In many cases, yes. Even if the device won't power on, data can often be recovered from the storage drive. Success depends on the nature of the failure — we'll advise you honestly after inspection.",
    },
    {
        question: "Do you sell computers on credit or instalment plans?",
        answer: "Please contact us to discuss available purchase arrangements for bulk or business orders.",
    },
];

export default function LaptopDesktop() {
    return (
        <>
            <Head>
                <title>Laptop & Desktop Systems - FAGNUS</title>
                <meta
                    name="description"
                    content="Branded and custom-built computers and laptops for home, office, and commercial needs. Hardware and software diagnosis, repair, and upgrades."
                />
            </Head>

            {/* Hero */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-brand-neutral-100 to-white">
                <div className="max-w-5xl mx-auto px-6 lg:px-12">
                    <SectionHeader
                        tag="IT Hardware Solutions"
                        title="Laptop & Desktop Systems"
                        description="Branded and custom-built computers for home, office, and commercial use — plus expert diagnosis and repair of hardware and software issues."
                    />
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/contact"
                            className="bg-brand-primary hover:bg-brand-primary-dark text-white font-eina font-semibold text-lg px-10 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-center"
                        >
                            Get a Quote
                        </a>
                        <a
                            href="/contact"
                            className="bg-brand-neutral-900 hover:bg-brand-neutral-800 text-white font-eina font-semibold text-lg px-10 py-4 rounded-lg transition-all duration-300 text-center"
                        >
                            Book a Repair
                        </a>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6 lg:px-12">
                    <SectionHeader
                        subtitle="What We Offer"
                        title="Computer Sales & Repair Services"
                        description="From new system procurement to complex motherboard repairs — we cover everything."
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
                        subtitle="Our Repair Process"
                        title="How We Handle Your Device"
                        description="A transparent four-step repair process with no surprises."
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
                        title="For Every User"
                        description="Home users, businesses, and professionals."
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
                        description="Common questions about our laptop, desktop, and repair services."
                    />
                    <div className="mt-16">
                        <FAQ faqs={faqs} />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CTASection
                title="Need a New System or a Repair?"
                description="Contact us for a free diagnosis or to discuss your next computer purchase."
                primaryButtonText="Get in Touch"
                primaryButtonHref="/contact"
            />
        </>
    );
}
