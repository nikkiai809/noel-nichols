import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: 'section' | 'div';
  id?: string;
  narrow?: boolean;
}

export function Container({ children, className, as: Tag = 'section', id, narrow }: ContainerProps) {
  return (
    <Tag id={id} className={cn('section-container', className)}>
      <div className={narrow ? 'section-narrow' : 'section-inner'}>{children}</div>
    </Tag>
  );
}
