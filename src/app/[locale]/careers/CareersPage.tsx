'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Clock, Code, Palette, Briefcase, Send, CheckCircle } from 'lucide-react';

// Job data is built inside the component to access translations

function ApplicationForm({ jobTitle, t, onClose }: { jobTitle: string; t: any; onClose: () => void }) {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', portfolio: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await fetch('/api/apply', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...form, position: jobTitle }) });
      setSent(true);
    } catch { alert('Error'); } finally { setSending(false); }
  };

  if (sent) return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-neutral-50 border border-neutral-200 rounded-xl p-8 text-center mt-6">
      <CheckCircle className="w-12 h-12 text-black mx-auto mb-4" />
      <h4 className="text-xl font-bold text-black mb-2">{t('sent')}</h4>
      <p className="text-neutral-600">{t('sentDesc')}</p>
    </motion.div>
  );

  return (
    <motion.form initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} onSubmit={handleSubmit} className="border border-neutral-200 rounded-xl p-6 mt-6 space-y-4 bg-neutral-50">
      <h4 className="font-bold text-black">{t('applicationFor')}: {jobTitle}</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input required placeholder="Name *" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="h-11 w-full rounded-lg border border-neutral-300 bg-white px-4 text-sm focus:border-black focus:outline-none" />
        <input required type="email" placeholder="Email *" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="h-11 w-full rounded-lg border border-neutral-300 bg-white px-4 text-sm focus:border-black focus:outline-none" />
        <input placeholder="Telefon" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className="h-11 w-full rounded-lg border border-neutral-300 bg-white px-4 text-sm focus:border-black focus:outline-none" />
        <input placeholder="Portfolio / GitHub / LinkedIn" value={form.portfolio} onChange={e => setForm({...form, portfolio: e.target.value})} className="h-11 w-full rounded-lg border border-neutral-300 bg-white px-4 text-sm focus:border-black focus:outline-none" />
      </div>
      <textarea required placeholder="..." rows={4} value={form.message} onChange={e => setForm({...form, message: e.target.value})} className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm focus:border-black focus:outline-none" />
      <div className="flex items-center gap-4">
        <button type="submit" disabled={sending} className="bg-black text-white font-medium px-6 py-3 rounded-md hover:bg-neutral-800 transition-colors text-sm flex items-center gap-2 disabled:opacity-50">
          {sending ? t('sending') : t('submit')} <Send className="w-4 h-4" />
        </button>
        <button type="button" onClick={onClose} className="text-neutral-500 hover:text-black text-sm">{t('cancel')}</button>
      </div>
    </motion.form>
  );
}

export function CareersPage() {
  const t = useTranslations('careers');
  const j = useTranslations('jobs');
  const [openForm, setOpenForm] = useState<string | null>(null);

  const jobs = [
    { id: 'fullstack-dev', titleKey: j('dev_title'), type: j('dev_type'), location: 'Remote (EU)', icon: Code,
      tags: ['React', 'Next.js', 'Node.js', 'TypeScript'],
      desc: j('dev_desc'),
      responsibilities: [j('dev_r1'), j('dev_r2'), j('dev_r3'), j('dev_r4')],
      requirements: [j('dev_req1'), j('dev_req2'), j('dev_req3'), j('dev_req4')] },
    { id: 'ui-ux-designer', titleKey: j('des_title'), type: j('des_type'), location: 'Remote (EU)', icon: Palette,
      tags: ['Figma', 'UI/UX', 'Design Systems', 'Prototyping'],
      desc: j('des_desc'),
      responsibilities: [j('des_r1'), j('des_r2'), j('des_r3'), j('des_r4')],
      requirements: [j('des_req1'), j('des_req2'), j('des_req3'), j('des_req4')] },
  ];

  return (
    <div>
      <section className="bg-black py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-neutral-500 uppercase tracking-[0.3em] text-xs font-medium mb-6">{t('tagline')}</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">{t('title')}</h1>
            <p className="text-xl text-neutral-400 leading-relaxed max-w-2xl">{t('desc')}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">{t('whyTitle')}</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{t: t('remote'), d: t('remoteDesc')}, {t: t('modernTech'), d: t('modernTechDesc')}, {t: t('realProjects'), d: t('realProjectsDesc')}].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white border border-neutral-200 rounded-xl p-8 hover:border-black hover:shadow-lg transition-all">
                <h3 className="text-lg font-bold text-black mb-2">{item.t}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{item.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <p className="text-neutral-500 uppercase tracking-[0.3em] text-xs font-medium mb-4">{t('openPositions')}</p>
            <h2 className="text-3xl font-bold text-black">{t('openPositionsTitle')}</h2>
          </motion.div>
          <div className="space-y-8">
            {jobs.map((job, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="border border-neutral-200 rounded-xl p-8 hover:border-black hover:shadow-lg transition-all">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0"><job.icon className="w-6 h-6 text-white" /></div>
                  <div>
                    <h3 className="text-xl font-bold text-black">{job.titleKey}</h3>
                    <div className="flex flex-wrap gap-4 mt-1 text-sm text-neutral-500">
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{job.type}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{job.location}</span>
                    </div>
                  </div>
                </div>
                <p className="text-neutral-600 mb-4 leading-relaxed">{job.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {job.tags.map((tag, j) => <span key={j} className="bg-neutral-100 text-neutral-700 px-3 py-1 rounded-md text-xs font-medium">{tag}</span>)}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-black text-sm mb-2">{t('tasks')}</h4>
                    <ul className="space-y-1">{job.responsibilities.map((r, j) => <li key={j} className="text-neutral-600 text-sm flex items-start gap-2"><span className="text-black mt-1">·</span>{r}</li>)}</ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black text-sm mb-2">{t('requirements')}</h4>
                    <ul className="space-y-1">{job.requirements.map((r, j) => <li key={j} className="text-neutral-600 text-sm flex items-start gap-2"><span className="text-black mt-1">·</span>{r}</li>)}</ul>
                  </div>
                </div>
                {openForm === job.id ? <ApplicationForm jobTitle={job.titleKey} t={t} onClose={() => setOpenForm(null)} /> : (
                  <button onClick={() => setOpenForm(job.id)} className="inline-flex items-center gap-2 bg-black text-white font-medium px-6 py-3 rounded-md hover:bg-neutral-800 transition-colors text-sm group">
                    {t('applyNow')} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Briefcase className="w-12 h-12 text-neutral-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">{t('freelancerQ')}</h2>
            <p className="text-neutral-400 mb-8 leading-relaxed">{t('freelancerDesc')}</p>
            <a href="/freelancer" className="inline-flex items-center gap-2 bg-white text-black font-semibold px-8 py-4 rounded-md hover:bg-neutral-200 transition-colors group">
              {t('learnMore')} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
