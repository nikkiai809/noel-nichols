import type { Metadata } from 'next';
import './globals.css';
import { Navigation } from '@/components/layout/navigation';
import { Footer } from '@/components/layout/footer';
import { ReadingProgress } from '@/components/layout/reading-progress';
import { CommandMenu } from '@/components/layout/command-menu';

export const metadata: Metadata = {
  title: {
    default: 'Noel Nichols — Marketing Strategist & Creative Technologist',
    template: '%s — Noel Nichols',
  },
  description:
    'Marketing strategist, creative technologist, and builder. Bridging marketing, technology, creativity, music, AI, and community.',
  openGraph: {
    title: 'Noel Nichols',
    description:
      'Marketing Strategist. Creative Technologist. Builder.',
    url: 'https://noelnichols.com',
    siteName: 'Noel Nichols',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ReadingProgress />
        <Navigation />
        <CommandMenu />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
