import { Head } from '@inertiajs/react';
import SectionHeader from '@/Components/SectionHeader';
import CTASection from '@/Components/CTASection';

export default function Gallery({ images = [] }) {
    return (
        <>
            <Head>
                <title>Our Projects - FAGNUS</title>
                <meta name="description" content="Browse our portfolio of completed projects including CCTV installations, solar energy solutions, automated gates, and more." />
            </Head>

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-brand-neutral-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <SectionHeader
                        tag="Our Work"
                        title="Projects & Portfolio"
                        description="Explore our recent installations and finished projects across various industries."
                    />
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    {images.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Image mapping will go here once Filament is integrated */}
                            {images.map((image, index) => (
                                <div key={index} className="aspect-video bg-gray-200 rounded-lg">
                                    {/* <img src={image.url} alt={image.title} className="w-full h-full object-cover rounded-lg" /> */}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-brand-neutral-50 rounded-2xl border border-brand-neutral-200">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-neutral-200 mb-6">
                                <svg className="w-8 h-8 text-brand-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-eina font-bold text-brand-neutral-900 mb-2">Coming Soon</h3>
                            <p className="text-brand-neutral-600 max-w-md mx-auto">
                                We are currently updating our portfolio with our latest projects.
                                Please check back soon or contact us to see specific examples of our work.
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <CTASection
                title="Ready to Start Your Project?"
                description="Let's discuss how we can help upgrade your security and technology infrastructure."
                primaryButtonText="Contact Us"
                primaryButtonHref="/contact"
            />
        </>
    );
}
