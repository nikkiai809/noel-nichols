'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, type ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { NAV_ITEMS } from '@/lib/constants';

function NavLink({ href, children, onClick }: { href: string; children: ReactNode; onClick?: () => void }) {
  const pathname = usePathname();
  const isActive = href.startsWith('/#')
    ? pathname === '/' || pathname === href.split('#')[0]
    : pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        'text-sm transition-colors duration-300',
        isActive ? 'text-[var(--color-fg)]' : 'text-[var(--color-fg-dim)] hover:text-[var(--color-fg-muted)]'
      )}
    >
      {children}
    </Link>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-[var(--color-bg)]/80 backdrop-blur-xl border-b border-[var(--color-border)]'
          : 'bg-transparent'
      )}
    >
      <nav className="flex items-center justify-between h-16 px-6 md:px-10 max-w-[1200px] mx-auto">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-[var(--color-fg)] hover:opacity-70 transition-opacity"
        >
          Noel Nichols
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.label} href={item.href}>
              {item.label}
            </NavLink>
          ))}
          <Link
            href="/#contact"
            className="text-sm px-4 py-1.5 rounded-full bg-[var(--color-accent)] text-white font-medium hover:bg-[var(--color-accent-light)] transition-all"
          >
            Get in touch
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1 p-2"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <span
            className={cn(
              'block w-5 h-px bg-[var(--color-fg-muted)] transition-all duration-300',
              mobileOpen && 'rotate-45 translate-y-1.5'
            )}
          />
          <span
            className={cn(
              'block w-5 h-px bg-[var(--color-fg-muted)] transition-all duration-300',
              mobileOpen && 'opacity-0'
            )}
          />
          <span
            className={cn(
              'block w-5 h-px bg-[var(--color-fg-muted)] transition-all duration-300',
              mobileOpen && '-rotate-45 -translate-y-1.5'
            )}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-b border-[var(--color-border)] bg-[var(--color-bg)]/95 backdrop-blur-xl">
          <div className="px-6 py-4 space-y-4">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.label} href={item.href} onClick={() => setMobileOpen(false)}>
                {item.label}
              </NavLink>
            ))}
            <Link
              href="/#contact"
              onClick={() => setMobileOpen(false)}
              className="inline-block text-sm px-4 py-1.5 rounded-full bg-[var(--color-accent)] text-white font-medium"
            >
              Get in touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
