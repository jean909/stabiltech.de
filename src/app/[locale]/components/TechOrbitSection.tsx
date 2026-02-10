/**
 * TechOrbitSection - Interactive orbiting tech icons.
 * Click any icon to expand details about that technology.
 */
'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import {
  SiReact, SiNextdotjs, SiTypescript, SiPython, SiFlutter,
  SiNodedotjs, SiDocker, SiKotlin, SiSwift, SiPostgresql,
  SiTailwindcss, SiGit, SiOdoo, SiAndroid, SiApple, SiAmazon
} from 'react-icons/si';

interface TechItem {
  id: string;
  Icon: any;
  name: string;
  category: string;
  description: string;
  useCase: string;
  orbit: number; // 0=outer, 1=mid, 2=inner
  offset: number; // degrees
}

const techItems: TechItem[] = [
  // Orbit 0 - outer
  { id: 'react', Icon: SiReact, name: 'React', category: 'Frontend', orbit: 0, offset: 0,
    description: 'A JavaScript library for building user interfaces. We use React for all our web applications.',
    useCase: 'Web apps, dashboards, SPAs, interactive UIs' },
  { id: 'python', Icon: SiPython, name: 'Python', category: 'Backend', orbit: 0, offset: 60,
    description: 'Versatile language for backend, automation, and data. Our go-to for Odoo development and scripting.',
    useCase: 'Odoo modules, APIs, automation, data processing' },
  { id: 'flutter', Icon: SiFlutter, name: 'Flutter', category: 'Mobile', orbit: 0, offset: 120,
    description: 'Google\'s UI toolkit for cross-platform mobile apps. One codebase for iOS and Android.',
    useCase: 'Cross-platform mobile apps, MVPs, prototypes' },
  { id: 'docker', Icon: SiDocker, name: 'Docker', category: 'DevOps', orbit: 0, offset: 180,
    description: 'Containerization for consistent deployments. Every project runs in isolated environments.',
    useCase: 'Deployment, CI/CD, local development, scaling' },
  { id: 'aws', Icon: SiAmazon, name: 'AWS', category: 'Cloud', orbit: 0, offset: 240,
    description: 'Amazon Web Services for reliable, scalable cloud infrastructure.',
    useCase: 'Hosting, S3 storage, Lambda, RDS databases' },
  { id: 'odoo', Icon: SiOdoo, name: 'Odoo', category: 'ERP', orbit: 0, offset: 300,
    description: 'Open-source ERP system. We are certified partners for implementation and customization.',
    useCase: 'ERP, CRM, inventory, accounting, HR' },

  // Orbit 1 - middle
  { id: 'nextjs', Icon: SiNextdotjs, name: 'Next.js', category: 'Framework', orbit: 1, offset: 30,
    description: 'The React framework for production. Server-side rendering, static generation, and API routes.',
    useCase: 'Corporate sites, e-commerce, SaaS platforms' },
  { id: 'nodejs', Icon: SiNodedotjs, name: 'Node.js', category: 'Backend', orbit: 1, offset: 120,
    description: 'JavaScript runtime for server-side development. Fast, scalable backend services.',
    useCase: 'REST APIs, real-time apps, microservices' },
  { id: 'tailwind', Icon: SiTailwindcss, name: 'Tailwind CSS', category: 'Styling', orbit: 1, offset: 210,
    description: 'Utility-first CSS framework for rapid UI development without leaving your HTML.',
    useCase: 'All web projects, responsive design, theming' },
  { id: 'kotlin', Icon: SiKotlin, name: 'Kotlin', category: 'Mobile', orbit: 1, offset: 300,
    description: 'Modern language for Android development. Concise, safe, and fully interoperable with Java.',
    useCase: 'Native Android apps, backend services' },

  // Orbit 2 - inner
  { id: 'typescript', Icon: SiTypescript, name: 'TypeScript', category: 'Language', orbit: 2, offset: 0,
    description: 'Typed JavaScript for large-scale applications. We use TypeScript on every project.',
    useCase: 'All frontend & backend JS/TS projects' },
  { id: 'swift', Icon: SiSwift, name: 'Swift', category: 'Mobile', orbit: 2, offset: 90,
    description: 'Apple\'s language for iOS, macOS, and beyond. Fast, modern, and safe.',
    useCase: 'Native iOS apps, watchOS, macOS apps' },
  { id: 'postgresql', Icon: SiPostgresql, name: 'PostgreSQL', category: 'Database', orbit: 2, offset: 180,
    description: 'The world\'s most advanced open-source relational database.',
    useCase: 'All projects requiring relational data storage' },
  { id: 'git', Icon: SiGit, name: 'Git', category: 'Tooling', orbit: 2, offset: 270,
    description: 'Version control for every project. Clean branching strategies and code reviews.',
    useCase: 'All projects, CI/CD pipelines, collaboration' },
];

