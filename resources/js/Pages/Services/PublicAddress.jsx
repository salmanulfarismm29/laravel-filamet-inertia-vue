import { Head } from '@inertiajs/react';
import SectionHeader from '@/Components/SectionHeader';
import FeatureList from '@/Components/FeatureList';
import FAQ from '@/Components/FAQ';
import CTASection from '@/Components/CTASection';

const features = [
    {
        title: "Indoor PA Systems",
        description: "Ceiling and wall-mounted speaker systems for clear audio across offices, schools, hospitals, and retail spaces.",
    },
    {
        title: "Outdoor PA Systems",
        description: "Weatherproof horn and column speakers for open areas, car parks, and outdoor venues.",
    },
    {
        title: "Background Music Systems",
        description: "Multi-zone background music systems with independent volume control for hospitality and retail environments.",
    },
    {
        title: "Emergency PA (EVAC)",
        description: "Voice evacuation systems compliant with fire safety standards for clear emergency announcements.",
    },
    {
        title: "Digital Amplifiers & Mixers",
        description: "Professional-grade amplification equipment ensuring consistent, distortion-free sound throughout your facility.",
    },
    {
        title: "Microphone & Control Systems",
        description: "Desktop and wireless microphone stations with centralised control for announcements from multiple points.",
    },
];

const processSteps = [
    {
        title: "Acoustic Assessment",
        description: "We evaluate room dimensions, ceiling height, surface materials, and background noise to design for optimal intelligibility.",
    },
    {
        title: "System Design",
        description: "Speaker layout, amplifier sizing, cable routing, and zone planning — tailored to your facility.",
    },
    {
        title: "Installation",
        description: "Professional installation of all speakers, amplifiers, cabling, and control equipment.",
    },
    {
        title: "Testing & Tuning",
        description: "System commissioning with acoustic testing and EQ tuning for clear, even sound coverage.",
    },
];

const useCases = [
    {
        title: "Educational Institutions",
        description: "School bell systems, classroom announcements, and campus-wide PA for clear daily communication.",
    },
    {
        title: "Retail & Shopping Centres",
        description: "Background music and promotional announcement systems that enhance the customer experience.",
    },
    {
        title: "Mosques & Religious Venues",
        description: "High-intelligibility PA systems for prayer calls, sermons, and announcements inside and outside.",
    },
];

const faqs = [
    {
        question: "How many speakers do I need?",
        answer: "The number of speakers depends on room size, ceiling height, and required sound level. We calculate coverage based on the speaker's dispersion angle and the target SPL to ensure even coverage without hot spots.",
    },
    {
        question: "Can the PA system be zoned?",
        answer: "Yes. We install multi-zone PA systems where each area (e.g., lobby, canteen, offices) can receive independent audio or can be addressed as a group for general announcements.",
    },
    {
        question: "Can a PA system double as a fire alarm notification system?",
        answer: "Yes. We design Voice Evacuation (EVAC) systems that meet fire safety standards, using the PA infrastructure to broadcast pre-recorded or live emergency messages.",
    },
    {
        question: "Is ongoing maintenance required?",
        answer: "Periodic checks of amplifiers, speaker drivers, and wiring connections are recommended annually. We offer maintenance contracts for ongoing peace of mind.",
    },
];

export default function PublicAddress() {
    return (
        <>
            <Head>
                <title>Public Address (PA) Systems - FAGNUS</title>
                <meta
                    name="description"
                    content="Clear and efficient audio solutions for public announcements and communication. Professional PA system design and installation for any venue size."
                />
            </Head>

            {/* Hero */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-brand-neutral-100 to-white">
                <div className="max-w-5xl mx-auto px-6 lg:px-12">
                    <SectionHeader
                        tag="ELV Solutions"
                        title="Public Address (PA) Systems"
                        description="Clear and efficient audio solutions for announcements, background music, and emergency communication — designed for every venue size."
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
                        title="Complete PA System Solutions"
                        description="Indoor, outdoor, zoned, and emergency PA systems — designed and installed by experts."
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
                        title="From Acoustic Assessment to Clear Sound"
                        description="A four-step process ensuring intelligible, even audio coverage throughout your facility."
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
                        title="PA Systems for Every Venue"
                        description="Schools, retail, mosques, and more."
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
                        description="Common questions about public address and audio systems."
                    />
                    <div className="mt-16">
                        <FAQ faqs={faqs} />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CTASection
                title="Make Your Voice Heard Clearly"
                description="Get a free acoustic consultation and PA system design for your venue."
                primaryButtonText="Schedule Consultation"
                primaryButtonHref="/contact"
            />
        </>
    );
}
