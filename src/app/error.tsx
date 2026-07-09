'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-4xl font-semibold text-[var(--color-fg)] mb-4">
          Something went wrong
        </h1>
        <p className="text-[var(--color-fg-muted)] mb-8 text-sm">
          {error.message || 'An unexpected error occurred.'}
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-full bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-light)] transition-all"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
