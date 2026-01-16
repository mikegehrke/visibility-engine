'use client';

import { useLanguage } from '@/lib/context/LanguageContext';
import { translations } from '@/lib/i18n/translations';
import { currentAccount } from '@/lib/models/account';
import { mockExecutionLogs } from '@/lib/models/executions';

interface AutomationCounterProps {
  compact?: boolean;
}

export default function AutomationCounter({ compact = false }: AutomationCounterProps) {
  const { language } = useLanguage();
  const t = translations[language];
  
  const isOwner = currentAccount.isOwner;
  const addOnEnabled = currentAccount.automationAddOn.enabled;
  const includedActions = currentAccount.automationAddOn.includedActions;
  
  // Calculate usage from execution logs (auto executions only)
  const now = new Date();
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1).getTime();
  
  const autoExecutions = mockExecutionLogs.filter((log) => log.executionType === 'auto');
  
  const actionsToday = autoExecutions.filter(
    (log) => new Date(log.triggeredAt).getTime() >= todayStart
  ).length;
  
  const actionsThisMonth = autoExecutions.filter(
    (log) => new Date(log.triggeredAt).getTime() >= monthStart
  ).length;
  
  // Calculate remaining and cost
  const remaining = isOwner ? -1 : Math.max(0, includedActions - actionsThisMonth);
  const overage = isOwner ? 0 : Math.max(0, actionsThisMonth - includedActions);
  const estimatedCost = isOwner ? 0 : overage * currentAccount.automationAddOn.overageRate;
  
  // Calculate percentage for progress bar
  const percentage = isOwner ? 0 : Math.min((actionsThisMonth / includedActions) * 100, 100);
  const isWarning = percentage >= 80 && percentage < 100;
  const isLimit = percentage >= 100;
  
  return (
    <div className={`bg-canvas border border-mist rounded-lg ${compact ? 'p-4' : 'p-6'}`}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <h2 className={`${compact ? 'text-sm' : 'text-base'} font-medium text-ink`}>
            {t.counter.automationUsage}
          </h2>
          <p className="text-xs text-slate mt-1">{t.counter.currentCycle}</p>
        </div>
        {isOwner ? (
          <span className="px-2 py-1 rounded text-xs font-medium bg-emerald-500/10 text-emerald-400 dark:bg-emerald-500/20 dark:text-emerald-300 border border-emerald-500/20">
            {t.counter.unlimited}
          </span>
        ) : (
          <span className={`px-2 py-1 rounded text-xs font-medium ${
            isLimit 
              ? 'bg-red-500/10 text-red-400 dark:bg-red-500/20 dark:text-red-300 border border-red-500/20'
              : isWarning
              ? 'bg-amber-500/10 text-amber-400 dark:bg-amber-500/20 dark:text-amber-300 border border-amber-500/20'
              : 'bg-signal/10 text-signal border border-signal/20'
          }`}>
            {percentage.toFixed(0)}% {t.counter.used}
          </span>
        )}
      </div>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div>
          <p className="text-xs text-slate mb-1">{t.counter.today}</p>
          <p className="text-lg font-bold text-ink">{actionsToday}</p>
        </div>
        <div>
          <p className="text-xs text-slate mb-1">{t.counter.thisMonth}</p>
          <p className="text-lg font-bold text-ink">{actionsThisMonth}</p>
        </div>
      </div>
      
      {/* Progress Bar (only for non-owner) */}
      {!isOwner && (
        <>
          <div className="mb-3">
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate">{t.counter.included}</span>
              <span className="font-medium text-ink">
                {actionsThisMonth} / {includedActions}
              </span>
            </div>
            <div className="w-full bg-smoke rounded-full h-2">
              <div
                className={`h-2 rounded-full transition-all ${
                  isLimit 
                    ? 'bg-red-500'
                    : isWarning
                    ? 'bg-amber-500'
                    : 'bg-signal'
                }`}
                style={{ width: `${Math.min(percentage, 100)}%` }}
              />
            </div>
          </div>
          
          {/* Remaining & Cost */}
          <div className="grid grid-cols-2 gap-3 pt-3 border-t border-mist">
            <div>
              <p className="text-xs text-slate mb-1">{t.counter.remaining}</p>
              <p className={`text-sm font-medium ${remaining === 0 ? 'text-red-600' : 'text-ink'}`}>
                {remaining} {t.counter.actions}
              </p>
            </div>
            <div>
              <p className="text-xs text-slate mb-1">{t.counter.estimatedCost}</p>
              <p className={`text-sm font-medium ${estimatedCost > 0 ? 'text-amber-600' : 'text-green-600'}`}>
                €{estimatedCost.toFixed(2)}
              </p>
            </div>
          </div>
        </>
      )}
      
      {/* Owner Message */}
      {isOwner && (
        <div className="bg-emerald-500/10 dark:bg-emerald-500/5 border border-emerald-500/20 rounded-lg p-3 mt-3">
          <p className="text-xs text-emerald-600 dark:text-emerald-400">
            {t.counter.ownerUnlimited}
          </p>
        </div>
      )}
    </div>
  );
}
