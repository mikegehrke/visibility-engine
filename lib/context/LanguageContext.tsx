'use client';

import { createContext, useContext, useState, ReactNode, useMemo, useEffect } from 'react';
import { translations } from '@/lib/i18n/translations';

export type Language = 'en' | 'de';

// Recursive type to widen string literals to string type for translation values
type DeepStringify<T> = T extends string
  ? string
  : T extends number
  ? number
  : T extends boolean
  ? boolean
  : T extends readonly (infer U)[]
  ? readonly DeepStringify<U>[]
  : T extends (infer U)[]
  ? DeepStringify<U>[]
  : T extends object
  ? { readonly [K in keyof T]: DeepStringify<T[K]> }
  : T;

// Type for translations - widened to accept both EN and DE values
export type Translations = DeepStringify<typeof translations.en>;

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translations;
  isHydrated: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Helper to get language from cookie
function getLanguageFromCookie(): Language {
  if (typeof document === 'undefined') return 'en';
  const match = document.cookie.match(/locale=([^;]+)/);
  if (match && (match[1] === 'en' || match[1] === 'de')) {
    return match[1] as Language;
  }
  // Check browser language as fallback
  if (typeof navigator !== 'undefined' && navigator.language.startsWith('de')) {
    return 'de';
  }
  return 'en';
}

// Helper to set language cookie
function setLanguageCookie(language: Language) {
  if (typeof document === 'undefined') return;
  const maxAge = 60 * 60 * 24 * 365; // 1 year
  document.cookie = `locale=${language}; path=/; max-age=${maxAge}; SameSite=Lax`;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // HYDRATION FIX: Always start with 'en' on both server and client
  const [language, setLanguageState] = useState<Language>('en');
  const [isHydrated, setIsHydrated] = useState(false);

  // Read language from cookie AFTER hydration is complete
  useEffect(() => {
    const savedLanguage = getLanguageFromCookie();
    setLanguageState(savedLanguage);
    setIsHydrated(true);
  }, []);

  // Wrapper to also save to cookie
  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    setLanguageCookie(newLanguage);
  };

  // HYDRATION FIX: Use 'en' translations until hydrated to prevent mismatch
  const effectiveLanguage = isHydrated ? language : 'en';
  const t = useMemo(() => translations[effectiveLanguage], [effectiveLanguage]);

  const value: LanguageContextType = {
    language: effectiveLanguage,
    setLanguage,
    t,
    isHydrated,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
