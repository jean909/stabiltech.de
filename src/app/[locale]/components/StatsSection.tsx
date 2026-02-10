/**
 * StatsSection - Animated progress bars with counters.
 */
'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Users, Code, Award, Zap } from 'lucide-react';

function StatBar({ icon: Icon, label, value, maxValue, suffix, delay }: {
  icon: any; label: string; value: number; maxValue: number; suffix: string; delay: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start: number; let frame: number;
    const run = (ts: number) => {
      if (!start) start = ts;
      const p = (ts - start) / 2000;
      if (p < 1) { setCount(Math.floor(value * p)); frame = requestAnimationFrame(run); }
      else setCount(value);
    };
    frame = requestAnimationFrame(run);
    return () => cancelAnimationFrame(frame);
  }, [value, isInView]);

  const pct = (value / maxValue) * 100;

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ delay, duration: 0.5 }}>
      <div className="border border-neutral-200 rounded-xl p-6 hover:border-neutral-400 hover:shadow-lg transition-all duration-300">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="text-3xl font-bold text-black">{count}{suffix}</div>
            <div className="text-sm text-neutral-500">{label}</div>
          </div>
        </div>
        <div className="h-2 bg-neutral-100 rounded-full overflow-hidden">
          <motion.div initial={{ width: 0 }} animate={isInView ? { width: `${pct}%` } : {}}
            transition={{ duration: 1.5, delay: delay + 0.3, ease: 'easeOut' }}
            className="h-full bg-black rounded-full relative overflow-hidden">
            <motion.div animate={{ x: ['-100%', '100%'] }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export function StatsSection() {
  const t = useTranslations('stats');

  const stats = [
    { icon: Users, label: t('clients'),    value: 150, maxValue: 200, suffix: '+' },
    { icon: Code,  label: t('projects'),   value: 200, maxValue: 250, suffix: '+' },
    { icon: Award, label: t('experience'), value: 10,  maxValue: 15,  suffix: '+' },
    { icon: Zap,   label: t('success'),    value: 98,  maxValue: 100, suffix: '%' },
  ];

  return (
    <section className="py-20 md:py-28 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="text-center mb-16">
          <p className="text-neutral-500 uppercase tracking-[0.3em] text-xs font-medium mb-4">{t('tagline')}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-black">{t('title')}</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {stats.map((s, i) => (
            <StatBar key={i} icon={s.icon} label={s.label} value={s.value} maxValue={s.maxValue} suffix={s.suffix} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
