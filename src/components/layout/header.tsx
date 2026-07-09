'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef, useCallback, type ReactNode } from 'react';
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
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  /* Focus trap for mobile menu */
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!mobileOpen) return;
      if (e.key === 'Escape') {
        setMobileOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key !== 'Tab') return;
      const menu = menuRef.current;
      if (!menu) return;
      const focusable = menu.querySelectorAll<HTMLElement>(
        'a, button, [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    },
    [mobileOpen],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  /* Prevent body scroll when mobile menu is open */
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-[var(--color-bg)]/80 backdrop-blur-xl border-b border-[var(--color-border)]'
          : 'bg-transparent',
      )}
    >
      <nav
        className="flex items-center justify-between h-16 px-6 md:px-10 max-w-[1200px] mx-auto"
        aria-label="Main navigation"
      >
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
          ref={toggleRef}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1 p-2 -mr-2 min-w-[44px] min-h-[44px] items-center justify-center"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          <span
            className={cn(
              'block w-5 h-px bg-[var(--color-fg-muted)] transition-all duration-300',
              mobileOpen && 'rotate-45 translate-y-1.5',
            )}
          />
          <span
            className={cn(
              'block w-5 h-px bg-[var(--color-fg-muted)] transition-all duration-300',
              mobileOpen && 'opacity-0',
            )}
          />
          <span
            className={cn(
              'block w-5 h-px bg-[var(--color-fg-muted)] transition-all duration-300',
              mobileOpen && '-rotate-45 -translate-y-1.5',
            )}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="md:hidden border-b border-[var(--color-border)] bg-[var(--color-bg)]/95 backdrop-blur-xl"
        >
          <div className="px-6 py-6 space-y-5">
            {NAV_ITEMS.map((item, i) => (
              <NavLink key={item.label} href={item.href} onClick={() => setMobileOpen(false)}>
                <span className="block py-1">{item.label}</span>
              </NavLink>
            ))}
            <div className="pt-2">
              <Link
                href="/#contact"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center text-sm px-6 py-3 rounded-full bg-[var(--color-accent)] text-white font-medium hover:bg-[var(--color-accent-light)] transition-all min-h-[44px]"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
