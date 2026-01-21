import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const SUPPORTED_LOCALES = ['en', 'de'] as const;
const DEFAULT_LOCALE = 'en';

// Public routes that need language redirect
const PUBLIC_ROUTES = [
  '/',
  '/features',
  '/pricing',
  '/about',
  '/blog',
  '/contact',
];

// Check if path starts with any public route (but not already with /en or /de)
function isPublicRoute(pathname: string): boolean {
  // Already has language prefix
  if (pathname.startsWith('/en') || pathname.startsWith('/de')) {
    return false;
  }
  
  // Check exact matches and prefixes
  for (const route of PUBLIC_ROUTES) {
    if (pathname === route || pathname.startsWith(route + '/')) {
      return true;
    }
  }
  
  // Also handle other public paths
  const publicPrefixes = ['/product/', '/use-cases/', '/industries/', '/trust/', '/legal/', '/resources/'];
  for (const prefix of publicPrefixes) {
    if (pathname.startsWith(prefix)) {
      return true;
    }
  }
  
  return false;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Skip static assets and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }
  
  // Check if URL starts with a language prefix
  const urlLocale = pathname.startsWith('/de') ? 'de' : pathname.startsWith('/en') ? 'en' : null;
  
  // For /login, /register, /dashboard - set cookie from URL locale if coming from language route
  if (
    pathname.startsWith('/login') ||
    pathname.startsWith('/register') ||
    pathname.startsWith('/dashboard') ||
    pathname.startsWith('/promo')
  ) {
    const response = NextResponse.next();
    // Keep existing cookie, don't override
    return response;
  }
  
  // If URL has language prefix, set the cookie to match
  if (urlLocale) {
    const response = NextResponse.next();
    response.cookies.set('locale', urlLocale, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365, // 1 year
      sameSite: 'lax',
    });
    return response;
  }
  
  // Determine locale from cookie or Accept-Language header
  const localeCookie = request.cookies.get('locale')?.value;
  let locale = localeCookie;
  
  if (!locale || !SUPPORTED_LOCALES.includes(locale as 'en' | 'de')) {
    const acceptLanguage = request.headers.get('accept-language') || '';
    locale = acceptLanguage.includes('de') ? 'de' : DEFAULT_LOCALE;
  }
  
  // Redirect public routes to language-prefixed version
  if (isPublicRoute(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}${pathname}`;
    
    const response = NextResponse.redirect(url, 307);
    response.cookies.set('locale', locale, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365, // 1 year
      sameSite: 'lax',
    });
    return response;
  }
  
  // Set locale cookie if not present
  const response = NextResponse.next();
  if (!localeCookie) {
    response.cookies.set('locale', locale, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365, // 1 year
      sameSite: 'lax',
    });
  }
  
  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)'],
};
