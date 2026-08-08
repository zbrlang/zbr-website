import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import CommandPalette from "./components/CommandPalette";

const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <span
        style={{
          fontWeight: 800,
          fontSize: "1.2rem",
          letterSpacing: "-0.05em",
        }}
      >
        ZBR
      </span>
      <span style={{ opacity: 0.5, fontWeight: 400 }}>Documentation</span>
    </div>
  ),
  logoLink: "https://zbrlang.tech",
  search: {
    component: <CommandPalette isInline />,
  },
  project: {
    link: "https://github.com/zbrlang/zbr",
  },
  head: (
    <>
      <title>ZBR Documentation</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content="ZBRLang" />
      <meta
        name="description"
        content="Official documentation for ZBR, a high-performance Discord scripting language built with Rust."
      />
      <meta property="og:title" content="ZBR Documentation" />
      <meta
        property="og:description"
        content="Official documentation for ZBR, a high-performance Discord scripting language built with Rust."
      />
      <meta property="og:image" content="/images/zbr.png" />
      <meta property="og:url" content="https://docs.zbrlang.tech/" />
      <meta property="og:site_name" content="ZBR" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta name="apple-mobile-web-app-title" content="ZBR Documentation" />
      <link rel="icon" type="image/png" href="https://zbrlang.tech/images/zbr.png" />
      <script
        dangerouslySetInnerHTML={{
          __html: `(function () {
  if (typeof window === "undefined") return;
  if (window.location.hostname !== "docs.zbrlang.tech") return;

  function stripDocsPrefix(pathname) {
    var nextPath = pathname.replace(/^\/docs(?=\/|$)/, "");
    return nextPath || "/";
  }

  function normalizeDocsAnchors() {
    var anchors = document.querySelectorAll("a[href]");
    for (var i = 0; i < anchors.length; i += 1) {
      var anchor = anchors[i];
      var rawHref = anchor.getAttribute("href");
      if (!rawHref) continue;
      if (!(rawHref === "/docs" || rawHref.startsWith("/docs/"))) continue;

      var normalizedHref = stripDocsPrefix(rawHref);
      if (normalizedHref !== rawHref) {
        anchor.setAttribute("href", normalizedHref);
      }
    }
  }

  var currentPath = window.location.pathname;
  if (currentPath === "/docs" || currentPath.startsWith("/docs/")) {
    var canonicalPath = stripDocsPrefix(currentPath);
    window.history.replaceState(
      null,
      "",
      canonicalPath + window.location.search + window.location.hash,
    );
  }

  normalizeDocsAnchors();

  var observer = new MutationObserver(function () {
    normalizeDocsAnchors();
  });

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
  });

  document.addEventListener(
    "click",
    function (event) {
      var target = event.target;
      while (target && target.tagName !== "A") {
        target = target.parentElement;
      }
      if (!target) return;

      var href = target.getAttribute("href");
      if (!href) return;
      if (!(href === "/docs" || href.startsWith("/docs/"))) return;

      event.preventDefault();
      window.location.assign(stripDocsPrefix(href));
    },
    true,
  );
})();`,
        }}
      />
    </>
  ),
  docsRepositoryBase: "https://github.com/zbrlang/zbr-website/",
  footer: {
    content: (
      <span>
        {new Date().getFullYear()} ©{" "}
        <a href="https://zbrlang.tech/" target="_blank">
          ZBRLang
        </a>
        .
      </span>
    ),
  },
};

export default config;
