import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const hostname = request.headers.get("host");

  // Define subdomains
  const isWww = hostname?.startsWith("www.");
  const isApiSubdomain = hostname?.startsWith("api.");
  const isDocsSubdomain = hostname?.startsWith("docs.");

  // 1. Handle WWW Subdomain (www.zbrlang.tech)
  if (isWww) {
    url.hostname = hostname!.replace("www.", "");
    return NextResponse.redirect(url);
  }

  // 2. Handle API Subdomain (api.zbrlang.tech)
  if (isApiSubdomain) {
    if (!url.pathname.startsWith("/api")) {
      url.pathname = `/api${url.pathname}`;
      return NextResponse.rewrite(url);
    }
  }

  // 3. Handle Docs Subdomain (docs.zbrlang.tech)
  if (isDocsSubdomain) {
    if (!url.pathname.startsWith("/docs")) {
      url.pathname = `/docs${url.pathname}`;
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
