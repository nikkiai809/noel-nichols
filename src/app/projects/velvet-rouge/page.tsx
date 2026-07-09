import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Velvet Rouge — Brand System & Creative Concept',
  description: 'Brand system development, naming, narrative, and visual exploration for a creative concept in music.',
};

export default function VelvetRougeProjectPage() {
  return (
    <>
      <section className="section-padding">
        <div className="content-container px-6 md:px-8">
          <p className="text-sm text-muted-foreground mb-4 font-mono">
            <Link href="/projects" className="hover:text-foreground transition-colors">
              Projects
            </Link>{' '}
            /<span className="text-foreground"> Velvet Rouge</span>
          </p>
          <div className="aspect-[16/9] md:aspect-[2.4/1] bg-muted rounded-xl mb-10 flex items-center justify-center border border-border">
            <p className="text-5xl sm:text-6xl font-semibold tracking-tight text-muted-foreground/20" style={{ letterSpacing: '-0.02em' }}>
              Velvet Rouge
            </p>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-balance mb-6">
              Velvet Rouge — Brand System &amp; Creative Concept
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Brand system development, naming, narrative architecture, and visual exploration for a music-oriented creative concept.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="content-container px-6 md:px-8">
          <div className="editorial-grid">
            <div>
              <p className="text-xs text-muted-foreground font-mono mb-3">Overview</p>
              <h2 className="text-2xl font-semibold mb-4">Creative Concept &amp; Brand System</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                [TODO: Detailed project overview — creative concept, brand system, identity, naming, and narrative development for Velvet Rouge]
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                [TODO: Vercel deployment URL]
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Velvet Rouge is a creative concept that explores the intersection of music, visual identity, and brand narrative.
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-xs text-muted-foreground font-mono mb-2">Role</p>
                <p className="text-sm">Brand Strategy, Creative Direction, Naming, Narrative, Visual Identity</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-mono mb-2">Timeline</p>
                <p className="text-sm">2024—2025</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-mono mb-2">Disciplines</p>
                <div className="flex flex-wrap gap-1.5">
                  {['Brand System', 'Naming', 'Narrative', 'Visual Identity', 'Creative Direction'].map((t) => (
                    <span key={t} className="text-[11px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                      {t}
                    </span>
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
            <p className="text-xs text-muted-foreground font-mono mb-4">Brand Exploration</p>
            <p className="text-sm text-muted-foreground mb-6">
              [TODO: Brand exploration boards, color palettes, typography studies, logo concepts]
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="aspect-[4/3] bg-muted rounded-xl flex items-center justify-center border border-border">
                  <p className="text-sm text-muted-foreground/30">[TODO: Brand asset {n}]</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="content-container px-6 md:px-8">
          <div className="border-t border-border pt-16 md:pt-24">
            <Link href="/projects/sonora-music-hub" className="group flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground font-mono mb-1">Next Project</p>
                <p className="text-xl sm:text-2xl font-semibold group-hover:opacity-60 transition-opacity">Sonora Music Hub</p>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
