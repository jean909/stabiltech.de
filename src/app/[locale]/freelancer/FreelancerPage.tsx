'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Smartphone, Database, Palette, CheckCircle } from 'lucide-react';

export function FreelancerPage() {
  const t = useTranslations('freelancerPage');

  const j = useTranslations('jobs');

  const roles = [
    { icon: Code, title: j('role1'), skills: 'React, Next.js, TypeScript, Vue.js' },
    { icon: Smartphone, title: j('role2'), skills: 'React Native, Flutter, Swift, Kotlin' },
    { icon: Database, title: j('role3'), skills: 'Odoo, Python, Node.js, PostgreSQL' },
    { icon: Palette, title: j('role4'), skills: 'Figma, Design Systems, Prototyping' },
  ];

  const perks = [t('perk1'), t('perk2'), t('perk3'), t('perk4'), t('perk5'), t('perk6')];

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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <p className="text-neutral-500 uppercase tracking-[0.3em] text-xs font-medium mb-4">{t('lookingFor')}</p>
            <h2 className="text-3xl font-bold text-black">{t('rolesTitle')}</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {roles.map((role, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="border border-neutral-200 rounded-xl p-6 hover:border-black hover:shadow-lg transition-all">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center"><role.icon className="w-5 h-5 text-white" /></div>
                  <h3 className="font-bold text-black">{role.title}</h3>
                </div>
                <p className="text-neutral-500 text-sm ml-14">{role.skills}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <p className="text-neutral-500 uppercase tracking-[0.3em] text-xs font-medium mb-4">{t('benefitsTagline')}</p>
            <h2 className="text-3xl font-bold text-black">{t('benefitsTitle')}</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {perks.map((perk, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 p-4 bg-white rounded-lg border border-neutral-200">
                <CheckCircle className="w-5 h-5 text-black flex-shrink-0" />
                <span className="text-neutral-700 text-sm">{perk}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
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
