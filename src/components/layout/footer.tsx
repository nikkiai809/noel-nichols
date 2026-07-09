import Link from 'next/link';
import { SITE } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-8 px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <Link
            href={SITE.social.github}
            className="text-xs text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
          <Link
            href={SITE.social.linkedin}
            className="text-xs text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Link>
          <Link
            href={`mailto:${SITE.email}`}
            className="text-xs text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] transition-colors"
          >
            Email
          </Link>
        </div>
        <p className="text-xs text-[var(--color-fg-dim)]">
          &copy; {new Date().getFullYear()} {SITE.name}. Built with Next.js.
        </p>
      </div>
    </footer>
  );
}
