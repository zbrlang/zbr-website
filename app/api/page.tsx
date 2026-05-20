import { Metadata } from "next";
import ApiContent from "./ApiContent";

export const metadata: Metadata = {
  title: "API",
  description:
    "Public access to ZBR function and trigger definitions used across the documentation, CLI, and developer tooling.",
  openGraph: {
    title: "ZBR API",
    description:
      "Public access to ZBR function and trigger definitions used across the documentation, CLI, and developer tooling.",
    url: "https://zbr-website.vercel.app/api",
    siteName: "ZBR",
    locale: "en_US",
    type: "website",
    images: [{ url: "/images/ZBR_logo.png?v=1" }],
  },
  twitter: {
    card: "summary",
  },
};

export default function ApiPage() {
  return <ApiContent />;
}
