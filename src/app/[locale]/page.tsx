import { setRequestLocale } from 'next-intl/server';
import { HeroSection } from './components/HeroSection';
import { StatsSection } from './components/StatsSection';
import { TechOrbitSection } from './components/TechOrbitSection';
import { ServicesSection } from './components/ServicesSection';
import { SkillsSection } from './components/SkillsSection';
import { ProcessSection } from './components/ProcessSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <StatsSection />
      <TechOrbitSection />
      <ServicesSection />
      <SkillsSection />
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
