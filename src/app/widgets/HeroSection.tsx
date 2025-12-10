function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-accent/20 via-background to-background"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 relative">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <div className="inline-block">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/50 text-sm text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Платформа цифровой трансформации
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
            Портал проектов{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent/60">
              автоматизации
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Современные решения для цифровизации университетских процессов.
            Доступ к инновационным проектам автоматизации Нархоз.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
