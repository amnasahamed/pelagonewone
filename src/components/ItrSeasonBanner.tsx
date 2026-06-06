"use client";

import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import {
  getItrDismissExpiry,
  isItrSeasonActive,
  itrSeason,
} from "@/lib/itr-season";
import { cn } from "@/lib/utils";

const marqueeTrack = [...itrSeason.marqueeItems, ...itrSeason.marqueeItems];

export function ItrSeasonBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!isItrSeasonActive()) return;

    try {
      const raw = localStorage.getItem(itrSeason.dismissStorageKey);
      if (raw) {
        const dismissedAt = Number(raw);
        if (!Number.isNaN(dismissedAt) && Date.now() - dismissedAt < getItrDismissExpiry()) {
          return;
        }
      }
    } catch {
      /* private mode / blocked storage */
    }

    setVisible(true);
  }, []);

  function dismiss() {
    setVisible(false);
    try {
      localStorage.setItem(itrSeason.dismissStorageKey, String(Date.now()));
    } catch {
      /* ignore */
    }
  }

  if (!visible) return null;

  return (
    <div
      className="itr-season-banner relative z-[60] border-b border-amber-400/40 bg-gradient-to-r from-[#1a3058] via-[#243d72] to-[#1a3058] text-white"
      role="region"
      aria-label="ITR filing season announcement"
    >
      <div className="mx-auto flex max-w-7xl items-stretch gap-2 px-3 py-2 sm:px-5">
        <a
          href={itrSeason.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="itr-season-banner__link group flex min-w-0 flex-1 items-center gap-3 rounded-lg py-0.5 transition-colors hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
        >
          <span className="hidden shrink-0 rounded-full bg-amber-400/20 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-200 sm:inline">
            ITR {new Date().getFullYear()}
          </span>

          <div className="itr-season-marquee min-w-0 flex-1">
            <ul className="itr-season-marquee__track" aria-hidden>
              {marqueeTrack.map((line, index) => (
                <li key={`${line}-${index}`} className="itr-season-marquee__item">
                  <span className="text-sm font-medium text-white/90">{line}</span>
                  <span className="itr-season-marquee__dot" aria-hidden>
                    ◆
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <span
            className={cn(
              "hidden shrink-0 items-center gap-1.5 rounded-full bg-[#25D366] px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition-transform sm:inline-flex",
              "group-hover:scale-[1.02]",
            )}
          >
            <MessageCircle size={14} aria-hidden />
            {itrSeason.ctaLabel}
          </span>
        </a>

        <button
          type="button"
          onClick={dismiss}
          className="shrink-0 rounded-lg p-2 text-white/60 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
          aria-label="Dismiss ITR season banner"
        >
          <X size={16} />
        </button>
      </div>

      <a
        href={itrSeason.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 border-t border-white/10 bg-white/5 py-2 text-xs font-semibold text-white/90 transition-colors hover:bg-white/10 sm:hidden"
      >
        <MessageCircle size={14} className="text-[#25D366]" aria-hidden />
        {itrSeason.ctaLabel}
      </a>
    </div>
  );
}
