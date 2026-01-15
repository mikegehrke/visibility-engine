'use client';

import { useDashboard } from '@/lib/context/DashboardContext';

export default function DashboardTopBar() {
  const { currentContext, currentLanguage, setContext, setLanguage, t } = useDashboard();

  return (
    <div className="h-16 border-b border-border bg-canvas px-6 flex items-center justify-between">
      {/* Left: Logo/Brand */}
      <div className="flex items-center gap-4">
        <h1 className="text-lg font-semibold">Visibility Engine</h1>
      </div>

      {/* Right: Switchers + Future Icons */}
      <div className="flex items-center gap-4">
        {/* Context Switcher */}
        <div className="flex items-center gap-2 bg-mist rounded-sm p-1">
          <button
            onClick={() => setContext('creator')}
            className={`px-3 py-1.5 text-sm font-medium rounded-sm transition-all ${
              currentContext === 'creator'
                ? 'bg-canvas text-ink shadow-sm'
                : 'text-slate hover:text-ink'
            }`}
          >
            {t.contextSwitcher.creator}
          </button>
          <button
            onClick={() => setContext('company')}
            className={`px-3 py-1.5 text-sm font-medium rounded-sm transition-all ${
              currentContext === 'company'
                ? 'bg-canvas text-ink shadow-sm'
                : 'text-slate hover:text-ink'
            }`}
          >
            {t.contextSwitcher.company}
          </button>
        </div>

        {/* Language Switcher */}
        <div className="flex items-center gap-2 bg-mist rounded-sm p-1">
          <button
            onClick={() => setLanguage('en')}
            className={`px-3 py-1.5 text-sm font-medium rounded-sm transition-all ${
              currentLanguage === 'en'
                ? 'bg-canvas text-ink shadow-sm'
                : 'text-slate hover:text-ink'
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage('de')}
            className={`px-3 py-1.5 text-sm font-medium rounded-sm transition-all ${
              currentLanguage === 'de'
                ? 'bg-canvas text-ink shadow-sm'
                : 'text-slate hover:text-ink'
            }`}
          >
            DE
          </button>
        </div>

        {/* Future: Notifications Icon Placeholder */}
        <div className="w-10 h-10 rounded-sm bg-mist flex items-center justify-center text-slate opacity-50">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </div>

        {/* Future: Chat Icon Placeholder */}
        <div className="w-10 h-10 rounded-sm bg-mist flex items-center justify-center text-slate opacity-50">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
