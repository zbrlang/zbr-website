import { useEffect } from "react";
import { useRouter } from "next/router";

function stripDocsPrefix(pathname: string) {
  const nextPath = pathname.replace(/^\/docs(?=\/|$)/, "");
  return nextPath || "/";
}

function normalizeDocsAnchors() {
  const anchors = document.querySelectorAll<HTMLAnchorElement>("a[href]");

  anchors.forEach((anchor) => {
    const rawHref = anchor.getAttribute("href");
    if (!rawHref) return;
    if (!(rawHref === "/docs" || rawHref.startsWith("/docs/"))) return;

    const normalizedHref = stripDocsPrefix(rawHref);
    if (normalizedHref !== rawHref) {
      anchor.setAttribute("href", normalizedHref);
    }
  });
}

export default function DocsLinkNormalizer() {
  const router = useRouter();

  useEffect(() => {
    if (window.location.hostname !== "docs.zbrlang.tech") return;

    const currentPath = window.location.pathname;
    if (currentPath === "/docs" || currentPath.startsWith("/docs/")) {
      const canonicalPath = stripDocsPrefix(currentPath);
      window.history.replaceState(
        null,
        "",
        canonicalPath + window.location.search + window.location.hash,
      );
    }

    const runNormalize = () => {
      normalizeDocsAnchors();
    };

    runNormalize();

    const observer = new MutationObserver(runNormalize);
    observer.observe(document.documentElement, { childList: true, subtree: true });

    router.events.on("routeChangeComplete", runNormalize);

    return () => {
      observer.disconnect();
      router.events.off("routeChangeComplete", runNormalize);
    };
  }, [router.events]);

  return null;
}
