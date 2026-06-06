import { site } from "@/lib/site";
import type { ContactPayload } from "./types";

function hasResend(): boolean {
  return Boolean(process.env.RESEND_API_KEY?.trim());
}

function hasWeb3Forms(): boolean {
  return Boolean(process.env.WEB3FORMS_ACCESS_KEY?.trim());
}

async function sendViaResend(payload: ContactPayload): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY!.trim();
  const to = (process.env.CONTACT_TO_EMAIL ?? site.email).trim();
  const from = (
    process.env.CONTACT_FROM_EMAIL ?? "Pelago Website <onboarding@resend.dev>"
  ).trim();

  const body = [
    `Name: ${payload.name}`,
    `Reply: ${payload.contact}`,
    "",
    payload.message,
  ].join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: payload.contact.includes("@") ? payload.contact : undefined,
      subject: `Website enquiry from ${payload.name}`,
      text: body,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(detail || `Resend returned ${res.status}`);
  }
}

async function sendViaWeb3Forms(payload: ContactPayload): Promise<void> {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY!.trim();
  const to = (process.env.CONTACT_TO_EMAIL ?? site.email).trim();

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `Website enquiry from ${payload.name}`,
      from_name: payload.name,
      email: payload.contact.includes("@") ? payload.contact : to,
      phone: payload.contact.includes("@") ? undefined : payload.contact,
      message: payload.message,
    }),
  });

  const data = (await res.json().catch(() => null)) as { success?: boolean } | null;
  if (!res.ok || !data?.success) {
    throw new Error("Web3Forms submission failed");
  }
}

/** Sends contact mail via Resend or Web3Forms (no database, Vercel-safe). */
export async function sendContactEmail(payload: ContactPayload): Promise<void> {
  if (hasResend()) {
    await sendViaResend(payload);
    return;
  }
  if (hasWeb3Forms()) {
    await sendViaWeb3Forms(payload);
    return;
  }

  if (process.env.NODE_ENV === "development") {
    console.info("[contact] Dev mode — no email provider configured:", payload);
    return;
  }

  throw new Error("CONTACT_NOT_CONFIGURED");
}

export function contactProviderConfigured(): boolean {
  return hasResend() || hasWeb3Forms();
}
