import { Head } from '@inertiajs/react';
import SectionHeader from '@/Components/SectionHeader';

export default function Terms() {
    return (
        <>
            <Head>
                <title>Terms & Conditions - FAGNUS</title>
                <meta name="description" content="FAGNUS Terms and Conditions - Read our terms of service for using our website and services." />
            </Head>

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-brand-neutral-100">
                <div className="max-w-4xl mx-auto px-6 lg:px-12">
                    <SectionHeader
                        tag="Legal"
                        title="Terms & Conditions"
                        description="Last updated: January 2026"
                        centered={false}
                    />
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-12">
                    <div className="prose prose-lg prose-headings:font-eina prose-headings:font-bold prose-p:font-eina prose-p:text-brand-neutral-700 max-w-none">
                        <h3>1. Agreement to Terms</h3>
                        <p>
                            These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Fagnus ("we," "us" or "our"), concerning your access to and use of our website and services. By accessing the site, you have read, understood, and agree to be bound by all of these Terms and Conditions.
                        </p>

                        <h3>2. Services Provided</h3>
                        <p>
                            Fagnus provides technology and security installation services including CCTV systems, solar energy solutions, automatic gates, fingerprint locks, and computer repair services. We reserve the right to modify, suspend, or discontinue any service at any time without notice.
                        </p>

                        <h3>3. Quotations and Estimates</h3>
                        <p>
                            All quotations provided are valid for 30 days from the date of issue unless otherwise stated. Quotations are subject to site inspection and may change if unforeseen circumstances arise during installation.
                        </p>

                        <h3>4. Payment Terms</h3>
                        <p>
                            Payment terms are 50% deposit upon acceptance of the quotation and 50% upon completion of the work, unless otherwise agreed in writing. Late payments may incur interest charges. Title to goods remains with Fagnus until full payment has been received.
                        </p>

                        <h3>5. Warranties</h3>
                        <p>
                            We provide a warranty on our workmanship for a period of 12 months from the date of completion. Hardware and components are covered by their respective manufacturer's warranties. This warranty does not cover damage caused by misuse, accidents, or acts of nature.
                        </p>

                        <h3>6. Limitation of Liability</h3>
                        <p>
                            To the fullest extent permitted by law, Fagnus shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
                        </p>

                        <h3>7. Cancellation</h3>
                        <p>
                            Cancellations made less than 24 hours before a scheduled appointment may be subject to a cancellation fee. Custom-ordered parts are non-refundable once the order has been placed.
                        </p>

                        <h3>8. Intellectual Property</h3>
                        <p>
                            The content, arrangement, and layout of this website, including but not limited to signatures, trademarks, and logos, are the sole property of Fagnus and protected by intellectual property laws.
                        </p>

                        <h3>9. Governing Law</h3>
                        <p>
                            These Terms shall be governed by and defined following the laws of India. Fagnus and yourself irrevocably consent that the courts of India shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
                        </p>

                        <h3>10. Changes to Terms</h3>
                        <p>
                            We reserve the right, in our sole discretion, to make changes or modifications to these Terms and Conditions at any time and for any reason. We will alert you about any changes by updating the "Last updated" date of these Terms and Conditions.
                        </p>

                        <h3>11. Contact Us</h3>
                        <p>
                            In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
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
