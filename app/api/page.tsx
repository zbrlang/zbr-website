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
    url: "https://api.zbrlang.tech",
    siteName: "ZBR",
    locale: "en_US",
    type: "website",
    images: [{ url: "/images/zbr.png" }],
  },
  twitter: {
    card: "summary",
  },
};

export default function ApiPage() {
  return <ApiContent />;
}
