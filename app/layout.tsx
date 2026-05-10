import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Studio100 — Conversion Websites für Bau & Handwerk",
  description:
    "Wir entwickeln hochwertige Websites für Bau- & Handwerksunternehmen, die Vertrauen aufbauen, überzeugen – und messbar mehr Anfragen generieren.",
  keywords: "Webdesign, Conversion Website, Bau, Handwerk, Studio100",
  openGraph: {
    title: "Studio100 — Conversion Websites für Bau & Handwerk",
    description:
      "Wir entwickeln hochwertige Websites für Bau- & Handwerksunternehmen, die Vertrauen aufbauen, überzeugen – und messbar mehr Anfragen generieren.",
    url: "https://studio-100.de",
    siteName: "Studio100",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
