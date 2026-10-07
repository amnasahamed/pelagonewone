import type { Metadata } from "next";
import localFont from "next/font/local";
import { site } from "@/lib/site";
import "./globals.css";
import "./redesign.css";

const jakarta = localFont({
  src: "./fonts/jakarta-latin.woff2",
  variable: "--font-jakarta",
  display: "swap",
  weight: "400 800",
  style: "normal",
});

const fraunces = localFont({
  src: [
    {
      path: "./fonts/fraunces-normal-latin.woff2",
      weight: "400 800",
      style: "normal",
    },
    {
      path: "./fonts/fraunces-italic-latin.woff2",
      weight: "400 800",
      style: "italic",
    },
  ],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — Business Compliance & Registration`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  metadataBase: new URL(site.url),
  icons: {
    icon: "/brand/favicon.png",
    apple: "/brand/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: site.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${fraunces.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
