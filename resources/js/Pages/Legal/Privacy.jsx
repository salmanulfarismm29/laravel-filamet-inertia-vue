import { Head } from '@inertiajs/react';
import SectionHeader from '@/Components/SectionHeader';

export default function Privacy() {
    return (
        <>
            <Head>
                <title>Privacy Policy - FAGNUS</title>
                <meta name="description" content="FAGNUS Privacy Policy - Learn how we collect, use, and protect your personal information." />
            </Head>

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-brand-neutral-100">
                <div className="max-w-4xl mx-auto px-6 lg:px-12">
                    <SectionHeader
                        tag="Legal"
                        title="Privacy Policy"
                        description="Last updated: January 2026"
                        centered={false}
                    />
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-12">
                    <div className="prose prose-lg prose-headings:font-eina prose-headings:font-bold prose-p:font-eina prose-p:text-brand-neutral-700 max-w-none">
                        <h3>1. Introduction</h3>
                        <p>
                            At Fagnus ("we," "our," or "us"), we respect your privacy and are committed to protecting your personal data.
                            This privacy policy will inform you as to how we look after your personal data when you visit our website
                            (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
                        </p>

                        <h3>2. Information We Collect</h3>
                        <p>
                            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                        </p>
                        <ul>
                            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                            <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                            <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access this website.</li>
                            <li><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
                        </ul>

                        <h3>3. How We Use Your Personal Data</h3>
                        <p>
                            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                        </p>
                        <ul>
                            <li>Where we need to perform the service contract we are about to enter into or have entered into with you.</li>
                            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                            <li>Where we need to comply with a legal or regulatory obligation.</li>
                        </ul>

                        <h3>4. Data Security</h3>
                        <p>
                            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                        </p>

                        <h3>5. Cookies</h3>
                        <p>
                            You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
                        </p>

                        <h3>6. Your Legal Rights</h3>
                        <p>
                            Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.
                        </p>

                        <h3>7. Contact Us</h3>
                        <p>
                            If you have any questions about this privacy policy or our privacy practices, please contact us at:
                            <br />
                            Email: info@fagnus.com
                            <br />
                            Phone: +1 (555) 123-4567
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
