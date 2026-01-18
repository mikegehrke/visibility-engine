import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const SUPPORTED_LOCALES = ['en', 'de'] as const;
const DEFAULT_LOCALE = 'en';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const response = NextResponse.next();
  
  // Set locale cookie if not present
  const localeCookie = request.cookies.get('locale');
  if (!localeCookie) {
    // Detect from Accept-Language header
    const acceptLanguage = request.headers.get('accept-language') || '';
    const preferredLocale = acceptLanguage.includes('de') ? 'de' : DEFAULT_LOCALE;
    response.cookies.set('locale', preferredLocale, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365, // 1 year
      sameSite: 'lax',
    });
  }
  
  // Dashboard: Auth Check (placeholder - no real auth yet)
  if (pathname.startsWith('/dashboard')) {
    const token = request.cookies.get('auth-token');
    // TODO: Implement real auth check
    // if (!token) {
    //   return NextResponse.redirect(new URL('/login', request.url));
    // }
  }
  
  // Auth Pages: Redirect wenn eingeloggt (placeholder)
  if (pathname.startsWith('/login') || pathname.startsWith('/register')) {
    const token = request.cookies.get('auth-token');
    // TODO: Implement real auth check
    // if (token) {
    //   return NextResponse.redirect(new URL('/dashboard', request.url));
    // }
  }
  
  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)'],
};
