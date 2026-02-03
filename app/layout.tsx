import type { Metadata } from 'next';
import {
  Manrope,
  Space_Grotesk,
  Inter,
  Nunito,
  Josefin_Sans,
  Bebas_Neue,
  IBM_Plex_Mono,
} from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from '@/lib/theme-context';
import './globals.css';

// Modern Minimal - warm geometric
const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-manrope',
});

// Terminal - techy monospace
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-mono',
});

// Swiss - clean, neutral
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-inter',
});

// Brutalist - industrial, wide
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-grotesk',
});

// Y2K - soft, rounded, friendly
const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-nunito',
});

// Art Deco - elegant geometric
const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-josefin',
});

// Vaporwave - tall, condensed, bold
const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-bebas',
});

export const metadata: Metadata = {
  title: 'Scott Cullum - Creative Technologist & Product Consultant',
  description: 'Senior consultant working across design, engineering, and AI-native product acceleration.',
  metadataBase: new URL('https://scullum.com'),
  alternates: { canonical: 'https://scullum.com' },
  openGraph: {
    title: 'Scott Cullum - Creative Technologist & Product Consultant',
    description: 'Senior consultant working across design, engineering, and AI-native product acceleration.',
    url: 'https://scullum.com',
    siteName: 'Scott Cullum',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/scott-cullum.jpg', width: 1200, height: 630, alt: 'Scott Cullum' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scott Cullum - Creative Technologist & Product Consultant',
    description: 'Senior consultant working across design, engineering, and AI-native product acceleration.',
    images: ['/images/scott-cullum.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Scott Cullum',
    url: 'https://scullum.com',
    jobTitle: 'Creative Technologist & Product Consultant',
    description: 'Senior consultant working across design, engineering, and AI-native product acceleration.',
    email: 'scott@scullum.com',
    sameAs: ['https://linkedin.com/in/scottcullum'],
    knowsAbout: ['Product Strategy', 'Design Systems', 'Front-end Development', 'AI Integration', 'Team Leadership'],
  };

  const fontVars = [
    manrope.variable,
    ibmPlexMono.variable,
    inter.variable,
    spaceGrotesk.variable,
    nunito.variable,
    josefinSans.variable,
    bebasNeue.variable,
  ].join(' ');

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={fontVars}>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
