'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const navItems = [
  { label: 'Work', href: '/#work' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/[0.04]'
          : 'bg-transparent'
      }`}
    >
      <nav className="flex items-center justify-between h-16 px-6 md:px-10 max-w-[1280px] mx-auto">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-white/90 hover:text-white transition-colors"
        >
          Noel Nichols
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href.startsWith('/#') && pathname === '/');
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm transition-colors ${
                  isActive ? 'text-white' : 'text-white/40 hover:text-white/70'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/#contact"
            className="text-sm px-4 py-1.5 rounded-full bg-white text-black font-medium hover:bg-white/90 transition-all"
          >
            Get in touch
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-white/60 transition-all ${mobileOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`block w-5 h-px bg-white/60 transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-white/60 transition-all ${mobileOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/[0.04] bg-[#0a0a0a]/95 backdrop-blur-xl">
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block text-sm text-white/60 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="inline-block text-sm px-4 py-1.5 rounded-full bg-white text-black font-medium"
            >
              Get in touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
