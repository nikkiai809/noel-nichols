import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Marketing strategist, creative entrepreneur, and technology enthusiast.',
};

export default function AboutPage() {
  return (
    <>
      <section className="section-padding">
        <div className="content-container px-6 md:px-8">
          <div className="max-w-3xl">
            <p className="text-sm text-muted-foreground mb-4 font-mono">About</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-balance">
              Marketing strategist. Creative entrepreneur. Technology enthusiast.
            </h1>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="content-container px-6 md:px-8">
          <div className="editorial-grid">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I am a marketing graduate and business creation graduate with a
                deep passion for the intersection of marketing, technology,
                creativity, music, AI, and community building.
              </p>
              <p>
                My work spans creative entrepreneurship, marketing strategy,
                communication, and technology. I build brands, platforms, and
                ecosystems that connect people, ideas, and markets.
              </p>
              <p>
                Based in Mexico, I work with startups, creative communities, and
                technology companies to develop strategies that drive growth,
                build audiences, and create lasting impact.
              </p>
            </div>
            <div className="space-y-8">
              <div>
                <p className="text-xs text-muted-foreground font-mono mb-2">Background</p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground/20 mt-2 shrink-0" />
                    <div>
                      <p className="font-medium">Marketing Graduate</p>
                      <p className="text-muted-foreground text-xs mt-0.5">
                        Formal education in marketing strategy and consumer behavior
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground/20 mt-2 shrink-0" />
                    <div>
                      <p className="font-medium">Business Creation Graduate</p>
                      <p className="text-muted-foreground text-xs mt-0.5">
                        Entrepreneurial training in venture building and business development
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground/20 mt-2 shrink-0" />
                    <div>
                      <p className="font-medium">Creative Entrepreneur</p>
                      <p className="text-muted-foreground text-xs mt-0.5">
                        Founder of multiple ventures spanning AI, music, and creative technology
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground/20 mt-2 shrink-0" />
                    <div>
                      <p className="font-medium">Communication Specialist</p>
                      <p className="text-muted-foreground text-xs mt-0.5">
                        Brand narrative, executive presentations, and content strategy
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="content-container px-6 md:px-8">
          <div className="border-t border-border pt-16 md:pt-24">
            <p className="text-xs text-muted-foreground font-mono mb-8">
              The Intersection
            </p>
            <div className="editorial-grid">
              {[
                {
                  title: 'Marketing',
                  description:
                    'Brand strategy, positioning, go-to-market, content strategy, and narrative development that cuts through the noise.',
                },
                {
                  title: 'Technology',
                  description:
                    'AI platforms, automation, software products, and technical architecture that turns vision into working systems.',
                },
                {
                  title: 'Creativity',
                  description:
                    'Design, brand identity, visual systems, creative direction, and the art of making things people remember.',
                },
                {
                  title: 'Music',
                  description:
                    'Artist development, music industry innovation, creative economy, and the business of sound and culture.',
                },
                {
                  title: 'AI',
                  description:
                    'Intelligent systems, decision platforms, automation, and the future of human-machine collaboration.',
                },
                {
                  title: 'Community',
                  description:
                    'Ecosystem building, creative hubs, economic development, and bringing people together around shared purpose.',
                },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <h3 className="text-sm font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
