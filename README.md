# StabilTech - Professional IT Solutions Website

A modern, multi-language presentation website for StabilTech, featuring mobile-first design, smooth animations, and a professional contact form.

## 🚀 Features

- **Multi-language Support**: German (DE), English (EN), and Romanian (RO) with automatic browser detection
- **Mobile-First Design**: Fully responsive and optimized for all devices
- **Modern Animations**: Smooth Framer Motion animations throughout
- **Contact Form**: Validated form with email integration
- **SEO Optimized**: Complete meta tags, Open Graph, and structured data
- **Fast Performance**: Built with Next.js 14 for optimal speed

## 📋 Services Showcased

- Mobile App Development
- Website Development
- Management Systems
- SEO Optimization
- ERP Integrations (Odoo, Plentymarkets, and more)
- Custom IT Solutions

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Internationalization**: next-intl
- **Form Handling**: React Hook Form + Zod
- **Icons**: Lucide React

## 📦 Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Configure environment variables**:
   Copy `.env.local` and add your email API key:
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   CONTACT_EMAIL=info@stabiltech.de
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🌐 Available Languages

The website automatically detects the browser language and displays content in:
- German (DE) - Primary language
- English (EN)
- Romanian (RO)

Users can manually switch languages using the language switcher in the navigation.

## 📧 Contact Form Setup

The contact form is ready to use but requires email service configuration:

1. Sign up for [Resend](https://resend.com) (recommended) or another email service
2. Add your API key to `.env.local`
3. Uncomment the email sending code in `src/app/api/contact/route.ts`

## 🏗️ Project Structure

```
StabilTech/
├── src/
│   ├── app/
│   │   ├── [locale]/           # Localized routes
│   │   │   ├── components/     # Page-specific components
│   │   │   ├── layout.tsx      # Locale layout
│   │   │   └── page.tsx        # Homepage
│   │   ├── api/
│   │   │   └── contact/        # Contact form API
│   │   └── globals.css         # Global styles
│   ├── components/             # Reusable UI components
│   │   ├── ui/                 # UI primitives
│   │   ├── Header.tsx          # Navigation header
│   │   ├── Footer.tsx          # Footer
│   │   └── LanguageSwitcher.tsx
│   ├── lib/                    # Utilities
│   ├── messages/               # Translations (de.json, en.json, ro.json)
│   ├── i18n.ts                 # i18n configuration
│   └── middleware.ts           # Locale detection middleware
├── public/                     # Static assets
└── tailwind.config.ts          # Tailwind configuration
```

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:
```typescript
colors: {
  primary: { ... },  // Main brand color
  accent: { ... },   // Accent color
}
```

### Translations

Edit translation files in `src/messages/`:
- `de.json` - German
- `en.json` - English
- `ro.json` - Romanian

### Content

Main sections are in `src/app/[locale]/components/`:
- `HeroSection.tsx` - Hero banner
- `ServicesSection.tsx` - Services grid
- `AboutSection.tsx` - About/Leadership
- `ContactSection.tsx` - Contact form

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy!

## 📱 Mobile Optimization

The website is built mobile-first with:
- Touch-friendly navigation
- Optimized images
- Fast loading times
- Responsive breakpoints

## 👤 Company Information

**Company**: StabilTech  
**CEO**: Moise Ioan Jean  
**Email**: info@stabiltech.de  
**Services**: IT Solutions, Mobile Apps, Websites, ERP Integrations

## 📄 License

© 2024 StabilTech. All rights reserved.

## 🤝 Support

For questions or support, contact: info@stabiltech.de
