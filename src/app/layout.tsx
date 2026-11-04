import type { Metadata, Viewport } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import MobileStickyBar from '@/components/MobileStickyBar';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'Founders Grant | In-Kind Technology & Automation Grants for Founders',
  description:
    'Awarding enterprise-grade web development, custom software, local SEO, and AI workflow automations to bootstrapped founders, local services, and small businesses.',
  metadataBase: new URL('https://foundersgrant.org'),
  alternates: {
    canonical: 'https://foundersgrant.org',
  },
  openGraph: {
    title: 'Founders Grant | In-Kind Technology Infrastructure Grants',
    description:
      'We build high-speed websites, local SEO frameworks, and autonomous workflow engines for small business founders at $0.',
    url: 'https://foundersgrant.org',
    siteName: 'Founders Grant',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Founders Grant | Tech Grants for Founders',
    description:
      'In-kind engineering and digital infrastructure grants awarded based on founder story and community impact.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://foundersgrant.org/#organization',
        name: 'Founders Grant',
        url: 'https://foundersgrant.org',
        logo: 'https://foundersgrant.org/favicon.ico',
        description:
          'Pro bono technology empowerment initiative awarding in-kind Next.js engineering, local SEO architectures, and AI workflow automations to bootstrapped founders and local small businesses.',
        foundingLocation: {
          '@type': 'Place',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Denver',
            addressRegion: 'CO',
            addressCountry: 'US',
          },
        },
        parentOrganization: {
          '@type': 'Organization',
          name: 'DevMellio LLC',
          url: 'https://devmellio.com',
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://foundersgrant.org/#website',
        url: 'https://foundersgrant.org',
        name: 'Founders Grant',
        description:
          'In-kind software engineering and digital infrastructure grants awarded to small businesses and founders.',
        publisher: {
          '@id': 'https://foundersgrant.org/#organization',
        },
      },
      {
        '@type': 'Service',
        '@id': 'https://foundersgrant.org/#grant-service',
        name: 'Founders Grant In-Kind Engineering Program',
        serviceType: 'Pro Bono Technology Development',
        provider: {
          '@id': 'https://foundersgrant.org/#organization',
        },
        areaServed: {
          '@type': 'Country',
          name: 'United States',
        },
        offers: {
          '@type': 'Offer',
          price: '0.00',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          validFrom: '2026-10-01',
          description:
            '100% in-kind technology infrastructure sprint. Zero licensing fees, zero invoicing, zero catch.',
        },
      },
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }}
        />
      </head>
      <body>
        <div className="page-bg-mesh" />

        {/* Global Navigation (Responsive Apple Desktop + Mobile Drawer) */}
        <Navigation />

        <main>{children}</main>

        {/* Floating Mobile Action Bar (Frictionless conversion for phone screens) */}
        <MobileStickyBar />

        {/* Global Footer */}
        <footer className="site-footer">
          <div className="container">
            <div className="footer-inner">
              <div>
                <div className="footer-brand-title">
                  FoundersGrant<span style={{ color: 'var(--apple-blue)' }}>.org</span>
                </div>
                <p style={{ maxWidth: '420px', lineHeight: '1.6', marginBottom: '1.25rem', color: 'var(--apple-text-secondary)' }}>
                  An independent technology initiative providing pro bono digital infrastructure,
                  custom full-stack engineering, and AI automation suites to bootstrapped entrepreneurs,
                  community creators, and small business owners nationwide.
                </p>
                <div style={{ fontSize: '0.85rem', color: 'var(--apple-text-muted)' }}>
                  Managed &amp; Engineered by DevMellio LLC · Denver, CO
                </div>
              </div>

              <div>
                <div style={{ color: 'var(--apple-text-primary)', fontWeight: '600', marginBottom: '1rem', fontSize: '0.95rem' }}>
                  Program Initiatives
                </div>
                <ul className="footer-links-list">
                  <li><Link href="/#packages" className="footer-link">The 4 Grant Packages</Link></li>
                  <li><Link href="/impact" className="footer-link">Founder Case Studies</Link></li>
                  <li><Link href="/grants" className="footer-link">State &amp; City Chapters</Link></li>
                  <li><Link href="/apply" className="footer-link">Submit Your Application</Link></li>
                </ul>
              </div>

              <div>
                <div style={{ color: 'var(--apple-text-primary)', fontWeight: '600', marginBottom: '1rem', fontSize: '0.95rem' }}>
                  Integrity &amp; Legal
                </div>
                <ul className="footer-links-list">
                  <li><Link href="/legal/terms" className="footer-link">In-Kind Grant Terms</Link></li>
                  <li><Link href="/legal/terms#liability" className="footer-link">$0 Liability Disclaimer</Link></li>
                  <li><Link href="/legal/terms#ip" className="footer-link">IP &amp; Founder Data Sovereignty</Link></li>
                  <li><Link href="/legal/terms#disclosure" className="footer-link">Non-Profit vs. In-Kind Disclosure</Link></li>
                </ul>
              </div>
            </div>

            <div className="footer-legal-bar">
              <div>
                © 2026 FoundersGrant.org · All in-kind technology grants are awarded without cash transaction.
              </div>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <Link href="/legal/terms" className="footer-link">Terms &amp; Conditions</Link>
                <Link href="/apply" className="footer-link">Apply (Q4 / Q1 Cycle)</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
