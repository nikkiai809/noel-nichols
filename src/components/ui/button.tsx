import { cn } from '@/lib/utils';
import Link from 'next/link';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface ButtonBaseProps {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
}

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-light)] shadow-md hover:shadow-lg',
  secondary:
    'bg-[var(--color-bg-surface)] text-[var(--color-fg)] border border-[var(--color-border)] hover:border-[var(--color-border-hover)] hover:bg-[var(--color-bg-elevated)]',
  ghost:
    'text-[var(--color-fg-muted)] hover:text-[var(--color-fg)]',
};

const baseStyles =
  'inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ease-out-expo focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] focus-visible:outline-offset-2';

export function Button(props: ButtonProps) {
  const { variant = 'primary', children, className, ...rest } = props;

  const classes = cn(baseStyles, variantStyles[variant], className);

  if ('href' in rest && rest.href) {
    const { href, ...anchorRest } = rest as ButtonAsLink;
    const isExternal = href.startsWith('http') || href.startsWith('mailto');

    if (isExternal) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...anchorRest}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...anchorRest}>
        {children}
      </Link>
    );
  }

  const { href: _href, ...buttonRest } = rest as ButtonAsButton;
  return <button className={classes} {...buttonRest}>{children}</button>;
}
