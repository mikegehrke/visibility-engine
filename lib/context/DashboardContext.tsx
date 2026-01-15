'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { Language, translations } from '@/lib/i18n/translations';

type UserContext = 'creator' | 'company';

interface DashboardContextType {
  currentContext: UserContext;
  currentLanguage: Language;
  setContext: (context: UserContext) => void;
  setLanguage: (language: Language) => void;
  t: any; // Simplified type to avoid union complexity
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export function DashboardProvider({ children }: { children: ReactNode }) {
  const [currentContext, setCurrentContext] = useState<UserContext>('creator');
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');

  const value: DashboardContextType = {
    currentContext,
    currentLanguage,
    setContext: setCurrentContext,
    setLanguage: setCurrentLanguage,
    t: translations[currentLanguage],
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard must be used within DashboardProvider');
  }
  return context;
}
