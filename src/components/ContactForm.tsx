"use client";

import { useActionState } from "react";
import { useSearchParams } from "next/navigation";
import { initialContactFormState } from "@/lib/contact/types";
import { submitContactForm } from "@/lib/contact/submit";
import { site } from "@/lib/site";


export function ContactForm() {
  const searchParams = useSearchParams();
  const defaultContact = searchParams.get("newsletter")?.trim() ?? "";
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialContactFormState,
  );

  const showSuccess = state.status === "success";
  const showError = state.status === "error";

  return (
    <form
      action={formAction}
      className="rounded-2xl border border-ink/8 bg-white p-8"
    >
      <h2 className="font-display text-xl text-ink">Send a message</h2>
      {!process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY && (
        <p className="mt-4 text-sm text-muted">
          Email enquiries are temporarily unavailable. Please{" "}
          <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="text-accent underline">WhatsApp us</a>
          {" "}or <a href={`mailto:${site.email}`} className="text-accent underline">email us directly</a>.
        </p>
      )}

      {showSuccess ? (
        <p
          className="mt-4 rounded-xl border border-accent/20 bg-accent/5 px-4 py-3 text-sm text-ink"
          role="status"
        >
          {state.message}
        </p>
      ) : null}

      {showError ? (
        <p
          className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900"
          role="alert"
        >
          {state.message}
        </p>
      ) : null}

      <div className="mt-6 space-y-4">
        <input
          type="text"
          name="company_website"
          tabIndex={-1}
          autoComplete="off"
          className="pointer-events-none absolute h-0 w-0 opacity-0"
          aria-hidden
        />

        <label className="block">
          <span className="text-sm font-medium text-ink">Name</span>
          <input
            required
            name="name"
            maxLength={120}
            type="text"
            disabled={pending || showSuccess}
            className="mt-1 w-full rounded-xl border border-ink/12 bg-paper px-4 py-3 text-ink outline-none focus:border-accent focus-visible:ring-2 focus-visible:ring-accent/25 disabled:opacity-60"
            placeholder="Your name"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-ink">Email or phone</span>
          <input
            required
            name="contact"
            maxLength={200}
            type="text"
            defaultValue={defaultContact}
            disabled={pending || showSuccess}
            className="mt-1 w-full rounded-xl border border-ink/12 bg-paper px-4 py-3 text-ink outline-none focus:border-accent focus-visible:ring-2 focus-visible:ring-accent/25 disabled:opacity-60"
            placeholder="you@startup.com"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-ink">What do you need?</span>
          <textarea
            required
            name="message"
            maxLength={4000}
            rows={4}
            disabled={pending || showSuccess}
            className="mt-1 w-full resize-none rounded-xl border border-ink/12 bg-paper px-4 py-3 text-ink outline-none focus:border-accent focus-visible:ring-2 focus-visible:ring-accent/25 disabled:opacity-60"
            placeholder="e.g. Pvt Ltd registration + GST"
          />
        </label>
        <button
          type="submit"
          disabled={pending || showSuccess || !process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY}
          className="w-full rounded-full bg-ink py-3 text-sm font-semibold text-paper transition-colors hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pending ? "Sending…" : showSuccess ? "Sent" : "Submit — we'll reply soon"}
        </button>
      </div>
    </form>
  );
}
