import { Head } from '@inertiajs/react';
import SectionHeader from '@/Components/SectionHeader';
import FeatureList from '@/Components/FeatureList';
import FAQ from '@/Components/FAQ';
import CTASection from '@/Components/CTASection';

const features = [
    {
        title: "Business & Education Projectors",
        description: "High-brightness projectors for boardrooms, classrooms, and conference halls with sharp, clear image quality.",
    },
    {
        title: "Home Theatre Projectors",
        description: "Full HD and 4K projectors for immersive home cinema experiences with excellent contrast and colour accuracy.",
    },
    {
        title: "Interactive Projectors",
        description: "Touch-enabled interactive projectors for collaborative classrooms and meeting rooms.",
    },
    {
        title: "Short-Throw & Ultra Short-Throw",
        description: "Short-throw models for small rooms where a standard projector distance isn't possible.",
    },
    {
        title: "Ceiling & Wall Mounting",
        description: "Professional ceiling mounting with proper cable management for a clean, permanent installation.",
    },
    {
        title: "Screen & Accessories Supply",
        description: "Manual, motorised, and fixed-frame projection screens to complement your projector installation.",
    },
];

const useCases = [
    {
        title: "Boardrooms & Conference Rooms",
        description: "Clear, bright presentations that keep your audience engaged — with wireless and HDMI connectivity.",
    },
    {
        title: "Classrooms & Training Rooms",
        description: "Interactive and standard projectors delivering engaging learning experiences for students of all ages.",
    },
    {
        title: "Home Theatres",
        description: "Full HD and 4K home cinema projectors delivering a true big-screen experience in your living room.",
    },
];

const faqs = [
    {
        question: "What brightness do I need?",
        answer: "Brightness is measured in lumens. For rooms with controlled lighting, 2000–3000 lumens is sufficient. For bright environments like classrooms or conference rooms, 4000+ lumens is recommended.",
    },
    {
        question: "Do you install the projector and screen together?",
        answer: "Yes. We supply and install both the projector and the appropriate projection screen as a complete solution.",
    },
    {
        question: "Can the projector connect wirelessly?",
        answer: "Most modern business projectors support wireless screen mirroring from laptops and smartphones. We ensure the correct connectivity options are available for your use case.",
    },
    {
        question: "Do you provide after-sales support?",
        answer: "Yes. We provide warranty support and maintenance services including lamp replacement and cleaning to keep your projector performing at its best.",
    },
];

export default function Projectors() {
    return (
        <>
            <Head>
                <title>Projectors - FAGNUS</title>
                <meta
                    name="description"
                    content="Supply and installation of high-quality projectors for boardrooms, classrooms, and home theatres. Business, interactive, and home cinema projector solutions."
                />
            </Head>

            {/* Hero */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-brand-neutral-100 to-white">
                <div className="max-w-5xl mx-auto px-6 lg:px-12">
                    <SectionHeader
                        tag="IT Hardware Solutions"
                        title="Projectors"
                        description="Supply and installation of high-quality projectors for boardrooms, classrooms, and home theatres — complete with screens and mounting."
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
                            View Models
                        </a>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6 lg:px-12">
                    <SectionHeader
                        subtitle="What We Offer"
                        title="Projector Solutions for Every Environment"
                        description="Business, educational, and home theatre projectors — supplied and installed."
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
                        title="Where We Install Projectors"
                        description="Boardrooms, classrooms, and home theatres."
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
                        description="Common questions about projector selection and installation."
                    />
                    <div className="mt-16">
                        <FAQ faqs={faqs} />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CTASection
                title="Get the Perfect Projector"
                description="Contact us for expert advice on the right projector for your space and budget."
                primaryButtonText="Get a Quote"
                primaryButtonHref="/contact"
            />
        </>
    );
}
