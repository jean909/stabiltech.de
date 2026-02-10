# StabilTech Website

Presentation website for StabilTech — a professional IT services company based in Germany.

Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Multi-language (DE/EN/RO) with automatic browser detection.

## Tech Stack

- **Next.js 14** (App Router) — framework
- **TypeScript** — type safety
- **Tailwind CSS** — styling
- **Framer Motion** — animations
- **next-intl** — internationalization (DE/EN/RO)
- **React Hook Form + Zod** — form validation
- **Nodemailer** — SMTP email (Namecheap Private Email)
- **Lucide React + React Icons** — iconography

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Environment Variables

Create `.env.local` in the project root:

```env
SMTP_HOST=mail.privateemail.com
SMTP_PORT=465
SMTP_USER=info@stabiltech.de
SMTP_PASS=your-password
```

## Project Structure

```
src/
  app/
    [locale]/                 # Localized routes (DE/EN/RO)
      components/             # Homepage sections
      about/                  # Company story page
      careers/                # Job listings + application form
      b2b/                    # B2B partnerships
      freelancer/             # Freelancer collaboration
      charity/                # Social responsibility
      opensource/             # Open source commitment
      seo-guide/              # Free SEO resource
      services/[slug]/        # Individual service pages (7 services)
      impressum/              # Legal (required in Germany)
      datenschutz/            # Privacy policy (GDPR)
    api/
      contact/                # Contact form endpoint
      apply/                  # Job application endpoint
  components/                 # Shared components (Header, Footer, UI)
  lib/                        # Utilities (mail, rate-limit, constants)
  messages/                   # Translation files (de.json, en.json, ro.json)
  middleware.ts               # Locale detection
  routing.ts                  # i18n routing config
  i18n.ts                     # i18n request config
```

## Pages

| Page | URL | Description |
|------|-----|-------------|
| Homepage | `/` | Hero, stats, services, skills, process, testimonials, contact |
| About | `/about` | Company story, timeline, values, tech stack |
| Careers | `/careers` | Job listings with inline application form |
| B2B | `/b2b` | Partnership models and benefits |
| Freelancer | `/freelancer` | Freelancer collaboration info |
| Charity | `/charity` | Social responsibility initiatives |
| Open Source | `/opensource` | Open source commitment |
| SEO Guide | `/seo-guide` | Free SEO case studies, do's and don'ts |
| Services (x7) | `/services/[slug]` | mobile, web, management, seo, erp, custom, ai |
| Impressum | `/impressum` | Legal notice (German law) |
| Datenschutz | `/datenschutz` | Privacy policy (GDPR) |

All pages are available in DE, EN, and RO = 57 static pages total.

## Deployment

Deployed on Vercel. Push to `main` triggers automatic deployment.

```bash
npm run build    # Production build
npm start        # Start production server
```

## Contact

- **Company**: StabilTech
- **CEO**: Moise Ioan Jean
- **Email**: info@stabiltech.de
- **Domain**: stabiltech.de
