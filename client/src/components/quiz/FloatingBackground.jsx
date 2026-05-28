function FloatingBackground() {
  return (
    <>
      <div className="absolute top-[-120px] left-[-120px] w-72 h-72 bg-blue-500/20 blur-3xl rounded-full animate-pulse" />

      <div className="absolute bottom-[-120px] right-[-120px] w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full animate-pulse delay-1000" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_30%)]" />
    </>
  );
}

export default FloatingBackground;
