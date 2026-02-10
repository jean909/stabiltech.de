/**
 * Dynamic service page route
 * 
 * Generates static pages for each service at build time.
 * Valid slugs defined in @/lib/constants.
 */
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { ServicePage } from './ServicePage';
import { SERVICE_SLUGS } from '@/lib/constants';

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export default async function Page({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  if (!SERVICE_SLUGS.includes(slug as any)) {
    notFound();
  }

  return <ServicePage slug={slug} />;
}
