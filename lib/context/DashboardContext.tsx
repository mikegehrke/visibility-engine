'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { translations } from '@/lib/i18n/translations';
import { useLanguage } from './LanguageContext';

type UserContext = 'creator' | 'company';

interface DashboardContextType {
  currentContext: UserContext;
  setContext: (context: UserContext) => void;
  t: any; // Simplified type to avoid union complexity
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export function DashboardProvider({ children }: { children: ReactNode }) {
  const [currentContext, setCurrentContext] = useState<UserContext>('creator');
  const { language } = useLanguage(); // Get language from global context

  const value: DashboardContextType = {
    currentContext,
    setContext: setCurrentContext,
    t: translations[language], // Use global language
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
