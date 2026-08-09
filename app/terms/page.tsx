import { Metadata, Viewport } from "next";
import TosContent from "./TosContent";

export const viewport: Viewport = {
  themeColor: "#7C3AED",
};

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for the ZBR framework, outlining the rules and regulations for using the platform.",
  openGraph: {
    title: "ZBR Terms of Service",
    description:
      "Terms of Service for the ZBR framework, outlining the rules and regulations for using the platform.",
    url: "https://zbrlang.tech/terms",
    siteName: "ZBR",
    locale: "en_US",
    type: "website",
    images: [{ url: "/images/zbr.png" }],
  },
  twitter: {
    card: "summary",
  },
};

export default function TosPage() {
  return <TosContent />;
}
