import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZBR",
  description: "A modern, minimal, and high-end domain-specific language for the next generation of developers.",
  icons: {
    icon: "/images/ZBR_logo.png",
    shortcut: "/images/ZBR_logo.png",
    apple: "/images/ZBR_logo.png",
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
