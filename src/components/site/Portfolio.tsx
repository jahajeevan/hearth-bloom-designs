import { useState } from "react";
import { Reveal } from "./Reveal";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

type Cat = "All" | "Living Room" | "Bedroom" | "Kitchen" | "Luxury Homes" | "Office Spaces";

const projects: { title: string; place: string; cat: Exclude<Cat, "All">; img: string; span?: string }[] = [
  { title: "The Sunlit Loft", place: "Bandra, Mumbai", cat: "Luxury Homes", img: p1, span: "md:col-span-2 md:row-span-2" },
  { title: "Aashiya Bedroom", place: "Pune", cat: "Bedroom", img: p2 },
  { title: "Marble & Oak Kitchen", place: "Whitefield, Bengaluru", cat: "Kitchen", img: p3, span: "md:col-span-2" },
  { title: "The Reading Room", place: "New Delhi", cat: "Office Spaces", img: p4 },
  { title: "Heritage Dining", place: "Jaipur", cat: "Living Room", img: p5, span: "md:col-span-2" },
  { title: "Mira's Nursery", place: "Goa", cat: "Bedroom", img: p6 },
];

const cats: Cat[] = ["All", "Living Room", "Bedroom", "Kitchen", "Luxury Homes", "Office Spaces"];

export function Portfolio() {
  const [active, setActive] = useState<Cat>("All");
  const filtered = projects.filter((p) => active === "All" || p.cat === active);

  return (
    <section id="portfolio" className="relative bg-ivory py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-4 text-xs uppercase tracking-[0.3em] text-gold">Selected work</div>
          <h2 className="font-display text-4xl leading-tight md:text-6xl">
            A portfolio of <em className="italic text-gradient-gold">warm, lived-in spaces.</em>
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-5 py-2.5 text-sm transition-all ${
                  active === c
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "glass-warm text-foreground/70 hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid auto-rows-[240px] grid-cols-1 gap-5 md:grid-cols-4 md:auto-rows-[280px]">
          {filtered.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 60}
              className={`group relative overflow-hidden rounded-3xl shadow-soft transition-shadow duration-500 hover:shadow-lift ${p.span ?? ""}`}
            >
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent opacity-90" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-ivory">
                <div className="text-[10px] uppercase tracking-[0.25em] text-champagne">{p.cat}</div>
                <h3 className="mt-1 font-display text-2xl md:text-3xl">{p.title}</h3>
                <div className="text-sm text-ivory/80">{p.place}</div>
              </div>
              <div className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full glass-warm text-foreground opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:-translate-y-1">
                →
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
