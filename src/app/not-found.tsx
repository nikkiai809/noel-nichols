import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-6xl font-semibold text-[var(--color-fg)] mb-4">404</h1>
        <p className="text-[var(--color-fg-muted)] mb-8 text-sm">
          This page doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-full bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-light)] transition-all"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
