import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sonora Music Hub — Creative Ecosystem',
  description: 'Community building, economic development, and creative ecosystem strategy in Sonora, Mexico.',
};

export default function SonoraMusicHubPage() {
  return (
    <>
      <section className="section-padding">
        <div className="content-container px-6 md:px-8">
          <p className="text-sm text-muted-foreground mb-4 font-mono">
            <Link href="/projects" className="hover:text-foreground transition-colors">
              Projects
            </Link>{' '}
            /<span className="text-foreground"> Sonora Music Hub</span>
          </p>
          <div className="aspect-[16/9] md:aspect-[2.4/1] bg-muted rounded-xl mb-10 flex items-center justify-center border border-border">
            <p className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-muted-foreground/20 text-center px-4">
              Sonora Music Hub
            </p>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-balance mb-6">
              Sonora Music Hub — Creative Ecosystem &amp; Community Development
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Building a creative ecosystem in Sonora, Mexico — bridging music,
              technology, community, and economic development through strategic
              partnerships and government collaboration.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="content-container px-6 md:px-8">
          <div className="editorial-grid">
            <div>
              <p className="text-xs text-muted-foreground font-mono mb-3">Overview</p>
              <h2 className="text-2xl font-semibold mb-4">Creative Ecosystem Strategy</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                [TODO: Detailed project overview — mission, community building, economic development, government collaboration in Sonora]
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                [TODO: Vercel deployment URL]
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Sonora Music Hub is a community-driven initiative that brings together
                artists, producers, entrepreneurs, and technology to build a thriving
                creative economy in the state of Sonora, Mexico.
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-xs text-muted-foreground font-mono mb-2">Role</p>
                <p className="text-sm">Community Strategy, Ecosystem Development, Government Relations, Creative Direction</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-mono mb-2">Timeline</p>
                <p className="text-sm">2024—2026</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-mono mb-2">Key Areas</p>
                <div className="flex flex-wrap gap-1.5">
                  {['Community Building', 'Economic Development', 'Government Collaboration', 'Creative Ecosystem', 'Music Industry'].map((t) => (
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
            <p className="text-xs text-muted-foreground font-mono mb-4">Gallery</p>
            <p className="text-sm text-muted-foreground mb-6">
              [TODO: Event photos, community gathering documentation, partnership announcements]
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((n) => (
                <div key={n} className="aspect-[4/3] bg-muted rounded-xl flex items-center justify-center border border-border">
                  <p className="text-sm text-muted-foreground/30">[TODO: Photo {n}]</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
