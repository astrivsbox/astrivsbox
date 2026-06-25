import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LogoIntro from "@/components/LogoIntro";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: {
    default: "Astrivs Box – Curated Products for Home, Outdoor & More",
    template: "%s | Astrivs Box",
  },
  description:
    "Discover the best tech gadgets, gaming gear, home essentials, and outdoor products. Curated picks with direct Amazon links.",
  metadataBase: new URL("https://www.astrivsbox.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="min-h-screen flex flex-col font-[family-name:var(--font-geist)]" style={{ background: "#0a0a0a" }}>
        <LogoIntro />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
