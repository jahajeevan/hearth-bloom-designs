import { Reveal } from "./Reveal";

const reviews = [
  {
    q: "They didn't just design our house — they understood how our three kids run through it. Every corner works.",
    name: "Ananya & Rohan Mehta",
    role: "Family of five · Bengaluru",
  },
  {
    q: "Warm, patient, and endlessly creative. Our home finally feels like the version of us we always wanted.",
    name: "The D'Souza Family",
    role: "Villa renovation · Goa",
  },
  {
    q: "From the first mood board to the last cushion, it felt like collaborating with a dear friend who happens to be brilliant.",
    name: "Priya Sharma",
    role: "Full home interior · Delhi",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-cream py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-4 text-xs uppercase tracking-[0.3em] text-gold">Family stories</div>
          <h2 className="max-w-3xl font-display text-4xl leading-tight md:text-6xl">
            Loved by the <em className="italic text-gradient-gold">families</em> who live in them.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 100}>
              <figure className="flex h-full flex-col justify-between rounded-3xl bg-card p-8 shadow-soft transition-shadow hover:shadow-lift">
                <div>
                  <div className="font-display text-6xl leading-none text-gradient-gold">"</div>
                  <blockquote className="mt-2 font-display text-xl leading-snug text-foreground">
                    {r.q}
                  </blockquote>
                </div>
                <figcaption className="mt-8 border-t border-border pt-5">
                  <div className="font-medium">{r.name}</div>
                  <div className="text-sm text-foreground/60">{r.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
