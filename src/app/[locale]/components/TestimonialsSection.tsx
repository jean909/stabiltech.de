/**
 * TestimonialsSection - Carousel with client reviews and metrics.
 */
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonialData = [
  { name: 'Thomas M.', role: 'CEO, LogiTrans GmbH',
    text: 'StabilTech built our entire warehouse management system from scratch. It reduced our processing time by 60%. Professional team, clean code, on-time delivery.',
    stars: 5, metric: '60%', metricKey: 'm1' },
  { name: 'Anna K.', role: 'Marketing Director, ShopElite',
    text: 'Our e-commerce platform went from loading in 8 seconds to under 2. Organic traffic increased by 340% after their SEO work. Highly recommended.',
    stars: 5, metric: '340%', metricKey: 'm2' },
  { name: 'Michael B.', role: 'CTO, DataFlow AG',
    text: 'The Odoo implementation was seamless. They understood our complex workflows and delivered a solution that actually fits how we work. Great communication throughout.',
    stars: 5, metric: '100%', metricKey: 'm3' },
  { name: 'Sandra L.', role: 'Founder, FreshMeals App',
    text: 'They built our iOS and Android app in record time. Beautiful UI, zero crashes since launch, and the users love it. StabilTech is now our go-to partner.',
    stars: 5, metric: '50K+', metricKey: 'm4' },
  { name: 'Klaus W.', role: 'Operations Manager, AutoParts24',
    text: 'Plentymarkets integration with our 3 warehouses was a nightmare before StabilTech. Now everything syncs in real-time. Stock issues dropped to nearly zero.',
    stars: 5, metric: '99.8%', metricKey: 'm5' },
];

export function TestimonialsSection() {
  const t = useTranslations('testimonials');
  const tm = useTranslations('testimonialMetrics');
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = testimonialData.map(td => ({
    ...td,
    metricLabel: tm(td.metricKey),
  }));

  useEffect(() => {
    const timer = setInterval(() => { setDirection(1); setCurrent(p => (p + 1) % testimonials.length); }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const go = (dir: number) => { setDirection(dir); setCurrent(p => (p + dir + testimonials.length) % testimonials.length); };

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0 }),
  };

  const item = testimonials[current];

  return (
    <section className="py-20 md:py-28 bg-black overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="text-center mb-16">
          <p className="text-neutral-500 uppercase tracking-[0.3em] text-xs font-medium mb-4">{t('tagline')}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">{t('title')}</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative min-h-[320px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div key={current} custom={direction} variants={variants}
                initial="enter" animate="center" exit="exit"
                transition={{ duration: 0.4, ease: 'easeInOut' }} className="w-full">
                <div className="text-center px-4">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    className="w-16 h-16 bg-neutral-900 border border-neutral-700 rounded-2xl flex items-center justify-center mx-auto mb-8">
                    <Quote className="w-7 h-7 text-white" />
                  </motion.div>

                  <div className="flex justify-center gap-1.5 mb-6">
                    {Array.from({ length: item.stars }).map((_, j) => (
                      <motion.div key={j} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + j * 0.08 }}>
                        <Star className="w-5 h-5 text-white fill-white" />
                      </motion.div>
                    ))}
                  </div>

                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
                    className="text-2xl md:text-3xl text-white font-light leading-relaxed mb-8 max-w-3xl mx-auto">
                    &ldquo;{item.text}&rdquo;
                  </motion.p>

                  <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, type: 'spring' }}
                    className="inline-flex items-center gap-3 bg-neutral-900 border border-neutral-700 rounded-full px-6 py-3 mb-8">
                    <span className="text-2xl font-bold text-white">{item.metric}</span>
                    <span className="text-neutral-400 text-sm">{item.metricLabel}</span>
                  </motion.div>

                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                    <p className="text-white font-semibold text-lg">{item.name}</p>
                    <p className="text-neutral-500">{item.role}</p>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <motion.button onClick={() => go(-1)} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
              className="w-12 h-12 border border-neutral-700 rounded-full flex items-center justify-center text-neutral-400 hover:text-white hover:border-white transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className="relative w-8 h-1 rounded-full overflow-hidden bg-neutral-800">
                  {i === current && (
                    <motion.div layoutId="activeDot" className="absolute inset-0 bg-white rounded-full"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }} />
                  )}
                </button>
              ))}
            </div>
            <motion.button onClick={() => go(1)} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
              className="w-12 h-12 border border-neutral-700 rounded-full flex items-center justify-center text-neutral-400 hover:text-white hover:border-white transition-colors">
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
