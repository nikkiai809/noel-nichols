export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-5 h-5 border-2 border-white/10 border-t-white/60 rounded-full animate-spin" />
        <span className="text-xs text-white/30 font-mono">Loading</span>
      </div>
    </div>
  );
}
