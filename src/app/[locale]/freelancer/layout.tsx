import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For Freelancers | StabilTech',
  description: 'Work with StabilTech as a freelancer. We need React, Mobile, ERP, and Design specialists. Fair rates, remote work, interesting projects.',
  keywords: 'freelancer, remote work, React developer, mobile developer, freelance IT',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
