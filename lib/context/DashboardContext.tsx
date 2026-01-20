'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { translations } from '@/lib/i18n/translations';

// PHASE 17F: Dashboard runs ENGLISH ONLY - no LanguageContext dependency

type UserContext = 'creator' | 'company';

interface DashboardContextType {
  currentContext: UserContext;
  setContext: (context: UserContext) => void;
  t: typeof translations.en;
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export function DashboardProvider({ children }: { children: ReactNode }) {
  const [currentContext, setCurrentContext] = useState<UserContext>('creator');

  const value: DashboardContextType = {
    currentContext,
    setContext: setCurrentContext,
    t: translations.en, // PHASE 17F: English only
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
