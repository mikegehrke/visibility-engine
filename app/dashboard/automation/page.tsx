'use client';

import { useLanguage } from '@/lib/context/LanguageContext';
import { translations } from '@/lib/i18n/translations';
import { mockAutomationConfigs } from '@/lib/models/automation';
import { mockActions } from '@/lib/models/actions';
import Link from 'next/link';

export default function AutomationPage() {
  const { language } = useLanguage();
  const t = translations[language];

  const getModeStyles = (mode: 'preview' | 'manual' | 'auto') => {
    switch (mode) {
      case 'preview':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'manual':
        return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'auto':
        return 'bg-green-100 text-green-700 border-green-200';
    }
  };

  const getStatusStyles = (status: 'ready' | 'blocked' | 'disabled') => {
    switch (status) {
      case 'ready':
        return 'bg-green-100 text-green-700';
      case 'blocked':
        return 'bg-red-100 text-red-700';
      case 'disabled':
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-ink">{t.automation.title}</h1>
        <p className="text-slate mt-1">{t.automation.subtitle}</p>
      </div>

      {/* Warning Notice */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-amber-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <p className="text-sm font-medium text-amber-800">{t.automation.notActiveNotice}</p>
        </div>
      </div>

      {/* Automation Configs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {mockAutomationConfigs.map((config) => {
          const relatedAction = mockActions.find((a) => a.id === config.relatedActionId);

          return (
            <div
              key={config.id}
              className="bg-white border border-mist rounded-lg p-5 space-y-4"
            >
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-base font-medium text-ink">
                    {relatedAction && t.actions.titles[relatedAction.titleKey as keyof typeof t.actions.titles]}
                  </h3>
                  <p className="text-sm text-slate mt-1">
                    {relatedAction && t.actions.descriptions[relatedAction.descriptionKey as keyof typeof t.actions.descriptions]}
                  </p>
                </div>
              </div>

              {/* Badges */}
              <div className="flex items-center gap-2 flex-wrap">
                <span
                  className={`px-2 py-1 rounded text-xs font-medium border ${getModeStyles(
                    config.executionMode
                  )}`}
                >
                  {t.automation.modes[config.executionMode]}
                </span>
                <span
                  className={`px-2 py-1 rounded text-xs font-medium ${getStatusStyles(
                    config.status
                  )}`}
                >
                  {t.automation.statuses[config.status]}
                </span>
                {config.status === 'ready' && (
                  <span className="px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-700 border border-green-200">
                    {t.automation.automationReady}
                  </span>
                )}
                {/* Phase 16A: Auto Mode Level Badge */}
                {config.autoModeEnabled && (
                  <span className="px-2 py-1 rounded text-xs font-medium bg-sky-100 text-sky-700 border border-sky-200">
                    {t.autoMode.levels[config.autoModeLevel]}
                  </span>
                )}
              </div>

              {/* Enabled Toggle (UI only, disabled for auto mode) */}
              <div className="flex items-center justify-between border-t border-mist pt-4">
                <span className="text-sm text-slate">{t.automation.enabled}</span>
                <button
                  disabled
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    config.enabled ? 'bg-signal' : 'bg-gray-300'
                  } opacity-50 cursor-not-allowed`}
                  title={config.executionMode === 'auto' ? t.automation.safetyNotices.autoModeNotAvailable : t.automation.notActiveNotice}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      config.enabled ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Blocked Reason */}
              {config.status === 'blocked' && config.blockedReasonKey && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-xs text-red-700">
                    {t.automation.blockedReasons[config.blockedReasonKey as keyof typeof t.automation.blockedReasons]}
                  </p>
                </div>
              )}

              {/* View Details Button */}
              <Link
                href={`/dashboard/automation/${config.id}`}
                className="block w-full px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium text-center hover:bg-primary/90 transition-colors"
              >
                {t.automation.viewDetails}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
