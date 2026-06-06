import Link from "next/link";
import { Logo } from "@/components/Logo";
import { site } from "@/lib/site";

const footerServices = [
  { href: "/services#start", label: "Start a company" },
  { href: "/services#tax", label: "GST & tax" },
  { href: "/services#protect", label: "Trademark & IP" },
  { href: "/services#compliance", label: "Compliance" },
];

const footerResources = [
  { href: "/health-check", label: "Free health check" },
  { href: "/startup-bundle", label: "Startup bundle" },
  { href: "/learn", label: "Learning center" },
  { href: "/tools", label: "Free tools" },
  { href: "/blog", label: "Blog" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-white/85">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Logo variant="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
              {site.tagline}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80">
                Startup India certified
              </span>
              <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80">
                4.9/5 rating
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/40">
              Services
            </h4>
            <ul className="mt-5 space-y-3">
              {footerServices.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/65 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-sm font-semibold text-accent-light hover:underline"
                >
                  View all →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/40">
              Resources
            </h4>
            <ul className="mt-5 space-y-3">
              {footerResources.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/65 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/40">
              Company
            </h4>
            <ul className="mt-5 space-y-3">
              <li>
                <Link href="/about" className="text-sm text-white/65 hover:text-white">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/clients" className="text-sm text-white/65 hover:text-white">
                  Our clients
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-white/65 hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-white/65 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="mt-6 space-y-2 text-sm text-white/55">
              <a href={`mailto:${site.email}`} className="block hover:text-white">
                {site.email}
              </a>
              <a href={site.phoneHref} className="block hover:text-white">
                {site.phone}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Pelago Consultants. All rights reserved.</p>
          <div className="flex gap-6">
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
