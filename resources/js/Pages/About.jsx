import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import SectionHeader from '@/Components/SectionHeader';
import CTASection from '@/Components/CTASection';
import FeatureList from '@/Components/FeatureList';

/**
 * About page
 *
 * Sections:
 *  1. Hero               — dark brand hero
 *  2. Who We Are         — prose narrative
 *  3. Stats banner       — 4 key figures
 *  4. Timeline           — company milestone journey
 *  5. Core Values        — innovation, quality, customer centricity
 *  6. CTA Section        — orange gradient conversion block
 */

// ── Core Values ────────────────────────────────────────────────────────────
const values = [
    {
        title: 'Innovation First',
        description:
            'We constantly stay ahead of the curve, adopting the latest technologies to solve complex problems.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
    },
    {
        title: 'Uncompromising Quality',
        description:
            'Every product we install and every service we provide meets the highest standards of excellence.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        title: 'Customer Centricity',
        description:
            'Your safety and satisfaction are at the core of everything we do, from consultation to long-term support.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
];

// ── Stats ──────────────────────────────────────────────────────────────────
const stats = [
    { label: 'Years of Experience', value: '20+' },
    { label: 'Projects Completed',  value: '1000+' },
    { label: 'Satisfied Clients',   value: '950+' },
    { label: 'Team Members',        value: '50+' },
];

// ── Company Timeline ───────────────────────────────────────────────────────
const milestones = [
    {
        year: '2004',
        title: 'Fagnus Founded',
        description:
            'Established with a clear mission — to deliver reliable, technology-driven solutions to homes and businesses.',
        accent: 'border-brand-primary',
        dotColour: 'bg-brand-primary',
    },
    {
        year: '2010',
        title: 'ELV Division Launched',
        description:
            'Expanded into Extra Low Voltage systems — CCTV, access control, structured cabling, and fire alarm installations.',
        accent: 'border-brand-accent',
        dotColour: 'bg-brand-accent',
    },
    {
        year: '2016',
        title: 'Solar Energy Division',
        description:
            'Launched our renewable energy practice, delivering on-grid, off-grid, and hybrid solar installations across the region.',
        accent: 'border-amber-500',
        dotColour: 'bg-amber-500',
    },
    {
        year: '2020',
        title: 'IT Hardware Solutions',
        description:
            'Completed the full technology portfolio with computer systems, laptops, projectors, printers, and enterprise networking.',
        accent: 'border-brand-secondary',
        dotColour: 'bg-brand-secondary',
    },
    {
        year: '2024',
        title: '1000+ Projects Milestone',
        description:
            'Celebrated delivering over 1000 successful projects — and continuing to grow with new services like Home Automation and EV Charging.',
        accent: 'border-brand-primary',
        dotColour: 'bg-brand-primary',
    },
];

/** Single vertical timeline event card */
function TimelineEvent({ milestone, index }) {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, x: isEven ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
            className={`relative flex items-start gap-6 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
        >
            {/* Content card */}
            <div className={`flex-1 bg-white rounded-2xl p-7 border-l-4 ${milestone.accent} shadow-md hover:shadow-lg transition-shadow duration-300`}>
                {/* Year badge */}
                <span className="inline-block font-eina font-bold text-xs uppercase tracking-widest text-brand-primary bg-brand-primary/10 px-3 py-1 rounded-full mb-3">
                    {milestone.year}
                </span>
                <h3 className="font-eina font-bold text-xl text-brand-neutral-900 mb-2">
                    {milestone.title}
                </h3>
                <p className="font-eina font-light text-brand-neutral-600 leading-relaxed">
                    {milestone.description}
                </p>
            </div>

            {/* Centre dot + line (visible on md+) */}
            <div className="hidden md:flex flex-col items-center flex-shrink-0">
                <div className={`w-5 h-5 rounded-full ${milestone.dotColour} border-4 border-white shadow ring-2 ring-brand-neutral-200 mt-5`} />
                {index < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-brand-neutral-200 mt-1" />
                )}
            </div>

            {/* Spacer to keep alternating layout balanced */}
            <div className="flex-1 hidden md:block" />
        </motion.div>
    );
}

export default function About() {
    return (
        <>
            <Head>
                <title>About Us - FAGNUS</title>
                <meta
                    name="description"
                    content="Learn about FAGNUS — 20+ years of expertise delivering premium energy solutions, ELV security systems, and IT hardware across homes and businesses."
                />
            </Head>

            {/* ── 1. Hero ─────────────────────────────────────────────── */}
            <section className="pt-32 pb-20 bg-brand-neutral-900 text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block font-eina text-sm font-medium text-brand-primary uppercase tracking-widest mb-4"
                    >
                        Our Story
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-eina font-bold text-5xl md:text-7xl mb-6 tracking-tight"
                    >
                        Driven by Purpose.<br />
                        <span className="text-brand-primary">Built on Trust.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="font-eina font-light text-xl text-brand-neutral-400 max-w-3xl mx-auto"
                    >
                        Two decades of delivering smart, reliable technology solutions that transform the way people live and work.
                    </motion.p>
                </div>
            </section>

            {/* ── 2. Who We Are ─────────────────────────────────────── */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-12">
                    <div className="prose prose-lg prose-headings:font-eina prose-headings:font-bold prose-p:font-eina prose-p:text-brand-neutral-700">
                        <h2 className="text-3xl md:text-4xl text-brand-neutral-900 mb-6">Who We Are</h2>
                        <p className="mb-6">
                            Fagnus Solutions is a technology-driven service company delivering reliable and innovative solutions across
                            renewable energy, extra low voltage (ELV) systems, and IT hardware.
                        </p>
                        <p className="mb-6">
                            We are committed to providing high-quality products and professional services that meet the evolving needs
                            of our customers. With a strong focus on safety, efficiency, and customer satisfaction, we offer end-to-end
                            solutions including system design, installation, maintenance, and after-sales support.
                        </p>
                        <p>
                            Our experienced technical team ensures every project is executed with precision and care — from the initial
                            consultation through to long-term support.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── 3. Stats ──────────────────────────────────────────── */}
            <section className="py-16 bg-brand-primary text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="text-4xl md:text-5xl font-bold font-eina mb-2">{stat.value}</div>
                                <div className="text-brand-primary-light font-eina text-sm uppercase tracking-wider">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 4. Timeline ───────────────────────────────────────── */}
            <section className="py-20 bg-brand-neutral-100">
                <div className="max-w-6xl mx-auto px-6 lg:px-12">
                    <SectionHeader
                        tag="Our Journey"
                        title="Milestones That Define Us"
                        description="From a focused startup to a multi-discipline technology company — two decades of purposeful growth."
                    />

                    {/* Timeline */}
                    <div className="mt-16 flex flex-col gap-10">
                        {milestones.map((milestone, index) => (
                            <TimelineEvent key={milestone.year} milestone={milestone} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 5. Core Values ────────────────────────────────────── */}
            <section className="py-20 bg-white">
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

            {/* ── 6. CTA ────────────────────────────────────────────── */}
            <CTASection
                title="Join Our Journey"
                description="Whether you need a partner for your next project or just expert advice — we're here."
                primaryButtonText="Contact Us Today"
                primaryButtonHref="/contact"
                secondaryButtonText="View Our Services"
                secondaryButtonHref="/services"
            />
        </>
    );
}
