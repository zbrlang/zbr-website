import { Metadata } from "next";
import ExtensionsContent from "./ExtensionsContent";

export const metadata: Metadata = {
  title: "Extensions",
  description:
    "Write ZBR commands with full editor support. Syntax highlighting, snippets, and smart completions across your favorite IDEs.",
  openGraph: {
    title: "ZBR Extensions",
    description:
      "Write ZBR commands with full editor support. Syntax highlighting, snippets, and smart completions across your favorite IDEs.",
    url: "https://zbr-website.vercel.app/extensions",
    siteName: "ZBR",
    locale: "en_US",
    type: "website",
    images: [{ url: "/images/zbr.png" }],
  },
  twitter: {
    card: "summary",
  },
};

export default function ExtensionsPage() {
  return <ExtensionsContent />;
}
