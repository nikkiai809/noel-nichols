import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-8 px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <Link href="https://github.com/nikkiai809" className="text-xs text-white/30 hover:text-white/60 transition-colors">
            GitHub
          </Link>
          <Link href="https://linkedin.com/in/noelnichols" className="text-xs text-white/30 hover:text-white/60 transition-colors">
            LinkedIn
          </Link>
          <Link href="mailto:hello@noelnichols.com" className="text-xs text-white/30 hover:text-white/60 transition-colors">
            Email
          </Link>
        </div>
        <p className="text-xs text-white/20">
          &copy; {new Date().getFullYear()} Noel Nichols. Built with Next.js.
        </p>
      </div>
    </footer>
  );
}
