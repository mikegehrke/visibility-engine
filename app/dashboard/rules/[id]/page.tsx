'use client';

import { useLanguage } from '@/lib/context/LanguageContext';
import { translations } from '@/lib/i18n/translations';
import { mockRules } from '@/lib/models/rules';
import { mockActions } from '@/lib/models/actions';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function RuleDetailPage({ params }: { params: { id: string } }) {
  const { language } = useLanguage();
  const t = translations[language];

  // Find the rule
  const rule = mockRules.find((r) => r.id === params.id);

  if (!rule) {
    notFound();
  }

  const getSeverityStyles = (severity: 'info' | 'warning' | 'critical') => {
    switch (severity) {
      case 'info':
        return {
          bg: 'bg-slate-50',
          border: 'border-slate-200',
          text: 'text-slate-700',
          badge: 'bg-slate-100 text-slate-700 border-slate-200',
        };
      case 'warning':
        return {
          bg: 'bg-amber-50',
          border: 'border-amber-200',
          text: 'text-amber-700',
          badge: 'bg-amber-100 text-amber-700 border-amber-200',
        };
      case 'critical':
        return {
          bg: 'bg-red-50',
          border: 'border-red-200',
          text: 'text-red-700',
          badge: 'bg-red-100 text-red-700 border-red-200',
        };
    }
  };

  const severityStyles = getSeverityStyles(rule.severity);

  // Format condition for preview
  const conditionText = `${t.rules.metrics[rule.condition.metric]} ${
    t.rules.operators[rule.condition.operator]
  } ${rule.condition.value}${rule.condition.operator === 'change' ? '%' : ''} ${
    t.rules.preview.if.toLowerCase()
  } ${t.rules.timeframes[rule.condition.timeframe]}`;

  const actionText = t.rules.actions[rule.action.descriptionKey as keyof typeof t.rules.actions];

  return (
    <div className="space-y-6">
      {/* Back Link */}
      <Link
        href="/dashboard/rules"
        className="inline-flex items-center text-sm text-slate hover:text-ink transition-colors"
      >
        ← {t.rules.allRules}
      </Link>

      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-2xl font-semibold text-ink">
            {t.rules.titles[rule.titleKey as keyof typeof t.rules.titles]}
          </h1>
          <span
            className={`px-3 py-1 rounded text-sm font-medium border ${severityStyles.badge}`}
          >
            {t.rules.severity[rule.severity]}
          </span>
          <span
            className={`px-3 py-1 rounded text-sm font-medium ${
              rule.enabled
                ? 'bg-green-100 text-green-700'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            {rule.enabled ? t.rules.enabled : t.rules.disabled}
          </span>
        </div>
        <p className="text-slate">
          {t.rules.descriptions[rule.descriptionKey as keyof typeof t.rules.descriptions]}
        </p>
      </div>

      {/* Rule Preview Card */}
      <div className={`border rounded-lg p-6 ${severityStyles.bg} ${severityStyles.border}`}>
        <h2 className="text-lg font-medium text-ink mb-4">Rule Logic</h2>
        
        {/* IF Section */}
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className={`px-3 py-1 rounded font-semibold text-sm ${severityStyles.badge}`}>
              {t.rules.preview.if}
            </div>
            <div className="flex-1">
              <p className={`text-sm font-medium ${severityStyles.text}`}>
                {conditionText}
              </p>
              <div className="mt-2 grid grid-cols-2 gap-3 text-xs text-slate">
                <div>
                  <span className="font-medium">{t.rules.condition}:</span>
                  <div className="mt-1 space-y-1">
                    <div>• Metric: {t.rules.metrics[rule.condition.metric]}</div>
                    <div>• Operator: {t.rules.operators[rule.condition.operator]}</div>
                    <div>• Value: {rule.condition.value}{rule.condition.operator === 'change' && '%'}</div>
                    <div>• Timeframe: {t.rules.timeframes[rule.condition.timeframe]}</div>
                  </div>
                </div>
                <div>
                  <span className="font-medium">{t.rules.scope}:</span>
                  <div className="mt-1">
                    {t.rules.scopes[rule.scope as keyof typeof t.rules.scopes]}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex items-center justify-center">
            <svg className="w-6 h-6 text-slate" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>

          {/* THEN Section */}
          <div className="flex items-start gap-3">
            <div className={`px-3 py-1 rounded font-semibold text-sm ${severityStyles.badge}`}>
              {t.rules.preview.then}
            </div>
            <div className="flex-1">
              <p className={`text-sm font-medium ${severityStyles.text}`}>
                {actionText}
              </p>
              <div className="mt-2 text-xs text-slate">
                <span className="font-medium">{t.rules.action}:</span> {rule.action.label}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Human-Readable Summary */}
      <div className="bg-white border border-mist rounded-lg p-5">
        <h3 className="text-sm font-semibold text-ink mb-2">Human-Readable Summary</h3>
        <p className="text-sm text-slate">
          {t.rules.preview.if} <span className="font-medium text-ink">{conditionText}</span>,{' '}
          {t.rules.preview.then.toLowerCase()} <span className="font-medium text-ink">{actionText}</span>.
        </p>
      </div>

      {/* Related Actions (Simulation) */}
      {(() => {
        const relatedActions = mockActions.filter((a) => a.relatedRuleId === rule.id);
        if (relatedActions.length === 0) return null;

        return (
          <div className="bg-white border border-mist rounded-lg p-5">
            <h3 className="text-sm font-semibold text-ink mb-3">
              Related Actions ({t.actions.simulation})
            </h3>
            <div className="space-y-2">
              {relatedActions.map((action) => (
                <Link
                  key={action.id}
                  href={`/dashboard/actions/${action.id}`}
                  className="flex items-center justify-between p-3 border border-mist rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-1">
                    <p className="text-sm font-medium text-ink">
                      {t.actions.titles[action.titleKey as keyof typeof t.actions.titles]}
                    </p>
                    <p className="text-xs text-slate mt-0.5">
                      {t.actions.types[action.type]} → {t.actions.targets[action.target]}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 rounded text-xs font-medium bg-amber-100 text-amber-700 border border-amber-200">
                      {t.actions.simulation}
                    </span>
                    <svg className="w-4 h-4 text-slate" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        );
      })()}

      {/* Info Notice */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-800">
          💡 {t.rules.comingSoon}
        </p>
      </div>
    </div>
  );
}
