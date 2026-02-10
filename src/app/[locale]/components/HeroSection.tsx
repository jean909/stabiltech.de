/**
 * HeroSection - Full-screen landing with typing animation and mini stats.
 */
'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowRight, Users, TrendingUp, Zap } from 'lucide-react';
import { SiReact, SiNextdotjs, SiTypescript, SiPython, SiFlutter, SiNodedotjs, SiDocker, SiKotlin, SiSwift, SiPostgresql, SiTailwindcss, SiGit } from 'react-icons/si';

export function HeroSection() {
  const t = useTranslations('hero');
  const t2 = useTranslations('hero2');
  const tStats = useTranslations('stats');

  const [displayedText, setDisplayedText] = useState('');
  const fullText = t('subtitle');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) { setDisplayedText(fullText.slice(0, i)); i++; }
      else clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, [fullText]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { icon: Users, value: '150+', label: tStats('clients') },
    { icon: TrendingUp, value: '98%', label: tStats('success') },
    { icon: Zap, value: '24/7', label: t2('support') },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:80px_80px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.03] rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-5rem)] py-24">
          {/* Content */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
              className="text-neutral-500 uppercase tracking-[0.3em] text-xs font-medium mb-8">
              {t2('tagline')}
            </motion.p>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-2">
              <span className="text-white">{t('title')}</span>
            </motion.h1>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-400 mb-8 h-16">
              {displayedText}
              <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-0.5 h-10 bg-white ml-1 align-middle" />
            </motion.div>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
              className="text-lg text-neutral-400 mb-10 max-w-lg leading-relaxed">
              {t('description')}
            </motion.p>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
              <motion.button onClick={() => scrollTo('contact')}
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="bg-white text-black font-semibold px-10 py-4 text-base rounded-md hover:bg-neutral-200 transition-colors group">
                {t('cta')}
                <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
              className="flex gap-8 mt-16">
              {stats.map((s, i) => (
                <div key={i} className="border-l border-neutral-700 pl-4">
                  <div className="text-2xl font-bold text-white">{s.value}</div>
                  <div className="text-xs text-neutral-500 uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }} className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border border-neutral-800" />
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-10 rounded-full border border-neutral-800" />
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-20 rounded-full border border-neutral-700" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div animate={{ scale: [1, 1.03, 1] }} transition={{ duration: 4, repeat: Infinity }}
                  className="w-48 h-48 border border-neutral-700 rounded-2xl bg-black flex items-center justify-center">
                  <span className="text-7xl font-bold text-white">&lt;/&gt;</span>
                </motion.div>
              </div>
              {/* Orbit 1 - outer (inset-0) - 4 icons, slow */}
              {[
                { Icon: SiReact,      offset: 0 },
                { Icon: SiPython,     offset: 90 },
                { Icon: SiDocker,     offset: 180 },
                { Icon: SiFlutter,    offset: 270 },
              ].map((item, i) => (
                <motion.div key={`o1-${i}`} className="absolute inset-0"
                  animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                  style={{ rotate: item.offset }}>
                  <motion.div className="absolute left-1/2 -translate-x-1/2 -top-5 w-10 h-10 bg-black border border-neutral-700 rounded-xl flex items-center justify-center"
                    animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }} style={{ rotate: -item.offset }}>
                    <item.Icon className="w-5 h-5 text-white" />
                  </motion.div>
                </motion.div>
              ))}

              {/* Orbit 2 - middle (inset-10) - 4 icons, opposite direction */}
              {[
                { Icon: SiNextdotjs,   offset: 45 },
                { Icon: SiNodedotjs,   offset: 135 },
                { Icon: SiTailwindcss, offset: 225 },
                { Icon: SiKotlin,      offset: 315 },
              ].map((item, i) => (
                <motion.div key={`o2-${i}`} className="absolute inset-10"
                  animate={{ rotate: -360 }} transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
                  style={{ rotate: item.offset }}>
                  <motion.div className="absolute left-1/2 -translate-x-1/2 -top-4 w-9 h-9 bg-black border border-neutral-800 rounded-lg flex items-center justify-center"
                    animate={{ rotate: 360 }} transition={{ duration: 22, repeat: Infinity, ease: 'linear' }} style={{ rotate: -item.offset }}>
                    <item.Icon className="w-4 h-4 text-neutral-300" />
                  </motion.div>
                </motion.div>
              ))}

              {/* Orbit 3 - inner (inset-20) - 4 icons, fast */}
              {[
                { Icon: SiTypescript,  offset: 0 },
                { Icon: SiSwift,       offset: 90 },
                { Icon: SiPostgresql,  offset: 180 },
                { Icon: SiGit,         offset: 270 },
              ].map((item, i) => (
                <motion.div key={`o3-${i}`} className="absolute inset-20"
                  animate={{ rotate: 360 }} transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
                  style={{ rotate: item.offset }}>
                  <motion.div className="absolute left-1/2 -translate-x-1/2 -top-3.5 w-8 h-8 bg-black border border-neutral-800 rounded-lg flex items-center justify-center"
                    animate={{ rotate: -360 }} transition={{ duration: 16, repeat: Infinity, ease: 'linear' }} style={{ rotate: -item.offset }}>
                    <item.Icon className="w-3.5 h-3.5 text-neutral-400" />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-9 border border-neutral-600 rounded-full p-1">
          <div className="w-1 h-1 bg-neutral-400 rounded-full mx-auto" />
        </motion.div>
      </motion.div>
    </section>
  );
}
