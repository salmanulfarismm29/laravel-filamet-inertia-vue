import { Head } from '@inertiajs/react';
import SectionHeader from '@/Components/SectionHeader';
import FeatureList from '@/Components/FeatureList';
import FAQ from '@/Components/FAQ';
import CTASection from '@/Components/CTASection';

const features = [
    {
        title: "Laser Printers",
        description: "High-speed, low-cost-per-page laser printers for high-volume office printing needs.",
    },
    {
        title: "Inkjet Printers",
        description: "Colour inkjet printers delivering vibrant print quality for photos, marketing materials, and general use.",
    },
    {
        title: "Multifunction Printers (MFP)",
        description: "All-in-one print, scan, copy, and fax machines — ideal for offices needing a single versatile device.",
    },
    {
        title: "Wide-Format Printers",
        description: "Large-format printing solutions for architects, engineers, and designers requiring oversized prints.",
    },
    {
        title: "Network Printing Setup",
        description: "Wi-Fi and wired network printer configuration enabling shared printing across multiple computers.",
    },
    {
        title: "Maintenance & Repair",
        description: "Printer servicing, toner/ink replacement, roller cleaning, and fault diagnosis to keep your printer running.",
    },
];

const useCases = [
    {
        title: "Office Environments",
        description: "Networked multifunction printers handling document printing, scanning, and copying for the whole office.",
    },
    {
        title: "Home Use",
        description: "Compact inkjet or laser printers for home users needing reliable everyday printing.",
    },
    {
        title: "Design & Engineering Firms",
        description: "Wide-format printers for printing architectural drawings, engineering plans, and large-format graphics.",
    },
];

const faqs = [
    {
        question: "Should I choose inkjet or laser?",
        answer: "Laser printers are better for high-volume black-and-white document printing — lower cost per page and faster speeds. Inkjet printers are better for colour printing, photos, and lower-volume use. We'll help you choose based on your specific usage.",
    },
    {
        question: "Can you set up a printer on our office network?",
        answer: "Yes. We handle full network printer configuration — both wired and wireless — ensuring all computers on your network can print without issues.",
    },
    {
        question: "Do you supply toner and ink cartridges?",
        answer: "Yes. We supply genuine and compatible toner and ink cartridges for all major brands including HP, Canon, Epson, Brother, and others.",
    },
    {
        question: "Can you repair my existing printer?",
        answer: "Yes. We diagnose and repair most common printer faults including paper jams, print quality issues, network connectivity problems, and hardware failures.",
    },
];

export default function Printers() {
    return (
        <>
            <Head>
                <title>Printers - FAGNUS</title>
                <meta
                    name="description"
                    content="Supply, installation, and maintenance of inkjet, laser, and multifunction printers for home, office, and commercial use. Expert printer repair and setup."
                />
            </Head>

            {/* Hero */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-brand-neutral-100 to-white">
                <div className="max-w-5xl mx-auto px-6 lg:px-12">
                    <SectionHeader
                        tag="IT Hardware Solutions"
                        title="Printers"
                        description="Supply, installation, and maintenance of inkjet, laser, and multifunction printers for home, office, and commercial use — plus network setup and repair."
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
                        title="Complete Printer Solutions"
                        description="From compact home printers to enterprise multifunction machines."
                    />
                    <div className="mt-16">
                        <FeatureList features={features} columns={3} />
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-20 bg-brand-neutral-100">
                <div className="max-w-6xl mx-auto px-6 lg:px-12">
                    <SectionHeader
                        subtitle="Applications"
                        title="Printers for Every Need"
                        description="Offices, homes, and design firms."
                    />
                    <div className="mt-16">
                        <FeatureList features={useCases} columns={3} />
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6 lg:px-12">
                    <SectionHeader
                        subtitle="FAQ"
                        title="Frequently Asked Questions"
                        description="Common questions about printer selection, setup, and maintenance."
                    />
                    <div className="mt-16">
                        <FAQ faqs={faqs} />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CTASection
                title="Need a Printer or a Repair?"
                description="Contact us for expert advice on the right printer — or to book a repair for your existing one."
                primaryButtonText="Get in Touch"
                primaryButtonHref="/contact"
            />
        </>
    );
}
