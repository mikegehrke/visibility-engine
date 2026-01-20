'use client';

// PHASE 17F: No LanguageContext - English only (no language switcher)
import Link from 'next/link';
import { useDashboard } from '@/lib/context/DashboardContext';

export default function DashboardTopBar() {
  const { currentContext, setContext, t } = useDashboard();

  return (
    <header className="h-14 min-h-[56px] border-b border-border sticky-header px-6 flex items-center justify-between safe-area-top safe-area-x">
      {/* Left: Logo/Brand with Icon */}
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

        {/* PHASE 17F: Language switcher removed - English only */}
      </div>
    </header>
  );
}
