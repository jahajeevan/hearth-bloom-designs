import { useState } from "react";
import { Reveal } from "./Reveal";

const projectTypes = ["Complete Home", "Kitchen", "Living Room", "Bedroom", "Commercial", "Renovation"];
const budgets = ["Under ₹5L", "₹5L – ₹15L", "₹15L – ₹40L", "₹40L – ₹1Cr", "₹1Cr+"];

const WHATSAPP = "919999999999";
const PHONE = "+91 99999 99999";

export function Contact() {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", type: projectTypes[0], budget: budgets[1], message: "",
  });
  const [sent, setSent] = useState(false);

  const update = <K extends keyof typeof form>(k: K, v: (typeof form)[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: wire to Lovable Cloud in phase 2
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const waLink = () => {
    const msg = encodeURIComponent(
      `Hi Maison Vivant! I'm ${form.name || "[name]"} — I'd like to discuss a ${form.type} project (${form.budget}).`,
    );
    return `https://wa.me/${WHATSAPP}?text=${msg}`;
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-warm py-28 md:py-40">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <div>
            <div className="mb-4 text-xs uppercase tracking-[0.3em] text-gold">Say hello</div>
            <h2 className="font-display text-4xl leading-tight md:text-6xl">
              Let's design a home <em className="italic text-gradient-gold">worth waking up to.</em>
            </h2>
            <p className="mt-6 max-w-md text-lg text-foreground/75">
              Tell us a little about your project. We'll respond within one working day with
              next steps for a free 45-minute consultation.
            </p>

            <div className="mt-10 space-y-4">
              <a href={waLink()} target="_blank" rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl glass-warm p-5 transition-transform hover:scale-[1.01]">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-gold text-ivory">✆</span>
                <div>
                  <div className="text-xs uppercase tracking-widest text-foreground/60">Chat on WhatsApp</div>
                  <div className="font-medium">Instant reply, 9am – 8pm</div>
                </div>
              </a>
              <a href={`tel:${PHONE.replace(/\s/g, "")}`}
                className="flex items-center gap-4 rounded-2xl glass-warm p-5 transition-transform hover:scale-[1.01]">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-gold text-ivory">☎</span>
                <div>
                  <div className="text-xs uppercase tracking-widest text-foreground/60">Call our studio</div>
                  <div className="font-medium">{PHONE}</div>
                </div>
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-3">
          <form onSubmit={submit} className="rounded-3xl bg-card p-6 shadow-lift md:p-10">
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Full name" >
                <input required value={form.name} onChange={(e) => update("name", e.target.value)}
                  className="input" placeholder="Aarav Mehta" />
              </Field>
              <Field label="Phone">
                <input required value={form.phone} onChange={(e) => update("phone", e.target.value)}
                  className="input" placeholder="+91 90000 00000" />
              </Field>
              <Field label="Email" className="md:col-span-2">
                <input required type="email" value={form.email} onChange={(e) => update("email", e.target.value)}
                  className="input" placeholder="you@family.com" />
              </Field>
              <Field label="Project type">
                <select value={form.type} onChange={(e) => update("type", e.target.value)} className="input">
                  {projectTypes.map((t) => <option key={t}>{t}</option>)}
                </select>
              </Field>
              <Field label="Budget range">
                <select value={form.budget} onChange={(e) => update("budget", e.target.value)} className="input">
                  {budgets.map((b) => <option key={b}>{b}</option>)}
                </select>
              </Field>
              <Field label="Tell us about your home" className="md:col-span-2">
                <textarea rows={4} value={form.message} onChange={(e) => update("message", e.target.value)}
                  className="input resize-none" placeholder="Rooms, timeline, inspirations…" />
              </Field>
            </div>

            <button type="submit"
              className="mt-8 w-full rounded-full bg-primary px-7 py-4 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.01]">
              {sent ? "Thank you — we'll be in touch ✿" : "Send enquiry"}
            </button>
            <p className="mt-4 text-center text-xs text-foreground/50">
              By sending you agree to our privacy policy. No spam, ever.
            </p>
          </form>
        </Reveal>
      </div>

      <style>{`
        .input {
          width: 100%;
          border-radius: 999px;
          border: 1px solid var(--color-border);
          background: var(--color-background);
          padding: 0.9rem 1.25rem;
          font-size: 0.95rem;
          color: var(--color-foreground);
          outline: none;
          transition: border-color .2s, box-shadow .2s;
        }
        textarea.input { border-radius: 1.25rem; }
        .input:focus { border-color: var(--color-ring); box-shadow: 0 0 0 4px color-mix(in oklab, var(--color-ring) 20%, transparent); }
      `}</style>
    </section>
  );
}

function Field({ label, children, className = "" }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-foreground/60">{label}</span>
      {children}
    </label>
  );
}
