/**
 * Email utilities for StabilTech
 *
 * Uses Resend when RESEND_API_KEY is set, otherwise SMTP (Nodemailer).
 * Used by /api/contact and /api/apply routes.
 */

import nodemailer from 'nodemailer';
import { Resend } from 'resend';

/* ── Constants ──────────────────────────────────────────────── */

export const CONTACT_EMAIL = 'info@stabiltech.de';
export const CAREERS_EMAIL = 'moise.ioan@stabiltech.de';

/* ── Send email (Resend or SMTP) ──────────────────────────────── */

export type SendEmailOptions = {
  from: string;
  to: string | string[];
  replyTo?: string;
  subject: string;
  html: string;
};

/** Sends an email via Resend (if API key set) or SMTP */
export async function sendEmail(options: SendEmailOptions): Promise<void> {
  const to = Array.isArray(options.to) ? options.to : [options.to];

  if (process.env.RESEND_API_KEY) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: options.from,
      to,
      replyTo: options.replyTo,
      subject: options.subject,
      html: options.html,
    });
    if (error) throw new Error(error.message);
    return;
  }

  const transporter = createTransporter();
  await transporter.sendMail({
    from: options.from,
    to: options.to,
    replyTo: options.replyTo,
    subject: options.subject,
    html: options.html,
  });
}

/** Build "from" string for Resend (verified domain) or SMTP */
export function fromAddress(displayName: string): string {
  if (process.env.RESEND_API_KEY) {
    return `${displayName} <${CONTACT_EMAIL}>`;
  }
  return `"${displayName}" <${process.env.SMTP_USER}>`;
}

/* ── SMTP Transporter (fallback when no Resend key) ──────────── */

export function createTransporter() {
  const port = Number(process.env.SMTP_PORT) || 465;
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'mail.privateemail.com',
    port,
    secure: port === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

/* ── Email Templates ────────────────────────────────────────── */

/** Wraps content in the StabilTech branded email layout */
export function emailLayout(subtitle: string, body: string, footer: string) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #000; padding: 30px; text-align: center;">
        <h1 style="color: #fff; margin: 0; font-size: 24px;">&lt;StabilTech/&gt;</h1>
        ${subtitle ? `<p style="color: #888; margin: 8px 0 0;">${subtitle}</p>` : ''}
      </div>
      <div style="padding: 30px; background: #f9f9f9;">
        ${body}
      </div>
      <div style="padding: 20px; text-align: center; color: #888; font-size: 12px;">
        ${footer}
      </div>
    </div>
  `;
}

/** Generates a data table row for email templates */
export function tableRow(label: string, value: string) {
  return `
    <tr>
      <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold; width: 120px;">${label}</td>
      <td style="padding: 12px 0; border-bottom: 1px solid #eee;">${value}</td>
    </tr>
  `;
}

/** Wraps rows in a table */
export function dataTable(rows: string) {
  return `<table style="width: 100%; border-collapse: collapse;">${rows}</table>`;
}

/** Message block with white background */
export function messageBlock(label: string, content: string) {
  return `
    <div style="margin-top: 20px;">
      <p style="font-weight: bold; margin-bottom: 8px;">${label}:</p>
      <div style="background: #fff; padding: 16px; border: 1px solid #eee; border-radius: 8px; line-height: 1.6;">
        ${content.replace(/\n/g, '<br>')}
      </div>
    </div>
  `;
}

/** Simple confirmation email body */
export function confirmationBody(greeting: string, message: string, signoff: string) {
  return `
    <h2 style="margin-top: 0;">${greeting}</h2>
    <p style="color: #555; line-height: 1.6;">${message}</p>
    <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;">
    <p style="color: #999; font-size: 13px;">${signoff}</p>
  `;
}
