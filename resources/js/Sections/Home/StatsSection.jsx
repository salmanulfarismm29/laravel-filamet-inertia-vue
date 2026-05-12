import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * StatsSection — Homepage animated statistics counter
 *
 * Numbers animate from 0 to their target value when they scroll into view.
 * Uses a custom useCounter hook so each number runs independently.
 * Stats are sourced from the About page figures for consistency.
 */

const STATS = [
    { value: 20,   suffix: '+', label: 'Years of Experience',  icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
    { value: 1000, suffix: '+', label: 'Projects Completed',   icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' },
    { value: 950,  suffix: '+', label: 'Satisfied Clients',    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' },
    { value: 16,   suffix: '+', label: 'Service Categories',   icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' },
];

/**
 * Animates a number from 0 → target over `duration` ms once `active` is true.
 * @param {number} target
 * @param {number} duration  milliseconds
 * @param {boolean} active   starts the counter when true
 */
function useCounter(target, duration, active) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!active) return;

        let startTime = null;
        let frame;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out quad for a natural deceleration
            const eased = 1 - (1 - progress) ** 3;
            setCount(Math.round(eased * target));
            if (progress < 1) {
                frame = requestAnimationFrame(animate);
            }
        };

        frame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frame);
    }, [active, target, duration]);

    return count;
}

/** Single stat card with animated counter */
function StatCard({ stat, index }) {
    const ref = useRef(null);
    // Trigger once when the card enters the viewport
    const inView = useInView(ref, { once: true, margin: '-80px' });
    const count = useCounter(stat.value, 1800, inView);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.12, ease: 'easeOut' }}
            className="flex flex-col items-center text-center group"
        >
            {/* Icon circle */}
            <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center mb-5 group-hover:bg-brand-primary/20 transition-colors duration-300">
                <svg className="w-7 h-7 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={stat.icon} />
                </svg>
            </div>

            {/* Animated number */}
            <div className="font-eina font-bold text-5xl md:text-6xl text-brand-neutral-900 mb-2 tabular-nums">
                {count.toLocaleString()}{stat.suffix}
            </div>

            {/* Label */}
            <div className="font-eina text-sm font-medium text-brand-neutral-500 uppercase tracking-widest">
                {stat.label}
            </div>
        </motion.div>
    );
}

export default function StatsSection() {
    return (
        <section className="py-20 bg-white border-y border-brand-neutral-200">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
                    {STATS.map((stat, index) => (
                        <StatCard key={stat.label} stat={stat} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
