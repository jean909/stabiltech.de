'use client';

import { useTranslations } from 'next-intl';
import { Mail, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();

  const tm = useTranslations('menu');

  const services = [
    { label: tm('mobileApps'), href: '/services/mobile' },
    { label: tm('webDev'), href: '/services/web' },
    { label: tm('mgmtSystems'), href: '/services/management' },
    { label: tm('seoOpt'), href: '/services/seo' },
    { label: tm('erpInt'), href: '/services/erp' },
    { label: tm('customSol'), href: '/services/custom' },
  ];

  return (
    <footer className="bg-black border-t border-neutral-800">
      {/* CTA Banner */}
      <div className="border-b border-neutral-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{t('companyDesc')}</h3>
            </div>
            <a
              href="/#contact"
              className="flex items-center gap-2 bg-white text-black font-semibold px-8 py-4 rounded-md hover:bg-neutral-200 transition-colors flex-shrink-0 group"
            >
              {t('contact')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3
              className="text-lg font-bold text-white mb-4 tracking-tight"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              <span className="text-neutral-500">&lt;</span>Stabil<span className="text-neutral-400">Tech</span><span className="text-neutral-500">/&gt;</span>
            </h3>
            <p className="text-neutral-500 text-sm mb-6 leading-relaxed">{t('companyDesc')}</p>
            <a
              href="mailto:info@stabiltech.de"
              className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-sm"
            >
              <Mail className="w-4 h-4" />
              info@stabiltech.de
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-[0.2em] mb-6">{t('servicesTitle')}</h4>
            <ul className="space-y-3">
              {services.map((s, i) => (
                <li key={i}>
                  <a href={s.href} className="text-neutral-500 hover:text-white transition-colors text-sm">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-[0.2em] mb-6">{t('companyTitle')}</h4>
            <ul className="space-y-3">
              <li><a href="/about" className="text-neutral-500 hover:text-white transition-colors text-sm">{t('aboutLink')}</a></li>
              <li><a href="/careers" className="text-neutral-500 hover:text-white transition-colors text-sm">{t('careersLink')}</a></li>
              <li><a href="/b2b" className="text-neutral-500 hover:text-white transition-colors text-sm">{t('b2bLink')}</a></li>
              <li><a href="/freelancer" className="text-neutral-500 hover:text-white transition-colors text-sm">{t('freelancerLink')}</a></li>
              <li><a href="/charity" className="text-neutral-500 hover:text-white transition-colors text-sm">{tm('charity')}</a></li>
              <li><a href="/opensource" className="text-neutral-500 hover:text-white transition-colors text-sm">{tm('opensource')}</a></li>
              <li><a href="/#contact" className="text-neutral-500 hover:text-white transition-colors text-sm">{t('contact')}</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-[0.2em] mb-6">{t('legalTitle')}</h4>
            <ul className="space-y-3">
              <li><a href="/impressum" className="text-neutral-500 hover:text-white transition-colors text-sm">{t('impressumLink')}</a></li>
              <li><a href="/datenschutz" className="text-neutral-500 hover:text-white transition-colors text-sm">{t('datenschutzLink')}</a></li>
            </ul>
            <div className="mt-8">
              <p className="text-neutral-600 text-xs">{t('leadership')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-neutral-600 text-xs">
            <p>© {year} StabilTech. {t('rights')}.</p>
            <p>www.stabiltech.de</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
