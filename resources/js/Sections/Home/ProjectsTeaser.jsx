import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';

/**
 * ProjectsTeaser — Homepage "Recent Projects" gallery preview
 *
 * Shows 3 representative project cards with an overlay design.
 * Each card shows: category badge, title, description, and a hover CTA.
 * Links to /gallery for the full portfolio.
 *
 * Images use gradient placeholders with category-specific accent colours
 * until real project photos are uploaded to /storage/projects/.
 */

const PROJECTS = [
    {
        id: 1,
        category: 'Energy Solutions',
        title: 'Rooftop Solar Installation — Commercial Building',
        description: '80kWp on-grid solar system reducing energy costs by 65%.',
        accent: 'from-orange-600 to-amber-500',
        icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z',
    },
    {
        id: 2,
        category: 'ELV Solutions',
        title: 'Integrated CCTV & Access Control — Office Complex',
        description: '64-camera HD surveillance with biometric access at all entry points.',
        accent: 'from-slate-700 to-slate-500',
        icon: 'M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
    },
    {
        id: 3,
        category: 'IT Hardware Solutions',
        title: 'Full IT Setup — New Office Fitout',
        description: 'Workstations, networking, printer deployment and structured cabling.',
        accent: 'from-brand-primary to-red-700',
        icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    },
];

/** Category badge colour mapping */
const BADGE_COLOURS = {
    'Energy Solutions':      'bg-amber-100 text-amber-700',
    'ELV Solutions':         'bg-slate-100 text-slate-700',
    'IT Hardware Solutions': 'bg-red-50 text-brand-primary',
};

function ProjectCard({ project, index }) {
    const imageUrl = project.images && project.images.length > 0 ? project.images[0].url : null;
    const accent = project.accent || 'from-slate-700 to-slate-500';
    const icon = project.icon || 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z';

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 flex flex-col h-full"
        >
            {imageUrl ? (
                <div className="h-56 relative overflow-hidden shrink-0">
                    <img 
                        src={imageUrl} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                </div>
            ) : (
                <div className={`h-56 shrink-0 bg-gradient-to-br ${accent} relative`}>
                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                        <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d={icon} />
                        </svg>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-500" />
                </div>
            )}

            {/* Content */}
            <div className="bg-white p-6 flex flex-col grow">
                {/* Category badge - only render if project has a category (hardcoded ones) */}
                {project.category && (
                    <div className="mb-3">
                        <span className={`inline-block text-xs font-eina font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${BADGE_COLOURS[project.category] ?? 'bg-gray-100 text-gray-600'}`}>
                            {project.category}
                        </span>
                    </div>
                )}

                <h3 className="font-eina font-bold text-lg text-brand-neutral-900 mb-2 leading-snug group-hover:text-brand-primary transition-colors duration-300">
                    {project.title}
                </h3>

                <p className="font-eina font-light text-sm text-brand-neutral-500 leading-relaxed line-clamp-3">
                    {project.description}
                </p>
            </div>
        </motion.div>
    );
}

export default function ProjectsTeaser({ items = [] }) {
    const displayItems = items.length > 0 ? items : PROJECTS;

    return (
        <section className="py-20 bg-brand-neutral-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <span className="font-eina text-sm font-medium text-brand-primary uppercase tracking-widest mb-3 inline-block">
                        Our Work
                    </span>
                    <h2 className="font-eina font-bold text-4xl md:text-5xl text-brand-neutral-900 tracking-tight mb-4">
                        Recent Projects
                    </h2>
                    <p className="font-eina font-light text-lg text-brand-neutral-600 max-w-2xl mx-auto">
                        A snapshot of the installations and deployments our team has delivered.
                    </p>
                </motion.div>

                {/* Cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {displayItems.map((project, index) => (
                        <ProjectCard key={project.id || index} project={project} index={index} />
                    ))}
                </div>

                {/* View all link */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <Link
                        href="/gallery"
                        className="inline-flex items-center gap-2 text-brand-primary font-eina font-semibold text-lg hover:gap-4 transition-all duration-300"
                    >
                        View Full Gallery
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
