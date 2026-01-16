import { Link } from "@inertiajs/react";
import { motion } from "framer-motion";
import { Arrow } from "../UI/Arrow";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

const services = [
  { name: "CCTV Installation & Services", href: "/services/cctv-installation" },
  { name: "Solar Energy Solutions", href: "/services/solar-solutions" },
  { name: "Automatic Gate Systems", href: "/services/automatic-gate-systems" },
  { name: "Fingerprint Lock Systems", href: "/services/fingerprint-lock-systems" },
  { name: "Laptop & PC Repair Services", href: "/services/laptop-pc-repair" },
];

export function Footer() {
  return (
    <footer className="relative w-full bg-brand-secondary-dark text-white pt-24 pb-12 overflow-hidden border-t border-white/5">
      {/* Pattern Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "url('/patterns/Fagnus_Pattern.svg')",
          backgroundRepeat: "repeat",
          backgroundSize: "400px 400px",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20"
        >
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="lg:col-span-4 flex flex-col gap-8">
            <Link href="/" className="group inline-block w-max">
              <div className="relative h-12 w-48 mb-4">
                <img
                  src="/assets/logos/Fagnus_Horizontal.svg"
                  alt="Fagnus Logo"
                  className="object-contain object-left w-full h-full"
                />
              </div>
            </Link>
            <p className="font-eina font-light text-2xl leading-tight max-w-sm text-neutral-300">
              Driven by Expertise, <br />
              <span className="text-brand-primary font-normal">Defined by Quality</span>
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div variants={itemVariants} className="lg:col-span-2 flex flex-col gap-6">
            <h3 className="font-eina text-sm uppercase tracking-widest text-neutral-500 mb-2">
              Explore
            </h3>
            <ul className="flex flex-col gap-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-xl font-eina font-light text-neutral-300 hover:text-white transition-colors"
                  >
                    <span className="relative overflow-hidden">
                      {link.name}
                      <span className="absolute left-0 bottom-0 w-full h-[1px] bg-brand-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                    </span>
                    <span className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-brand-primary">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className="lg:col-span-3 flex flex-col gap-6">
            <h3 className="font-eina text-sm uppercase tracking-widest text-neutral-500 mb-2">
              Services
            </h3>
            <ul className="flex flex-col gap-4">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="group flex items-start text-lg font-eina font-light text-neutral-300 hover:text-brand-primary transition-colors"
                  >
                    <span className="cursor-pointer transition-transform duration-300 group-hover:translate-x-1">
                      {service.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants} className="lg:col-span-3 flex flex-col gap-6">
            <h3 className="font-eina text-sm uppercase tracking-widest text-neutral-500 mb-2">
              Contact
            </h3>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+919876543210"
                className="group flex items-center gap-4 text-lg text-neutral-300 hover:text-white transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-all duration-300 text-brand-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <span>+91 98765 43210</span>
              </a>
              <a
                href="mailto:info@fagnus.com"
                className="group flex items-center gap-4 text-lg text-neutral-300 hover:text-white transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-all duration-300 text-brand-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
                <span>info@fagnus.com</span>
              </a>
              <div className="flex items-start gap-4 text-lg text-neutral-300">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/5 text-brand-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <span>
                  Calicut, Kerala,
                  <br />
                  India
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-neutral-500 text-sm font-eina">
            © {new Date().getFullYear()} Fagnus. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link
              href="/privacy"
              className="text-neutral-500 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-neutral-500 hover:text-white text-sm transition-colors"
            >
              Terms of Use
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;