/**
 * ServicePage - Dynamic service detail page.
 * All content loaded from translation files (svc_mobile, svc_web, etc.)
 */
'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ArrowRight, CheckCircle, Smartphone, Globe, Settings, TrendingUp, Database, Code, Brain } from 'lucide-react';

const iconMap: Record<string, any> = {
  mobile: Smartphone, web: Globe, management: Settings,
  seo: TrendingUp, erp: Database, custom: Code, ai: Brain,
};

const techStacks: Record<string, string[]> = {
  mobile: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Expo', 'TypeScript', 'GraphQL'],
  web: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Vercel', 'AWS'],
  management: ['React', 'Node.js', 'PostgreSQL', 'Python', 'Docker', 'Redis', 'REST API', 'GraphQL'],
  seo: ['Google Search Console', 'Google Analytics', 'Ahrefs', 'Screaming Frog', 'PageSpeed Insights', 'Schema.org', 'Next.js SEO', 'Lighthouse'],
  erp: ['Odoo', 'Plentymarkets', 'Python', 'REST API', 'XML-RPC', 'PostgreSQL', 'Docker', 'AWS'],
  custom: ['Node.js', 'Python', '.NET', 'Java', 'Docker', 'Kubernetes', 'AWS', 'Azure'],
  ai: ['OpenAI', 'LangChain', 'LlamaIndex', 'Hugging Face', 'Python', 'Pinecone', 'ChromaDB', 'PyTorch'],
};

export function ServicePage({ slug }: { slug: string }) {
  const ts = useTranslations('sections');
  const t = useTranslations(`svc_${slug}`);

  const Icon = iconMap[slug] || Code;
  const stack = techStacks[slug] || [];

  const whatWeDo = [t('w1'), t('w2'), t('w3'), t('w4'), t('w5'), t('w6'), t('w7'), t('w8')];
  const process = [
    { title: t('p1t'), desc: t('p1d') },
    { title: t('p2t'), desc: t('p2d') },
    { title: t('p3t'), desc: t('p3d') },
    { title: t('p4t'), desc: t('p4d') },
  ];
  const projects = [
    { title: t('pr1t'), desc: t('pr1d') },
    { title: t('pr2t'), desc: t('pr2d') },
    { title: t('pr3t'), desc: t('pr3d') },
  ];

  const scrollToContact = () => { window.location.href = '/#contact'; };

  return (
    <div>
      {/* Hero */}
      <section className="bg-black py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
            <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-8">
              <Icon className="w-8 h-8 text-black" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">{t('heroTitle')}</h1>
            <p className="text-xl text-neutral-400 leading-relaxed mb-8 max-w-2xl">{t('heroDesc')}</p>
            <motion.button onClick={scrollToContact} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              className="bg-white text-black font-semibold px-8 py-4 rounded-md hover:bg-neutral-200 transition-colors group">
              {ts('startProject')}
              <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-neutral-500 uppercase tracking-[0.3em] text-xs font-medium mb-4">{ts('whatWeDeliver')}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-10">{ts('capabilities')}</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whatWeDo.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 p-4 rounded-lg hover:bg-neutral-50 transition-colors">
                <CheckCircle className="w-5 h-5 text-black mt-0.5 flex-shrink-0" />
                <span className="text-neutral-700">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-neutral-500 uppercase tracking-[0.3em] text-xs font-medium mb-4">{ts('tools')}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-10">{ts('techStack')}</h2>
          </motion.div>
          <div className="flex flex-wrap gap-3">
            {stack.map((tech, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ delay: i * 0.05 }} whileHover={{ scale: 1.05 }}
                className="bg-black text-white px-5 py-3 rounded-lg font-medium text-sm">
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-neutral-500 uppercase tracking-[0.3em] text-xs font-medium mb-4">{ts('howWeWork')}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-10">{ts('ourProcess')}</h2>
          </motion.div>
          <div className="space-y-6">
            {process.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex gap-6 items-start border border-neutral-200 rounded-xl p-6 hover:border-black hover:shadow-lg transition-all">
                <div className="w-10 h-10 bg-black text-white rounded-lg flex items-center justify-center flex-shrink-0 font-bold">{i + 1}</div>
                <div>
                  <h3 className="text-lg font-bold text-black mb-1">{step.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-neutral-500 uppercase tracking-[0.3em] text-xs font-medium mb-4">{ts('caseStudies')}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">{ts('whatWeBuilt')}</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -6 }}
                className="border border-neutral-800 rounded-xl p-8 hover:border-neutral-600 transition-all">
                <h3 className="text-lg font-bold text-white mb-3">{project.title}</h3>
                <p className="text-neutral-400 leading-relaxed text-sm">{project.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">{ts('readyTitle')}</h2>
            <p className="text-neutral-600 text-lg mb-8 max-w-xl mx-auto">{ts('readyDesc')}</p>
            <motion.button onClick={scrollToContact} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              className="bg-black text-white font-semibold px-10 py-4 rounded-md hover:bg-neutral-800 transition-colors group">
              {ts('contactUs')}
              <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
