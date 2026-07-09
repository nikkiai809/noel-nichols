import Link from 'next/link';

const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/noelnichols1934' },
  { label: 'Instagram', href: 'https://www.instagram.com/downtownxstudios' },
  { label: 'SoundCloud', href: 'https://soundcloud.com/blvcksquvdrecords' },
  { label: 'GitHub', href: '#' },
  { label: 'Email', href: 'mailto:hello@noelnichols.com' },
];

export function Footer() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="content-container px-6 md:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-sm font-semibold tracking-tight">Noel Nichols</p>
            <p className="text-sm text-muted-foreground mt-1">
              Marketing Strategist. Creative Technologist. Builder.
            </p>
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Noel Nichols. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
