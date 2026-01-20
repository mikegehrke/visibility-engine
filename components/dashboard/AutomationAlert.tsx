'use client';

// PHASE 17F: No LanguageContext - English only
import { translations } from '@/lib/i18n/translations';
import { currentAccount } from '@/lib/models/account';
import { mockExecutionLogs } from '@/lib/models/executions';

export type AutomationStatus = 'active' | 'paused-limit' | 'paused-window' | 'paused-killswitch';

interface AutomationAlertProps {
  status?: AutomationStatus; // Optional override, otherwise calculated
}

export default function AutomationAlert({ status: statusOverride }: AutomationAlertProps) {
  const t = translations.en;
  
  const isOwner = currentAccount.isOwner;
  const includedActions = currentAccount.automationAddOn.includedActions;
  
  // Calculate current month usage
  const now = new Date();
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1).getTime();
  const actionsThisMonth = mockExecutionLogs.filter(
    (log) => log.executionType === 'auto' && new Date(log.triggeredAt).getTime() >= monthStart
  ).length;
  
  const percentage = isOwner ? 0 : (actionsThisMonth / includedActions) * 100;
  
  // Determine status
  let status: AutomationStatus = statusOverride || 'active';
  
  if (!statusOverride) {
    if (!isOwner && percentage >= 100) {
      status = 'paused-limit';
    }
    // In production, check for automation window and kill switch
    // For now, we only check limit
  }
  
  // No alert for active owner accounts
  if (status === 'active' && isOwner) {
    return null;
  }
  
  // Warning at 80%
  if (status === 'active' && !isOwner && percentage >= 80) {
    return (
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <div className="flex-1">
            <p className="text-sm font-medium text-amber-800">
              {t.alerts.warning80Percent}
            </p>
            <p className="text-xs text-amber-700 mt-1">
              {actionsThisMonth} / {includedActions} {t.counter.actions} {t.counter.used.toLowerCase()}. 
              {' '}{t.alerts.considerUpgrade}
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  // Paused states
  if (status === 'paused-limit') {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div className="flex-1">
            <p className="text-sm font-semibold text-red-800">
              {t.alerts.automationPaused}
            </p>
            <p className="text-xs text-red-700 mt-1">
              {t.alerts.limitReached}: {actionsThisMonth} / {includedActions} {t.counter.actions}.
              {' '}{t.alerts.upgradeOrWait}
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  if (status === 'paused-window') {
    return (
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div className="flex-1">
            <p className="text-sm font-medium text-blue-800">
              {t.alerts.outsideWindow}
            </p>
            <p className="text-xs text-blue-700 mt-1">
              {t.alerts.windowResumesNext}
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  if (status === 'paused-killswitch') {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
          </svg>
          <div className="flex-1">
            <p className="text-sm font-semibold text-red-800">
              {t.alerts.killSwitchActive}
            </p>
            <p className="text-xs text-red-700 mt-1">
              {t.alerts.deactivateToResume}
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  return null;
}
