import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const hostname = request.headers.get('host');

  // Define your subdomains
  const isApiSubdomain = hostname?.startsWith('api.');
  const isDocsSubdomain = hostname?.startsWith('docs.');

  // 1. Handle API Subdomain (api.zbrlang.xyz)
  if (isApiSubdomain) {
    if (!url.pathname.startsWith('/api')) {
      url.pathname = `/api${url.pathname}`;
      return NextResponse.rewrite(url);
    }
  }

  // 2. Handle Docs Subdomain (docs.zbrlang.xyz)
  if (isDocsSubdomain) {
    if (!url.pathname.startsWith('/docs')) {
      url.pathname = `/docs${url.pathname}`;
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
