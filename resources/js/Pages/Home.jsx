import { Head } from '@inertiajs/react';
import Hero from '@/Sections/Home/Hero';
import StatsSection from '@/Sections/Home/StatsSection';
import TrustBar from '@/Sections/Home/TrustBar';
import StoryParallax from '@/Sections/StoryParallax';
import ServicesPreview from '@/Sections/Home/ServicesPreview';
import ProjectsTeaser from '@/Sections/Home/ProjectsTeaser';
import AboutSection from '@/Sections/Home/AboutSection';
import CTASection from '@/Components/CTASection';
import FloatingContact from '@/Components/FloatingContact';

/**
 * Home page
 *
 * Section order (from top to bottom):
 *  1. Hero               — brand statement + animated title
 *  2. StatsSection       — animated counters (credibility)
 *  3. TrustBar           — partner brand marquee
 *  4. StoryParallax      — cinematic brand narrative
 *  5. ServicesPreview    — 6 featured service cards
 *  6. ProjectsTeaser     — 3 recent project cards → gallery
 *  7. AboutSection       — who we are + core values
 *  8. CTASection         — orange gradient conversion block
 *  9. FloatingContact    — persistent WhatsApp button (fixed)
 */
export default function Home({ galleryItems = [] }) {
    return (
        <>
            <Head>
                <title>FAGNUS | Smart Energy &amp; Technology Solutions</title>
                <meta
                    name="description"
                    content="FAGNUS provides renewable energy solutions, security camera systems, automatic gates, access control, home automation, and IT hardware services with 20+ years of expertise."
                />
            </Head>

            <Hero />
            <StatsSection />
            <TrustBar />
            <StoryParallax />
            <ServicesPreview />
            <ProjectsTeaser items={galleryItems} />
            <AboutSection />

            <CTASection
                title="Ready to Transform Your Space?"
                description="Experience the difference that two decades of expertise can make."
                primaryButtonText="Get Started Today"
                primaryButtonHref="/contact"
                secondaryButtonText="View Our Projects"
                secondaryButtonHref="/gallery"
            />

            {/* Fixed floating WhatsApp button — rendered outside page flow */}
            <FloatingContact />
        </>
    );
}
