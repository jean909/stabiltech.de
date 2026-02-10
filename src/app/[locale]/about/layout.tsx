import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About StabilTech | Our Story, Team & Technology',
  description: 'StabilTech: 10+ years of IT excellence led by Moise Ioan Jean. 150+ clients, 200+ projects. Web, Mobile, ERP, SEO expertise.',
  keywords: 'about StabilTech, IT company, Moise Ioan Jean, web development, mobile apps, ERP integration',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
