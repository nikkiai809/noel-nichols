'use client';

import { FadeIn, FadeInStagger, FadeInItem } from '@/components/motion/fade-in';
import { Container } from '@/components/ui/container';
import { SectionLabel } from '@/components/ui/section-label';
import { ProjectCard } from '@/components/project/card';
import { projects } from '@/lib/projects';

export default function ProjectsPage() {
  return (
    <>
      <Container className="pt-20 md:pt-28">
        <div className="mb-16">
          <SectionLabel>Ventures</SectionLabel>
          <FadeIn>
            <h1 className="text-3xl md:text-5xl font-semibold text-[var(--color-fg)] mb-4">
              Startup Ecosystem
            </h1>
            <p className="text-sm text-[var(--color-fg-muted)] max-w-lg leading-relaxed">
              Companies founded from zero. Each venture represents complete ownership —
              market discovery, product strategy, AI architecture, engineering, and launch.
            </p>
          </FadeIn>
        </div>

        <FadeInStagger className="grid md:grid-cols-2 gap-4 md:gap-5">
          {projects.map((project, i) => (
            <FadeInItem key={project.id}>
              <ProjectCard project={project} index={i} />
            </FadeInItem>
          ))}
        </FadeInStagger>
      </Container>
    </>
  );
}
