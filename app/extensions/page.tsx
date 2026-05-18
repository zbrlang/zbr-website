import { Metadata } from "next";
import ExtensionsContent from "./ExtensionsContent";

export const metadata: Metadata = {
  title: "Extensions",
  description: "Official IDE extensions for ZBR. Full editor support with syntax highlighting, snippets, and smart completions for VS Code and Zed.",
};

export default function ExtensionsPage() {
  return <ExtensionsContent />;
}
