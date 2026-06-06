/** Soft ambient depth — no spinning rings or heavy motion */
export function HeroAmbient() {
  return (
    <div className="home-hero-ambient pointer-events-none absolute inset-0 z-[2] overflow-hidden" aria-hidden>
      <span className="home-hero-blob home-hero-blob--1" />
      <span className="home-hero-blob home-hero-blob--2" />
    </div>
  );
}
