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
      'AI music intelligence platform that helps independent artists understand, analyze, and evolve their sound. 8 documents spanning strategy through architecture.',
    docs: yamiDocs.map((d) => ({
      title: d.title,
      slug: d.slug,
      description: d.description,
    })),
  },
  {
    id: 'sonora',
    name: 'Sonora Music Hub',
    description:
      'AI-powered music production and distribution platform for independent artists. 6 documents covering market analysis, strategy, and launch planning.',
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
      'Premium creative and lifestyle brand at the intersection of music, fashion, and culture. 6 documents covering brand strategy, creative direction, and community.',
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
