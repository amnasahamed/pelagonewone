import { WhatsAppIcon } from "@/components/home/ProcessVisualPanel";
import { site } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <a
      className="floating-whatsapp"
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Pelago on WhatsApp (opens in a new tab)"
    >
      <WhatsAppIcon className="floating-whatsapp__icon" />
      <span className="floating-whatsapp__label">Chat on WhatsApp</span>
    </a>
  );
}
