'use client';

import { LanguageProvider } from '@/lib/context/LanguageContext';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        {children}
      </div>
    </LanguageProvider>
  );
}
