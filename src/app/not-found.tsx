import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { ItrSeasonBanner } from "@/components/ItrSeasonBanner";
import { Navbar } from "@/components/Navbar";
import { Illustration, NotFound } from "@/components/ui/not-found";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "The page you’re looking for doesn’t exist. Explore Pelago’s compliance services or contact our team for help.",
  robots: { index: false, follow: true },
};

export default function GlobalNotFoundPage() {
  return (
    <>
      <ItrSeasonBanner />
      <Navbar />
      <main>
        <div className="utility-page relative flex min-h-[calc(100vh-4rem)] w-full flex-col justify-center p-6 md:p-10">
          <div className="relative mx-auto w-full max-w-5xl">
            <Illustration
              className="pointer-events-none absolute inset-0 h-[50vh] w-full text-foreground opacity-[0.04]"
              aria-hidden="true"
            />
            <NotFound />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
