import { Metadata, Viewport } from "next";
import ContactContent from "./ContactContent";

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get support for the ZBR framework. Contact us via email, Discord, or GitHub.",
  openGraph: {
    title: "ZBR Support",
    description:
      "Get support for the ZBR framework. Contact us via email, Discord, or GitHub.",
    url: "https://zbrlang.tech/contact",
    siteName: "ZBRLang",
    locale: "en_US",
    type: "website",
    images: [{ url: "/images/zbr.png" }],
  },
  twitter: {
    card: "summary",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
