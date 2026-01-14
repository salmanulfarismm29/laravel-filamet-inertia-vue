import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Reusable FAQ accordion component
 */
function FAQItem({ question, answer, index }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border-b border-brand-neutral-300 last:border-b-0"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex items-center justify-between text-left group"
            >
                <h4 className="font-eina font-semibold text-lg md:text-xl text-brand-neutral-900 pr-8 group-hover:text-brand-primary transition-colors">
                    {question}
                </h4>
                <div className={`shrink-0 w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-brand-primary' : ''}`}>
                    <svg
                        className={`w-5 h-5 transition-all duration-300 ${isOpen ? 'text-white rotate-180' : 'text-brand-primary'}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <p className="font-eina font-light text-base text-brand-neutral-700 pb-6 leading-relaxed">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export function FAQ({ faqs }) {
    return (
        <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
                <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    index={index}
                />
            ))}
        </div>
    );
}

export default FAQ;
