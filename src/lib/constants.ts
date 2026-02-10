/**
 * Application-wide constants
 * 
 * Centralized config values used across components and API routes.
 */

/* ── Company Info ────────────────────────────────────────────── */

export const COMPANY_NAME = 'StabilTech';
export const COMPANY_DOMAIN = 'stabiltech.de';
export const COMPANY_URL = 'https://stabiltech.de';

/* ── Emails ──────────────────────────────────────────────────── */

export const CONTACT_EMAIL = 'info@stabiltech.de';
export const CAREERS_EMAIL = 'moise.ioan@stabiltech.de';

/* ── Services ────────────────────────────────────────────────── */

export const SERVICE_SLUGS = ['mobile', 'web', 'management', 'seo', 'erp', 'custom', 'ai'] as const;
export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

export const SERVICE_LABELS: Record<string, string> = {
  mobile: 'Mobile App Development',
  web: 'Web Development',
  management: 'Management Systems',
  seo: 'SEO Optimization',
  erp: 'ERP Integration',
  other: 'Other',
};
