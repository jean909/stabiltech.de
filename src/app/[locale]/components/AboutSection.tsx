/**
 * AboutSection - Company story page with timeline, values, and tech stack.
 */
'use client';

import { useTranslations } from 'next-intl';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Users, Target, Shield, Zap, Globe, Database, Code, Smartphone, Settings, TrendingUp } from 'lucide-react';

function TimelineItem({ year, title, description, index }: { year: string; title: string; description: string; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`flex items-start gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
        <div className="bg-white border border-neutral-200 rounded-xl p-8 hover:border-black hover:shadow-lg transition-all duration-300">
          <p className="text-neutral-400 text-sm font-mono mb-2">{year}</p>
          <h3 className="text-xl font-bold text-black mb-2">{title}</h3>
          <p className="text-neutral-600 leading-relaxed">{description}</p>
        </div>
      </div>
      <div className="hidden md:flex flex-col items-center">
        <div className="w-4 h-4 bg-black rounded-full border-4 border-white shadow" />
        <div className="w-px h-full bg-neutral-200" />
      </div>
      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
}

function ValueCounter({ value, label, suffix }: { value: number; label: string; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start: number; let frame: number;
    const run = (ts: number) => {
      if (!start) start = ts;
      const p = (ts - start) / 1500;
      if (p < 1) { setCount(Math.floor(value * p)); frame = requestAnimationFrame(run); }
      else setCount(value);
    };
    frame = requestAnimationFrame(run);
    return () => cancelAnimationFrame(frame);
  }, [value, isInView]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl font-bold text-black mb-1">{count}{suffix}</div>
      <div className="text-neutral-500 text-sm uppercase tracking-wider">{label}</div>
    </div>
  );
}

export function AboutSection() {
  const t = useTranslations('about');
  const tp = useTranslations('aboutPage');
  const tStats = useTranslations('stats');
  const tl = useTranslations('timeline');
  const tt = useTranslations('tech');

  const timeline = [
    { year: '2014', title: tl('t1title'), description: tl('t1desc') },
    { year: '2016', title: tl('t2title'), description: tl('t2desc') },
    { year: '2018', title: tl('t3title'), description: tl('t3desc') },
    { year: '2020', title: tl('t4title'), description: tl('t4desc') },
    { year: '2023', title: tl('t5title'), description: tl('t5desc') },
  ];

  const technologies = [
    { icon: Globe, name: tt('web'), description: 'React, Next.js, Vue.js, Angular' },
    { icon: Smartphone, name: tt('mobile'), description: 'React Native, Flutter, Swift, Kotlin' },
    { icon: Database, name: tt('odoo'), description: 'Implementation, customization, modules' },
    { icon: Settings, name: tt('plenty'), description: 'E-commerce, marketplaces, automation' },
    { icon: Code, name: tt('custom'), description: 'Node.js, Python, .NET, Java' },
    { icon: TrendingUp, name: tt('seo'), description: 'Technical SEO, performance, tracking' },
  ];

  const values = [
    { icon: Target, title: tp('precision'), description: tp('precisionDesc') },
    { icon: Shield, title: tp('reliability'), description: tp('reliabilityDesc') },
    { icon: Zap, title: tp('speed'), description: tp('speedDesc') },
  ];

  return (
    <section id="about" className="bg-white">
      {/* Hero */}
      <div className="bg-black py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-neutral-500 uppercase tracking-[0.3em] text-xs font-medium mb-6">{tp('ourStory')}</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6">{t('title')}</h1>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">{t('description')}</p>
          </motion.div>
        </div>
      </div>

      {/* Numbers */}
      <div className="bg-neutral-50 py-16 border-b border-neutral-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <ValueCounter value={150} label={tStats('clients')} suffix="+" />
            <ValueCounter value={200} label={tStats('projects')} suffix="+" />
            <ValueCounter value={10} label={tStats('experience')} suffix="+" />
            <ValueCounter value={98} label={tStats('success')} suffix="%" />
          </div>
        </div>
      </div>

      {/* Leadership */}
      <div className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-32 h-32 bg-black rounded-2xl flex items-center justify-center flex-shrink-0">
              <Users className="w-16 h-16 text-white" />
            </div>
            <div>
              <p className="text-neutral-500 uppercase tracking-[0.3em] text-xs font-medium mb-3">{tp('leadership')}</p>
              <h2 className="text-3xl font-bold text-black mb-3">{t('leadership')}</h2>
              <p className="text-neutral-600 leading-relaxed text-lg">{t('mission')}</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Values */}
      <div className="py-20 md:py-28 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-neutral-500 uppercase tracking-[0.3em] text-xs font-medium mb-4">{tp('whatDrivesUs')}</p>
            <h2 className="text-4xl font-bold text-black">{tp('ourValues')}</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -6 }}
                className="bg-white border border-neutral-200 rounded-xl p-8 text-center hover:border-black hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mx-auto mb-5">
                  <v.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">{v.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-neutral-500 uppercase tracking-[0.3em] text-xs font-medium mb-4">{tp('ourJourney')}</p>
            <h2 className="text-4xl font-bold text-black">{tp('theStory')}</h2>
          </motion.div>
          <div className="space-y-8">
            {timeline.map((item, i) => (
              <TimelineItem key={i} year={item.year} title={item.title} description={item.description} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* Technologies */}
      <div className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-neutral-500 uppercase tracking-[0.3em] text-xs font-medium mb-4">{tp('ourStack')}</p>
            <h2 className="text-4xl font-bold text-white mb-4">{tp('techTitle')}</h2>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">{tp('techDesc')}</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {technologies.map((tech, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ y: -6 }}
                className="border border-neutral-800 rounded-xl p-6 hover:border-neutral-600 hover:bg-neutral-900/50 transition-all">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
                  <tech.icon className="w-6 h-6 text-black" />
                </div>
                <h4 className="font-bold text-white mb-2">{tech.name}</h4>
                <p className="text-neutral-400 text-sm leading-relaxed">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
