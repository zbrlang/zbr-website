import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "ZBR",
    template: "%s | ZBR",
  },
  description: "The scripting language for Discord bots powered by a high-performance Rust runtime engine. You write commands as plain .zbr files using ZBR functions, no boilerplate, no event handlers, no framework knowledge required.",
  icons: {
    icon: "/images/ZBR_logo.png",
    shortcut: "/images/ZBR_logo.png",
    apple: "/images/ZBR_logo.png",
  },
  openGraph: {
    title: "ZBR",
    description: "The scripting language for Discord bots powered by a high-performance Rust runtime engine.",
    url: "https://zbr-website.vercel.app",
    siteName: "ZBR",
    images: [
      {
        url: "/images/ZBR_logo.png?v=1",
        width: 512,
        height: 512,
      },
    ],
    locale: "en_US",
    type: "website",
  }
};

import Navbar from "@/components/Navbar";
import Background from "@/components/Background";

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
