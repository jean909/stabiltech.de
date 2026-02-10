'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { locales } from '@/i18n';
import { Globe, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const names: Record<string, string> = { de: 'Deutsch', en: 'English', ro: 'Română' };
const shorts: Record<string, string> = { de: 'DE', en: 'EN', ro: 'RO' };

export function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (l: string) => {
    const path = pathname.split('/').slice(2).join('/');
    router.push(`/${l}${path ? `/${path}` : ''}`);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-2 text-sm text-neutral-400 hover:text-white transition-colors"
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">{shorts[locale]}</span>
        <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="absolute right-0 mt-2 w-36 bg-black border border-neutral-700 rounded-lg overflow-hidden z-50"
            >
              {locales.map(l => (
                <button
                  key={l}
                  onClick={() => switchLocale(l)}
                  className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                    locale === l ? 'text-white bg-neutral-800' : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                  }`}
                >
                  {names[l]}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
