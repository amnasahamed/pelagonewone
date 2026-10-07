import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/Button";

type Props = { title?: string; subtitle?: string };
export function CtaBand({
  title = "Your next chapter starts with a conversation.",
  subtitle = "Tell us where you are and where you want to go. We’ll help you find the right next step.",
}: Props) {
  return (
    <RevealOnScroll>
      <section className="editorial-container cta-shell">
        <div className="editorial-cta">
          <div>
            <p className="eyebrow">
              <span className="status-dot" /> Let’s build something that lasts
            </p>
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>
          <div className="editorial-cta__actions">
            <Button href="/contact">Talk to your future team</Button>
            <Button href={site.whatsapp} variant="ghost" external>
              Prefer WhatsApp?
            </Button>
          </div>
          <div className="cta-orbit" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
}
