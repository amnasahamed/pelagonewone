import Link from "next/link";
import { Logo } from "@/components/Logo";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="editorial-footer">
      <div className="editorial-container">
        <div className="footer-top">
          <div>
            <Logo variant="light" />
            <p>
              We handle compliance.
              <br />
              <span>You build the business.</span>
            </p>
            <a href={`mailto:${site.email}`} className="footer-email">
              {site.email}
              <ArrowIcon diagonal />
            </a>
          </div>
          <nav aria-label="Footer navigation">
            <div>
              <span>Discover Pelago</span>
              {[
                { href: "/about", label: "Our story" },
                { href: "/services", label: "Our services" },
                { href: "/clients", label: "Our clients" },
                { href: "/careers", label: "Join our team" },
                { href: "/contact", label: "Let’s talk" },
              ].map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
              <a href="/contact/#team-contacts">Team contacts</a>
            </div>
            <div>
              <span>For your next step</span>
              {[
                { href: "/startup-bundle", label: "Startup bundle" },
                { href: "/health-check", label: "Business health check" },
                { href: "/tools", label: "Free calculators" },
                { href: "/learn", label: "Learning centre" },
                { href: "/blog", label: "The journal" },
              ].map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
          <div className="footer-address">
            <span>Come say hello</span>
            <address>
              {site.address.map((line) => (
                <span key={line}>{line}</span>
              ))}
              <a
                href={site.googleBusiness}
                target="_blank"
                rel="noopener noreferrer"
              >
                Find us on Google <ArrowIcon diagonal />
              </a>
            </address>
            <a href={site.phoneHref}>
              {site.phone}
              <ArrowIcon diagonal />
            </a>
            <p>
              Based in Kerala.
              <br />
              Here for businesses across India.
            </p>
          </div>
        </div>
        <div className="footer-wordmark" aria-hidden="true">
          Your ambition. Our expertise.<span>↗</span>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Pelago Consultants</p>
          <span>A partner for the long run.</span>
          <div>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
