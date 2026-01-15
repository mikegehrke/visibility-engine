'use client';

import { useLanguage } from '@/lib/context/LanguageContext';
import { translations } from '@/lib/i18n/translations';
import { mockReports } from '@/lib/models/reports';
import Link from 'next/link';

export default function ReportsPage() {
  const { language } = useLanguage();
  const t = translations[language];

  const getTypeStyles = (type: 'weekly' | 'monthly' | 'custom') => {
    switch (type) {
      case 'weekly':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'monthly':
        return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'custom':
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-ink mb-2">{t.reports.title}</h1>
        <p className="text-slate">{t.reports.subtitle}</p>
      </div>

      {/* Export Notice */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-amber-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-sm font-medium text-amber-800">{t.reports.exportNotice}</p>
        </div>
      </div>

      {/* Reports Grid */}
      <div className="grid grid-cols-1 gap-6">
        {mockReports.map((report) => (
          <div key={report.id} className="bg-white border border-mist rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-lg font-medium text-ink">
                    {t.reports.titles[report.titleKey as keyof typeof t.reports.titles]}
                  </h2>
                  <span className={`px-3 py-1 rounded text-xs font-medium border ${getTypeStyles(report.type)}`}>
                    {t.reports.types[report.type]}
                  </span>
                </div>
                <p className="text-sm text-slate mb-3">
                  {t.reports.period}: {report.periodLabel}
                </p>
                <p className="text-sm text-slate leading-relaxed">
                  {t.reports.summaries[report.summaryKey as keyof typeof t.reports.summaries]}
                </p>
              </div>
            </div>

            {/* Metrics Preview */}
            <div className="grid grid-cols-3 gap-4 mb-4 p-4 bg-gray-50 border border-gray-200 rounded-lg">
              <div>
                <span className="text-xs text-slate block mb-1">Visibility Score</span>
                <span className="text-lg font-semibold text-ink">{report.relatedMetrics.visibilityScore}/100</span>
              </div>
              <div>
                <span className="text-xs text-slate block mb-1">Reach</span>
                <span className="text-lg font-semibold text-ink">{report.relatedMetrics.reach.toLocaleString()}</span>
              </div>
              <div>
                <span className="text-xs text-slate block mb-1">Clicks</span>
                <span className="text-lg font-semibold text-ink">{report.relatedMetrics.clicks.toLocaleString()}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <Link
                href={`/dashboard/reports/${report.id}`}
                className="px-4 py-2 bg-ink text-white rounded-lg text-sm hover:bg-slate transition-colors"
              >
                {t.reports.viewReport}
              </Link>
              <button
                disabled
                className="px-4 py-2 bg-gray-300 text-gray-600 rounded-lg text-sm cursor-not-allowed"
                title={t.reports.previewOnly}
              >
                {t.reports.exportPDF}
              </button>
              <button
                disabled
                className="px-4 py-2 bg-gray-300 text-gray-600 rounded-lg text-sm cursor-not-allowed"
                title={t.reports.previewOnly}
              >
                {t.reports.exportCSV}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
