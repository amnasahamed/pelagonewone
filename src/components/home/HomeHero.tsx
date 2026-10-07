import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import type { HomePageContent } from "@/lib/home-types";

export function HomeHero({ hero }: Pick<HomePageContent, "hero">) {
  return (
    <section className="editorial-hero" aria-labelledby="home-title">
      <div className="editorial-container editorial-hero__grid">
        <div className="editorial-hero__copy">
          <p className="eyebrow">
            <span className="status-dot" /> Your business. In good hands.
          </p>
          <h1 id="home-title">
            {hero.headlineLine1}
            <br />
            <span className="editorial-text">{hero.headlineLine2}</span>
          </h1>
          <p className="editorial-hero__description">{hero.description}</p>
          <div className="editorial-hero__actions">
            <Button href="/contact">Find your next step</Button>
            <Link href="/services" className="text-link">
              Explore our services <ArrowIcon />
            </Link>
          </div>
          <div className="hero-advisors">
            <div className="hero-advisors__faces" aria-hidden="true">
              {["minhaj", "sahil", "salim"].map((name) => (
                <Image
                  key={name}
                  src={`/team/team-${name}.png`}
                  alt=""
                  width={44}
                  height={44}
                />
              ))}
            </div>
            <p>
              Real people. Personal support.
              <br />
              <span>One dedicated advisor, every step.</span>
            </p>
          </div>
        </div>
        <div className="editorial-hero__visual">
          <div className="hero-photo-shell">
            <div className="hero-photo">
              <Image
                src="/images/editorial/foundations-hero.jpg"
                alt="A sculptural travertine staircase with blue stone accents, representing strong foundations and steady growth"
                fill
                preload
                sizes="(max-width: 900px) 90vw, 44vw"
              />
              <div className="hero-photo__caption">
                <span>
                  A stronger start.
                  <br />A clearer way forward.
                </span>
                <span className="hero-photo__location">
                  THE PELAGO APPROACH ↗
                </span>
              </div>
            </div>
          </div>
          <div className="hero-certified">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              aria-hidden="true"
            >
              <path d="m12 2 3 2 3.5.5.5 3.5 2 4-2 3-.5 3.5-3.5.5-3 2-3-2-3.5-.5L5.5 15l-2-3 2-4L6 4.5 9 4Z" />
              <path d="m8 12 2.5 2.5L16 9" />
            </svg>
            <span>
              Startup India
              <br />
              <strong>Recognised</strong>
            </span>
          </div>
          <Link className="hero-service-note" href="/startup-bundle">
            <span className="hero-service-note__icon">
              <ArrowIcon diagonal />
            </span>
            <span>
              <small>FROM IDEA TO INCORPORATION</small>
              <strong>Start with a solid foundation.</strong>
            </span>
            <ArrowIcon />
          </Link>
          <span className="hero-side-label" aria-hidden="true">
            YOUR LONG-TERM BUSINESS PARTNER
          </span>
        </div>
      </div>
      <div className="editorial-container hero-proof">
        <p>
          Clarity from day one.
          <br />
          <span>Confidence for the long run.</span>
        </p>
        {hero.trustItems
          .filter((item) => item.icon !== "shield")
          .map((item) => (
            <div className="hero-proof__item" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        <div className="hero-proof__item">
          <strong>One team.</strong>
          <span>Registration to annual filing</span>
        </div>
      </div>
    </section>
  );
}
