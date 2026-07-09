'use client';

import { FadeIn, FadeInStagger, FadeInItem } from '@/components/motion/fade-in';
import { Container } from '@/components/ui/container';
import { SectionLabel } from '@/components/ui/section-label';
import { ProjectCard } from '@/components/project/card';
import { projects } from '@/lib/projects';

export default function ProjectsPage() {
  return (
    <>
      <Container className="pt-32 md:pt-40">
        <div className="mb-16">
          <SectionLabel>Portfolio</SectionLabel>
          <FadeIn>
            <h1 className="text-3xl md:text-5xl font-semibold text-[var(--color-fg)] mb-4">
              Products I&apos;ve Built
            </h1>
            <p className="text-sm text-[var(--color-fg-muted)] max-w-lg leading-relaxed">
              A collection of AI-powered platforms, digital products, and ventures —
              each representing a complete journey from opportunity to execution.
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