const orbitConfig = [
  { inset: 'inset-0', duration: 35, direction: 1, iconSize: 'w-12 h-12', iconInner: 'w-6 h-6', border: 'border-neutral-800' },
  { inset: 'inset-16', duration: 25, direction: -1, iconSize: 'w-10 h-10', iconInner: 'w-5 h-5', border: 'border-neutral-800' },
  { inset: 'inset-32', duration: 18, direction: 1, iconSize: 'w-9 h-9', iconInner: 'w-4 h-4', border: 'border-neutral-800' },
];

export function TechOrbitSection() {
  const t = useTranslations('techOrbit');
  const [selected, setSelected] = useState<TechItem | null>(null);
  const [paused, setPaused] = useState(false);

  return (
    <section className="py-20 md:py-28 bg-black relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="text-center mb-16">
          <p className="text-neutral-500 uppercase tracking-[0.3em] text-xs font-medium mb-4">{t('subtitle')}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('title')}</h2>
          <p className="text-neutral-400 text-lg max-w-xl mx-auto">{t('hint')}</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          {/* Orbit visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative w-full max-w-lg aspect-square flex-shrink-0"
          >
            {/* Orbit rings (visual only, no pointer events) */}
            {orbitConfig.map((orbit, i) => (
              <div key={`ring-${i}`} className={`absolute ${orbit.inset} rounded-full border ${orbit.border} pointer-events-none`} />
            ))}

            {/* Center logo */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-20 h-20 border border-neutral-700 rounded-2xl bg-black flex items-center justify-center">
                <span className="text-4xl font-bold text-white">&lt;/&gt;</span>
              </div>
            </div>

            {/* Orbiting icons */}
            {techItems.map((tech) => {
              const orbit = orbitConfig[tech.orbit];
              const dur = orbit.duration;
              const dir = orbit.direction;

              return (
                <motion.div
                  key={tech.id}
                  className={`absolute ${orbit.inset} pointer-events-none`}
                  animate={paused ? {} : { rotate: 360 * dir }}
                  transition={{ duration: dur, repeat: Infinity, ease: 'linear' }}
                  style={{ rotate: tech.offset }}
                >
                  <motion.button
                    onClick={() => { setSelected(tech); setPaused(true); }}
                    className={`pointer-events-auto absolute left-1/2 -translate-x-1/2 -top-6 ${orbit.iconSize} bg-black border border-neutral-700 rounded-xl flex items-center justify-center hover:border-white hover:bg-neutral-900 transition-colors cursor-pointer z-10 ${selected?.id === tech.id ? 'border-white bg-neutral-800' : ''}`}
                    animate={paused ? {} : { rotate: -360 * dir }}
                    transition={{ duration: dur, repeat: Infinity, ease: 'linear' }}
                    style={{ rotate: -tech.offset }}
                    whileHover={{ scale: 1.2 }}
                  >
                    <tech.Icon className={`${orbit.iconInner} text-neutral-300 hover:text-white transition-colors`} />
                  </motion.button>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Detail panel */}
          <div className="flex-1 min-h-[300px] flex items-center">
            <AnimatePresence mode="wait">
              {selected ? (
                <motion.div
                  key={selected.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                >
                  <div className="border border-neutral-800 rounded-2xl p-8 relative">
                    {/* Close */}
                    <button
                      onClick={() => { setSelected(null); setPaused(false); }}
                      className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>

                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-neutral-900 border border-neutral-700 rounded-xl flex items-center justify-center">
                        <selected.Icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{selected.name}</h3>
                        <span className="text-xs uppercase tracking-wider text-neutral-500 font-medium">{selected.category}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-neutral-300 leading-relaxed mb-6">{selected.description}</p>

                    {/* Use case */}
                    <div className="bg-neutral-900 rounded-xl p-4 border border-neutral-800">
                      <p className="text-xs uppercase tracking-wider text-neutral-500 font-medium mb-2">{t('useCases')}</p>
                      <p className="text-neutral-300 text-sm">{selected.useCase}</p>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full text-center lg:text-left"
                >
                  <div className="border border-dashed border-neutral-800 rounded-2xl p-12 flex flex-col items-center lg:items-start">
                    <p className="text-neutral-600 text-lg">
                      ← {t('selectHint')}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-6">
                      {techItems.map(t => (
                        <button
                          key={t.id}
                          onClick={() => { setSelected(t); setPaused(true); }}
                          className="text-xs text-neutral-500 border border-neutral-800 px-3 py-1.5 rounded-lg hover:text-white hover:border-neutral-600 transition-colors"
                        >
                          {t.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
