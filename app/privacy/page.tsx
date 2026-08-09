import { Metadata, Viewport } from "next";
import PrivacyContent from "./PrivacyContent";

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for the ZBR framework, detailing data collection and storage practices.",
  openGraph: {
    title: "ZBR Privacy Policy",
    description:
      "Privacy Policy for the ZBR framework, detailing data collection and storage practices.",
    url: "https://zbrlang.tech/privacy",
    siteName: "ZBRLang",
    locale: "en_US",
    type: "website",
    images: [{ url: "/images/zbr.png" }],
  },
  twitter: {
    card: "summary",
  },
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
