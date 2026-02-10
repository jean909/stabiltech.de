import { setRequestLocale } from 'next-intl/server';
import { B2BPage } from './B2BPage';

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <B2BPage />;
}
