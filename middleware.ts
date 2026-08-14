import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const hostname = request.headers.get("host");
  const isPublicAsset =
    url.pathname.startsWith("/images/") ||
    url.pathname.startsWith("/assets/") ||
    url.pathname.startsWith("/icons/") ||
    url.pathname.startsWith("/fonts/") ||
    url.pathname === "/robots.txt" ||
    url.pathname === "/sitemap.xml" ||
    url.pathname === "/manifest.json" ||
    /\.(?:png|jpg|jpeg|gif|webp|svg|ico|css|js|map|txt|xml|woff|woff2|ttf|otf)$/i.test(
      url.pathname,
    );

  // Define subdomains
  const isWww = hostname?.startsWith("www.");
  const isApiSubdomain = hostname?.startsWith("api.");
  const isNpmSubdomain = hostname?.startsWith("npm.");
  const isPackagesSubdomain = hostname?.startsWith("packages.");
  const isInstallSubdomain = hostname?.startsWith("install.");
  const isHomebrewSubdomain = hostname?.startsWith("homebrew.");
  const isScoopSubdomain = hostname?.startsWith("scoop.");
  const isAurSubdomain = hostname?.startsWith("aur.");
  const isWingetSubdomain = hostname?.startsWith("winget.");

  // 1. Handle WWW Subdomain (www.zbrlang.tech)
  if (isWww) {
    url.hostname = hostname!.replace("www.", "");
    return NextResponse.redirect(url);
  }

  // 2. Handle npm Subdomain (npm.zbrlang.tech)
  if (isNpmSubdomain) {
    return NextResponse.redirect("https://www.npmjs.com/package/@zbrlang/zbr");
  }

  // 3. Handle packages Subdomain (packages.zbrlang.tech)
  if (isPackagesSubdomain) {
    const packageName = url.pathname.replace(/^\//, "");

    if (packageName === "") {
      return NextResponse.redirect("https://github.com/zbrlang/zbr/releases");
    }

    const githubReleaseBase = "https://github.com/zbrlang/zbr/releases/latest/download";

    const packageMap: Record<string, string> = {
      "zbr-darwin-arm64": "zbr-darwin-arm64",
      "zbr-darwin-x64": "zbr-darwin-x64",
      "zbr-linux-arm64": "zbr-linux-arm64",
      "zbr-linux-x64": "zbr-linux-x64",
      "zbr-windows-arm64": "zbr-windows-arm64.exe",
      "zbr-windows-x64": "zbr-windows-x64.exe",
    };

    const targetFile = packageMap[packageName];

    if (targetFile) {
      return NextResponse.redirect(`${githubReleaseBase}/${targetFile}`);
    }
  }

  // 4. Handle install Subdomain (install.zbrlang.tech)
  if (isInstallSubdomain) {
    return NextResponse.redirect(
      "https://raw.githubusercontent.com/zbrlang/zbr/main/scripts/install.sh",
    );
  }

  // 5. Handle Distribution Subdomains
  if (isHomebrewSubdomain) {
    return NextResponse.redirect("https://github.com/zbrlang/homebrew-tap");
  }
  if (isScoopSubdomain) {
    return NextResponse.redirect("https://github.com/zbrlang/scoop-bucket");
  }
  if (isAurSubdomain) {
    return NextResponse.redirect("https://github.com/zbrlang/aur-package");
  }
  if (isWingetSubdomain) {
    return NextResponse.redirect("https://github.com/zbrlang/winget-packages");
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
