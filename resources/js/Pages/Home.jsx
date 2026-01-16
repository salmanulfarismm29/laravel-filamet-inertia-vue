import { Head } from '@inertiajs/react';
import StoryParallax from '@/Sections/StoryParallax';
import CTASection from '@/Components/CTASection';
import Hero from '@/Sections/Home/Hero';
import ServicesPreview from '@/Sections/Home/ServicesPreview';
import AboutSection from '@/Sections/Home/AboutSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>FAGNUS | Smart Energy & Technology Solutions</title>
        <meta name="description" content="FAGNUS provides renewable energy solutions, security camera systems, automatic gates, fingerprint locks, and PC repair services with 20+ years of expertise." />
      </Head>

      {/* Hero Section */}
      <Hero />

      {/* Cinematic Story Parallax Section */}
      <StoryParallax />

      {/* Services Preview */}
      <ServicesPreview />

      {/* About Section */}
      <AboutSection />

      {/* CTA Section */}
      <CTASection
        title="Ready to Transform Your Space?"
        description="Experience the difference that two decades of expertise can make"
        primaryButtonText="Get Started Today"
        primaryButtonHref="/contact"
        secondaryButtonText="View Our Projects"
        secondaryButtonHref="/gallery"
      />
    </>
  );
}
