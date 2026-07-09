'use client';

import { Container } from '@/components/ui/container';
import { CaseStudyBody } from '@/components/project/case-study-body';
import type { Project } from '@/types';

interface Props {
  project: Project;
}

export function CaseStudyClient({ project }: Props) {
  return (
    <Container className="pt-0">
      <div className="section-narrow">
        <CaseStudyBody
          sections={project.sections}
          architecture={project.architecture}
          screenshots={project.screenshots}
        />
      </div>
    </Container>
  );
}
