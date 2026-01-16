'use client';

import { useDashboard } from '@/lib/context/DashboardContext';
import { useLanguage } from '@/lib/context/LanguageContext';

export default function DashboardTopBar() {
  const { currentContext, setContext, t } = useDashboard();
  const { language, setLanguage } = useLanguage();

  return (
    <header className="h-14 border-b border-border bg-canvas/80 backdrop-blur-md px-6 flex items-center justify-between sticky top-0 z-40">
      {/* Left: Logo/Brand - clean, minimal */}
      <div className="flex items-center">
        <span className="text-base font-semibold tracking-tight text-ink">
          Visibility Engine
        </span>
      </div>

      {/* Right: Controls - grouped, compact */}
      <div className="flex items-center gap-2">
        {/* Context Switcher - subtle segmented control */}
        <div className="flex items-center bg-surface-1 rounded-lg p-0.5 border border-border/50">
          <button
            onClick={() => setContext('creator')}
            className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-fast ease-out-expo ${
              currentContext === 'creator'
                ? 'bg-canvas text-ink shadow-xs'
                : 'text-slate hover:text-ink'
            }`}
          >
            {t.contextSwitcher.creator}
          </button>
          <button
            onClick={() => setContext('company')}
            className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-fast ease-out-expo ${
              currentContext === 'company'
                ? 'bg-canvas text-ink shadow-xs'
                : 'text-slate hover:text-ink'
            }`}
          >
            {t.contextSwitcher.company}
          </button>
        </div>

        {/* Divider */}
        <div className="h-5 w-px bg-border/50 mx-1" />

        {/* Language Switcher - minimal */}
        <div className="flex items-center bg-surface-1 rounded-lg p-0.5 border border-border/50">
          <button
            onClick={() => setLanguage('en')}
            className={`px-2.5 py-1.5 text-sm font-medium rounded-md transition-all duration-fast ease-out-expo ${
              language === 'en'
                ? 'bg-canvas text-ink shadow-xs'
                : 'text-slate hover:text-ink'
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage('de')}
            className={`px-2.5 py-1.5 text-sm font-medium rounded-md transition-all duration-fast ease-out-expo ${
              language === 'de'
                ? 'bg-canvas text-ink shadow-xs'
                : 'text-slate hover:text-ink'
            }`}
          >
            DE
          </button>
        </div>
      </div>
    </header>
  );
}
