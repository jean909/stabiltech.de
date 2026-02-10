/**
 * SkillsSection - Animated skill bars with visual element.
 */
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslations } from 'next-intl';

function SkillBar({ name, percentage, delay }: { name: string; percentage: number; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div ref={ref} initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay }} className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-black font-medium">{name}</span>
        <span className="text-neutral-500 text-sm font-semibold">{percentage}%</span>
      </div>
      <div className="h-2 bg-neutral-100 rounded-full overflow-hidden">
        <motion.div initial={{ width: 0 }} animate={isInView ? { width: `${percentage}%` } : {}}
          transition={{ duration: 1.2, delay: delay + 0.2, ease: 'easeOut' }}
          className="h-full bg-black rounded-full" />
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  const t = useTranslations('skills');
  const tSvc = useTranslations('services');

  const skills = [
    { name: tSvc('web.title'),        percentage: 95 },
    { name: tSvc('mobile.title'),     percentage: 90 },
    { name: tSvc('erp.title'),        percentage: 88 },
    { name: tSvc('seo.title'),        percentage: 92 },
    { name: 'UI/UX Design',          percentage: 85 },
  ];

  return (
    <section className="py-20 md:py-28 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Visual */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <div className="aspect-square bg-black rounded-2xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />
              <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 4, repeat: Infinity }}
                className="relative z-10 text-center">
                <div className="text-8xl font-bold text-white mb-4">&lt;/&gt;</div>
                <p className="text-neutral-400 text-lg font-medium">{t('visual')}</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-neutral-500 uppercase tracking-[0.3em] text-xs font-medium mb-4">{t('tagline')}</p>
            <h2 className="text-4xl font-bold text-black mb-3">{t('title')}</h2>
            <p className="text-neutral-600 mb-10 leading-relaxed">{t('description')}</p>
            {skills.map((s, i) => (
              <SkillBar key={i} name={s.name} percentage={s.percentage} delay={i * 0.08} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
