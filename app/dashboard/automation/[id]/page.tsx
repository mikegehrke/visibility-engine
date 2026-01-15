'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { translations } from '@/lib/i18n/translations';
import { mockAutomationConfigs } from '@/lib/models/automation';
import { mockActions } from '@/lib/models/actions';
import { mockRules } from '@/lib/models/rules';
import { getSimulationByAutomationId } from '@/lib/models/simulation';
import { mockExecutionLogs } from '@/lib/models/executions';
import SimulationCard from '@/components/dashboard/SimulationCard';
import ExplainabilitySection from '@/components/dashboard/ExplainabilitySection';
import AutomationCounter from '@/components/dashboard/AutomationCounter';
import AutomationAlert from '@/components/dashboard/AutomationAlert';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function AutomationDetailPage({ params }: { params: { id: string } }) {
  const { language } = useLanguage();
  const t = translations[language];

  // Find the automation config
  const config = mockAutomationConfigs.find((c) => c.id === params.id);

  if (!config) {
    notFound();
  }
  
  // Phase 16B: Get simulation results
  const simulation = getSimulationByAutomationId(config.id);
  const [simulationApproved, setSimulationApproved] = useState(simulation?.approved || false);

  // Phase 16B: Get latest auto execution for explainability
  const latestAutoExecution = mockExecutionLogs
    .filter((log) => log.actionId === config.relatedActionId && log.executionType === 'auto')
    .sort((a, b) => new Date(b.triggeredAt).getTime() - new Date(a.triggeredAt).getTime())[0];

  // Find related action and rule
  const relatedAction = mockActions.find((a) => a.id === config.relatedActionId);
  const relatedRule = relatedAction ? mockRules.find((r) => r.id === relatedAction.relatedRuleId) : null;

  const getModeStyles = (mode: 'preview' | 'manual' | 'auto') => {
    switch (mode) {
      case 'preview':
        return {
          bg: 'bg-blue-50',
          border: 'border-blue-200',
          text: 'text-blue-700',
          badge: 'bg-blue-100 text-blue-700 border-blue-200',
        };
      case 'manual':
        return {
          bg: 'bg-purple-50',
          border: 'border-purple-200',
          text: 'text-purple-700',
          badge: 'bg-purple-100 text-purple-700 border-purple-200',
        };
      case 'auto':
        return {
          bg: 'bg-green-50',
          border: 'border-green-200',
          text: 'text-green-700',
          badge: 'bg-green-100 text-green-700 border-green-200',
        };
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

  const modeStyles = getModeStyles(config.executionMode);

  return (
    <div className="space-y-6">
      {/* Back Link */}
      <Link
        href="/dashboard/automation"
        className="inline-flex items-center text-sm text-slate hover:text-ink transition-colors"
      >
        ← {t.automation.allAutomations}
      </Link>

      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-2xl font-semibold text-ink">
            {relatedAction && t.actions.titles[relatedAction.titleKey as keyof typeof t.actions.titles]}
          </h1>
          <span
            className={`px-3 py-1 rounded text-sm font-medium border ${modeStyles.badge}`}
          >
            {t.automation.modes[config.executionMode]}
          </span>
          <span
            className={`px-3 py-1 rounded text-sm font-medium ${getStatusStyles(
              config.status
            )}`}
          >
            {t.automation.statuses[config.status]}
          </span>
        </div>
        <p className="text-slate">
          {relatedAction && t.actions.descriptions[relatedAction.descriptionKey as keyof typeof t.actions.descriptions]}
        </p>
      </div>

      {/* Phase 16B: Alert Banner */}
      <AutomationAlert />

      {/* Phase 16B: Live Counter */}
      <AutomationCounter />

      {/* Warning Notice */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-amber-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <p className="text-sm font-medium text-amber-800">{t.automation.notActiveNotice}</p>
        </div>
      </div>

      {/* Configuration Card */}
      <div className={`border rounded-lg p-6 ${modeStyles.bg} ${modeStyles.border}`}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium text-ink">Automation Configuration</h2>
          {/* Phase 16A: Link to Auto Mode Settings */}
          <Link
            href="/dashboard/automation/settings"
            className="text-sm text-primary hover:underline"
          >
            {t.nav.autoModeSettings} →
          </Link>
        </div>
        
        <div className="space-y-4">
          {/* Mode & Status */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="text-sm font-medium text-slate block mb-1">{t.automation.mode}</span>
              <span className={`inline-block px-3 py-1 rounded text-sm font-medium border ${modeStyles.badge}`}>
                {t.automation.modes[config.executionMode]}
              </span>
            </div>
            <div>
              <span className="text-sm font-medium text-slate block mb-1">{t.automation.status}</span>
              <span className={`inline-block px-3 py-1 rounded text-sm font-medium ${getStatusStyles(config.status)}`}>
                {t.automation.statuses[config.status]}
              </span>
            </div>
          </div>

          {/* Phase 16A: Auto Mode Info */}
          {config.autoModeEnabled && (
            <div className="border-t border-mist pt-4">
              <span className="text-sm font-medium text-slate block mb-2">
                {t.autoMode.title}
              </span>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded text-sm font-medium bg-sky-100 text-sky-700 border border-sky-200">
                  {t.autoMode.levels[config.autoModeLevel]}
                </span>
                <span className="text-xs text-slate">
                  {t.autoMode.levelDescriptions[config.autoModeLevel]}
                </span>
              </div>
            </div>
          )}

          {/* Related Action & Rule */}
          <div className="border-t border-mist pt-4 space-y-3">
            <div>
              <span className="text-sm font-medium text-slate block mb-2">
                {t.automation.relatedAction}
              </span>
              <Link
                href={`/dashboard/actions/${config.relatedActionId}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-mist rounded-lg text-sm hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-ink">
                  {relatedAction && t.actions.titles[relatedAction.titleKey as keyof typeof t.actions.titles]}
                </span>
              </Link>
            </div>

            {relatedRule && (
              <div>
                <span className="text-sm font-medium text-slate block mb-2">
                  Triggered by Rule
                </span>
                <Link
                  href={`/dashboard/rules/${relatedRule.id}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-mist rounded-lg text-sm hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-ink">
                    {t.rules.titles[relatedRule.titleKey as keyof typeof t.rules.titles]}
                  </span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Phase 16B: Simulation Results */}
      {simulation && (
        <SimulationCard
          simulation={simulation}
          onApprove={() => {
            setSimulationApproved(true);
            // In production: API call to approve simulation
            console.log('Simulation approved for', config.id);
          }}
          onSkip={() => {
            setSimulationApproved(true);
            // Owner can skip simulation
            console.log('Simulation skipped for', config.id);
          }}
        />
      )}

      {/* Phase 16B: Explainability - Latest Auto Execution */}
      {latestAutoExecution && (
        <ExplainabilitySection execution={latestAutoExecution} />
      )}

      {/* Safety Notice */}
      <div className="bg-white border border-mist rounded-lg p-6">
        <h3 className="text-lg font-medium text-ink mb-3">{t.automation.safetyNotice}</h3>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-800">
            {t.automation.safetyNotices[config.safetyNoticeKey as keyof typeof t.automation.safetyNotices]}
          </p>
        </div>
      </div>

      {/* Blocked Reason (if applicable) */}
      {config.status === 'blocked' && config.blockedReasonKey && (
        <div className="bg-white border border-mist rounded-lg p-6">
          <h3 className="text-lg font-medium text-ink mb-3">{t.automation.readinessStatus}</h3>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-sm text-red-700">
              {t.automation.blockedReasons[config.blockedReasonKey as keyof typeof t.automation.blockedReasons]}
            </p>
          </div>
        </div>
      )}

      {/* Last Simulation Result */}
      <div className="bg-white border border-mist rounded-lg p-6">
        <h3 className="text-lg font-medium text-ink mb-3">{t.automation.lastSimulation}</h3>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <p className="text-sm text-slate font-mono">
            {t.automation.simulationResults[config.lastSimulationResultKey as keyof typeof t.automation.simulationResults]}
          </p>
        </div>
      </div>

      {/* Enable Button (disabled) */}
      <div className="bg-white border border-mist rounded-lg p-6">
        <button
          disabled
          className="w-full px-6 py-3 bg-gray-300 text-gray-600 rounded-lg text-sm font-medium cursor-not-allowed"
          title={config.executionMode === 'auto' ? t.automation.safetyNotices.autoModeNotAvailable : t.automation.notActiveNotice}
        >
          {t.automation.enableAutomation}
        </button>
        <p className="text-xs text-slate text-center mt-2">
          {config.executionMode === 'auto' 
            ? t.automation.safetyNotices.autoModeNotAvailable 
            : t.automation.notActiveNotice}
        </p>
      </div>
    </div>
  );
}
