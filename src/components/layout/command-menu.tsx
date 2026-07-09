'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, ArrowRight } from 'lucide-react';

const pages = [
  { label: 'Home', href: '/', category: 'Pages' },
  { label: 'About', href: '/about', category: 'Pages' },
  { label: 'Projects', href: '/projects', category: 'Pages' },
  { label: 'Experience', href: '/experience', category: 'Pages' },
  { label: 'Writing', href: '/writing', category: 'Pages' },
  { label: 'Skills', href: '/skills', category: 'Pages' },
  { label: 'Speaking', href: '/speaking', category: 'Pages' },
  { label: 'Contact', href: '/contact', category: 'Pages' },
  { label: 'SIGNAL', href: '/projects/signal', category: 'Projects' },
  { label: 'YAMI', href: '/projects/yami', category: 'Projects' },
  { label: 'Velvet Rouge', href: '/projects/velvet-rouge', category: 'Projects' },
  { label: 'Sonora Music Hub', href: '/projects/sonora-music-hub', category: 'Projects' },
  { label: 'Sonora Digital Corp', href: '/projects/sonora-digital-corp', category: 'Projects' },
  { label: 'Downtown Studios', href: '/projects/downtown-studios', category: 'Projects' },
  { label: 'Blvck Squvd', href: '/projects/blvck-squvd', category: 'Projects' },
];

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const filtered = query.trim()
    ? pages.filter((p) =>
        p.label.toLowerCase().includes(query.toLowerCase())
      )
    : pages;

  const grouped = filtered.reduce<Record<string, typeof pages>>((acc, p) => {
    if (!acc[p.category]) acc[p.category] = [];
    acc[p.category].push(p);
    return acc;
  }, {});

  const flatList = Object.entries(grouped).flatMap(([cat, items]) => [
    { type: 'category' as const, label: cat, href: '' },
    ...items.map((item) => ({ type: 'item' as const, ...item })),
  ]);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener('open-command-menu', handler);
    return () => window.removeEventListener('open-command-menu', handler);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  useEffect(() => {
    if (open) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  const navigate = useCallback(
    (href: string) => {
      setOpen(false);
      router.push(href);
    },
    [router]
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((i) => Math.min(i + 1, flatList.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const item = flatList[selectedIndex];
      if (item && item.type === 'item') {
        navigate(item.href);
      }
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh]"
      onClick={() => setOpen(false)}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      {/* Dialog */}
      <div
        className="relative w-full max-w-lg mx-4 bg-background border border-border rounded-xl shadow-2xl overflow-hidden animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search input */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
          <Search className="h-4 w-4 text-muted-foreground shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Search pages..."
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
          <kbd className="hidden sm:inline-flex text-[10px] text-muted-foreground bg-muted px-1.5 py-0.5 rounded">
            ESC
          </kbd>
        </div>

        {/* Results */}
        <div className="max-h-72 overflow-y-auto p-2">
          {flatList.length === 0 && (
            <p className="text-sm text-muted-foreground text-center py-6">
              No results found
            </p>
          )}

          {Object.entries(grouped).map(([category, items]) => (
            <div key={category}>
              <p className="px-2 py-1.5 text-[11px] font-medium text-muted-foreground uppercase tracking-wider">
                {category}
              </p>
              {items.map((item) => {
                const idx = flatList.findIndex(
                  (f) => f.type === 'item' && f.href === item.href
                );
                const isSelected = idx === selectedIndex;
                return (
                  <button
                    key={item.href}
                    onClick={() => navigate(item.href)}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-md transition-colors ${
                      isSelected
                        ? 'bg-muted text-foreground'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowRight
                      className={`h-3 w-3 transition-opacity ${
                        isSelected ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-4 py-2 border-t border-border flex items-center gap-4 text-[11px] text-muted-foreground">
          <span className="flex items-center gap-1">
            <kbd className="bg-muted px-1 rounded text-[10px]">↑↓</kbd> Navigate
          </span>
          <span className="flex items-center gap-1">
            <kbd className="bg-muted px-1 rounded text-[10px]">↵</kbd> Open
          </span>
          <span className="flex items-center gap-1">
            <kbd className="bg-muted px-1 rounded text-[10px]">ESC</kbd> Close
          </span>
        </div>
      </div>
    </div>
  );
}
