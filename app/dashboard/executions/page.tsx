'use client';

import { useLanguage } from '@/lib/context/LanguageContext';
import { translations } from '@/lib/i18n/translations';
import { mockExecutionLogs } from '@/lib/models/executions';
import { mockActions } from '@/lib/models/actions';
import Link from 'next/link';

export default function ExecutionsPage() {
  const { language } = useLanguage();
  const t = translations[language];

  // Sort execution logs by triggeredAt (newest first)
  const sortedLogs = [...mockExecutionLogs].sort(
    (a, b) => new Date(b.triggeredAt).getTime() - new Date(a.triggeredAt).getTime()
  );

  const getStatusStyles = (status: 'pending' | 'confirmed' | 'completed' | 'cancelled') => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-700';
      case 'confirmed':
        return 'bg-blue-100 text-blue-700';
      case 'pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'cancelled':
        return 'bg-gray-100 text-gray-700';
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
      <div className="bg-white border border-mist rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-mist">
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
                  {t.execution.status}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate uppercase tracking-wider">
                  {t.execution.result}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-mist">
              {sortedLogs.map((log) => {
                const action = mockActions.find((a) => a.id === log.actionId);
                return (
                  <tr key={log.id} className="hover:bg-gray-50 transition-colors">
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
