'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowRight, Handshake, Shield, Zap, Globe, CheckCircle } from 'lucide-react';

export function B2BPage() {
  const t = useTranslations('b2bPage');

  const benefits = [
    { icon: Shield, title: t('whiteLabel'), desc: t('whiteLabelDesc') },
    { icon: Zap, title: t('overflow'), desc: t('overflowDesc') },
    { icon: Globe, title: t('multilingual'), desc: t('multilingualDesc') },
  ];

  const models = [
    { title: t('projectBased'), desc: t('projectBasedDesc'), features: [t('projectBasedF1'), t('projectBasedF2'), t('projectBasedF3')] },
    { title: t('teamExt'), desc: t('teamExtDesc'), features: [t('teamExtF1'), t('teamExtF2'), t('teamExtF3')] },
    { title: t('longTerm'), desc: t('longTermDesc'), features: [t('longTermF1'), t('longTermF2'), t('longTermF3')] },
  ];

  return (
    <div>
      <section className="bg-black py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-neutral-500 uppercase tracking-[0.3em] text-xs font-medium mb-6">{t('tagline')}</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">{t('title')}</h1>
            <p className="text-xl text-neutral-400 leading-relaxed max-w-2xl">{t('desc')}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white border border-neutral-200 rounded-xl p-8 hover:border-black hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4"><b.icon className="w-6 h-6 text-white" /></div>
                <h3 className="text-lg font-bold text-black mb-2">{b.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="text-neutral-500 uppercase tracking-[0.3em] text-xs font-medium mb-4">{t('modelsTagline')}</p>
            <h2 className="text-3xl font-bold text-black">{t('modelsTitle')}</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {models.map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }} className="border border-neutral-200 rounded-xl p-8 hover:border-black hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-black mb-2">{m.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-4">{m.desc}</p>
                <ul className="space-y-2">{m.features.map((f, j) => <li key={j} className="flex items-center gap-2 text-sm text-neutral-700"><CheckCircle className="w-4 h-4 text-black" />{f}</li>)}</ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Handshake className="w-12 h-12 text-neutral-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">{t('ctaTitle')}</h2>
            <p className="text-neutral-400 mb-8 max-w-xl mx-auto">{t('ctaDesc')}</p>
            <a href="/#contact" className="inline-flex items-center gap-2 bg-white text-black font-semibold px-8 py-4 rounded-md hover:bg-neutral-200 transition-colors group">
              {t('ctaButton')} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
