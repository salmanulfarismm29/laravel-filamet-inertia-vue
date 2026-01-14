import { Head, useForm } from '@inertiajs/react';
import SectionHeader from '@/Components/SectionHeader';

export default function Contact() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/contact', {
            onSuccess: () => reset(),
        });
    };

    return (
        <>
            <Head>
                <title>Contact Us - FAGNUS</title>
                <meta name="description" content="Get in touch with FAGNUS for free consultations and quotes on CCTV, Solar Energy, Automatic Gates, and more." />
            </Head>

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-brand-neutral-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <SectionHeader
                        tag="Contact"
                        title="Let's Start a Conversation"
                        description="Have a project in mind or need expert advice? We're here to help you find the perfect solution."
                    />
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Contact Info */}
                        <div>
                            <h3 className="text-2xl font-eina font-bold text-brand-neutral-900 mb-8">Get in Touch</h3>

                            <div className="space-y-8">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-eina font-semibold text-brand-neutral-900">Phone</h4>
                                        <p className="text-brand-neutral-600 mt-1">+1 (555) 123-4567</p>
                                        <p className="text-sm text-brand-neutral-500 mt-1">Mon-Fri 9am to 6pm</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-eina font-semibold text-brand-neutral-900">Email</h4>
                                        <p className="text-brand-neutral-600 mt-1">info@fagnus.com</p>
                                        <p className="text-sm text-brand-neutral-500 mt-1">We typically reply within 24 hours</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-eina font-semibold text-brand-neutral-900">Office</h4>
                                        <p className="text-brand-neutral-600 mt-1">
                                            123 Technology Drive,<br />
                                            Innovation Park, CA 90210
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-brand-neutral-50 p-8 rounded-2xl border border-brand-neutral-200">
                            <h3 className="text-2xl font-eina font-bold text-brand-neutral-900 mb-6">Send us a Message</h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-brand-neutral-700 mb-1">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={data.name}
                                            onChange={e => setData('name', e.target.value)}
                                            className="w-full rounded-lg border-brand-neutral-300 focus:border-brand-primary focus:ring-brand-primary"
                                            required
                                        />
                                        {errors.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-brand-neutral-700 mb-1">Phone</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            value={data.phone}
                                            onChange={e => setData('phone', e.target.value)}
                                            className="w-full rounded-lg border-brand-neutral-300 focus:border-brand-primary focus:ring-brand-primary"
                                        />
                                        {errors.phone && <div className="text-red-500 text-sm mt-1">{errors.phone}</div>}
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-brand-neutral-700 mb-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={data.email}
                                        onChange={e => setData('email', e.target.value)}
                                        className="w-full rounded-lg border-brand-neutral-300 focus:border-brand-primary focus:ring-brand-primary"
                                        required
                                    />
                                    {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
                                </div>

                                <div>
                                    <label htmlFor="service" className="block text-sm font-medium text-brand-neutral-700 mb-1">Interested Service</label>
                                    <select
                                        id="service"
                                        value={data.service}
                                        onChange={e => setData('service', e.target.value)}
                                        className="w-full rounded-lg border-brand-neutral-300 focus:border-brand-primary focus:ring-brand-primary"
                                    >
                                        <option value="">Select a service...</option>
                                        <option value="cctv">CCTV Installation</option>
                                        <option value="solar">Solar Energy</option>
                                        <option value="gates">Automatic Gates</option>
                                        <option value="locks">Fingerprint Locks</option>
                                        <option value="repair">PC Repair</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-brand-neutral-700 mb-1">Message</label>
                                    <textarea
                                        id="message"
                                        rows="4"
                                        value={data.message}
                                        onChange={e => setData('message', e.target.value)}
                                        className="w-full rounded-lg border-brand-neutral-300 focus:border-brand-primary focus:ring-brand-primary"
                                        required
                                    ></textarea>
                                    {errors.message && <div className="text-red-500 text-sm mt-1">{errors.message}</div>}
                                </div>

                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="w-full bg-brand-primary hover:bg-brand-primary-dark text-white font-eina font-semibold py-3 rounded-lg transition-colors duration-300 disabled:opacity-50"
                                >
                                    {processing ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
