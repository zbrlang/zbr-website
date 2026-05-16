import { Metadata } from "next";
import TosContent from "./TosContent";

export const metadata: Metadata = {
  title: "TOS",
  description: "Terms of Service for the ZBR framework and bot engine.",
};

export default function TosPage() {
  return <TosContent />;
}
