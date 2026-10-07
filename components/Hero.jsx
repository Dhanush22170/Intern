export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(55rem_38rem_at_90%_-10%,rgba(47,75,255,0.22),transparent),radial-gradient(40rem_30rem_at_0%_100%,rgba(185,240,211,0.6),transparent)] dark:bg-[radial-gradient(55rem_38rem_at_90%_-10%,rgba(47,75,255,0.4),transparent),radial-gradient(40rem_30rem_at_0%_100%,rgba(185,240,211,0.12),transparent)]"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 pb-24 pt-16 md:grid-cols-[1.4fr_1fr] md:pb-32 md:pt-28">
        <div>
          <h1
            className="hero-rise font-display text-6xl font-extrabold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl"
            style={{ "--i": 0 }}
          >
            Plainsight Studio
          </h1>
          <p
            className="hero-rise mt-6 max-w-xl text-lg leading-relaxed text-ink/75 sm:text-xl dark:text-fog/75"
            style={{ "--i": 1 }}
          >
            We design brands and build websites that are hard to overlook.
          </p>
          <div className="hero-rise mt-10 flex flex-wrap gap-4" style={{ "--i": 2 }}>
            <a
              href="#work"
              className="rounded-full bg-ink px-7 py-3.5 font-semibold text-paper transition hover:bg-cobalt dark:bg-fog dark:text-night dark:hover:bg-mint"
            >
              View our work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-ink/30 px-7 py-3.5 font-semibold transition hover:bg-ink/5 dark:border-fog/30 dark:hover:bg-fog/10"
            >
              Start a project
            </a>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="hero-rise relative mx-auto aspect-square w-full max-w-xs md:max-w-sm"
          style={{ "--i": 3 }}
        >
          <div className="absolute left-0 top-0 h-3/5 w-3/5 rounded-full bg-cobalt" />
          <div className="absolute bottom-0 right-0 h-3/5 w-3/5 rounded-[2.5rem] bg-mint" />
          <div className="absolute right-3 top-8 h-1/3 w-1/3 rounded-tl-full bg-coral" />
          <div className="absolute bottom-10 left-6 h-1/4 w-1/4 rounded-full border-[3px] border-ink dark:border-fog" />
        </div>
      </div>
    </section>
  );
}
