import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { SITE } from '@/lib/constants';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | ${SITE.title}`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    'AI Product Builder',
    'Product Builder',
    'Founder',
    'AI Platforms',
    'Music Intelligence',
    'Digital Products',
    'Noel Nichols',
    'Venture Studio',
    'Machine Learning',
    'Product Strategy',
  ],
  openGraph: {
    title: `${SITE.name} | ${SITE.title}`,
    description: SITE.description,
    url: SITE.url,
    type: 'website',
    locale: 'en_US',
    siteName: SITE.name,
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: SITE.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} | ${SITE.title}`,
    description: SITE.description,
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE.url,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: SITE.name,
  url: SITE.url,
  givenName: 'Noel',
  familyName: 'Nichols',
  jobTitle: SITE.title,
  description: SITE.description,
  knowsAbout: [
    'Artificial Intelligence',
    'Product Development',
    'Machine Learning',
    'Venture Building',
    'Digital Products',
    'Music Intelligence',
  ],
  sameAs: [SITE.social.github, SITE.social.linkedin],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
