import { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Support",
  description: "Get support for the ZBR framework. Contact us via email, Discord, or GitHub.",
};

export default function ContactPage() {
  return <ContactContent />;
}
