"use client";

import { useSyncExternalStore } from "react";
import {
  getItrDismissExpiry,
  isItrSeasonActive,
  itrSeason,
} from "@/lib/itr-season";

const dismissEvent = "pelago-filing-announcement";
let dismissedInSession = false;
function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(dismissEvent, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(dismissEvent, callback);
  };
}
function getVisible() {
  if (!isItrSeasonActive() || dismissedInSession) return false;
  try {
    const raw = localStorage.getItem(itrSeason.dismissStorageKey);
    if (raw && Date.now() - Number(raw) < getItrDismissExpiry()) return false;
  } catch {
    /* Session dismissal still works when storage is blocked. */
  }
  return true;
}

export function ItrSeasonBanner() {
  const visible = useSyncExternalStore(subscribe, getVisible, () => false);
  function dismiss() {
    dismissedInSession = true;
    try {
      localStorage.setItem(itrSeason.dismissStorageKey, String(Date.now()));
    } catch {
      /* Keep the session dismissal. */
    }
    window.dispatchEvent(new Event(dismissEvent));
  }
  if (!visible) return null;
  return (
    <div
      className="filing-announcement"
      role="region"
      aria-label="Tax filing support"
    >
      <a
        href={itrSeason.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Less paperwork. More peace of mind.</span>
        <strong>
          Get your tax filing checklist <span aria-hidden="true">↗</span>
        </strong>
      </a>
      <button
        type="button"
        onClick={dismiss}
        aria-label="Dismiss tax filing announcement"
      >
        ×
      </button>
    </div>
  );
}
