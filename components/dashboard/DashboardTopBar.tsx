'use client';

import { useDashboard } from '@/lib/context/DashboardContext';
import { useLanguage } from '@/lib/context/LanguageContext';
import { useEffect, useState } from 'react';

interface DashboardTopBarProps {
  onMenuClick?: () => void;
}

export default function DashboardTopBar({ onMenuClick }: DashboardTopBarProps) {
  const { currentContext, setContext, t } = useDashboard();
  const { language, setLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by only rendering interactive parts after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="h-14 min-h-[56px] border-b border-border sticky-header px-4 lg:px-6 flex items-center justify-between safe-area-top safe-area-x">
      {/* Left: Menu Button (mobile) + Logo/Brand */}
      <div className="flex items-center gap-3">
        {/* Hamburger Menu - Mobile only */}
        <button
          onClick={onMenuClick}
          className="p-2 -ml-2 rounded-lg text-ink hover:bg-surface-1 transition-colors lg:hidden"
          title="Menu öffnen"
          aria-label="Menu öffnen"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        
        {/* Dashboard Logo */}
        <a href="/dashboard" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-signal flex items-center justify-center transition-transform duration-slow group-hover:scale-105">
            <svg className="w-4.5 h-4.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
            </svg>
          </div>
          <span className="text-base font-semibold tracking-tight text-ink group-hover:text-signal transition-colors duration-slow hidden sm:block">
            Visibility Engine
          </span>
        </a>
      </div>

      {/* Right: Controls - only render after mount to prevent hydration mismatch */}
      <div className="flex items-center gap-1 sm:gap-2">
        {mounted ? (
          <>
            {/* Context Switcher - subtle segmented control */}
            <div className="flex items-center bg-surface-1 rounded-lg p-0.5 border border-border/50">
              <button
                onClick={() => setContext('creator')}
                className={`px-2 sm:px-3 py-1.5 sm:py-2 min-h-[36px] sm:min-h-[40px] text-xs sm:text-sm font-medium rounded-md transition-all duration-fast ease-out-expo tap-highlight ${
                  currentContext === 'creator'
                    ? 'bg-canvas text-ink shadow-xs'
                    : 'text-slate hover:text-ink active:text-ink focus-visible:text-ink'
                }`}
              >
                {t.contextSwitcher.creator}
              </button>
              <button
                onClick={() => setContext('company')}
                className={`px-2 sm:px-3 py-1.5 sm:py-2 min-h-[36px] sm:min-h-[40px] text-xs sm:text-sm font-medium rounded-md transition-all duration-fast ease-out-expo tap-highlight ${
                  currentContext === 'company'
                    ? 'bg-canvas text-ink shadow-xs'
                    : 'text-slate hover:text-ink active:text-ink focus-visible:text-ink'
                }`}
              >
                {t.contextSwitcher.company}
              </button>
            </div>

            {/* Divider - hidden on very small screens */}
            <div className="hidden sm:block h-5 w-px bg-border/50 mx-1" />

            {/* Language Switcher with Globe Icon */}
            <div className="flex items-center gap-1 bg-surface-1 rounded-lg p-0.5 border border-border/50">
              {/* Globe Icon - hidden on small screens */}
              <div className="hidden sm:block pl-2 text-slate">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              </div>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1.5 sm:py-2 min-h-[36px] sm:min-h-[40px] text-xs sm:text-sm font-medium rounded-md transition-all duration-fast ease-out-expo tap-highlight ${
                  language === 'en'
                    ? 'bg-canvas text-ink shadow-xs'
                    : 'text-slate hover:text-ink active:text-ink focus-visible:text-ink'
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('de')}
                className={`px-2 py-1.5 sm:py-2 min-h-[36px] sm:min-h-[40px] text-xs sm:text-sm font-medium rounded-md transition-all duration-fast ease-out-expo tap-highlight ${
                  language === 'de'
                    ? 'bg-canvas text-ink shadow-xs'
                    : 'text-slate hover:text-ink active:text-ink focus-visible:text-ink'
                }`}
                aria-label="Auf Deutsch wechseln"
              >
                DE
              </button>
            </div>
          </>
        ) : (
          /* Placeholder with same dimensions to prevent layout shift */
          <div className="flex items-center gap-2">
            <div className="h-[44px] w-[180px] bg-surface-1 rounded-lg animate-pulse" />
            <div className="h-5 w-px bg-border/50 mx-1" />
            <div className="h-[44px] w-[120px] bg-surface-1 rounded-lg animate-pulse" />
          </div>
        )}
      </div>
    </header>
  );
}
