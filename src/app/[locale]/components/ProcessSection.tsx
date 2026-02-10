/**
 * ProcessSection - 4-step workflow visualization.
 */
'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Lightbulb, Code, Rocket, CheckCircle } from 'lucide-react';

export function ProcessSection() {
  const t = useTranslations('process');

  const steps = [
    { icon: Lightbulb,   title: t('discovery'),    desc: t('discoveryDesc') },
    { icon: Code,        title: t('development'),  desc: t('developmentDesc') },
    { icon: Rocket,      title: t('launch'),       desc: t('launchDesc') },
    { icon: CheckCircle, title: t('support'),      desc: t('supportDesc') },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="text-center mb-16">
          <p className="text-neutral-500 uppercase tracking-[0.3em] text-xs font-medium mb-4">{t('tagline')}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-black">{t('title')}</h2>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-neutral-300 -translate-y-1/2" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.15 }} whileHover={{ y: -8 }}>
                <div className="bg-white border border-neutral-200 rounded-xl p-8 hover:border-black hover:shadow-lg transition-all duration-300 relative">
                  <div className="absolute -top-4 -right-2 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {i + 1}
                  </div>
                  <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2 text-center">{step.title}</h3>
                  <p className="text-neutral-600 text-center text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
