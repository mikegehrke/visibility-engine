'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { dashboardTranslations, DashboardLanguage, DashboardTranslations } from '@/lib/dashboard/i18n';

interface DashboardLanguageContextType {
  language: DashboardLanguage;
  setLanguage: (lang: DashboardLanguage) => void;
  t: DashboardTranslations;
}

const DashboardLanguageContext = createContext<DashboardLanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'dashboard-language';

export function DashboardLanguageProvider({ children }: { children: ReactNode }) {
  // Always start with 'en' for SSR/hydration consistency
  const [language, setLanguageState] = useState<DashboardLanguage>('en');
  const [isClient, setIsClient] = useState(false);

  // Load language from localStorage AFTER mount (client-side only)
  useEffect(() => {
    setIsClient(true);
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'de') {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: DashboardLanguage) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEY, lang);
  };

  // Use 'en' until client-side to prevent hydration mismatch
  const effectiveLanguage = isClient ? language : 'en';
  const t = dashboardTranslations[effectiveLanguage];

  return (
    <DashboardLanguageContext.Provider value={{ language: effectiveLanguage, setLanguage, t }}>
      {children}
    </DashboardLanguageContext.Provider>
  );
}

export function useDashboardLanguage() {
  const context = useContext(DashboardLanguageContext);
  if (!context) {
    throw new Error('useDashboardLanguage must be used within DashboardLanguageProvider');
  }
  return context;
}
