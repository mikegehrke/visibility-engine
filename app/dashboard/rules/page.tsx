'use client';

import { useLanguage } from '@/lib/context/LanguageContext';
import { translations } from '@/lib/i18n/translations';
import { mockRules } from '@/lib/models/rules';
import Link from 'next/link';

export default function RulesPage() {
  const { language } = useLanguage();
  const t = translations[language];

  // Group rules by scope
  const rulesByScope = {
    signals: mockRules.filter((r) => r.scope === 'signals'),
    distribution: mockRules.filter((r) => r.scope === 'distribution'),
    flow: mockRules.filter((r) => r.scope === 'flow'),
  };

  const getSeverityStyles = (severity: 'info' | 'warning' | 'critical') => {
    switch (severity) {
      case 'info':
        return 'bg-slate-100 text-slate-700 border-slate-200';
      case 'warning':
        return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'critical':
        return 'bg-red-100 text-red-700 border-red-200';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-ink">{t.rules.title}</h1>
        <p className="text-slate mt-1">{t.rules.subtitle}</p>
      </div>

      {/* Rules by Scope */}
      {Object.entries(rulesByScope).map(([scope, rules]) => (
        <div key={scope}>
          <h2 className="text-lg font-medium text-ink mb-3">
            {t.rules.scopes[scope as keyof typeof t.rules.scopes]}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {rules.map((rule) => (
              <div
                key={rule.id}
                className="bg-canvas border border-border rounded-lg p-5 space-y-3"
              >
                {/* Rule Header */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-base font-medium text-ink">
                      {t.rules.titles[rule.titleKey as keyof typeof t.rules.titles]}
                    </h3>
                    <p className="text-sm text-slate mt-1">
                      {t.rules.descriptions[rule.descriptionKey as keyof typeof t.rules.descriptions]}
                    </p>
                  </div>
                </div>

                {/* Severity & Status Badges */}
                <div className="flex items-center gap-2">
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium border ${getSeverityStyles(
                      rule.severity
                    )}`}
                  >
                    {t.rules.severity[rule.severity]}
                  </span>
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      rule.enabled
                        ? 'bg-green-100 text-green-700'
                        : 'bg-surface-2 text-slate'
                    }`}
                  >
                    {rule.enabled ? t.rules.enabled : t.rules.disabled}
                  </span>
                </div>

                {/* Quick Preview */}
                <div className="text-xs text-slate border-t border-border pt-3 space-y-1">
                  <div>
                    <span className="font-medium">{t.rules.preview.if}:</span>{' '}
                    {t.rules.metrics[rule.condition.metric]} {t.rules.operators[rule.condition.operator]}{' '}
                    {rule.condition.value}
                    {rule.condition.operator === 'change' && '%'} ({t.rules.timeframes[rule.condition.timeframe]})
                  </div>
                  <div>
                    <span className="font-medium">{t.rules.preview.then}:</span>{' '}
                    {rule.action.label}
                  </div>
                </div>

                {/* View Details Button */}
                <Link
                  href={`/dashboard/rules/${rule.id}`}
                  className="block w-full px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium text-center hover:bg-primary/90 transition-colors"
                >
                  {t.rules.viewDetails}
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Info Notice */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-800">
          💡 {t.rules.comingSoon}
        </p>
      </div>
    </div>
  );
}
