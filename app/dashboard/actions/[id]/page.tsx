'use client';

import { useLanguage } from '@/lib/context/LanguageContext';
import { translations } from '@/lib/i18n/translations';
import { mockActions } from '@/lib/models/actions';
import { mockRules } from '@/lib/models/rules';
import { mockAutomationConfigs } from '@/lib/models/automation';
import { mockExecutionLogs } from '@/lib/models/executions';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useState } from 'react';

export default function ActionDetailPage({ params }: { params: { id: string } }) {
  const { language } = useLanguage();
  const t = translations[language];
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [executionSuccess, setExecutionSuccess] = useState(false);

  // Find the action
  const action = mockActions.find((a) => a.id === params.id);

  if (!action) {
    notFound();
  }

  // Find related rule
  const relatedRule = mockRules.find((r) => r.id === action.relatedRuleId);

  // Find automation config for this action
  const automationConfig = mockAutomationConfigs.find((c) => c.relatedActionId === action.id);

  // Find execution logs for this action
  const executionLogs = mockExecutionLogs.filter((log) => log.actionId === action.id);

  const handleRunAction = () => {
    setShowConfirmDialog(true);
  };

  const handleConfirm = () => {
    // Simulate execution
    setExecutionSuccess(true);
    setShowConfirmDialog(false);
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setExecutionSuccess(false);
    }, 5000);
  };

  const handleCancel = () => {
    setShowConfirmDialog(false);
  };

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

      {/* Automation Readiness (if available) */}
      {automationConfig && (
        <div className="bg-white border border-mist rounded-lg p-6">
          <h3 className="text-lg font-medium text-ink mb-4">{t.automation.automationReady}</h3>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-medium text-slate">{t.automation.mode}:</span>
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  automationConfig.executionMode === 'preview' ? 'bg-blue-100 text-blue-700' :
                  automationConfig.executionMode === 'manual' ? 'bg-purple-100 text-purple-700' :
                  'bg-green-100 text-green-700'
                }`}>
                  {t.automation.modes[automationConfig.executionMode]}
                </span>
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  automationConfig.status === 'ready' ? 'bg-green-100 text-green-700' :
                  automationConfig.status === 'blocked' ? 'bg-red-100 text-red-700' :
                  'bg-gray-100 text-gray-700'
                }`}>
                  {t.automation.statuses[automationConfig.status]}
                </span>
              </div>
              <p className="text-sm text-slate">
                {t.automation.safetyNotices[automationConfig.safetyNoticeKey as keyof typeof t.automation.safetyNotices]}
              </p>
            </div>
            <Link
              href={`/dashboard/automation/${automationConfig.id}`}
              className="px-4 py-2 bg-ink text-white rounded-lg text-sm hover:bg-slate transition-colors whitespace-nowrap"
            >
              {t.automation.viewDetails}
            </Link>
          </div>
        </div>
      )}

      {/* Manual Execution Section */}
      <div className="bg-white border border-mist rounded-lg p-6">
        <h3 className="text-lg font-medium text-ink mb-4">{t.execution.manualExecution}</h3>
        
        {/* Success Message */}
        {executionSuccess && (
          <div className="mb-4 bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-green-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm font-medium text-green-800">{t.execution.executionSuccess}</p>
            </div>
          </div>
        )}

        <div className="flex items-center gap-3 mb-4">
          <button
            onClick={handleRunAction}
            className="px-6 py-3 bg-ink text-white rounded-lg text-sm font-medium hover:bg-slate transition-colors"
          >
            {t.execution.runAction}
          </button>
          
          {executionLogs.length > 0 && (
            <Link
              href="/dashboard/executions"
              className="px-6 py-3 bg-gray-100 text-ink rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
            >
              {t.execution.viewExecutionLog}
            </Link>
          )}
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <p className="text-sm text-amber-800">{t.execution.simulationNotice}</p>
        </div>
      </div>

      {/* Confirm Dialog */}
      {showConfirmDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
            <div className="p-6">
              <h3 className="text-lg font-medium text-ink mb-4">{t.execution.confirmTitle}</h3>
              <p className="text-slate mb-4">{t.execution.confirmMessage}</p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-blue-800">{t.execution.confirmNotice}</p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleConfirm}
                  className="flex-1 px-4 py-3 bg-ink text-white rounded-lg text-sm font-medium hover:bg-slate transition-colors"
                >
                  {t.execution.confirmButton}
                </button>
                <button
                  onClick={handleCancel}
                  className="flex-1 px-4 py-3 bg-gray-100 text-ink rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                >
                  {t.execution.cancelButton}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

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
