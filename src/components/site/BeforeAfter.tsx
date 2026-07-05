import { useRef, useState } from "react";
import { Reveal } from "./Reveal";
import before from "@/assets/before-room.jpg";
import after from "@/assets/after-room.jpg";

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement | null>(null);
  const dragging = useRef(false);

  const setFromX = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };

  return (
    <section className="relative bg-ivory py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-4 text-xs uppercase tracking-[0.3em] text-gold">Before & after</div>
          <h2 className="max-w-3xl font-display text-4xl leading-tight md:text-6xl">
            Drag to reveal the <em className="italic text-gradient-gold">transformation.</em>
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div
            ref={ref}
            className="relative mt-14 aspect-[16/10] w-full select-none overflow-hidden rounded-3xl shadow-lift"
            onMouseDown={(e) => { dragging.current = true; setFromX(e.clientX); }}
            onMouseMove={(e) => { if (dragging.current) setFromX(e.clientX); }}
            onMouseUp={() => (dragging.current = false)}
            onMouseLeave={() => (dragging.current = false)}
            onTouchStart={(e) => setFromX(e.touches[0].clientX)}
            onTouchMove={(e) => setFromX(e.touches[0].clientX)}
          >
            <img src={after} alt="After renovation" className="absolute inset-0 h-full w-full object-cover" />
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${pos}%` }}
            >
              <img src={before} alt="Before renovation" className="absolute inset-y-0 left-0 h-full w-[100vw] max-w-none object-cover" style={{ width: ref.current?.getBoundingClientRect().width ?? "100%" }} />
            </div>

            <div className="pointer-events-none absolute left-6 top-6 rounded-full glass-warm px-4 py-1.5 text-xs uppercase tracking-widest">Before</div>
            <div className="pointer-events-none absolute right-6 top-6 rounded-full bg-primary px-4 py-1.5 text-xs uppercase tracking-widest text-primary-foreground">After</div>

            {/* handle */}
            <div
              className="absolute inset-y-0 z-10 flex w-1 items-center justify-center bg-ivory/90"
              style={{ left: `calc(${pos}% - 2px)` }}
            >
              <div className="grid h-12 w-12 -translate-x-0 place-items-center rounded-full bg-gradient-gold text-ivory shadow-lift">
                <span className="text-lg">⇔</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
