import { Reveal } from "./Reveal";

const steps = [
  { n: "01", t: "Consultation", d: "A warm conversation about how your family lives, dreams and gathers." },
  { n: "02", t: "Concept Planning", d: "Mood boards, palettes and layouts tailored to your rhythms." },
  { n: "03", t: "3D Visualization", d: "Walk through your future home in photoreal detail before we build." },
  { n: "04", t: "Material Selection", d: "Curated fabrics, woods and finishes chosen with you, in person." },
  { n: "05", t: "Execution", d: "A dedicated project lead orchestrates every craftsperson on site." },
  { n: "06", t: "Dream Home Delivery", d: "We hand you the keys — styled, scented, and ready to be lived in." },
];

export function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-gradient-warm py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-4 text-xs uppercase tracking-[0.3em] text-gold">How we work</div>
          <h2 className="font-display text-4xl leading-tight md:text-6xl">
            Six calm steps from <em className="italic text-gradient-gold">first hello</em> to home.
          </h2>
        </Reveal>

        <div className="relative mt-20">
          {/* golden thread */}
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-gold to-transparent md:block" />
          <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-6">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 90}>
                <div className="relative">
                  <div className="mb-6 grid h-20 w-20 place-items-center rounded-full bg-card font-display text-2xl text-gradient-gold shadow-lift">
                    {s.n}
                  </div>
                  <h3 className="font-display text-xl">{s.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/70">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
