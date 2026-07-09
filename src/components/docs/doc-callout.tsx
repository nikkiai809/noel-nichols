'use client';

interface DocCalloutProps {
  title: string;
  body: string;
  type?: 'info' | 'warning' | 'success';
}

export function DocCallout({ title, body, type = 'info' }: DocCalloutProps) {
  const colors = {
    info: {
      border: 'border-blue-500/30',
      bg: 'bg-blue-500/5',
      icon: 'text-blue-400',
      accent: 'bg-blue-500/20',
    },
    warning: {
      border: 'border-amber-500/30',
      bg: 'bg-amber-500/5',
      icon: 'text-amber-400',
      accent: 'bg-amber-500/20',
    },
    success: {
      border: 'border-emerald-500/30',
      bg: 'bg-emerald-500/5',
      icon: 'text-emerald-400',
      accent: 'bg-emerald-500/20',
    },
  };

  const c = colors[type];

  return (
    <div
      className={`${c.border} ${c.bg} rounded-lg border p-5 my-6`}
    >
      <div className="flex items-start gap-3">
        <div
          className={`${c.accent} ${c.icon} mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded text-xs font-bold`}
        >
          {type === 'warning' ? '!' : type === 'success' ? '✓' : 'i'}
        </div>
        <div>
          <h4 className="text-sm font-semibold text-[var(--color-fg)] mb-1">
            {title}
          </h4>
          <p className="text-sm leading-relaxed text-[var(--color-fg-muted)]">
            {body}
          </p>
        </div>
      </div>
    </div>
  );
}
