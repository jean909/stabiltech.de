import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Karriere | StabilTech - Join Our Team',
  description: 'Offene Stellen bei StabilTech: Full-Stack Entwickler, UI/UX Designer. Remote-Arbeit, moderne Technologien, echte Projekte. Jetzt bewerben!',
  keywords: 'Karriere, Jobs, Entwickler, Designer, Remote, StabilTech, IT Jobs Deutschland',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
