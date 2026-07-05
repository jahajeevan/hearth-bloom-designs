import aboutImg from "@/assets/about-studio.jpg";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="relative bg-ivory py-28 md:py-40">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:items-center">
        <Reveal>
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-lift">
              <img
                src={aboutImg}
                alt="Our design team reviewing fabric swatches in the studio"
                width={1280}
                height={1024}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 hidden w-56 rounded-2xl glass-warm p-5 shadow-lift mdisplay md:block">
              <div className="font-display text-4xl text-gradient-gold">14</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-foreground/60">
                Years designing warm, livable homes
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div>
            <div className="mb-4 text-xs uppercase tracking-[0.3em] text-gold">About the studio</div>
            <h2 className="font-display text-4xl leading-tight md:text-6xl">
              We turn houses into <em className="not-italic text-gradient-gold italic">homes worth coming back to.</em>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-foreground/75">
              Maison Vivant is a family-led interior design studio. We believe every home
              carries a story — the morning coffee ritual, the children's first steps,
              the friends who stay too long at the dinner table. Our work is to design
              rooms that hold those moments beautifully, for decades.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-foreground/75">
              From concept sketches to the final cushion, every detail is drawn with
              your family's rhythm in mind — warm materials, natural light, and quiet
              luxury that never shouts.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
              {[
                { n: "480+", l: "Projects delivered" },
                { n: "36", l: "Awards & features" },
                { n: "12", l: "Cities served" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-2xl">{s.n}</div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-foreground/60">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
