'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Heart, Users, Globe, ArrowRight, Mail } from 'lucide-react';

export function CharityPage() {
  const t = useTranslations('charityPage');

  const commitments = [
    { icon: Heart, title: t('proBono'), desc: t('proBonoDesc') },
    { icon: Users, title: t('mentorship'), desc: t('mentorshipDesc') },
    { icon: Globe, title: t('community'), desc: t('communityDesc') },
  ];

  const ways = [t('inv1'), t('inv2'), t('inv3'), t('inv4')];

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

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <p className="text-neutral-500 uppercase tracking-[0.3em] text-xs font-medium mb-4">{t('whatWeDoTagline')}</p>
            <h2 className="text-3xl font-bold text-black">{t('whatWeDoTitle')}</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {commitments.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -6 }}
                className="border border-neutral-200 rounded-xl p-8 hover:border-black hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-black mb-2">{item.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <p className="text-neutral-500 uppercase tracking-[0.3em] text-xs font-medium mb-4">{t('involveTagline')}</p>
            <h2 className="text-3xl font-bold text-black">{t('involveTitle')}</h2>
          </motion.div>
          <div className="space-y-4">
            {ways.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 p-4 bg-white rounded-lg border border-neutral-200">
                <Heart className="w-5 h-5 text-black flex-shrink-0" />
                <span className="text-neutral-700 text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Heart className="w-12 h-12 text-neutral-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">{t('ctaTitle')}</h2>
            <p className="text-neutral-400 mb-8 max-w-xl mx-auto">{t('ctaDesc')}</p>
            <a href="/#contact" className="inline-flex items-center gap-2 bg-white text-black font-semibold px-8 py-4 rounded-md hover:bg-neutral-200 transition-colors group">
              <Mail className="w-4 h-4" /> {t('ctaButton')} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
