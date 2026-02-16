import type { Metadata, Viewport } from 'next';
import { Montserrat, Source_Sans_3 } from 'next/font/google';
import { NWW_CONFIG } from '@/lib/constants';
import { NWWNavbar, NWWFooter, SkipToContent } from '@/components/layout';
import { BackToTop, CookieConsent } from '@/components/ui';
import './globals.css';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const sourceSans = Source_Sans_3({
  variable: '--font-source-sans',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL(NWW_CONFIG.url),
  title: {
    default: `${NWW_CONFIG.name} — ${NWW_CONFIG.tagline}`,
    template: `%s | ${NWW_CONFIG.name}`,
  },
  description: NWW_CONFIG.description,
  keywords: [
    'freelance software engineer',
    'web development',
    'mobile development',
    'React developer',
    'Next.js developer',
    'React Native developer',
    'Django developer',
    'AWS solutions',
    'software consultancy',
    'NarenWebWorks',
  ],
  authors: [{ name: NWW_CONFIG.name }],
  creator: NWW_CONFIG.name,
  publisher: NWW_CONFIG.name,
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
  alternates: {
    canonical: NWW_CONFIG.url,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: NWW_CONFIG.url,
    siteName: NWW_CONFIG.name,
    title: `${NWW_CONFIG.name} — ${NWW_CONFIG.tagline}`,
    description: NWW_CONFIG.description,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${NWW_CONFIG.name} - Software Engineering`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${NWW_CONFIG.name} — ${NWW_CONFIG.tagline}`,
    description: NWW_CONFIG.description,
    images: ['/og-image.png'],
  },
  category: 'technology',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#B163FF',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${sourceSans.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <SkipToContent />
        {children}
        <BackToTop />
        <CookieConsent />
      </body>
    </html>
  );
}
