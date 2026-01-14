import { Head } from '@inertiajs/react';
import SectionHeader from '@/Components/SectionHeader';
import FeatureList from '@/Components/FeatureList';
import FAQ from '@/Components/FAQ';
import CTASection from '@/Components/CTASection';

const features = [
    {
        title: "High-Efficiency Solar Panels",
        description: "Premium panels with maximum energy conversion rates for optimal power generation."
    },
    {
        title: "Grid-Tied & Off-Grid Systems",
        description: "Flexible solutions for both connected and standalone solar installations."
    },
    {
        title: "Battery Storage Solutions",
        description: "Store excess energy for use during nighttime or power outages."
    },
    {
        title: "Net Metering Support",
        description: "Sell surplus electricity back to the grid and reduce your bills further."
    },
    {
        title: "25+ Year Warranty",
        description: "Long-term performance guarantees on panels and inverters."
    },
    {
        title: "Monitoring & Maintenance",
        description: "Real-time energy tracking with regular system health checks."
    },
];

const processSteps = [
    {
        title: "Energy Audit",
        description: "We analyze your current energy consumption and roof condition to determine system requirements."
    },
    {
        title: "Custom Design",
        description: "Our engineers design a solar system tailored to your energy needs and budget."
    },
    {
        title: "Installation",
        description: "Certified technicians install panels, inverters, and wiring with precision and safety."
    },
    {
        title: "Grid Connection",
        description: "We handle all paperwork and coordination for grid-tied system approvals."
    },
    {
        title: "Activation & Training",
        description: "System commissioning with complete training on monitoring and maintenance."
    },
];

const useCases = [
    {
        title: "Residential Homes",
        description: "Reduce electricity bills by up to 90% while increasing property value with clean, renewable energy."
    },
    {
        title: "Commercial Buildings",
        description: "Lower operating costs for businesses, shops, and offices with reliable solar power systems."
    },
    {
        title: "Industrial Facilities",
        description: "Large-scale solar installations to power manufacturing units and warehouses sustainably."
    },
];

const faqs = [
    {
        question: "How much can I save on electricity bills?",
        answer: "Savings depend on your current consumption and system size. Most residential customers save 70-90% on their monthly electricity bills. With net metering, some customers even eliminate their bills entirely."
    },
    {
        question: "What happens during cloudy days or at night?",
        answer: "Solar panels produce less energy on cloudy days but still generate power. At night, grid-tied systems draw from the grid, while off-grid systems use battery storage. We size systems to account for seasonal variations."
    },
    {
        question: "How long does installation take?",
        answer: "Residential installations typically take 2-3 days. Commercial and industrial projects may take 1-2 weeks depending on system size and complexity."
    },
    {
        question: "What is the payback period?",
        answer: "Most systems pay for themselves in 4-6 years through electricity savings. After that, you enjoy free solar power for 20+ years."
    },
    {
        question: "Do solar panels require maintenance?",
        answer: "Solar panels require minimal maintenance—mainly periodic cleaning and annual inspections. We offer maintenance packages to ensure optimal performance throughout the system's lifetime."
    },
];

export default function Solar() {
    return (
        <>
            <Head>
                <title>Solar Energy Solutions - FAGNUS</title>
                <meta name="description" content="Sustainable solar power systems for homes and businesses. Reduce energy costs by up to 90% with high-efficiency panels, battery storage, and professional installation." />
            </Head>

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-brand-neutral-100 to-white">
                <div className="max-w-5xl mx-auto px-6 lg:px-12">
                    <SectionHeader
                        tag="Renewable Energy"
                        title="Solar Energy Solutions"
                        description="Harness the power of the sun with high-efficiency solar systems designed to drastically reduce your energy costs while contributing to a sustainable future."
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
                        title="Complete Solar Power Systems"
                        description="End-to-end solutions from consultation to installation and maintenance."
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
                        title="How We Install Your Solar System"
                        description="A streamlined approach ensuring maximum efficiency and hassle-free installation."
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
                        title="Solar Solutions for Every Need"
                        description="From homes to large industrial facilities, we power it all sustainably."
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
                        description="Common questions about our solar energy solutions."
                    />
                    <div className="mt-16">
                        <FAQ faqs={faqs} />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CTASection
                title="Start Saving with Solar Today"
                description="Get a free site assessment and discover how much you can save with solar energy."
                primaryButtonText="Schedule Consultation"
                primaryButtonHref="/contact"
            />
        </>
    );
}
