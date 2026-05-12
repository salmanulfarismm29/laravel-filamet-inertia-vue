import { Head } from '@inertiajs/react';
import SectionHeader from '@/Components/SectionHeader';
import FeatureList from '@/Components/FeatureList';
import FAQ from '@/Components/FAQ';
import CTASection from '@/Components/CTASection';

const features = [
    {
        title: "On-Grid Solar Systems",
        description: "Grid-connected systems that export surplus energy and use net metering to drastically cut electricity bills.",
    },
    {
        title: "Off-Grid Solar Systems",
        description: "Standalone systems with battery storage — ideal for locations without reliable grid access.",
    },
    {
        title: "Hybrid Solar Systems",
        description: "The best of both worlds: connected to the grid with battery backup for uninterrupted power.",
    },
    {
        title: "Rooftop Installations",
        description: "Customized rooftop solar systems for homes, offices, and commercial buildings with maximum space utilization.",
    },
    {
        title: "High-Efficiency Panels",
        description: "Premium panels with industry-leading energy conversion rates for optimal generation year-round.",
    },
    {
        title: "Monitoring & Maintenance",
        description: "Real-time energy tracking dashboards with scheduled maintenance to ensure peak performance.",
    },
];

const processSteps = [
    {
        title: "Energy Audit",
        description: "We analyze your current energy consumption and roof condition to determine the right system size.",
    },
    {
        title: "Custom Design",
        description: "Our engineers design a solar system tailored to your energy needs, roof layout, and budget.",
    },
    {
        title: "Installation",
        description: "Certified technicians install panels, inverters, and wiring with precision and full safety compliance.",
    },
    {
        title: "Grid Connection",
        description: "We handle all paperwork and coordination for grid-tied system approvals with local authorities.",
    },
    {
        title: "Activation & Training",
        description: "System commissioning with complete training on monitoring apps and basic maintenance.",
    },
];

const useCases = [
    {
        title: "Residential Homes",
        description: "Reduce electricity bills by up to 90% while increasing property value with clean, renewable energy.",
    },
    {
        title: "Commercial Buildings",
        description: "Lower operating costs for businesses, shops, and offices with reliable solar power systems.",
    },
    {
        title: "Industrial Facilities",
        description: "Large-scale solar installations to power manufacturing units and warehouses sustainably.",
    },
];

const faqs = [
    {
        question: "What is the difference between on-grid, off-grid, and hybrid systems?",
        answer: "On-grid systems are connected to the utility grid and allow you to sell surplus energy back. Off-grid systems use batteries and operate independently of the grid. Hybrid systems combine both — they connect to the grid but also have battery backup for power cuts.",
    },
    {
        question: "How much can I save on electricity bills?",
        answer: "Savings depend on your current consumption and system size. Most residential customers save 70–90% on monthly electricity bills. With net metering, some customers eliminate their bills entirely.",
    },
    {
        question: "How long does installation take?",
        answer: "Residential installations typically take 2–3 days. Commercial and industrial projects may take 1–2 weeks depending on system size and complexity.",
    },
    {
        question: "What is the payback period?",
        answer: "Most systems pay for themselves in 4–6 years through electricity savings. After that, you enjoy free solar power for 20+ years.",
    },
    {
        question: "Do solar panels require maintenance?",
        answer: "Solar panels require minimal maintenance — mainly periodic cleaning and annual inspections. We offer maintenance packages to ensure optimal performance throughout the system's lifetime.",
    },
];

export default function Solar() {
    return (
        <>
            <Head>
                <title>Solar Power Systems - FAGNUS</title>
                <meta
                    name="description"
                    content="Design, installation, and maintenance of on-grid, off-grid, and hybrid solar power systems. Customized rooftop solar installations for homes, offices, and commercial buildings."
                />
            </Head>

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-brand-neutral-100 to-white">
                <div className="max-w-5xl mx-auto px-6 lg:px-12">
                    <SectionHeader
                        tag="Energy Solutions"
                        title="Solar Power Systems"
                        description="Design, installation, and maintenance of on-grid, off-grid, and hybrid solar power systems. Customized rooftop solutions for homes, offices, and commercial buildings."
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
                        description="End-to-end solutions from consultation and custom design through to installation and long-term maintenance."
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
                        title="How We Install Your Solar System"
                        description="A streamlined five-step approach ensuring maximum efficiency and a hassle-free experience."
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
                        description="From individual homes to large industrial facilities, we power it all sustainably."
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
                        description="Common questions about our solar power systems and installation process."
                    />
                    <div className="mt-16">
                        <FAQ faqs={faqs} />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CTASection
                title="Start Saving with Solar Today"
                description="Get a free site assessment and discover how much you can save with a customized solar power system."
                primaryButtonText="Schedule Consultation"
                primaryButtonHref="/contact"
            />
        </>
    );
}
