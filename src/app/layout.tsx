import type { Metadata } from 'next';
import './globals.css';
import { Navigation } from '@/components/layout/navigation';
import { Footer } from '@/components/layout/footer';
import { ReadingProgress } from '@/components/layout/reading-progress';
import { CommandMenu } from '@/components/layout/command-menu';

export const metadata: Metadata = {
  title: {
    default: 'Noel Nichols — Product Builder & Founder',
    template: '%s — Noel Nichols',
  },
  description:
    'I build products at the intersection of AI, music, and human creativity. Founder of Sonora Digital Corp. Creator of SIGNAL, YAMI, and ABE Music Hub.',
  openGraph: {
    title: 'Noel Nichols',
    description:
      'Product builder, founder, and creative technologist. AI, product, design, and engineering.',
    url: 'https://noel-nichols.vercel.app',
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
