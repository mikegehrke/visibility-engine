'use client';

import { useLanguage } from '@/lib/context/LanguageContext';
import { translations } from '@/lib/i18n/translations';
import { SimulationResult, getRiskLevelStyles } from '@/lib/models/simulation';
import { currentAccount } from '@/lib/models/account';

interface SimulationCardProps {
  simulation: SimulationResult;
  onApprove?: () => void;
  onSkip?: () => void;
  compact?: boolean;
}

export default function SimulationCard({ 
  simulation, 
  onApprove, 
  onSkip,
  compact = false 
}: SimulationCardProps) {
  const { language } = useLanguage();
  const t = translations[language];
  
  const riskStyles = getRiskLevelStyles(simulation.riskLevel);
  const isOwner = currentAccount.isOwner;
  
  // Format timestamp
  const evaluatedAgo = () => {
    const date = new Date(simulation.evaluatedAt);
    const now = new Date();
    const diffHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffHours < 1) return t.simulation.justNow;
    if (diffHours < 24) return `${diffHours}${t.simulation.hoursAgo}`;
    const diffDays = Math.floor(diffHours / 24);
    return `${diffDays}${t.simulation.daysAgo}`;
  };

  return (
    <div className={`border rounded-lg ${riskStyles.bg} ${riskStyles.border} ${compact ? 'p-4' : 'p-6'}`}>
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className={`${compact ? 'text-base' : 'text-lg'} font-medium text-ink mb-1`}>
            {t.simulation.title}
          </h3>
          <p className="text-xs text-slate">
            {t.simulation.evaluatedAt}: {evaluatedAgo()}
          </p>
        </div>
        <span className={`px-3 py-1 rounded text-xs font-medium border ${riskStyles.badge}`}>
          {t.simulation.riskLevels[simulation.riskLevel]}
        </span>
      </div>

      {/* Impact Metrics */}
      <div className="space-y-3 mb-4">
        {/* Expected Impact */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-slate">{t.simulation.expectedImpact}</span>
          <span className="text-sm font-semibold text-ink">{simulation.expectedImpact}</span>
        </div>

        {/* Estimated Actions */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-slate">{t.simulation.estimatedActions}</span>
          <span className="text-sm font-medium text-ink">
            {simulation.estimatedActions} {simulation.estimatedActions === 1 ? t.simulation.action : t.simulation.actions}
          </span>
        </div>

        {/* Estimated Cost */}
        {!isOwner && simulation.estimatedCost > 0 && (
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate">{t.simulation.estimatedCost}</span>
            <span className="text-sm font-medium text-ink">€{simulation.estimatedCost.toFixed(2)}</span>
          </div>
        )}

        {/* Owner: Free */}
        {isOwner && (
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate">{t.simulation.estimatedCost}</span>
            <span className="text-sm font-medium text-green-600">{t.simulation.free}</span>
          </div>
        )}

        {/* Confidence */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-slate">{t.simulation.confidence}</span>
          <div className="flex items-center gap-2">
            <div className="w-24 bg-smoke rounded-full h-2">
              <div
                className="bg-signal h-2 rounded-full transition-all"
                style={{ width: `${simulation.confidenceInPrediction}%` }}
              />
            </div>
            <span className="text-sm font-medium text-ink">{simulation.confidenceInPrediction}%</span>
          </div>
        </div>
      </div>

      {/* Data Source */}
      <div className="bg-surface-1 border border-border rounded-lg p-3 mb-4">
        <p className="text-xs text-slate">
          {t.simulation.basedOnData}: <span className="font-medium text-ink">{simulation.basedOnDataPoints}</span> {t.simulation.dataPoints}
        </p>
      </div>

      {/* Approval Status & Actions */}
      {simulation.approved ? (
        <div className="bg-emerald-500/10 dark:bg-emerald-500/5 border border-emerald-500/20 rounded-lg p-3">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <div className="flex-1">
              <p className="text-sm font-medium text-emerald-700 dark:text-emerald-300">{t.simulation.approved}</p>
              {simulation.approvedBy && (
                <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-1">
                  {t.simulation.approvedBy}: {simulation.approvedBy}
                </p>
              )}
            </div>
          </div>
        </div>
      ) : simulation.requiresApproval ? (
        <div className="space-y-2">
          <div className="bg-amber-500/10 dark:bg-amber-500/5 border border-amber-500/20 rounded-lg p-3 mb-3">
            <p className="text-xs font-medium text-amber-700 dark:text-amber-300">
              {t.simulation.approvalRequired}
            </p>
          </div>
          <button
            onClick={onApprove}
            className="w-full px-4 py-2 bg-signal-bg text-white rounded-lg text-sm font-medium hover:bg-signal-bg-hover transition-colors"
          >
            {t.simulation.approveForAutoExecution}
          </button>
        </div>
      ) : (
        <div className="space-y-2">
          <div className="bg-signal/10 dark:bg-signal/5 border border-signal/20 rounded-lg p-3 mb-3">
            <p className="text-xs font-medium text-signal dark:text-signal-hover">
              {t.simulation.ownerOptional}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={onApprove}
              className="px-4 py-2 bg-signal-bg text-white rounded-lg text-sm font-medium hover:bg-signal-bg-hover transition-colors"
            >
              {t.simulation.approve}
            </button>
            <button
              onClick={onSkip}
              className="px-4 py-2 bg-white border border-mist text-ink rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              {t.simulation.skipSimulation}
            </button>
          </div>
        </div>
      )}

      {/* Disclaimer */}
      <p className="text-xs text-slate mt-3 italic">
        {t.simulation.disclaimer}
      </p>
    </div>
  );
}
