import Image from "next/image";
import Link from "next/link";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import type { HomePageContent } from "@/lib/home-types";

export function TeamTrust({ teamTrust }: Pick<HomePageContent, "teamTrust">) {
  return (
    <section className="editorial-section team-editorial">
      <div className="editorial-container team-layout">
        <RevealOnScroll className="team-photo-shell">
          <div className="team-photo">
            <Image
              src="/office/office-3.jpg"
              alt="The Pelago leadership team in Kozhikode"
              fill
              sizes="(max-width: 900px) 90vw, 46vw"
            />
            <div className="team-photo__caption">
              <span>Local roots. A wider outlook.</span>
              <span>KOZHIKODE · EST. 2019</span>
            </div>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={100} className="team-copy">
          <p className="eyebrow">03 / Real people in your corner</p>
          <h2>
            Expertise is personal.
            <br />
            <span className="editorial-text">So are we.</span>
          </h2>
          <p className="section-description">{teamTrust.subtitle}</p>
          <ul className="team-promises">
            {teamTrust.points.map((point, i) => (
              <li key={point}>
                <span>0{i + 1}</span>
                {point}
                <span aria-hidden="true">↗</span>
              </li>
            ))}
          </ul>
          <Link href="/about" className="text-link">
            Get to know Pelago <ArrowIcon diagonal />
          </Link>
          <p className="team-copy__footnote">
            Chartered accountants, compliance specialists,
            <br />
            and people who care about your business.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
