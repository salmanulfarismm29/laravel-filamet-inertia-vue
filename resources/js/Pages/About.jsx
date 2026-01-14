import { Head } from '@inertiajs/react';
import SectionHeader from '@/Components/SectionHeader';
import CTASection from '@/Components/CTASection';
import FeatureList from '@/Components/FeatureList';

const values = [
    {
        title: "Innovation First",
        description: "We constantly stay ahead of the curve, adopting the latest technologies to solve complex problems.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        )
    },
    {
        title: "Uncompromising Quality",
        description: "Every product we install and every service we provide meets the highest standards of excellence.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    },
    {
        title: "Customer Centricity",
        description: "Your safety and satisfaction are at the core of everything we do, from consultation to support.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    },
];

const stats = [
    { label: "Years of Experience", value: "20+" },
    { label: "Projects Completed", value: "1000+" },
    { label: "Satisfied Clients", value: "950+" },
    { label: "Team Members", value: "50+" },
];

export default function About() {
    return (
        <>
            <Head>
                <title>About Us - FAGNUS</title>
                <meta name="description" content="Learn about FAGNUS - 20+ years of expertise in providing premium security solutions, solar energy systems, and professional technology services." />
            </Head>

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-brand-neutral-900 text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
                    <h1 className="font-eina font-bold text-5xl md:text-7xl mb-6">
                        Our Story
                    </h1>
                    <p className="font-eina font-light text-xl text-brand-neutral-300 max-w-3xl mx-auto">
                        Building trust through technology and innovation since the beginning.
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-12">
                    <div className="prose prose-lg prose-headings:font-eina prose-headings:font-bold prose-p:font-eina prose-p:text-brand-neutral-700">
                        <h2 className="text-3xl md:text-4xl text-brand-neutral-900 mb-6">Who We Are</h2>
                        <p className="mb-6">
                            Fagnus was founded with a singular vision: to bridge the gap between complex technology and everyday needs.
                            What started as a small team of passionate engineers has grown into a leading provider of integrated
                            technology solutions across the region.
                        </p>
                        <p className="mb-6">
                            With over two decades of hands-on experience, we specialize in delivering state-of-the-art security systems,
                            sustainable energy solutions, and comprehensive IT services. Our journey is defined by a relentless pursuit
                            of quality and a deep commitment to our clients' safety and success.
                        </p>
                        <p>
                            We believe that technology should empower, not complicate. That's why we focus on creating user-friendly,
                            reliable, and scalable solutions that stand the test of time.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-brand-primary text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {stats.map((stat, index) => (
                            <div key={index}>
                                <div className="text-4xl md:text-5xl font-bold font-eina mb-2">{stat.value}</div>
                                <div className="text-brand-primary-light font-eina text-sm uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-brand-neutral-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <SectionHeader
                        tag="Our DNA"
                        title="Core Values That Drive Us"
                        description="The principles that guide every decision we make and every project we undertake."
                    />
                    <div className="mt-16">
                        <FeatureList features={values} columns={3} />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CTASection
                title="Join Our Journey"
                description="Whether you're looking for a partner for your next project or just need expert advice, we're here to help."
                primaryButtonText="Contact Us Today"
                primaryButtonHref="/contact"
            />
        </>
    );
}
