'use client';

import { useLanguage } from '@/lib/context/LanguageContext';
import { translations } from '@/lib/i18n/translations';
import { mockActions } from '@/lib/models/actions';
import { mockRules } from '@/lib/models/rules';
import Link from 'next/link';

export default function ActionsPage() {
  const { language } = useLanguage();
  const t = translations[language];

  // Group actions by type
  const actionsByType = {
    notify: mockActions.filter((a) => a.type === 'notify'),
    recommend: mockActions.filter((a) => a.type === 'recommend'),
    prepare: mockActions.filter((a) => a.type === 'prepare'),
  };

  const getTypeStyles = (type: 'notify' | 'recommend' | 'prepare') => {
    switch (type) {
      case 'notify':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'recommend':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'prepare':
        return 'bg-purple-100 text-purple-700 border-purple-200';
    }
  };

  const getTargetStyles = (target: 'dashboard' | 'user' | 'system') => {
    switch (target) {
      case 'dashboard':
        return 'bg-slate-100 text-slate-700';
      case 'user':
        return 'bg-amber-100 text-amber-700';
      case 'system':
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-ink">{t.actions.title}</h1>
        <p className="text-slate mt-1">{t.actions.subtitle}</p>
      </div>

      {/* Simulation Notice */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-800">
          💡 {t.actions.simulationNotice}
        </p>
      </div>

      {/* Actions by Type */}
      {Object.entries(actionsByType).map(([type, actions]) => (
        <div key={type}>
          <h2 className="text-lg font-medium text-ink mb-3">
            {t.actions.types[type as keyof typeof t.actions.types]}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {actions.map((action) => {
              const relatedRule = mockRules.find((r) => r.id === action.relatedRuleId);

              return (
                <div
                  key={action.id}
                  className="bg-white border border-mist rounded-lg p-5 space-y-3"
                >
                  {/* Action Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-base font-medium text-ink">
                        {t.actions.titles[action.titleKey as keyof typeof t.actions.titles]}
                      </h3>
                      <p className="text-sm text-slate mt-1">
                        {t.actions.descriptions[action.descriptionKey as keyof typeof t.actions.descriptions]}
                      </p>
                    </div>
                  </div>

                  {/* Type, Target & Status Badges */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium border ${getTypeStyles(
                        action.type
                      )}`}
                    >
                      {t.actions.types[action.type]}
                    </span>
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${getTargetStyles(
                        action.target
                      )}`}
                    >
                      {t.actions.targets[action.target]}
                    </span>
                    <span className="px-2 py-1 rounded text-xs font-medium bg-amber-100 text-amber-700 border border-amber-200">
                      {t.actions.simulation}
                    </span>
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        action.enabled
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {action.enabled ? t.actions.enabled : t.actions.disabled}
                    </span>
                  </div>

                  {/* Related Rule */}
                  {relatedRule && (
                    <div className="text-xs text-slate border-t border-mist pt-3">
                      <span className="font-medium">{t.actions.relatedRule}:</span>{' '}
                      <Link
                        href={`/dashboard/rules/${relatedRule.id}`}
                        className="text-primary hover:underline"
                      >
                        {t.rules.titles[relatedRule.titleKey as keyof typeof t.rules.titles]}
                      </Link>
                    </div>
                  )}

                  {/* View Details Button */}
                  <Link
                    href={`/dashboard/actions/${action.id}`}
                    className="block w-full px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium text-center hover:bg-primary/90 transition-colors"
                  >
                    {t.actions.viewDetails}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
