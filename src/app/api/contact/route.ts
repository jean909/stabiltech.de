/**
 * POST /api/contact
 * 
 * Handles contact form submissions.
 * - Validates input with Zod
 * - Rate-limits by IP (3 req/min)
 * - Sends notification email to info@stabiltech.de
 * - Sends confirmation email to the submitter
 */

import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { createTransporter, emailLayout, dataTable, tableRow, messageBlock, confirmationBody } from '@/lib/mail';
import { checkRateLimit } from '@/lib/rate-limit';
import { CONTACT_EMAIL, SERVICE_LABELS } from '@/lib/constants';

const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10),
});

export async function POST(request: NextRequest) {
  try {
    /* ── Rate Limit ── */
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    if (!checkRateLimit(ip)) {
      return NextResponse.json({ error: 'Too many requests.' }, { status: 429 });
    }

    /* ── Validate ── */
    const body = await request.json();
    const data = contactSchema.parse(body);
    const serviceText = data.service ? (SERVICE_LABELS[data.service] || data.service) : 'Not specified';

    /* ── Send Emails ── */
    const transporter = createTransporter();

    // Notification to StabilTech
    await transporter.sendMail({
      from: `"StabilTech Website" <${process.env.SMTP_USER}>`,
      to: CONTACT_EMAIL,
      replyTo: data.email,
      subject: `New Inquiry from ${data.name} - ${serviceText}`,
      html: emailLayout(
        'New Contact Form Submission',
        dataTable(
          tableRow('Name', data.name) +
          tableRow('Email', `<a href="mailto:${data.email}">${data.email}</a>`) +
          tableRow('Phone', data.phone || '—') +
          tableRow('Service', serviceText)
        ) + messageBlock('Message', data.message),
        'Sent from stabiltech.de contact form'
      ),
    });

    // Confirmation to client
    await transporter.sendMail({
      from: `"StabilTech" <${process.env.SMTP_USER}>`,
      to: data.email,
      subject: 'Thank you for contacting StabilTech',
      html: emailLayout(
        '',
        confirmationBody(
          `Thank you, ${data.name}!`,
          `We have received your inquiry and will get back to you within 24 hours. If your matter is urgent, feel free to reach us directly at <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>.`,
          'Best regards,<br>The StabilTech Team'
        ),
        ''
      ),
    });

    return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid form data', details: error.errors }, { status: 400 });
    }
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
