import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-brand-neutral-100">
      <div className="text-center px-6 py-32">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-eina font-bold text-5xl md:text-7xl lg:text-8xl text-brand-neutral-900 mb-6 tracking-tight"
        >
          Driven by Expertise,
          <br />
          <span className="text-brand-primary">Defined by Quality</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-eina font-light text-lg md:text-xl text-brand-neutral-700 max-w-2xl mx-auto mb-10"
        >
          Premium security solutions with cutting-edge technology.
          Scroll down to explore our services.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            href="/services"
            className="inline-block bg-brand-primary hover:bg-brand-primary-dark text-white font-eina font-semibold text-lg px-10 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Explore Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}