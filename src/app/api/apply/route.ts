/**
 * POST /api/apply
 * 
 * Handles job application submissions from /careers.
 * - Validates input with Zod
 * - Sends application email to moise.ioan@stabiltech.de
 * - Sends confirmation email to the applicant
 */

import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { createTransporter, emailLayout, dataTable, tableRow, messageBlock, confirmationBody } from '@/lib/mail';
import { CAREERS_EMAIL } from '@/lib/constants';

const applySchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  portfolio: z.string().optional(),
  message: z.string().min(10),
  position: z.string().min(1),
});

export async function POST(request: NextRequest) {
  try {
    /* ── Validate ── */
    const body = await request.json();
    const data = applySchema.parse(body);

    /* ── Send Emails ── */
    const transporter = createTransporter();

    // Application to hiring manager
    await transporter.sendMail({
      from: `"StabilTech Careers" <${process.env.SMTP_USER}>`,
      to: CAREERS_EMAIL,
      replyTo: data.email,
      subject: `Bewerbung: ${data.position} - ${data.name}`,
      html: emailLayout(
        'Neue Bewerbung',
        `<h2 style="margin-top: 0; color: #000;">Position: ${data.position}</h2>` +
        dataTable(
          tableRow('Name', data.name) +
          tableRow('Email', `<a href="mailto:${data.email}">${data.email}</a>`) +
          tableRow('Telefon', data.phone || '—') +
          tableRow('Portfolio', data.portfolio ? `<a href="${data.portfolio}">${data.portfolio}</a>` : '—')
        ) + messageBlock('Nachricht', data.message),
        'Sent from stabiltech.de/careers'
      ),
    });

    // Confirmation to applicant
    await transporter.sendMail({
      from: `"StabilTech" <${process.env.SMTP_USER}>`,
      to: data.email,
      subject: `Bewerbung erhalten - ${data.position}`,
      html: emailLayout(
        '',
        confirmationBody(
          `Hallo ${data.name}!`,
          `Vielen Dank für deine Bewerbung als <strong>${data.position}</strong>. Wir werden deine Unterlagen sorgfältig prüfen und melden uns innerhalb von 48 Stunden bei dir.`,
          'Mit freundlichen Grüßen,<br>Das StabilTech Team'
        ),
        ''
      ),
    });

    return NextResponse.json({ message: 'Application sent' }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid data' }, { status: 400 });
    }
    console.error('Application error:', error);
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }
}
