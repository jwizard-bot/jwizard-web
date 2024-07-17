/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const response = NextResponse.next();
  const url = new URL(req.url);
  response.headers.set('X-I18n-key', url.pathname);
  return response;
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};
