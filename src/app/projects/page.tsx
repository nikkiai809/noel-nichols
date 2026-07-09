'use client';

import ProjectCard from '@/components/sections/project-card';
import { FadeInUp, FadeIn, SectionContainer } from '@/components/sections/animations';
import { projects } from '@/lib/projects';

export default function ProjectsPage() {
  return (
    <>
      <SectionContainer className="pt-32 md:pt-40">
        <div className="max-w-3xl mb-16">
          <FadeIn>
            <div className="section-label">Portfolio</div>
          </FadeIn>
          <FadeInUp>
            <h1 className="text-3xl md:text-5xl font-semibold text-white mb-4">
              Products I&apos;ve Built
            </h1>
            <p className="text-white/40 text-sm leading-relaxed max-w-xl">
              A collection of AI-powered platforms, digital products, and ventures — each representing
              a complete journey from opportunity to execution.
            </p>
          </FadeInUp>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              name={project.name}
              tagline={project.tagline}
              description={project.description}
              technologies={project.technologies}
              colors={{ gradient: project.gradient }}
              index={i}
            />
          ))}
        </div>
      </SectionContainer>
    </>
  );
}
