import "nextra-theme-docs/style.css";
import type { AppProps } from "next/app";
import "../app/globals.css";
import DocsLinkNormalizer from "../components/DocsLinkNormalizer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DocsLinkNormalizer />
      <Component {...pageProps} />
    </>
  );
}
