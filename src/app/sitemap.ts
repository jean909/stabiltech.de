/**
 * Auto-generated sitemap.xml
 * 
 * Produces entries for all pages x all locales.
 * Accessible at /sitemap.xml
 */

import { MetadataRoute } from 'next';
import { COMPANY_URL } from '@/lib/constants';

const locales = ['de', 'en', 'ro'];

const pages = [
  { path: '',                priority: 1.0, freq: 'weekly'  as const },
  { path: '/about',          priority: 0.7, freq: 'monthly' as const },
  { path: '/careers',        priority: 0.7, freq: 'weekly'  as const },
  { path: '/b2b',            priority: 0.6, freq: 'monthly' as const },
  { path: '/freelancer',     priority: 0.6, freq: 'monthly' as const },
  { path: '/charity',        priority: 0.5, freq: 'monthly' as const },
  { path: '/opensource',     priority: 0.5, freq: 'monthly' as const },
  { path: '/seo-guide',      priority: 0.8, freq: 'monthly' as const },
  { path: '/impressum',      priority: 0.3, freq: 'yearly'  as const },
  { path: '/datenschutz',    priority: 0.3, freq: 'yearly'  as const },
  { path: '/services/mobile',     priority: 0.8, freq: 'monthly' as const },
  { path: '/services/web',        priority: 0.8, freq: 'monthly' as const },
  { path: '/services/management', priority: 0.8, freq: 'monthly' as const },
  { path: '/services/seo',        priority: 0.8, freq: 'monthly' as const },
  { path: '/services/erp',        priority: 0.8, freq: 'monthly' as const },
  { path: '/services/custom',     priority: 0.8, freq: 'monthly' as const },
  { path: '/services/ai',         priority: 0.8, freq: 'monthly' as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap(({ path, priority, freq }) =>
    locales.map((locale) => ({
      url: `${COMPANY_URL}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: freq,
      priority,
    }))
  );
}
