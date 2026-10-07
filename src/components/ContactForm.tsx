"use client";

import { useState, type FormEvent } from "react";
import { WhatsAppIcon } from "@/components/home/ProcessVisualPanel";
import { createWhatsAppEnquiry } from "@/lib/contact/whatsapp";
import { site } from "@/lib/site";

export function ContactForm() {
  const [error, setError] = useState("");

  function openWhatsApp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    try {
      const url = createWhatsAppEnquiry(site.whatsapp, {
        name: String(data.get("name") ?? ""),
        business: String(data.get("business") ?? ""),
        message: String(data.get("message") ?? ""),
      });
      setError("");
      window.location.assign(url);
    } catch {
      setError("Please enter your name and enquiry.");
    }
  }

  return (
    <form onSubmit={openWhatsApp} className="rounded-2xl border border-ink/8 bg-white p-6 sm:p-8">
      <p className="eyebrow">A conversation, away from the paperwork</p>
      <h2 className="mt-3 font-display text-2xl text-ink">Let’s talk on WhatsApp.</h2>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        Tell us a little about your business. We’ll prepare a message for you to review and send on WhatsApp.
      </p>
      {error && <p role="alert" className="mt-4 text-sm text-red-800">{error}</p>}
      <div className="mt-6 space-y-4">
        <label className="block">
          <span className="text-sm font-medium text-ink">Your name</span>
          <input required name="name" autoComplete="name" maxLength={120} type="text" className="mt-1 w-full rounded-xl border border-ink/12 bg-paper px-4 py-3 text-ink outline-none focus:border-accent focus-visible:ring-2 focus-visible:ring-accent/25" placeholder="Your name" />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-ink">Business name <span className="font-normal text-muted">(optional)</span></span>
          <input name="business" autoComplete="organization" maxLength={200} type="text" className="mt-1 w-full rounded-xl border border-ink/12 bg-paper px-4 py-3 text-ink outline-none focus:border-accent focus-visible:ring-2 focus-visible:ring-accent/25" placeholder="Your business or startup" />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-ink">What do you need?</span>
          <textarea required name="message" maxLength={2000} rows={4} className="mt-1 w-full resize-y rounded-xl border border-ink/12 bg-paper px-4 py-3 text-ink outline-none focus:border-accent focus-visible:ring-2 focus-visible:ring-accent/25" placeholder="e.g. I’m starting a business and need help with registration and GST." />
        </label>
        <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-full bg-[#276852] px-4 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#1e5140] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#276852]">
          <WhatsAppIcon className="h-5 w-5 shrink-0" />
          Continue on WhatsApp
        </button>
        <p className="text-center text-xs leading-relaxed text-muted">Opens WhatsApp. Your enquiry is sent when you tap Send.</p>
        <noscript><p className="text-sm text-muted">You can <a href={site.whatsapp} className="text-accent underline">chat with us directly on WhatsApp</a>.</p></noscript>
      </div>
    </form>
  );
}
