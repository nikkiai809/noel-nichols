import { DocContent, DocVenture } from '@/types';
import { signalDocs } from './signal';
import { yamiDocs } from './yami';
import { sonoraDocs } from './sonora';
import { velvetRougeDocs } from './velvet-rouge';

export const allDocs: DocContent[] = [
  ...signalDocs,
  ...yamiDocs,
  ...sonoraDocs,
  ...velvetRougeDocs,
];

export const docVentures: DocVenture[] = [
  {
    id: 'signal',
    name: 'SIGNAL',
    description:
      'AI-powered music supervision platform transforming how media producers discover, license, and sync music. 10 comprehensive documents covering the full venture journey.',
    docs: signalDocs.map((d) => ({
      title: d.title,
      slug: d.slug,
      description: d.description,
    })),
  },
  {
    id: 'yami',
    name: 'YAMI',
    description:
      'Preventive mental health ecosystem for Mexico. Anonymous screening, AI accompaniment, and community support. 8 documents spanning market research through architecture.',
    docs: yamiDocs.map((d) => ({
      title: d.title,
      slug: d.slug,
      description: d.description,
    })),
  },
  {
    id: 'sonora',
    name: 'Sonora Music Creative Hub',
    description:
      '360° physical ecosystem for artist development — from discovery through global scale. 11 interconnected spaces under one roof. 6 documents covering the full blueprint.',
    docs: sonoraDocs.map((d) => ({
      title: d.title,
      slug: d.slug,
      description: d.description,
    })),
  },
  {
    id: 'velvet-rouge',
    name: 'Velvet Rouge',
    description:
      'Invitation-only global creative network connecting six cities. A private cultural observation platform — not a brand, not an event, not a place. 6 documents.',
    docs: velvetRougeDocs.map((d) => ({
      title: d.title,
      slug: d.slug,
      description: d.description,
    })),
  },
];

export function getDoc(
  venture: string,
  slug: string,
): DocContent | undefined {
  return allDocs.find((d) => d.ventureSlug === venture && d.slug === slug);
}

export function getVentureDocs(venture: string): DocContent[] {
  return allDocs.filter((d) => d.ventureSlug === venture);
}

export function getAdjacentDocs(
  venture: string,
  slug: string,
): { prev: { title: string; slug: string } | null; next: { title: string; slug: string } | null } {
  const ventureDocs = allDocs.filter((d) => d.ventureSlug === venture);
  const idx = ventureDocs.findIndex((d) => d.slug === slug);
  return {
    prev: idx > 0 ? { title: ventureDocs[idx - 1].title, slug: ventureDocs[idx - 1].slug } : null,
    next: idx < ventureDocs.length - 1 ? { title: ventureDocs[idx + 1].title, slug: ventureDocs[idx + 1].slug } : null,
  };
}

export function getRelatedDocs(current: DocContent, count = 3): DocContent[] {
  return allDocs
    .filter(
      (d) =>
        d.ventureSlug !== current.ventureSlug &&
        d.tags.some((t) => current.tags.includes(t)),
    )
    .slice(0, count);
}
