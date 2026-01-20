'use client';

// PHASE 17E: Promo pages need LanguageProvider because they use useLanguage
import { LanguageProvider } from '@/lib/context/LanguageContext';

export default function PromoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider>
      {children}
    </LanguageProvider>
  );
}
