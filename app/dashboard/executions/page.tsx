'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { translations } from '@/lib/i18n/translations';
import { mockExecutionLogs } from '@/lib/models/executions';
import { mockActions } from '@/lib/models/actions';
import { canRollback, performRollback } from '@/lib/models/rollback';
import Link from 'next/link';

export default function ExecutionsPage() {
  const { language } = useLanguage();
  const t = translations[language];

  // Phase 16B: Rollback state
  const [confirmRollbackId, setConfirmRollbackId] = useState<string | null>(null);
  const [rolledBackIds, setRolledBackIds] = useState<Set<string>>(new Set());

  // Sort execution logs by triggeredAt (newest first)
  const sortedLogs = [...mockExecutionLogs].sort(
    (a, b) => new Date(b.triggeredAt).getTime() - new Date(a.triggeredAt).getTime()
  );

  const handleRollback = (logId: string, actionId: string) => {
    const log = mockExecutionLogs.find((l) => l.id === logId);
    if (!log) return;

    const result = performRollback(actionId, log.triggeredAt);
    if (result.success) {
      setRolledBackIds(new Set([...rolledBackIds, logId]));
      setConfirmRollbackId(null);
      // In production: API call to reverse action & create rollback log
      console.log('Rollback successful:', result);
    }
  };

  const getStatusStyles = (status: 'pending' | 'confirmed' | 'completed' | 'cancelled' | 'rolled_back') => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-700';
      case 'confirmed':
        return 'bg-blue-100 text-blue-700';
      case 'pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'cancelled':
        return 'bg-gray-100 text-gray-700';
      case 'rolled_back':
        return 'bg-red-100 text-red-700';
    }
  };

  const formatDate = (isoDate: string) => {
    const date = new Date(isoDate);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffHours / 24);

    if (diffHours < 1) {
      return 'Just now';
    } else if (diffHours < 24) {
      return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    } else if (diffDays < 7) {
      return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
    } else {
      return date.toLocaleDateString(language === 'de' ? 'de-DE' : 'en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-ink mb-2">{t.execution.title}</h1>
        <p className="text-slate">{t.execution.subtitle}</p>
      </div>

      {/* Simulation Notice */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-amber-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <p className="text-sm font-medium text-amber-800">{t.execution.simulationNotice}</p>
            <p className="text-xs text-amber-700 mt-1">{t.execution.noAutoMode}</p>
          </div>
        </div>
      </div>

      {/* Execution Log Table */}
      <div className="bg-canvas border border-border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-border">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate uppercase tracking-wider">
                  {t.execution.action}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate uppercase tracking-wider">
                  {t.execution.triggeredBy}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate uppercase tracking-wider">
                  {t.execution.triggeredAt}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate uppercase tracking-wider">
                  {t.execution.status}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate uppercase tracking-wider">
                  {t.execution.result}
                </th>
                {/* Phase 16B: Rollback column */}
                <th className="px-6 py-3 text-left text-xs font-medium text-slate uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-mist">
              {sortedLogs.map((log) => {
                const action = mockActions.find((a) => a.id === log.actionId);
                const isRollbackable = canRollback(log.actionId, log.triggeredAt);
                const isRolledBack = rolledBackIds.has(log.id) || log.status === 'rolled_back';
                const showConfirmDialog = confirmRollbackId === log.id;
                
                return (
                  <tr key={log.id} className="hover:bg-surface-1 transition-colors">
                    <td className="px-6 py-4">
                      <Link
                        href={`/dashboard/actions/${log.actionId}`}
                        className="text-sm font-medium text-ink hover:text-signal transition-colors"
                      >
                        {action && t.actions.titles[action.titleKey as keyof typeof t.actions.titles]}
                      </Link>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-slate">{log.triggeredBy}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-slate">{formatDate(log.triggeredAt)}</span>
                    </td>
                    {/* Phase 16A: Execution Type */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          log.executionType === 'auto' 
                            ? 'bg-purple-100 text-purple-700 border border-purple-200' 
                            : 'bg-gray-100 text-gray-700 border border-gray-200'
                        }`}>
                          {t.autoMode.executionTypes[log.executionType]}
                        </span>
                        {log.executionType === 'auto' && log.confidenceScore !== undefined && (
                          <span className="text-xs text-slate group relative cursor-help" title={t.autoMode.whyExecuted}>
                            <svg className="w-4 h-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {/* Tooltip */}
                            <div className="hidden group-hover:block absolute z-10 w-64 p-3 bg-canvas border border-border rounded-lg shadow-lg -top-2 left-6">
                              <div className="text-xs space-y-1">
                                <p className="font-medium text-ink">{t.autoMode.whyExecuted}</p>
                                {log.ruleId && (
                                  <p className="text-slate">
                                    {t.autoMode.triggeredByRule}: <span className="font-mono">{log.ruleId}</span>
                                  </p>
                                )}
                                <p className="text-slate">
                                  {t.autoMode.confidenceScore}: <span className="font-medium">{log.confidenceScore}%</span>
                                </p>
                                {log.explainabilityKey && (
                                  <p className="text-slate mt-2 italic">
                                    {t.autoMode.explainability[log.explainabilityKey as keyof typeof t.autoMode.explainability]}
                                  </p>
                                )}
                              </div>
                            </div>
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusStyles(log.status)}`}>
                        {t.execution.statuses[log.status]}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-slate">
                        {t.execution.results[log.resultSummaryKey as keyof typeof t.execution.results]}
                      </span>
                    </td>
                    {/* Phase 16B: Rollback Button */}
                    <td className="px-6 py-4">
                      {isRolledBack ? (
                        <span className="px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-600 border border-gray-200">
                          {t.rollback.success}
                        </span>
                      ) : isRollbackable ? (
                        <div className="relative">
                          <button
                            onClick={() => setConfirmRollbackId(log.id)}
                            className="px-3 py-1 rounded text-xs font-medium bg-red-50 text-red-700 border border-red-200 hover:bg-red-100 transition-colors"
                          >
                            {t.rollback.undoAction}
                          </button>
                          {/* Confirm Dialog */}
                          {showConfirmDialog && (
                            <div className="absolute z-20 right-0 top-8 w-64 bg-canvas border border-border rounded-lg shadow-lg p-4">
                              <p className="text-sm font-medium text-ink mb-2">{t.rollback.confirmUndo}</p>
                              <p className="text-xs text-slate mb-3">{t.rollback.confirmMessage}</p>
                              <div className="flex gap-2">
                                <button
                                  onClick={() => setConfirmRollbackId(null)}
                                  className="flex-1 px-3 py-1.5 text-xs font-medium text-slate border border-border rounded hover:bg-surface-1"
                                >
                                  {t.rollback.cancel}
                                </button>
                                <button
                                  onClick={() => handleRollback(log.id, log.actionId)}
                                  className="flex-1 px-3 py-1.5 text-xs font-medium text-white bg-red-600 rounded hover:bg-red-700"
                                >
                                  {t.rollback.confirm}
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      ) : (
                        <span className="text-xs text-slate">—</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Info Notice */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <p className="text-sm font-medium text-blue-800">
              This log contains simulated execution records only
            </p>
            <p className="text-xs text-blue-700 mt-1">
              All actions shown were manually triggered and executed in simulation mode. No real changes were made to external systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
