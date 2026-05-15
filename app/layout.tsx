import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "ZBR",
    template: "%s | ZBR",
  },
  description: "A high-performance Discord bot framework built with Rust. Write complex bot logic with a concise, function-based scripting engine and native SQLite persistence.",
  icons: {
    icon: "/images/ZBR_logo.png",
    shortcut: "/images/ZBR_logo.png",
    apple: "/images/ZBR_logo.png",
  },
  openGraph: {
    title: "ZBR",
    description: "High-performance Discord bot framework built with Rust.",
    url: "https://zbr-website.vercel.app",
    siteName: "ZBR",
    images: [
      {
        url: "/images/ZBR_logo.png",
        width: 512,
        height: 512,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZBR",
    description: "High-performance Discord bot framework built with Rust.",
    images: ["/images/ZBR_logo.png"],
  },
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
