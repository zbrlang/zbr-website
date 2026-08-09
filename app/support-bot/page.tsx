import { Metadata, Viewport } from "next";
import SupportBotContent from "./SupportBotContent";

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "Support Bot",
  description:
    "Official Discord support bot for ZBR scripting language.",
  openGraph: {
    title: "ZBR Support Bot",
    description:
      "Official Discord support bot for ZBR scripting language.",
    url: "https://zbrlang.tech/support-bot",
    siteName: "ZBR",
    locale: "en_US",
    type: "website",
    images: [{ url: "/images/zbr.png" }],
  },
  twitter: {
    card: "summary",
  },
};

export default function SupportBotPage() {
  return <SupportBotContent />;
}
