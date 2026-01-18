'use client';

import { createContext, useContext, useState, ReactNode, useMemo } from 'react';
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
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = useMemo(() => translations[language], [language]);

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
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
