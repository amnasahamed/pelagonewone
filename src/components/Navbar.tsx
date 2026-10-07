"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/Logo";
import { navLinks, site } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { cn } from "@/lib/utils";

const primaryLinks = [
  { href: "/services", label: "Our services" },
  { href: "/about", label: "About Pelago" },
  { href: "/clients", label: "Our clients" },
];
const resources = navLinks.filter(({ href }) =>
  ["/tools", "/learn", "/blog", "/careers"].includes(href),
);

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const dropdown = useRef<HTMLDetailsElement>(null);
  const active = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    function closeResources(event: PointerEvent) {
      if (
        dropdown.current &&
        !dropdown.current.contains(event.target as Node)
      ) {
        dropdown.current.open = false;
      }
    }
    document.addEventListener("pointerdown", closeResources);
    return () => document.removeEventListener("pointerdown", closeResources);
  }, []);

  useEffect(() => {
    const menu = dialog.current;
    if (!menu || !open) return;
    menu.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      menu.close();
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Main navigation">
        <Logo className="site-nav__logo" />
        <ul className="site-nav__links">
          {primaryLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={cn("nav-link", active(href) && "nav-link--active")}
                aria-current={active(href) ? "page" : undefined}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <details
              ref={dropdown}
              className="nav-resources"
              onKeyDown={(event) => {
                if (event.key === "Escape" && dropdown.current) {
                  dropdown.current.open = false;
                  dropdown.current.querySelector("summary")?.focus();
                }
              }}
            >
              <summary
                className={cn(
                  "nav-link",
                  resources.some(({ href }) => active(href)) &&
                    "nav-link--active",
                )}
              >
                Resources <span aria-hidden>⌄</span>
              </summary>
              <div className="nav-resources__menu">
                <p>For the informed founder</p>
                {resources.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    aria-current={active(href) ? "page" : undefined}
                    onClick={() => {
                      if (dropdown.current) dropdown.current.open = false;
                    }}
                  >
                    {label}
                    <ArrowIcon diagonal />
                  </Link>
                ))}
              </div>
            </details>
          </li>
        </ul>
        <div className="site-nav__cta">
          <Button href="/contact">Let’s talk</Button>
        </div>
        <button
          type="button"
          className={cn("menu-toggle", open && "menu-toggle--open")}
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          <span />
          <span />
        </button>
      </nav>
      <dialog
        ref={dialog}
        id="mobile-navigation"
        className="mobile-navigation"
        aria-label="Navigation menu"
        onCancel={() => setOpen(false)}
        onClose={() => setOpen(false)}
      >
        <div className="mobile-navigation__top">
          <Logo />
          <button
            className="menu-toggle menu-toggle--open"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <span />
            <span />
          </button>
        </div>
        <p className="eyebrow">A partner for every chapter</p>
        <ul>
          {navLinks.map(({ href, label }, i) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setOpen(false)}
                aria-current={active(href) ? "page" : undefined}
              >
                <span className="mobile-navigation__number">0{i + 1}</span>
                {label}
                <ArrowIcon diagonal />
              </Link>
            </li>
          ))}
        </ul>
        <div className="mobile-navigation__bottom">
          <Link href="/contact" onClick={() => setOpen(false)}>
            Talk to an advisor <ArrowIcon diagonal />
          </Link>
          <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">
            Chat on WhatsApp
          </a>
        </div>
      </dialog>
    </header>
  );
}
