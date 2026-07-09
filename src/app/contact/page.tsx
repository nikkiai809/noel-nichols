import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Noel Nichols.',
};

export default function ContactPage() {
  return (
    <>
      <section className="section-padding">
        <div className="content-container px-6 md:px-8">
          <div className="max-w-3xl">
            <p className="text-sm text-muted-foreground mb-4 font-mono">Contact</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-balance mb-8">
              Get in touch.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mb-12">
              I&rsquo;m always open to conversations about marketing strategy,
              creative projects, AI, music, and community building.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-foreground/20 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                  <span className="text-sm font-mono">@</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <a
                    href="mailto:hello@noelnichols.com"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    hello@noelnichols.com
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-foreground/20 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                  <span className="text-sm font-semibold">in</span>
                </div>
                <div>
                  <p className="text-sm font-medium">LinkedIn</p>
                  <a
                    href="https://linkedin.com/in/noelnichols1934"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Connect on LinkedIn <ArrowRight className="h-3 w-3 inline-block ml-0.5" />
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-foreground/20 transition-colors group opacity-60">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                  <span className="text-sm font-semibold">GH</span>
                </div>
                <div>
                  <p className="text-sm font-medium">GitHub</p>
                  <p className="text-sm text-muted-foreground">
                    [TODO: Add GitHub profile link]
                  </p>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-foreground/20 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                  <span className="text-sm font-semibold">IG</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Instagram</p>
                  <a
                    href="https://www.instagram.com/downtownxstudios"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    @downtownxstudios <ArrowRight className="h-3 w-3 inline-block ml-0.5" />
                  </a>
                </div>
              </div>

              {/* SoundCloud */}
              <div className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-foreground/20 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                  <span className="text-sm font-semibold">SC</span>
                </div>
                <div>
                  <p className="text-sm font-medium">SoundCloud</p>
                  <a
                    href="https://soundcloud.com/blvcksquvdrecords"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    @blvcksquvdrecords <ArrowRight className="h-3 w-3 inline-block ml-0.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
