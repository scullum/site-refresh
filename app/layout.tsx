import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Scott Cullum - Creative Technologist & Product Consultant',
  description: 'Senior consultant working across design, engineering, and AI-native product acceleration.',
  metadataBase: new URL('https://scullum.com'),
  openGraph: {
    title: 'Scott Cullum - Creative Technologist & Product Consultant',
    description: 'Senior consultant working across design, engineering, and AI-native product acceleration.',
    url: 'https://scullum.com',
    siteName: 'Scott Cullum',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scott Cullum - Creative Technologist & Product Consultant',
    description: 'Senior consultant working across design, engineering, and AI-native product acceleration.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Scott Cullum',
    url: 'https://scullum.com',
    jobTitle: 'Creative Technologist & Product Consultant',
    description: 'Senior consultant working across design, engineering, and AI-native product acceleration.',
    email: 'scott@scullum.com',
    sameAs: [
      'https://linkedin.com/in/scottcullum',
    ],
    knowsAbout: [
      'Product Strategy',
      'Design Systems',
      'Front-end Development',
      'AI Integration',
      'Team Leadership',
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.variable}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

