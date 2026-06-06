import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ItrSeasonBanner } from "@/components/ItrSeasonBanner";
import { PageEnter } from "@/components/PageEnter";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ItrSeasonBanner />
      <Navbar />
      <main>
        <PageEnter>{children}</PageEnter>
      </main>
      <Footer />
    </>
  );
}
