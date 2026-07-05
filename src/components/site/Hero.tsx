import { useEffect, useState } from "react";
import heroVideo from "@/assets/hero-transformation.mp4.asset.json";
import heroFallback from "@/assets/hero-fallback.jpg";

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    setMounted(true);
    const t = setTimeout(() => setRevealed(true), 350);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-ivory">
      {/* Background video with parallax feel */}
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          src={heroVideo.url}
          poster={heroFallback}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{
            transform: mounted ? "scale(1.02)" : "scale(1.15)",
            transition: "transform 6s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        />
        {/* Warm ivory wash + vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-ivory/40 via-ivory/10 to-ivory/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-ivory/60 via-transparent to-ivory/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-32 pb-20">
        <div
          className="max-w-3xl"
          style={{
            opacity: revealed ? 1 : 0,
            transform: revealed ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 1.4s ease-out, transform 1.4s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <div className="mb-8 inline-flex items-center gap-3 rounded-full glass-warm px-4 py-2 text-xs uppercase tracking-[0.2em] text-foreground/70">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-gold" />
            Interior design studio · Est. 2011
          </div>

          <h1 className="font-display text-5xl leading-[1.02] tracking-tight text-foreground md:text-7xl lg:text-[5.5rem]">
            Creating Homes That{" "}
            <span className="italic text-gradient-gold">Tell Your Story</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/75 md:text-xl">
            Personalized interior designs crafted for comfort, beauty, and everyday living —
            for the families who call them home.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#portfolio"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-medium text-primary-foreground shadow-lift transition-all hover:scale-[1.02] hover:shadow-soft"
            >
              Explore Our Designs
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full glass-warm px-7 py-4 text-sm font-medium text-foreground transition-all hover:bg-cream"
            >
              Book Free Consultation
            </a>
          </div>

          {/* Stats strip */}
          <div className="mt-16 grid max-w-2xl grid-cols-3 gap-8 border-t border-border/60 pt-8">
            {[
              { n: "480+", l: "Homes designed" },
              { n: "14", l: "Years crafting spaces" },
              { n: "98%", l: "Families referred us" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl md:text-4xl">{s.n}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-foreground/60">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-foreground/60">
        <div className="flex flex-col items-center gap-2">
          <span>Scroll</span>
          <span className="block h-10 w-px animate-pulse bg-gradient-to-b from-gold to-transparent" />
        </div>
      </div>
    </section>
  );
}
