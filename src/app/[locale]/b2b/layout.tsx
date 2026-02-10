import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'B2B Partnerships | StabilTech',
  description: 'Partner with StabilTech for white-label development, team extension, and long-term IT collaboration. Agencies and IT companies welcome.',
  keywords: 'B2B, partnership, white-label, team extension, IT outsourcing, agency partner',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
