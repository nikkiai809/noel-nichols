import { ArrowUpRight } from 'lucide-react';

const socials = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/noelnichols1934' },
  { label: 'GitHub', href: 'https://github.com/nikkiai809' },
  { label: 'X / Twitter', href: 'https://x.com/noelnichols' },
];

export function Footer() {
  return (
    <footer className="section pb-12">
      <div className="container-wide px-6 md:px-8 lg:px-12">
        <div className="divider mb-12" />
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-sm font-medium">Noel Nichols</p>
            <p className="text-sm text-muted-foreground mt-0.5">
              Building products at the intersection of AI, music, and creativity.
            </p>
          </div>
          <div className="flex items-center gap-6">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
              >
                {s.label} <ArrowUpRight className="h-3 w-3" />
              </a>
            ))}
          </div>
        </div>
        <p className="text-xs text-muted-foreground/50 mt-8">
          &copy; {new Date().getFullYear()} Noel Nichols
        </p>
      </div>
    </footer>
  );
}
