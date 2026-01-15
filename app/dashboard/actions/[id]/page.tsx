'use client';

import { useLanguage } from '@/lib/context/LanguageContext';
import { translations } from '@/lib/i18n/translations';
import { mockActions } from '@/lib/models/actions';
import { mockRules } from '@/lib/models/rules';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function ActionDetailPage({ params }: { params: { id: string } }) {
  const { language } = useLanguage();
  const t = translations[language];

  // Find the action
  const action = mockActions.find((a) => a.id === params.id);

  if (!action) {
    notFound();
  }

  // Find related rule
  const relatedRule = mockRules.find((r) => r.id === action.relatedRuleId);

  const getTypeStyles = (type: 'notify' | 'recommend' | 'prepare') => {
    switch (type) {
      case 'notify':
        return {
          bg: 'bg-blue-50',
          border: 'border-blue-200',
          text: 'text-blue-700',
          badge: 'bg-blue-100 text-blue-700 border-blue-200',
        };
      case 'recommend':
        return {
          bg: 'bg-green-50',
          border: 'border-green-200',
          text: 'text-green-700',
          badge: 'bg-green-100 text-green-700 border-green-200',
        };
      case 'prepare':
        return {
          bg: 'bg-purple-50',
          border: 'border-purple-200',
          text: 'text-purple-700',
          badge: 'bg-purple-100 text-purple-700 border-purple-200',
        };
    }
  };

  const typeStyles = getTypeStyles(action.type);

  return (
    <div className="space-y-6">
      {/* Back Link */}
      <Link
        href="/dashboard/actions"
        className="inline-flex items-center text-sm text-slate hover:text-ink transition-colors"
      >
        ← {t.actions.allActions}
      </Link>

      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-2xl font-semibold text-ink">
            {t.actions.titles[action.titleKey as keyof typeof t.actions.titles]}
          </h1>
          <span
            className={`px-3 py-1 rounded text-sm font-medium border ${typeStyles.badge}`}
          >
            {t.actions.types[action.type]}
          </span>
          <span className="px-3 py-1 rounded text-sm font-medium bg-amber-100 text-amber-700 border border-amber-200">
            {t.actions.simulation}
          </span>
          <span
            className={`px-3 py-1 rounded text-sm font-medium ${
              action.enabled
                ? 'bg-green-100 text-green-700'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            {action.enabled ? t.actions.enabled : t.actions.disabled}
          </span>
        </div>
        <p className="text-slate">
          {t.actions.descriptions[action.descriptionKey as keyof typeof t.actions.descriptions]}
        </p>
      </div>

      {/* Action Details Card */}
      <div className={`border rounded-lg p-6 ${typeStyles.bg} ${typeStyles.border}`}>
        <h2 className="text-lg font-medium text-ink mb-4">Action Configuration</h2>
        
        <div className="space-y-4">
          {/* Type & Target */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="text-sm font-medium text-slate block mb-1">{t.actions.type}</span>
              <span className={`inline-block px-3 py-1 rounded text-sm font-medium border ${typeStyles.badge}`}>
                {t.actions.types[action.type]}
              </span>
            </div>
            <div>
              <span className="text-sm font-medium text-slate block mb-1">{t.actions.target}</span>
              <span className="inline-block px-3 py-1 rounded text-sm font-medium bg-slate-100 text-slate-700">
                {t.actions.targets[action.target]}
              </span>
            </div>
          </div>

          {/* Related Rule */}
          {relatedRule && (
            <div className="border-t border-mist pt-4">
              <span className="text-sm font-medium text-slate block mb-2">
                {t.actions.triggeredBy}
              </span>
              <Link
                href={`/dashboard/rules/${relatedRule.id}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-mist rounded-lg text-sm hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-ink">
                  {t.rules.titles[relatedRule.titleKey as keyof typeof t.rules.titles]}
                </span>
                <span className="text-xs text-slate">
                  ({t.rules.scopes[relatedRule.scope as keyof typeof t.rules.scopes]})
                </span>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Simulated Outcome */}
      <div className="bg-white border border-mist rounded-lg p-6">
        <h3 className="text-lg font-medium text-ink mb-3">{t.actions.simulatedResult}</h3>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <p className="text-sm text-slate font-mono">
            {t.actions.simulations[action.simulatedResultKey as keyof typeof t.actions.simulations]}
          </p>
        </div>
      </div>

      {/* Simulation Notice */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div className="flex-1">
            <p className="text-sm font-medium text-blue-800">{t.actions.simulationNotice}</p>
            <p className="text-xs text-blue-700 mt-1">
              This is a preview layer. No automations, webhooks, or external services are executed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
