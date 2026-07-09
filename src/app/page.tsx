import Link from 'next/link';
import { ArrowDown, ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="section-padding">
        <div className="content-container px-6 md:px-8">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <p className="text-sm text-muted-foreground mb-6 animate-fade-in-up">
              Noel Nichols
            </p>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-balance animate-fade-in-up">
              Marketing Strategist.
              <br />
              Creative Technologist.
              <br />
              Builder.
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-muted-foreground mt-8 max-w-2xl leading-relaxed animate-fade-in-up">
              I bridge marketing, technology, and creativity to build brands,
              products, and communities that matter. Based in Mexico, working
              globally.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mt-10 animate-fade-in-up">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg text-sm font-medium hover:opacity-90 transition-all"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:border-foreground transition-all"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== QUOTE / POSITIONING ===== */}
      <section className="section-padding pt-0">
        <div className="content-container px-6 md:px-8">
          <div className="border-t border-border pt-16 md:pt-24">
            <blockquote className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-medium leading-relaxed max-w-3xl text-balance">
              &ldquo;The intersection of marketing, technology, creativity,
              music, AI, and community building is where the future is being
              built. I help build it.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* ===== KEY AREAS ===== */}
      <section className="section-padding pt-0">
        <div className="content-container px-6 md:px-8">
          <div className="editorial-grid">
            {[
              {
                number: '01',
                title: 'Marketing Strategy',
                description:
                  'Brand positioning, go-to-market strategy, content strategy, and narrative development for ambitious companies.',
              },
              {
                number: '02',
                title: 'Creative Technology',
                description:
                  'AI-powered platforms, digital products, and technical solutions that bridge creativity and engineering.',
              },
              {
                number: '03',
                title: 'Music & Community',
                description:
                  'Creative economy development, artist ecosystem building, and community-driven cultural initiatives.',
              },
            ].map((area, i) => (
              <div
                key={area.number}
                className="animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <p className="text-xs text-muted-foreground font-mono mb-3">
                  {area.number}
                </p>
                <h2 className="text-xl sm:text-2xl font-semibold mb-3">
                  {area.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED PROJECTS ===== */}
      <section className="section-padding pt-0">
        <div className="content-container px-6 md:px-8">
          <div className="border-t border-border pt-16 md:pt-24">
            <div className="flex items-center justify-between mb-8">
              <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
                Featured Projects
              </p>
              <Link
                href="/projects"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
              >
                All Projects <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link
                href="/projects/signal"
                className="group block"
              >
                <div className="aspect-[16/9] bg-muted rounded-xl mb-4 flex items-center justify-center border border-border overflow-hidden">
                  <div className="text-center p-6">
                    <p className="text-3xl sm:text-4xl font-semibold tracking-tight text-muted-foreground/30 group-hover:text-muted-foreground/50 transition-colors">
                      SIGNAL
                    </p>
                    <p className="text-sm text-muted-foreground/40 mt-1">
                      AI Decision Intelligence
                    </p>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <h2 className="text-xl font-semibold tracking-tight group-hover:opacity-60 transition-opacity">
                    SIGNAL
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    AI-powered platform transforming how record labels discover
                    and evaluate artist opportunities.
                  </p>
                </div>
              </Link>

              <Link
                href="/projects/sonora-digital-corp"
                className="group block"
              >
                <div className="aspect-[16/9] bg-muted rounded-xl mb-4 flex items-center justify-center border border-border overflow-hidden">
                  <div className="text-center p-6">
                    <p className="text-3xl sm:text-4xl font-semibold tracking-tight text-muted-foreground/30 group-hover:text-muted-foreground/50 transition-colors">
                      Native Agent OS
                    </p>
                    <p className="text-sm text-muted-foreground/40 mt-1">
                      MCP-Native Operating System
                    </p>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <h2 className="text-xl font-semibold tracking-tight group-hover:opacity-60 transition-opacity">
                    Sonora Digital Corp
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Multi-agent AI OS powering the Sonora ecosystem. 155 MCP
                    tools, 128 skills, 6 agents, 535 tests.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SCROLL INDICATOR ===== */}
      <div className="flex justify-center pb-8">
        <ArrowDown className="h-4 w-4 text-muted-foreground/40 animate-bounce" />
      </div>
    </>
  );
}
