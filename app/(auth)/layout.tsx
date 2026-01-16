'use client';

import { LanguageProvider } from '@/lib/context/LanguageContext';
import Link from 'next/link';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-canvas relative">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-canvas via-canvas to-mist/30 pointer-events-none" />
        
        {/* Brand header */}
        <header className="relative z-10 flex items-center justify-between px-6 py-4">
          <Link 
            href="/" 
            className="text-lg font-semibold text-ink tracking-tight hover:text-signal transition-colors duration-fast"
          >
            Visibility Engine
          </Link>
        </header>
        
        {/* Main content */}
        <main className="relative z-10">
          {children}
        </main>
      </div>
    </LanguageProvider>
  );
}
