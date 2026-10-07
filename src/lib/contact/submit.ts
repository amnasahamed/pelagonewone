import type { ContactFormState } from "./types";

export async function submitContactForm(
  _previous: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  if (formData.get("company_website")) {
    return { status: "success", message: "Thanks — we'll be in touch soon." };
  }

  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim();
  if (!accessKey) {
    return {
      status: "error",
      message: "Email enquiries are temporarily unavailable. Please contact us on WhatsApp or email directly.",
    };
  }

  const name = String(formData.get("name") ?? "").trim();
  const contact = String(formData.get("contact") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  if (!name || !contact || !message || name.length > 120 || contact.length > 200 || message.length > 4000) {
    return { status: "error", message: "Please check the fields and try again." };
  }

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        name,
        subject: `Website enquiry from ${name}`,
        from_name: "Pelago website",
        email: contact.includes("@") ? contact : undefined,
        phone: contact.includes("@") ? undefined : contact,
        message,
      }),
      signal: AbortSignal.timeout(20000),
    });
    const data = await response.json();
    if (!response.ok || data?.success !== true) throw new Error("SUBMISSION_FAILED");
    return { status: "success", message: "Thanks — we received your message and will reply soon." };
  } catch {
    return { status: "error", message: "Your message couldn't be sent. Please try again or contact us on WhatsApp." };
  }
}
