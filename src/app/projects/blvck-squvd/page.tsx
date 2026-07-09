import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blvck Squvd — Record Label & Creative Collective',
  description: 'Record label brand development, creative direction, and marketing strategy for an independent music collective.',
};

export default function BlvckSquvdPage() {
  return (
    <>
      <section className="section-padding">
        <div className="content-container px-6 md:px-8">
          <p className="text-sm text-muted-foreground mb-4 font-mono">
            <Link href="/projects" className="hover:text-foreground transition-colors">Projects</Link>{' '}
            /<span className="text-foreground"> Blvck Squvd</span>
          </p>
          <div className="aspect-[16/9] md:aspect-[2.4/1] bg-muted rounded-xl mb-10 flex items-center justify-center border border-border">
            <p className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-muted-foreground/20 text-center px-4">
              Blvck Squvd
            </p>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-balance mb-6">
              Blvck Squvd — Record Label &amp; Creative Collective
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Record label brand development, creative direction, and marketing strategy for an independent music collective and publishing platform.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="content-container px-6 md:px-8">
          <div className="editorial-grid">
            <div>
              <p className="text-xs text-muted-foreground font-mono mb-3">Overview</p>
              <h2 className="text-2xl font-semibold mb-4">Record Label &amp; Creative Collective</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                [TODO: Detailed project overview — label concept, artist roster, releases, brand identity, creative direction]
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Blvck Squvd is an independent record label and creative collective focused on music publishing, artist development, and cultural programming. The project encompasses brand identity, creative direction, and marketing strategy for the label and its artists.
              </p>
              <div className="mt-6 space-y-2">
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">SoundCloud:</span>{' '}
                  <a href="https://soundcloud.com/blvcksquvdrecords" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@blvcksquvdrecords</a>
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-xs text-muted-foreground font-mono mb-2">Role</p>
                <p className="text-sm">Brand Development, Creative Direction, A&R Strategy, Marketing, Music Publishing</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-mono mb-2">Timeline</p>
                <p className="text-sm">2024—Present</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-mono mb-2">Platforms</p>
                <div className="flex flex-wrap gap-1.5">
                  {['Record Label', 'Creative Collective', 'Music Publishing', 'Brand Identity', 'Artist Development'].map((t) => (
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
            <p className="text-xs text-muted-foreground font-mono mb-4">Releases</p>
            <p className="text-sm text-muted-foreground mb-6">[TODO: Release catalog, album artwork, artist profiles]</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((n) => (
                <div key={n} className="aspect-square bg-muted rounded-xl flex items-center justify-center border border-border">
                  <p className="text-sm text-muted-foreground/30">[TODO: Release {n}]</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
