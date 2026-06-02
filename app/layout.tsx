import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Background from "@/components/Background";
import CommandPalette from "@/components/CommandPalette";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "ZBR",
    template: "%s | ZBR",
  },
  description:
    "The scripting language for Discord bots powered by a high-performance Rust runtime engine. You write commands as plain .zbr files using ZBR functions, no boilerplate, no event handlers, no framework knowledge required.",
  authors: [{ name: "ZBRLang", url: "https://zbr-website.vercel.app" }],
  icons: {
    icon: "/images/zbr.png",
    shortcut: "/images/zbr.png",
    apple: "/images/zbr.png",
  },
  openGraph: {
    title: "ZBR",
    description:
      "The scripting language for Discord bots powered by a high-performance Rust runtime engine. You write commands as plain .zbr files using ZBR functions, no boilerplate, no event handlers, no framework knowledge required.",
    url: "https://zbr-website.vercel.app",
    siteName: "ZBR",
    locale: "en_US",
    type: "website",
    images: [{ url: "/images/zbr.png" }],
  },
  twitter: {
    card: "summary",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Background />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
