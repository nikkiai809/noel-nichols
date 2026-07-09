import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';

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
  title: 'Noel Nichols | AI Product Builder & Founder',
  description:
    'I build AI-powered products, digital experiences and ventures from idea to execution. Product builder specializing in AI platforms, music intelligence, and digital health.',
  keywords: [
    'AI Product Builder',
    'Founder',
    'Product Builder',
    'AI Platforms',
    'Music Intelligence',
    'Digital Products',
    'Noel Nichols',
    'Venture Studio',
    'Machine Learning',
  ],
  openGraph: {
    title: 'Noel Nichols | AI Product Builder & Founder',
    description:
      'I build AI-powered products, digital experiences and ventures from idea to execution.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Noel Nichols',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Noel Nichols | AI Product Builder & Founder',
    description:
      'I build AI-powered products, digital experiences and ventures from idea to execution.',
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'og:image': 'https://noel-nichols.vercel.app/og.png',
    'og:image:width': '1200',
    'og:image:height': '630',
    'twitter:image': 'https://noel-nichols.vercel.app/og.png',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Noel Nichols',
  url: 'https://noel-nichols.vercel.app',
  givenName: 'Noel',
  familyName: 'Nichols',
  jobTitle: 'AI Product Builder & Founder',
  description:
    'I build AI-powered products, digital experiences and ventures from idea to execution.',
  knowsAbout: [
    'Artificial Intelligence',
    'Product Development',
    'Machine Learning',
    'Venture Building',
    'Digital Products',
    'Music Intelligence',
  ],
  sameAs: [
    'https://github.com/nikkiai809',
    'https://linkedin.com/in/noelnichols',
  ],
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
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-[#0a0a0a] text-[#f5f5f0]`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
