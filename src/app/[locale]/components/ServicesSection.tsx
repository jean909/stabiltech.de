/**
 * ServicesSection - Displays service offerings grid + ERP highlight
 * 
 * Each card links to its dedicated /services/[slug] page.
 * Translations loaded from messages/{locale}.json -> services & erp keys.
 */
'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Smartphone, Globe, Settings, TrendingUp, Database, Code, ArrowRight, Brain } from 'lucide-react';
import { SERVICE_SLUGS } from '@/lib/constants';

const icons: Record<string, any> = {
  mobile: Smartphone, web: Globe, management: Settings,
  seo: TrendingUp, erp: Database, custom: Code, ai: Brain,
};

export function ServicesSection() {
  const t = useTranslations('services');
  const tErp = useTranslations('erp');
  const tSec = useTranslations('sections');

  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-neutral-500 uppercase tracking-[0.3em] text-xs font-medium mb-4">{tSec('whatWeDo')}</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-black">{t('title')}</h2>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_SLUGS.map((s, i) => {
            const Icon = icons[s];
            return (
              <motion.div
                key={s}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group"
              >
                <a href={`/services/${s}`} className="block h-full bg-white border border-neutral-200 rounded-xl p-8 hover:border-black hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 bg-black rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">{t(`${s}.title`)}</h3>
                  <p className="text-neutral-600 leading-relaxed mb-4">{t(`${s}.description`)}</p>
                  <span className="inline-flex items-center text-sm font-medium text-black group-hover:gap-2 transition-all">
                    {tSec('learnMore')} <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* ERP Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-black rounded-2xl p-10 md:p-16">
            <div className="text-center mb-12">
              <p className="text-neutral-500 uppercase tracking-[0.3em] text-xs font-medium mb-4">{tSec('enterprise')}</p>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{tErp('title')}</h3>
              <p className="text-neutral-400 text-lg max-w-2xl mx-auto">{tErp('subtitle')}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Database, text: tErp('odoo') },
                { icon: Code, text: tErp('plentymarkets') },
                { icon: Settings, text: tErp('custom') }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -6 }}
                  className="border border-neutral-700 rounded-xl p-8 text-center hover:border-neutral-500 hover:bg-white/5 transition-all"
                >
                  <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-black" />
                  </div>
                  <p className="text-white font-medium">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
