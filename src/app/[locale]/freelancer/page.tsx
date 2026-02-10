import { setRequestLocale } from 'next-intl/server';
import { FreelancerPage } from './FreelancerPage';

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <FreelancerPage />;
}
