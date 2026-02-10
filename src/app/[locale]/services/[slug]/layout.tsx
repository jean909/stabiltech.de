import type { Metadata } from 'next';

const metaMap: Record<string, { title: string; description: string }> = {
  mobile: {
    title: 'Mobile App Development | StabilTech',
    description: 'Professional iOS & Android app development. React Native, Flutter, Swift, Kotlin. From concept to App Store launch.',
  },
  web: {
    title: 'Web Development | StabilTech',
    description: 'Modern web development with Next.js, React, TypeScript. Corporate sites, SaaS, e-commerce. Fast, responsive, SEO-optimized.',
  },
  management: {
    title: 'Management Systems | StabilTech',
    description: 'Custom CRM, inventory, HR, and project management systems. Tailored to your business workflows.',
  },
  seo: {
    title: 'SEO Optimization | StabilTech',
    description: 'Data-driven SEO strategies. Technical audits, keyword research, content optimization. Real results: 340% traffic growth.',
  },
  erp: {
    title: 'ERP Integration - Odoo & Plentymarkets | StabilTech',
    description: 'Odoo implementation, Plentymarkets integration, custom ERP development. Automate your business processes end-to-end.',
  },
  custom: {
    title: 'Custom IT Solutions | StabilTech',
    description: 'Bespoke software development. APIs, automation, data pipelines, legacy modernization. Built exactly for your needs.',
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const meta = metaMap[slug] || { title: 'Services | StabilTech', description: 'Professional IT services by StabilTech.' };
  return {
    title: meta.title,
    description: meta.description,
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
