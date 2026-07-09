import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-6xl font-semibold text-white mb-4">404</h1>
        <p className="text-white/40 mb-8">This page doesn&apos;t exist.</p>
        <Link
          href="/"
          className="px-6 py-3 bg-white text-black text-sm font-medium rounded-full hover:bg-white/90 transition-all inline-flex items-center gap-2"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
