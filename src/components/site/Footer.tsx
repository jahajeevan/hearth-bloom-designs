export function Footer() {
  return (
    <footer className="bg-ivory pt-16 pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="gold-rule mb-14" />
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-gold text-ivory font-display text-lg">M</span>
              <span className="font-display text-2xl">Maison <span className="italic text-gradient-gold">Vivant</span></span>
            </div>
            <p className="mt-4 max-w-md text-foreground/70">
              A family-led interior design studio, creating warm, considered homes since 2011.
            </p>
          </div>
          <div>
            <div className="mb-4 text-xs uppercase tracking-widest text-foreground/60">Studio</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-gold">About</a></li>
              <li><a href="#process" className="hover:text-gold">Process</a></li>
              <li><a href="#portfolio" className="hover:text-gold">Portfolio</a></li>
              <li><a href="#testimonials" className="hover:text-gold">Stories</a></li>
            </ul>
          </div>
          <div>
            <div className="mb-4 text-xs uppercase tracking-widest text-foreground/60">Visit</div>
            <address className="not-italic text-sm text-foreground/70">
              12, Linden Lane<br />
              Bandra West, Mumbai 400050<br />
              hello@maisonvivant.co
            </address>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-4 text-xs text-foreground/50 md:flex-row">
          <div>© {new Date().getFullYear()} Maison Vivant Design Studio. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold">Instagram</a>
            <a href="#" className="hover:text-gold">Pinterest</a>
            <a href="#" className="hover:text-gold">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
