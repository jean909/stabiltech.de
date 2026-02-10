'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, CheckCircle, XCircle, ArrowRight } from 'lucide-react';

const createContactSchema = (t: any) => z.object({
  name: z.string().min(1, t('validation.nameRequired')),
  email: z.string().min(1, t('validation.emailRequired')).email(t('validation.emailInvalid')),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, t('validation.messageMin')),
});

type ContactFormData = z.infer<ReturnType<typeof createContactSchema>>;

export function ContactSection() {
  const t = useTranslations('contact');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(createContactSchema(t)),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
      if (res.ok) { setSubmitStatus('success'); reset(); } else setSubmitStatus('error');
    } catch { setSubmitStatus('error'); }
    finally { setIsSubmitting(false); setTimeout(() => setSubmitStatus('idle'), 5000); }
  };

  const services = ['mobile', 'web', 'management', 'seo', 'erp', 'other'];
  const inputClass = 'bg-neutral-900 border-neutral-700 text-white placeholder:text-neutral-500 focus:border-white focus:ring-white/10';

  return (
    <section id="contact" className="py-20 md:py-28 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">{t('title')}</h2>
          <p className="text-neutral-400 text-lg max-w-xl mx-auto">{t('subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="border border-neutral-800 rounded-xl p-8 mb-6">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <Mail className="w-6 h-6 text-neutral-400" />
                {t('info.email')}
              </h3>
              <a href="mailto:info@stabiltech.de" className="flex items-center gap-4 text-white hover:text-neutral-300 transition-colors text-lg font-medium mb-8">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-black" />
                </div>
                info@stabiltech.de
              </a>
              <div className="bg-neutral-900 rounded-lg p-5 flex items-start gap-3">
                <Phone className="w-5 h-5 text-neutral-400 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-300">{t('info.pricing')}</span>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="border border-neutral-800 rounded-xl p-8 space-y-5">
              <div>
                <Input {...register('name')} placeholder={t('form.namePlaceholder')} className={`${inputClass} ${errors.name ? 'border-red-500' : ''}`} />
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <Input {...register('email')} type="email" placeholder={t('form.emailPlaceholder')} className={`${inputClass} ${errors.email ? 'border-red-500' : ''}`} />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <Input {...register('phone')} type="tel" placeholder={t('form.phonePlaceholder')} className={inputClass} />
              </div>
              <div>
                <select {...register('service')} className="flex h-12 w-full rounded-lg border border-neutral-700 bg-neutral-900 text-white px-4 py-2 text-base transition-all focus:border-white focus:outline-none focus:ring-2 focus:ring-white/10">
                  <option value="" className="bg-black">{t('form.servicePlaceholder')}</option>
                  {services.map(s => <option key={s} value={s} className="bg-black">{t(`services.${s}`)}</option>)}
                </select>
              </div>
              <div>
                <Textarea {...register('message')} placeholder={t('form.messagePlaceholder')} rows={4} className={`${inputClass} ${errors.message ? 'border-red-500' : ''}`} />
                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
              </div>
              <motion.button
                type="submit" disabled={isSubmitting}
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className="w-full bg-white text-black font-semibold py-4 rounded-lg hover:bg-neutral-200 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isSubmitting ? t('form.sending') : t('form.submit')}
                {!isSubmitting && <ArrowRight className="w-4 h-4" />}
              </motion.button>

              {submitStatus === 'success' && (
                <div className="flex items-center text-green-400 bg-green-500/10 border border-green-500/30 p-4 rounded-lg">
                  <CheckCircle className="w-5 h-5 mr-2" />{t('success')}
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="flex items-center text-red-400 bg-red-500/10 border border-red-500/30 p-4 rounded-lg">
                  <XCircle className="w-5 h-5 mr-2" />{t('error')}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
