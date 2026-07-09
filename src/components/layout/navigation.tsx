'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useCallback } from 'react';
import { Command, Menu, X, ArrowUpRight } from 'lucide-react';

const navItems = [
  { label: 'Products', href: '#products' },
  { label: 'Approach', href: '#approach' },
  { label: 'Experience', href: '#experience' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Writing', href: '#writing' },
];

export function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      // Detect active section
      const sections = navItems.map(n => n.href.slice(1));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 200) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      window.dispatchEvent(new CustomEvent('open-command-menu'));
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // If not on home page, show only logo + back link
  const isHome = pathname === '/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/85 backdrop-blur-xl border-b border-border/50'
          : 'bg-transparent'
      }`}
    >
      <div className="container-wide flex items-center justify-between h-16 px-6 md:px-8 lg:px-12">
        {/* Logo */}
        <Link
          href="/"
          className="text-sm font-medium tracking-tight hover:opacity-50 transition-opacity"
        >
          Noel Nichols
        </Link>

        {/* Desktop Nav — only on home */}
        {isHome && (
          <nav className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-1.5 text-sm rounded-md transition-all ${
                    isActive
                      ? 'text-foreground font-medium'
                      : 'text-muted-foreground/70 hover:text-foreground'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <div className="w-4" />
            <a
              href="#contact"
              className="ml-2 px-4 py-1.5 text-sm font-medium bg-foreground text-background rounded-full hover:opacity-80 transition-all inline-flex items-center gap-1.5"
            >
              Get in touch <ArrowUpRight className="h-3 w-3" />
            </a>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-command-menu'))}
              className="ml-2 p-1.5 rounded-md text-muted-foreground hover:text-foreground transition-all"
              aria-label="Command menu"
            >
              <Command className="h-4 w-4" />
            </button>
          </nav>
        )}

        {/* Mobile toggle */}
        {isHome && (
          <button
            className="md:hidden p-1.5 rounded-md text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        )}
      </div>

      {/* Mobile Nav */}
      {menuOpen && isHome && (
        <div className="md:hidden border-b border-border bg-background/95 backdrop-blur-xl animate-fade-in">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground rounded-md transition-all"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="h-2" />
            <a
              href="#contact"
              className="mx-3 px-4 py-2.5 text-sm font-medium bg-foreground text-background rounded-full text-center"
              onClick={() => setMenuOpen(false)}
            >
              Get in touch
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
