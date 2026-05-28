function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`
        relative
        w-full
        rounded-3xl
        border
        border-white/10
        dark:border-white/5
        bg-white/70
        dark:bg-white/[0.03]
        backdrop-blur-xl
        shadow-2xl
        overflow-y-auto
        ${className}
      `}
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />

      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default GlassCard;
