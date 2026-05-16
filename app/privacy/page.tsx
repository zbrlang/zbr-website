import { Metadata } from "next";
import PrivacyContent from "./PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy Policy for the ZBR framework, detailing data collection and storage practices.",
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
