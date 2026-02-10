'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Menu, X, Smartphone, Globe, Settings, TrendingUp, Database, Code, Users, Mail, ChevronDown, Brain, Heart } from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { motion, AnimatePresence } from 'framer-motion';

type DropdownKey = 'services' | 'company' | null;

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = useTranslations('nav');
  const tm = useTranslations('menu');

  const serviceItems = [
    { icon: Smartphone,  title: tm('mobileApps'),  desc: tm('mobileAppsDesc'),  href: '/services/mobile' },
    { icon: Globe,       title: tm('webDev'),       desc: tm('webDevDesc'),       href: '/services/web' },
    { icon: Settings,    title: tm('mgmtSystems'),  desc: tm('mgmtSystemsDesc'),  href: '/services/management' },
    { icon: TrendingUp,  title: tm('seoOpt'),       desc: tm('seoOptDesc'),       href: '/services/seo' },
    { icon: Database,    title: tm('erpInt'),        desc: tm('erpIntDesc'),        href: '/services/erp' },
    { icon: Code,        title: tm('customSol'),     desc: tm('customSolDesc'),     href: '/services/custom' },
    { icon: Brain,       title: tm('ai'),             desc: tm('aiDesc'),             href: '/services/ai' },
    { icon: TrendingUp,  title: tm('seoGuide'),      desc: tm('seoGuideDesc'),      href: '/seo-guide' },
  ];

  const companyItems = [
    { icon: Users,      title: tm('aboutUs'),    desc: tm('aboutUsDesc'),    href: '/about' },
    { icon: Smartphone, title: tm('careers'),     desc: tm('careersDesc'),     href: '/careers' },
    { icon: Globe,      title: tm('b2b'),         desc: tm('b2bDesc'),         href: '/b2b' },
    { icon: Code,       title: tm('freelancer'),  desc: tm('freelancerDesc'),  href: '/freelancer' },
    { icon: Heart,      title: tm('charity'),     desc: tm('charityDesc'),     href: '/charity' },
    { icon: Globe,      title: tm('opensource'),  desc: tm('opensourceDesc'),  href: '/opensource' },
  ];

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setIsMenuOpen(false);
    setActiveDropdown(null);

    if (href.startsWith('#')) {
      const el = document.getElementById(href.slice(1));
      if (el) {
        // Element exists on current page — smooth scroll
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Element not on this page — go to homepage + anchor
        window.location.href = '/' + href;
      }
    } else {
      window.location.href = href;
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black ${
        isScrolled ? 'border-b border-neutral-800' : ''
      }`}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={() => handleNav('#hero')} className="group">
            <span
              className="text-base md:text-lg font-bold text-white group-hover:text-neutral-300 transition-colors tracking-tight"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              <span className="text-neutral-500">&lt;</span>Stabil<span className="text-neutral-400">Tech</span><span className="text-neutral-500">/&gt;</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {/* Home */}
            <button onClick={() => handleNav('#hero')} className="px-4 py-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors">
              {t('home')}
            </button>

            {/* Services Dropdown */}
            <div className="relative" onMouseEnter={() => setActiveDropdown('services')} >
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors">
                {t('services')}
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Company Dropdown */}
            <div className="relative" onMouseEnter={() => setActiveDropdown('company')}>
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors">
                {t('company')}
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'company' ? 'rotate-180' : ''}`} />
              </button>
            </div>

            <button onClick={() => handleNav('#contact')} className="px-4 py-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors">
              {t('contact')}
            </button>

            <div className="ml-4">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-3 md:hidden">
            <LanguageSwitcher />
            <button onClick={() => { setIsMenuOpen(!isMenuOpen); setActiveDropdown(null); }} className="text-white p-2">
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Backdrop blur overlay */}
      <AnimatePresence>
        {activeDropdown && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="hidden md:block fixed inset-x-0 top-16 bottom-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={() => setActiveDropdown(null)}
          />
        )}
      </AnimatePresence>

      {/* Mega Dropdown */}
      <AnimatePresence>
        {activeDropdown && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="hidden md:block absolute left-0 right-0 bg-black border-t border-neutral-800 shadow-2xl z-50"
            onMouseEnter={() => setActiveDropdown(activeDropdown)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {activeDropdown === 'services' && (
                <div>
                  <p className="text-neutral-500 uppercase tracking-[0.3em] text-[10px] font-medium mb-6">{t('services')}</p>
                  <div className="grid grid-cols-3 gap-4">
                    {serviceItems.map((item, i) => (
                      <button
                        key={i}
                        onClick={() => handleNav(item.href)}
                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-neutral-900 transition-colors text-left group"
                      >
                        <div className="w-10 h-10 bg-neutral-900 group-hover:bg-white rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                          <item.icon className="w-5 h-5 text-neutral-400 group-hover:text-black transition-colors" />
                        </div>
                        <div>
                          <div className="text-white font-medium mb-0.5">{item.title}</div>
                          <div className="text-neutral-500 text-sm">{item.desc}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {activeDropdown === 'company' && (
                <div>
                  <p className="text-neutral-500 uppercase tracking-[0.3em] text-[10px] font-medium mb-6">{t('company')}</p>
                  <div className="grid grid-cols-3 gap-4">
                    {companyItems.map((item, i) => (
                      <button
                        key={i}
                        onClick={() => handleNav(item.href)}
                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-neutral-900 transition-colors text-left group"
                      >
                        <div className="w-10 h-10 bg-neutral-900 group-hover:bg-white rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                          <item.icon className="w-5 h-5 text-neutral-400 group-hover:text-black transition-colors" />
                        </div>
                        <div>
                          <div className="text-white font-medium mb-0.5">{item.title}</div>
                          <div className="text-neutral-500 text-sm">{item.desc}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-t border-neutral-800 overflow-hidden"
          >
            <div className="px-4 py-4">
              <button onClick={() => handleNav('#hero')} className="block w-full text-left px-4 py-3 text-neutral-400 hover:text-white">
                {t('home')}
              </button>

              {/* Mobile Services */}
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
                className="flex items-center justify-between w-full px-4 py-3 text-neutral-400 hover:text-white"
              >
                {t('services')}
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'services' && (
                <div className="pl-4 pb-2">
                  {serviceItems.map((item, i) => (
                    <button key={i} onClick={() => handleNav(item.href)} className="flex items-center gap-3 w-full px-4 py-2.5 text-neutral-500 hover:text-white text-sm">
                      <item.icon className="w-4 h-4" />
                      {item.title}
                    </button>
                  ))}
                </div>
              )}

              {/* Mobile Company */}
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'company' ? null : 'company')}
                className="flex items-center justify-between w-full px-4 py-3 text-neutral-400 hover:text-white"
              >
                {t('company')}
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'company' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'company' && (
                <div className="pl-4 pb-2">
                  {companyItems.map((item, i) => (
                    <button key={i} onClick={() => handleNav(item.href)} className="flex items-center gap-3 w-full px-4 py-2.5 text-neutral-500 hover:text-white text-sm">
                      <item.icon className="w-4 h-4" />
                      {item.title}
                    </button>
                  ))}
                </div>
              )}

              <button onClick={() => handleNav('#contact')} className="block w-full text-left px-4 py-3 text-neutral-400 hover:text-white">
                {t('contact')}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
