import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Downtown Studios — Recording Studio Brand Development',
  description: 'Brand development, creative direction, and marketing strategy for a recording studio.',
};

export default function DowntownStudiosPage() {
  return (
    <>
      <section className="section-padding">
        <div className="content-container px-6 md:px-8">
          <p className="text-sm text-muted-foreground mb-4 font-mono">
            <Link href="/projects" className="hover:text-foreground transition-colors">Projects</Link>{' '}
            /<span className="text-foreground"> Downtown Studios</span>
          </p>
          <div className="aspect-[16/9] md:aspect-[2.4/1] bg-muted rounded-xl mb-10 flex items-center justify-center border border-border">
            <p className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-muted-foreground/20 text-center px-4">
              Downtown Studios
            </p>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-balance mb-6">
              Downtown Studios — Recording Studio Brand Development
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Brand development, creative direction, and marketing strategy for a recording studio in the music industry.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="content-container px-6 md:px-8">
          <div className="editorial-grid">
            <div>
              <p className="text-xs text-muted-foreground font-mono mb-3">Overview</p>
              <h2 className="text-2xl font-semibold mb-4">Recording Studio Brand Development</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                [TODO: Detailed project overview — studio concept, brand development, creative direction, music industry marketing]
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Downtown Studios is a recording studio venture focused on providing professional music production services. The project involves brand identity development, creative direction, and marketing strategy for the studio and its associated creative collective.
              </p>
              <div className="mt-6 space-y-2">
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Instagram:</span>{' '}
                  <a href="https://www.instagram.com/downtownxstudios" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@downtownxstudios</a>
                  {' / '}
                  <a href="https://www.instagram.com/dwntwn_studios" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@dwntwn_studios</a>
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-xs text-muted-foreground font-mono mb-2">Role</p>
                <p className="text-sm">Brand Development, Creative Direction, Marketing Strategy, Music Industry Consulting</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-mono mb-2">Timeline</p>
                <p className="text-sm">2024—2025</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-mono mb-2">Disciplines</p>
                <div className="flex flex-wrap gap-1.5">
                  {['Brand Development', 'Creative Direction', 'Music Industry', 'Marketing', 'Visual Identity'].map((t) => (
                    <span key={t} className="text-[11px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="content-container px-6 md:px-8">
          <div className="border-t border-border pt-16 md:pt-24">
            <p className="text-xs text-muted-foreground font-mono mb-4">Gallery</p>
            <p className="text-sm text-muted-foreground mb-6">[TODO: Studio photos, brand assets, marketing materials]</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="aspect-[4/3] bg-muted rounded-xl flex items-center justify-center border border-border">
                  <p className="text-sm text-muted-foreground/30">[TODO: Asset {n}]</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
