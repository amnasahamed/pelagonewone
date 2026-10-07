import Link from "next/link";
import Image from "next/image";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { ServiceSection } from "@/lib/cms/services-service";

type Props = {
  sections: ServiceSection[];
  highlights: Record<string, { fromPrice: string; timeline: string }>;
};
const descriptions: Record<string, string> = {
  start:
    "Make it official. Choose the right structure and get your business ready for what’s next.",
  tax: "Keep your books clear, your returns on time, and your attention on the business.",
  protect: "Give your brand, ideas, and hard work the protection they deserve.",
  compliance:
    "Stay ahead of deadlines with a team that takes care of the details.",
  grow: "Build the financial and operational systems for your next chapter.",
};
const names: Record<string, string> = {
  start: "Start with confidence.",
  tax: "Make tax feel simple.",
  protect: "Protect what you build.",
  compliance: "Stay one step ahead.",
  grow: "Ready for what’s next.",
};

export function HomeServices({ sections, highlights }: Props) {
  return (
    <section className="editorial-section services-editorial" id="our-services">
      <div className="editorial-container">
        <RevealOnScroll>
          <div className="section-intro">
            <div>
              <p className="eyebrow">01 / Expertise, at every stage</p>
              <h2>
                A big picture partner.
                <br />
                <span className="editorial-text">An eye for every detail.</span>
              </h2>
            </div>
            <p>
              Starting out, finding your rhythm, or scaling up — the right
              support changes everything.
            </p>
          </div>
        </RevealOnScroll>
        <div className="service-editorial-grid">
          {sections.map((section, i) => (
            <RevealOnScroll
              key={section.id}
              delay={i * 40}
              className={i === 0 ? "service-featured" : undefined}
            >
              <Link
                href={`/services#${section.id}`}
                className={`service-editorial-card ${i === 0 ? "service-editorial-card--featured" : ""}`}
              >
                <div className="service-editorial-card__top">
                  <span className="service-number">0{i + 1}</span>
                  <span className="round-arrow">
                    <ArrowIcon diagonal />
                  </span>
                </div>
                {i === 0 && (
                  <div className="foundation-art foundation-art--image">
                    <Image
                      src="/images/editorial/foundations-service.jpg"
                      alt="Blue stone and travertine blocks forming a stable foundation"
                      fill
                      sizes="(max-width: 700px) 85vw, 350px"
                    />
                  </div>
                )}
                <div className="service-editorial-card__body">
                  <p className="eyebrow">{section.title}</p>
                  <h3>{names[section.id] ?? section.title}</h3>
                  <p>{descriptions[section.id] ?? section.subtitle}</p>
                  <div className="service-editorial-card__tags">
                    {section.items.slice(0, 2).map((item) => (
                      <span key={item.name}>{item.name}</span>
                    ))}
                  </div>
                </div>
                <div className="service-editorial-card__footer">
                  <span>
                    {highlights[section.id]?.fromPrice ??
                      "Get a tailored quote"}
                  </span>
                  <span>
                    {highlights[section.id]?.timeline ?? "Talk to an advisor"}
                  </span>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
        <p className="services-editorial__note">
          One team for registration, tax, IP, and compliance.
          <Link href="/services" className="text-link">
            Find your service <ArrowIcon />
          </Link>
        </p>
      </div>
    </section>
  );
}
