import { setRequestLocale } from 'next-intl/server';
import { OpenSourcePage } from './OpenSourcePage';

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <OpenSourcePage />;
}
