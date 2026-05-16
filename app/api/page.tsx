import { Metadata } from "next";
import ApiContent from "./ApiContent";

export const metadata: Metadata = {
  title: "API",
  description: "ZBR Web API, Real-time access to the ZBR engine's internal function and trigger definitions.",
};

export default function ApiPage() {
  return <ApiContent />;
}
