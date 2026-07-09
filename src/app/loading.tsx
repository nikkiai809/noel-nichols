export default function Loading() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-5 h-5 border-2 border-[var(--color-border)] border-t-[var(--color-accent)] rounded-full animate-spin" />
        <span className="text-xs text-[var(--color-fg-dim)] font-mono">Loading</span>
      </div>
    </div>
  );
}
