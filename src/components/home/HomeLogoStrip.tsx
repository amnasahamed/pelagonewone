import Image from "next/image";
import Link from "next/link";
import type { Client } from "@/lib/clients-content";
import { ArrowIcon } from "@/components/ui/ArrowIcon";

export function HomeLogoStrip({ clients }: { clients: Client[] }) {
  const withLogos = clients.filter((client) => client.logo);
  const featured = [
    ...withLogos.filter((client) => client.featured),
    ...withLogos.filter((client) => !client.featured),
  ].slice(0, 12);
  return (
    <section className="client-ribbon" aria-label="Our clients">
      <div className="editorial-container">
        <div className="client-ribbon__heading">
          <p>Good company, in every sense.</p>
          <Link href="/clients" className="text-link">
            Meet our clients <ArrowIcon diagonal />
          </Link>
        </div>
        <div className="client-ribbon__logos">
          {featured.map((client) => (
            <div key={client.name} data-logo-background={client.logoBackground}>
              <Image
                src={client.logo!}
                alt={client.brandName ?? client.name}
                width={160}
                height={80}
                sizes="(max-width: 600px) 28vw, 140px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
