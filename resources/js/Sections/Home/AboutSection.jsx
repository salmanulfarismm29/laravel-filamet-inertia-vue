import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="py-20 bg-brand-neutral-100">
      <div className="max-w-4xl mx-auto text-center px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-eina font-semibold text-4xl md:text-5xl lg:text-6xl text-brand-neutral-900 mb-8 tracking-tight"
        >
          About Fagnus
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-eina font-light text-lg md:text-xl text-brand-neutral-700 leading-relaxed mb-6"
        >
          Founded and led by professionals with over two decades of experience,
          Fagnus stands as a symbol of trust, technical excellence, and sustainable innovation.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-eina font-light text-lg md:text-xl text-brand-neutral-600 leading-relaxed mb-10"
        >
          We deliver unmatched expertise in Solar Energy Solutions, ELV Systems,
          Air Conditioning Services, and Professional PC Sales & Service, focusing on
          advanced, integrated solutions with the latest industry advancements.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link
            href="/about"
            className="inline-block bg-brand-neutral-900 hover:bg-brand-neutral-800 text-white font-eina font-semibold text-lg px-10 py-4 rounded-lg transition-all duration-300"
          >
            Learn More About Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}