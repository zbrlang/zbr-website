import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const hostHeader = request.headers.get("x-forwarded-host") || request.headers.get("host") || "";
  const hostname = hostHeader.split(":")[0].toLowerCase();
  const protocol = request.headers.get("x-forwarded-proto") || "https";
  const search = url.search;

  // Define subdomains
  const isWww = hostname.startsWith("www.");
  const isApiSubdomain = hostname.startsWith("api.");
  const isDocsSubdomain = hostname.startsWith("docs.");
  const isApexDomain = hostname === "zbrlang.tech";

  const stripPrefix = (pathname: string, prefix: "/api" | "/docs") => {
    const stripped = pathname.replace(new RegExp(`^${prefix}(?=/|$)`), "");
    return stripped === "" ? "/" : stripped;
  };

  const isPublicAsset =
    url.pathname.startsWith("/images/") ||
    url.pathname === "/favicon.ico" ||
    /\.(?:png|jpg|jpeg|gif|webp|svg|ico|css|js|map|txt|xml|woff|woff2|ttf|otf)$/i.test(
      url.pathname,
    );

  // 1. Handle WWW Subdomain (www.zbrlang.tech)
  if (isWww) {
    const apexHost = hostname.replace("www.", "");
    return NextResponse.redirect(`${protocol}://${apexHost}${url.pathname}${search}`, 308);
  }

  // 2. Canonicalize apex routes to subdomains
  if (isApexDomain) {
    if (url.pathname === "/api" || url.pathname.startsWith("/api/")) {
      const canonicalPath = stripPrefix(url.pathname, "/api");
      return NextResponse.redirect(
        `${protocol}://api.zbrlang.tech${canonicalPath}${search}`,
        308,
      );
    }

    if (url.pathname === "/docs" || url.pathname.startsWith("/docs/")) {
      const canonicalPath = stripPrefix(url.pathname, "/docs");
      return NextResponse.redirect(
        `${protocol}://docs.zbrlang.tech${canonicalPath}${search}`,
        308,
      );
    }
  }

  // 3. Handle API Subdomain (api.zbrlang.tech)
  if (isApiSubdomain) {
    if (url.pathname === "/docs" || url.pathname.startsWith("/docs/")) {
      const canonicalPath = stripPrefix(url.pathname, "/docs");
      return NextResponse.redirect(
        `${protocol}://docs.zbrlang.tech${canonicalPath}${search}`,
        308,
      );
    }

    if (url.pathname === "/api" || url.pathname.startsWith("/api/")) {
      const canonicalPath = stripPrefix(url.pathname, "/api");
      return NextResponse.redirect(
        `${protocol}://api.zbrlang.tech${canonicalPath}${search}`,
        308,
      );
    }

    if (isPublicAsset) {
      return NextResponse.next();
    }

    const rewrittenUrl = url.clone();
    rewrittenUrl.pathname = url.pathname === "/" ? "/api" : `/api${url.pathname}`;
    return NextResponse.rewrite(rewrittenUrl);
  }

  // 4. Handle Docs Subdomain (docs.zbrlang.tech)
  if (isDocsSubdomain) {
    if (url.pathname === "/api" || url.pathname.startsWith("/api/")) {
      const canonicalPath = stripPrefix(url.pathname, "/api");
      return NextResponse.redirect(
        `${protocol}://api.zbrlang.tech${canonicalPath}${search}`,
        308,
      );
    }

    if (url.pathname === "/docs" || url.pathname.startsWith("/docs/")) {
      return NextResponse.redirect(
        `${protocol}://docs.zbrlang.tech${stripPrefix(url.pathname, "/docs")}${search}`,
        308,
      );
    }

    if (isPublicAsset) {
      return NextResponse.next();
    }

    return NextResponse.rewrite(
      new URL(`${url.pathname.startsWith("/docs") ? "" : "/docs"}${url.pathname}`, url),
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
