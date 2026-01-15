'use client';

import { useLanguage } from '@/lib/context/LanguageContext';
import { translations } from '@/lib/i18n/translations';
import { ExecutionLog } from '@/lib/models/executions';
import Link from 'next/link';

interface ExplainabilitySectionProps {
  execution: ExecutionLog;
  compact?: boolean;
}

export default function ExplainabilitySection({ execution, compact = false }: ExplainabilitySectionProps) {
  const { language } = useLanguage();
  const t = translations[language];
  
  // Only show for auto executions with explainability data
  if (execution.executionType !== 'auto' || !execution.triggerMetrics) {
    return null;
  }

  const metrics = execution.triggerMetrics;
  const breakdown = execution.confidenceBreakdown || [];
  
  // Determine if threshold was crossed upward or downward
  const crossedUp = metrics.to > metrics.threshold && metrics.from < metrics.threshold;
  const crossedDown = metrics.to < metrics.threshold && metrics.from > metrics.threshold;
  
  return (
    <div className="bg-white border border-mist rounded-lg p-6">
      <h3 className={`${compact ? 'text-base' : 'text-lg'} font-medium text-ink mb-4`}>
        {t.explainability.whyThisActionRan}
      </h3>
      
      <div className="space-y-4">
        {/* Rule That Triggered */}
        {execution.ruleId && (
          <div className="flex items-start justify-between border-b border-mist pb-3">
            <span className="text-sm font-medium text-slate">{t.explainability.triggeredBy}</span>
            <Link 
              href={`/dashboard/rules/${execution.ruleId}`}
              className="text-sm font-semibold text-primary hover:underline"
            >
              {execution.ruleId}
            </Link>
          </div>
        )}
        
        {/* Trigger Metrics */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="text-sm font-medium text-ink mb-1">{metrics.metricName}</p>
              <p className="text-xs text-slate">{t.explainability.metricCrossedThreshold}</p>
            </div>
            <span className={`px-2 py-1 rounded text-xs font-medium ${
              crossedDown 
                ? 'bg-red-100 text-red-700 border border-red-200' 
                : 'bg-green-100 text-green-700 border border-green-200'
            }`}>
              {crossedDown ? '↓' : '↑'} {t.explainability.threshold}
            </span>
          </div>
          
          <div className="grid grid-cols-3 gap-3 text-center">
            <div>
              <p className="text-xs text-slate mb-1">{t.explainability.before}</p>
              <p className="text-lg font-bold text-ink">
                {metrics.from}{metrics.unit || ''}
              </p>
            </div>
            <div className="flex items-center justify-center">
              <svg className="w-5 h-5 text-slate" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-slate mb-1">{t.explainability.after}</p>
              <p className={`text-lg font-bold ${crossedDown ? 'text-red-600' : 'text-green-600'}`}>
                {metrics.to}{metrics.unit || ''}
              </p>
            </div>
          </div>
          
          <div className="mt-3 pt-3 border-t border-blue-200">
            <p className="text-xs text-slate">
              {t.explainability.thresholdValue}: <span className="font-medium text-ink">{metrics.threshold}{metrics.unit || ''}</span>
            </p>
          </div>
        </div>
        
        {/* Evaluation Window & Time */}
        <div className="grid grid-cols-2 gap-4">
          {execution.evaluationWindow && (
            <div>
              <p className="text-xs text-slate mb-1">{t.explainability.evaluationWindow}</p>
              <p className="text-sm font-medium text-ink">{execution.evaluationWindow}</p>
            </div>
          )}
          
          {execution.evaluatedAt && (
            <div>
              <p className="text-xs text-slate mb-1">{t.explainability.evaluatedAt}</p>
              <p className="text-sm font-medium text-ink">
                {new Date(execution.evaluatedAt).toLocaleString(language === 'de' ? 'de-DE' : 'en-US', {
                  month: 'short',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </p>
            </div>
          )}
        </div>
        
        {/* Cooldown Status */}
        {execution.cooldownStatus && (
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate">{t.explainability.cooldownStatus}</span>
            <span className={`px-2 py-1 rounded text-xs font-medium ${
              execution.cooldownStatus === 'expired' 
                ? 'bg-green-100 text-green-700'
                : execution.cooldownStatus === 'active'
                ? 'bg-amber-100 text-amber-700'
                : 'bg-gray-100 text-gray-700'
            }`}>
              {t.explainability.cooldownStatuses[execution.cooldownStatus]}
            </span>
          </div>
        )}
        
        {/* Confidence Breakdown */}
        {breakdown.length > 0 && (
          <div className="border-t border-mist pt-4">
            <p className="text-sm font-medium text-ink mb-3">{t.explainability.confidenceBreakdown}</p>
            <div className="space-y-2">
              {breakdown.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-slate">{item.ruleName}</span>
                      <span className="text-xs font-medium text-ink">{item.contribution}%</span>
                    </div>
                    <div className="w-full bg-smoke rounded-full h-1.5">
                      <div
                        className="bg-signal h-1.5 rounded-full transition-all"
                        style={{ width: `${item.contribution}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Total Confidence */}
            {execution.confidenceScore !== undefined && (
              <div className="mt-3 pt-3 border-t border-mist">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-ink">{t.explainability.totalConfidence}</span>
                  <span className="text-lg font-bold text-signal">{execution.confidenceScore}%</span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      
      {/* Data-Based Disclaimer */}
      <div className="mt-4 bg-gray-50 border border-gray-200 rounded-lg p-3">
        <p className="text-xs text-slate italic">
          {t.explainability.dataBasedExplanation}
        </p>
      </div>
    </div>
  );
}
