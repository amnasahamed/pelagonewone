import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ItrSeasonBanner } from "@/components/ItrSeasonBanner";
import { PageEnter } from "@/components/PageEnter";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <ItrSeasonBanner />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <PageEnter>{children}</PageEnter>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
