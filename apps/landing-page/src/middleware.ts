import { NextRequest, NextResponse } from 'next/server';

export const middleware = (req: NextRequest): NextResponse => {
  const response = NextResponse.next();
  const url = new URL(req.url);
  response.headers.set('X-I18n-key', url.pathname);
  return response;
};

export const config = {
  matcher: '/((?!_next/static|favicon|og|pwa|manifest.webmanifest).*)',
};
