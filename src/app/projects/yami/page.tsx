import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'YAMI — Creative Direction & Brand Identity',
  description: 'Creative direction, brand identity, and marketing strategy for a music and AI venture.',
};

export default function YamiProjectPage() {
  return (
    <>
      <section className="section-padding">
        <div className="content-container px-6 md:px-8">
          <p className="text-sm text-muted-foreground mb-4 font-mono">
            <Link href="/projects" className="hover:text-foreground transition-colors">
              Projects
            </Link>{' '}
            /<span className="text-foreground"> YAMI</span>
          </p>
          <div className="aspect-[16/9] md:aspect-[2.4/1] bg-muted rounded-xl mb-10 flex items-center justify-center border border-border">
            <p className="text-5xl sm:text-6xl font-semibold tracking-tight text-muted-foreground/20">YAMI</p>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-balance mb-6">
              YAMI — Creative Direction &amp; Brand Identity
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Creative direction, brand identity, marketing strategy, and visual system design for a music and AI venture.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="content-container px-6 md:px-8">
          <div className="editorial-grid">
            <div>
              <p className="text-xs text-muted-foreground font-mono mb-3">Overview</p>
              <h2 className="text-2xl font-semibold mb-4">Creative Direction &amp; Brand Identity</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                [TODO: Detailed project overview — mission, creative direction, brand identity, marketing strategy for YAMI]
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                [TODO: Vercel deployment URL]
              </p>
              <p className="text-muted-foreground leading-relaxed">
                YAMI represents the intersection of music and artificial intelligence,
                bringing together creative vision with technological capability.
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-xs text-muted-foreground font-mono mb-2">Role</p>
                <p className="text-sm">Creative Direction, Brand Strategy, Marketing Strategy, Visual System</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-mono mb-2">Timeline</p>
                <p className="text-sm">2025—2026</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-mono mb-2">Disciplines</p>
                <div className="flex flex-wrap gap-1.5">
                  {['Brand Identity', 'Creative Direction', 'Marketing Strategy', 'Visual Design', 'Positioning'].map((t) => (
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

      {/* Gallery placeholder */}
      <section className="section-padding pt-0">
        <div className="content-container px-6 md:px-8">
          <div className="border-t border-border pt-16 md:pt-24">
            <p className="text-xs text-muted-foreground font-mono mb-4">Visual Explorations</p>
            <p className="text-sm text-muted-foreground mb-6">
              [TODO: Brand identity explorations, mood boards, visual system documentation]
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((n) => (
                <div key={n} className="aspect-[4/3] bg-muted rounded-xl flex items-center justify-center border border-border">
                  <p className="text-sm text-muted-foreground/30">[TODO: Visual {n}]</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="content-container px-6 md:px-8">
          <div className="border-t border-border pt-16 md:pt-24">
            <Link href="/projects/velvet-rouge" className="group flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground font-mono mb-1">Next Project</p>
                <p className="text-xl sm:text-2xl font-semibold group-hover:opacity-60 transition-opacity">Velvet Rouge</p>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
