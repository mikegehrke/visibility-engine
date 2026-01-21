'use client';

import Link from 'next/link';
import { useDashboard } from '@/lib/context/DashboardContext';
import { useLanguage } from '@/lib/context/LanguageContext';

export default function DashboardTopBar() {
  const { currentContext, setContext, t } = useDashboard();
  const { language, setLanguage } = useLanguage();

  return (
    <header className="h-14 min-h-[56px] border-b border-border sticky-header px-6 flex items-center justify-between safe-area-top safe-area-x">
      {/* Left: Logo/Brand with Icon + Back to Website */}
      <div className="flex items-center gap-4">
        {/* Back to Website Link */}
        <Link 
          href={`/${language}`} 
          className="flex items-center gap-1.5 text-slate hover:text-ink transition-colors group"
          title={language === 'de' ? 'Zurück zur Website' : 'Back to Website'}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          <span className="text-sm hidden sm:inline">{language === 'de' ? 'Website' : 'Website'}</span>
        </Link>

        {/* Divider */}
        <div className="h-5 w-px bg-border/50" />

        {/* Dashboard Logo */}
        <Link href="/dashboard" className="flex items-center gap-2.5 group">
          {/* Logo Icon */}
          <div className="w-8 h-8 rounded-lg bg-signal flex items-center justify-center transition-transform duration-slow group-hover:scale-105">
            <svg className="w-4.5 h-4.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
            </svg>
          </div>
          {/* Logo Text */}
          <span className="text-base font-semibold tracking-tight text-ink group-hover:text-signal transition-colors duration-slow">
            Visibility Engine
          </span>
        </Link>
      </div>

      {/* Right: Controls - grouped, compact */}
      <div className="flex items-center gap-2">
        {/* Context Switcher - subtle segmented control */}
        <div className="flex items-center bg-surface-1 rounded-lg p-0.5 border border-border/50">
          <button
            onClick={() => setContext('creator')}
            className={`px-3 py-2 min-h-[40px] text-sm font-medium rounded-md transition-all duration-fast ease-out-expo tap-highlight ${
              currentContext === 'creator'
                ? 'bg-canvas text-ink shadow-xs'
                : 'text-slate hover:text-ink active:text-ink focus-visible:text-ink'
            }`}
          >
            {t.contextSwitcher.creator}
          </button>
          <button
            onClick={() => setContext('company')}
            className={`px-3 py-2 min-h-[40px] text-sm font-medium rounded-md transition-all duration-fast ease-out-expo tap-highlight ${
              currentContext === 'company'
                ? 'bg-canvas text-ink shadow-xs'
                : 'text-slate hover:text-ink active:text-ink focus-visible:text-ink'
            }`}
          >
            {t.contextSwitcher.company}
          </button>
        </div>

        {/* Divider */}
        <div className="h-5 w-px bg-border/50 mx-1" />

        {/* Language Switcher with Globe Icon */}
        <div className="flex items-center gap-1.5 bg-surface-1 rounded-lg p-0.5 border border-border/50">
          {/* Globe Icon */}
          <div className="pl-2 text-slate">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
          </div>
          <button
            onClick={() => setLanguage('en')}
            className={`px-2.5 py-2 min-h-[40px] text-sm font-medium rounded-md transition-all duration-fast ease-out-expo tap-highlight ${
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
            className={`px-2.5 py-2 min-h-[40px] text-sm font-medium rounded-md transition-all duration-fast ease-out-expo tap-highlight ${
              language === 'de'
                ? 'bg-canvas text-ink shadow-xs'
                : 'text-slate hover:text-ink active:text-ink focus-visible:text-ink'
            }`}
            aria-label="Auf Deutsch wechseln"
          >
            DE
          </button>
        </div>
      </div>
    </header>
  );
}
