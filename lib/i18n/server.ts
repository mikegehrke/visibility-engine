// Server-side Translation Loader
// Dynamic imports for code splitting

export type Locale = 'en' | 'de';
export type Namespace = 'landing' | 'common' | 'features' | 'pricing' | 'about' | 'blog';

// Cache for loaded translations
const translationCache = new Map<string, any>();

/**
 * Load translations for a specific locale and namespace
 * Server-side only - used in Server Components
 */
export async function getTranslations<T = any>(
  locale: Locale,
  namespace: Namespace
): Promise<T> {
  const cacheKey = `${locale}:${namespace}`;
  
  if (translationCache.has(cacheKey)) {
    return translationCache.get(cacheKey) as T;
  }
  
  let translations: T;
  
  // Dynamic imports for tree-shaking
  switch (namespace) {
    case 'landing':
      translations = locale === 'de'
        ? (await import('./locales/de/landing')).landing as T
        : (await import('./locales/en/landing')).landing as T;
      break;
    case 'common':
      translations = locale === 'de'
        ? (await import('./locales/de/common')).common as T
        : (await import('./locales/en/common')).common as T;
      break;
    case 'features':
      translations = locale === 'de'
        ? (await import('./locales/de/features')).features as T
        : (await import('./locales/en/features')).features as T;
      break;
    case 'pricing':
      translations = locale === 'de'
        ? (await import('./locales/de/pricing')).pricing as T
        : (await import('./locales/en/pricing')).pricing as T;
      break;
    case 'about':
      translations = locale === 'de'
        ? (await import('./locales/de/about')).about as T
        : (await import('./locales/en/about')).about as T;
      break;
    case 'blog':
      translations = locale === 'de'
        ? (await import('./locales/de/blog')).blog as T
        : (await import('./locales/en/blog')).blog as T;
      break;
    default:
      // Fallback to English landing
      translations = (await import('./locales/en/landing')).landing as T;
  }
  
  translationCache.set(cacheKey, translations);
  return translations;
}

/**
 * Get locale from cookies or default
 * For use in Server Components
 */
export function getLocaleFromCookies(cookieHeader?: string): Locale {
  if (!cookieHeader) return 'en';
  
  const match = cookieHeader.match(/locale=([^;]+)/);
  if (match && (match[1] === 'en' || match[1] === 'de')) {
    return match[1] as Locale;
  }
  
  return 'en';
}

// Re-export types
export type { LandingTranslations } from './locales/en/landing';
export type { CommonTranslations } from './locales/en/common';
export type { FeaturesTranslations } from './locales/en/features';
export type { PricingTranslations } from './locales/en/pricing';
export type { AboutTranslations } from './locales/en/about';
export type { BlogTranslations } from './locales/en/blog';
