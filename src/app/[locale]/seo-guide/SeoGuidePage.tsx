/**
 * SeoGuidePage - Free SEO resource with case studies, do's and don'ts.
 * All content loaded from seoGuide + seoContent translation namespaces.
 */
'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ArrowRight, CheckCircle, XCircle, TrendingUp, AlertTriangle, BookOpen } from 'lucide-react';

export function SeoGuidePage() {
  const t = useTranslations('seoGuide');
  const c = useTranslations('seoContent');

  const caseStudies = [
    {
      title: c('cs1title'), industry: c('cs1industry'), duration: c('cs1duration'),
      results: [{ metric: c('cs1m1'), label: c('cs1m1l') }, { metric: c('cs1m2'), label: c('cs1m2l') }, { metric: c('cs1m3'), label: c('cs1m3l') }],
      problem: c('cs1problem'), solution: c('cs1solution'), takeaway: c('cs1takeaway'),
    },
    {
      title: c('cs2title'), industry: c('cs2industry'), duration: c('cs2duration'),
      results: [{ metric: c('cs2m1'), label: c('cs2m1l') }, { metric: c('cs2m2'), label: c('cs2m2l') }, { metric: c('cs2m3'), label: c('cs2m3l') }],
      problem: c('cs2problem'), solution: c('cs2solution'), takeaway: c('cs2takeaway'),
    },
    {
      title: c('cs3title'), industry: c('cs3industry'), duration: c('cs3duration'),
      results: [{ metric: c('cs3m1'), label: c('cs3m1l') }, { metric: c('cs3m2'), label: c('cs3m2l') }, { metric: c('cs3m3'), label: c('cs3m3l') }],
      problem: c('cs3problem'), solution: c('cs3solution'), takeaway: c('cs3takeaway'),
    },
  ];

  const dos = Array.from({ length: 8 }, (_, i) => ({ title: c(`do${i+1}t`), desc: c(`do${i+1}d`) }));
  const donts = Array.from({ length: 8 }, (_, i) => ({ title: c(`dont${i+1}t`), desc: c(`dont${i+1}d`) }));

  return (
    <div>
      {/* Hero */}
      <section className="bg-black py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-6 h-6 text-neutral-400" />
              <p className="text-neutral-500 uppercase tracking-[0.3em] text-xs font-medium">{t('tagline')}</p>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">{t('title')}</h1>
            <p className="text-xl text-neutral-400 leading-relaxed max-w-2xl">{t('desc')}</p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <p className="text-neutral-500 uppercase tracking-[0.3em] text-xs font-medium mb-4">{t('resultsTagline')}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-black">{t('resultsTitle')}</h2>
          </motion.div>
          <div className="space-y-12">
            {caseStudies.map((cs, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="border border-neutral-200 rounded-xl overflow-hidden hover:border-black hover:shadow-lg transition-all">
                <div className="bg-black p-6 grid grid-cols-3 gap-4">
                  {cs.results.map((r, j) => (
                    <div key={j} className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-white">{r.metric}</div>
                      <div className="text-neutral-400 text-xs uppercase tracking-wider">{r.label}</div>
                    </div>
                  ))}
                </div>
                <div className="p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <h3 className="text-xl font-bold text-black">{cs.title}</h3>
                    <span className="text-xs bg-neutral-100 text-neutral-600 px-3 py-1 rounded-full">{cs.industry}</span>
                    <span className="text-xs bg-neutral-100 text-neutral-600 px-3 py-1 rounded-full">{cs.duration}</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-black text-sm mb-2">{t('problem')}</h4>
                      <p className="text-neutral-600 text-sm leading-relaxed">{cs.problem}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black text-sm mb-2">{t('solution')}</h4>
                      <p className="text-neutral-600 text-sm leading-relaxed">{cs.solution}</p>
                    </div>
                  </div>
                  <div className="bg-neutral-50 rounded-lg p-4 flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-black mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-black text-sm">{t('keyTakeaway')}: </span>
                      <span className="text-neutral-600 text-sm">{cs.takeaway}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Do's */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <p className="text-neutral-500 uppercase tracking-[0.3em] text-xs font-medium mb-4">{t('dosTagline')}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-black">{t('dosTitle')}</h2>
          </motion.div>
          <div className="space-y-4">
            {dos.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="bg-white border border-neutral-200 rounded-xl p-6 hover:border-black transition-colors flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-black mb-1">{item.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Don'ts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <p className="text-neutral-500 uppercase tracking-[0.3em] text-xs font-medium mb-4">{t('dontsTagline')}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-black">{t('dontsTitle')}</h2>
          </motion.div>
          <div className="space-y-4">
            {donts.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 hover:border-black transition-colors flex items-start gap-4">
                <XCircle className="w-6 h-6 text-neutral-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-black mb-1">{item.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <TrendingUp className="w-12 h-12 text-neutral-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">{t('ctaTitle')}</h2>
            <p className="text-neutral-400 mb-8">{t('ctaDesc')}</p>
            <a href="/services/seo" className="inline-flex items-center gap-2 bg-white text-black font-semibold px-8 py-4 rounded-md hover:bg-neutral-200 transition-colors group">
              {t('ctaButton')} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
