import { setRequestLocale } from 'next-intl/server';
import { CharityPage } from './CharityPage';

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CharityPage />;
}
