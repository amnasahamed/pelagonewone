"use server";

import { sendContactEmail } from "@/lib/contact/send";
import {
  initialContactFormState,
  type ContactFormState,
} from "@/lib/contact/types";

const MAX_NAME = 120;
const MAX_CONTACT = 200;
const MAX_MESSAGE = 4000;

function trimField(value: FormDataEntryValue | null): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function submitContactForm(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  if (trimField(formData.get("company_website"))) {
    return { status: "success", message: "Thanks — we'll be in touch soon." };
  }

  const name = trimField(formData.get("name"));
  const contact = trimField(formData.get("contact"));
  const message = trimField(formData.get("message"));

  if (!name || !contact || !message) {
    return { status: "error", message: "Please fill in all fields." };
  }
  if (name.length > MAX_NAME || contact.length > MAX_CONTACT || message.length > MAX_MESSAGE) {
    return { status: "error", message: "One or more fields are too long." };
  }

  try {
    await sendContactEmail({ name, contact, message });
    return {
      status: "success",
      message: "Thanks — we received your message and will reply soon.",
    };
  } catch (err) {
    const code = err instanceof Error ? err.message : "";
    if (code === "CONTACT_NOT_CONFIGURED") {
      return {
        status: "error",
        message:
          "The form isn't configured yet. Please WhatsApp or email us directly — links are on this page.",
      };
    }
    return {
      status: "error",
      message: "Something went wrong sending your message. Please try WhatsApp or email.",
    };
  }
}

export { initialContactFormState };
