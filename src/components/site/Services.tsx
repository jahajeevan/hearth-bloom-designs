import { Reveal } from "./Reveal";
import kitchen from "@/assets/service-kitchen.jpg";
import living from "@/assets/service-living.jpg";
import bedroom from "@/assets/service-bedroom.jpg";
import home from "@/assets/service-home.jpg";
import commercial from "@/assets/service-commercial.jpg";
import renovation from "@/assets/service-renovation.jpg";

const services = [
  { title: "Complete Home Interiors", desc: "Turnkey design and execution for every room of your home, in one warm signature.", img: home },
  { title: "Modular Kitchen Design", desc: "Kitchens that cook, host and gather — ergonomics wrapped in natural materials.", img: kitchen },
  { title: "Living Room Design", desc: "Layered, welcoming spaces built for slow evenings and long conversations.", img: living },
  { title: "Bedroom Interiors", desc: "Restful sanctuaries with soft palettes, honest textures, and considered light.", img: bedroom },
  { title: "Commercial Spaces", desc: "Boutique offices and hospitality interiors that carry the same warm hospitality.", img: commercial },
  { title: "Renovation Services", desc: "Breathe new life into existing homes without losing what already feels loved.", img: renovation },
];

export function Services() {
  return (
    <section id="services" className="relative bg-cream py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="flex flex-col items-end justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <div className="mb-4 text-xs uppercase tracking-[0.3em] text-gold">What we design</div>
              <h2 className="font-display text-4xl leading-tight md:text-6xl">
                Design services, <em className="italic text-gradient-gold">crafted around your life.</em>
              </h2>
            </div>
            <p className="max-w-md text-foreground/70">
              From a single room refresh to a full-home transformation, every project is
              led by a dedicated designer who listens first.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <article className="group relative overflow-hidden rounded-3xl bg-card shadow-soft transition-all duration-500 hover:shadow-lift">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    width={1024}
                    height={1280}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent p-6 pt-24">
                  <h3 className="font-display text-2xl text-ivory">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ivory/85">{s.desc}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-champagne">
                    Explore <span aria-hidden>→</span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
