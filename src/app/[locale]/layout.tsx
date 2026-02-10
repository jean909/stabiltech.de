import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Inter } from 'next/font/google';
import { routing } from '@/routing';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import type { Metadata } from 'next';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'hero' });

  const titles: Record<string, string> = {
    de: 'StabilTech - Professionelle IT-Lösungen | Moise Ioan Jean',
    en: 'StabilTech - Professional IT Solutions | Moise Ioan Jean',
    ro: 'StabilTech - Soluții IT Profesionale | Moise Ioan Jean',
  };

  const descriptions: Record<string, string> = {
    de: 'StabilTech bietet professionelle IT-Dienstleistungen: Mobile App Entwicklung, Website Entwicklung, Managementsysteme, SEO und ERP-Integrationen (Odoo, Plentymarkets). Kontakt: info@stabiltech.de',
    en: 'StabilTech provides professional IT services: Mobile app development, website development, management systems, SEO, and ERP integrations (Odoo, Plentymarkets). Contact: info@stabiltech.de',
    ro: 'StabilTech oferă servicii IT profesionale: Dezvoltare aplicații mobile, dezvoltare website-uri, sisteme de gestiune, SEO și integrări ERP (Odoo, Plentymarkets). Contact: info@stabiltech.de',
  };

  return {
    metadataBase: new URL('https://stabiltech.de'),
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    keywords: 'IT services, mobile app development, web development, ERP integration, Odoo, Plentymarkets, SEO, management systems, StabilTech',
    authors: [{ name: 'Moise Ioan Jean' }],
    openGraph: {
      title: titles[locale] || titles.en,
      description: descriptions[locale] || descriptions.en,
      type: 'website',
      locale: locale,
      siteName: 'StabilTech',
      url: `https://stabiltech.de/${locale}`,
      images: [
        {
          url: '/opengraph-image',
          width: 1200,
          height: 630,
          alt: 'StabilTech - Professional IT Solutions',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[locale] || titles.en,
      description: descriptions[locale] || descriptions.en,
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `https://stabiltech.de/${locale}`,
      languages: {
        'de': 'https://stabiltech.de/de',
        'en': 'https://stabiltech.de/en',
        'ro': 'https://stabiltech.de/ro',
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="pt-16">
            {children}
          </main>
          <Footer />
          <BackToTop />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
