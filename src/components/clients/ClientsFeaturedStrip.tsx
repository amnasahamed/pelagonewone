"use client";

import Image from "next/image";
import type { Client } from "@/lib/clients-content";
import {
  getLogoStripImageClass,
  inferLogoSurface,
} from "@/lib/client-logo";

type Props = { clients: Client[] };

export function ClientsFeaturedStrip({ clients }: Props) {
  const featured = clients.filter((c) => c.logo).slice(0, 16);
  const marqueeLogos = [...featured, ...featured];

  return (
    <div className="clients-featured-strip border-y border-ink/6 bg-white py-8 lg:py-10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
          A sample of companies we work with
        </p>
        <div className="home-logo-marquee mt-6">
          <ul className="home-logo-marquee__track">
            {marqueeLogos.map((client, index) => {
              const logo = client.logo!;
              const surface = inferLogoSurface(logo);
              return (
                <li
                  key={`${client.name}-${index}`}
                  className="home-logo-marquee__item"
                  aria-hidden={index >= featured.length}
                >
                  <span className="clients-marquee-pill">
                    <Image
                      src={logo}
                      alt={index < featured.length ? client.name : ""}
                      width={140}
                      height={48}
                      className={getLogoStripImageClass(surface)}
                    />
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
