'use client';

import { useLanguage } from '@/lib/context/LanguageContext';
import { translations } from '@/lib/i18n/translations';
import { mockReports, mockExportPreviews } from '@/lib/models/reports';
import { mockRules } from '@/lib/models/rules';
import { mockActions } from '@/lib/models/actions';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function ReportDetailPage({ params }: { params: { id: string } }) {
  const { language } = useLanguage();
  const t = translations[language];

  // Find the report
  const report = mockReports.find((r) => r.id === params.id);

  if (!report) {
    notFound();
  }

  // Find export previews for this report
  const exportPreviews = mockExportPreviews.filter((ep) => ep.reportId === report.id);

  // Find related rules and actions
  const relatedRules = mockRules.filter((rule) => report.relatedRuleIds.includes(rule.id));
  const relatedActions = mockActions.filter((action) => report.relatedActionIds.includes(action.id));

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
      {/* Back Link */}
      <Link
        href="/dashboard/reports"
        className="inline-flex items-center text-sm text-slate hover:text-ink transition-colors"
      >
        ← {t.reports.allReports}
      </Link>

      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-2xl font-semibold text-ink">
            {t.reports.titles[report.titleKey as keyof typeof t.reports.titles]}
          </h1>
          <span className={`px-3 py-1 rounded text-sm font-medium border ${getTypeStyles(report.type)}`}>
            {t.reports.types[report.type]}
          </span>
        </div>
        <p className="text-slate">
          {t.reports.period}: {report.periodLabel}
        </p>
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

      {/* Executive Summary */}
      <div className="bg-white border border-mist rounded-lg p-6">
        <h2 className="text-lg font-medium text-ink mb-4">{t.reports.summary}</h2>
        <p className="text-slate leading-relaxed">
          {t.reports.summaries[report.summaryKey as keyof typeof t.reports.summaries]}
        </p>
      </div>

      {/* Key Highlights */}
      <div className="bg-white border border-mist rounded-lg p-6">
        <h2 className="text-lg font-medium text-ink mb-4">Key Highlights</h2>
        <ul className="space-y-2">
          {report.highlightKeys.map((key, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <svg className="w-5 h-5 text-green-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm text-slate">
                {t.reports.highlights[key as keyof typeof t.reports.highlights]}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Metrics Overview */}
      <div className="bg-white border border-mist rounded-lg p-6">
        <h2 className="text-lg font-medium text-ink mb-4">{t.reports.metrics}</h2>
        <div className="grid grid-cols-3 gap-6">
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <span className="text-sm text-blue-700 block mb-1">Visibility Score</span>
            <span className="text-2xl font-semibold text-blue-900">{report.relatedMetrics.visibilityScore}/100</span>
          </div>
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <span className="text-sm text-green-700 block mb-1">Reach</span>
            <span className="text-2xl font-semibold text-green-900">{report.relatedMetrics.reach.toLocaleString()}</span>
          </div>
          <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
            <span className="text-sm text-purple-700 block mb-1">Clicks</span>
            <span className="text-2xl font-semibold text-purple-900">{report.relatedMetrics.clicks.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Related Rules */}
      {relatedRules.length > 0 && (
        <div className="bg-white border border-mist rounded-lg p-6">
          <h2 className="text-lg font-medium text-ink mb-4">{t.reports.relatedRules}</h2>
          <div className="space-y-3">
            {relatedRules.map((rule) => (
              <Link
                key={rule.id}
                href={`/dashboard/rules/${rule.id}`}
                className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div>
                  <span className="font-medium text-ink block">
                    {t.rules.titles[rule.titleKey as keyof typeof t.rules.titles]}
                  </span>
                  <span className="text-sm text-slate">
                    {t.rules.scopes[rule.scope]}
                  </span>
                </div>
                <svg className="w-5 h-5 text-slate" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Related Actions */}
      {relatedActions.length > 0 && (
        <div className="bg-white border border-mist rounded-lg p-6">
          <h2 className="text-lg font-medium text-ink mb-4">{t.reports.relatedActions}</h2>
          <div className="space-y-3">
            {relatedActions.map((action) => (
              <Link
                key={action.id}
                href={`/dashboard/actions/${action.id}`}
                className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div>
                  <span className="font-medium text-ink block">
                    {t.actions.titles[action.titleKey as keyof typeof t.actions.titles]}
                  </span>
                  <span className="text-sm text-slate">
                    {t.actions.types[action.type]}
                  </span>
                </div>
                <svg className="w-5 h-5 text-slate" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Export Preview Section */}
      <div className="bg-white border border-mist rounded-lg p-6">
        <h2 className="text-lg font-medium text-ink mb-4">{t.reports.exportPreview}</h2>
        <div className="grid grid-cols-2 gap-4 mb-4">
          {exportPreviews.map((preview) => (
            <div key={preview.format} className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5 text-slate" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span className="font-medium text-ink uppercase">{preview.format}</span>
              </div>
              <p className="text-sm text-slate mb-3">
                {preview.format === 'pdf' ? t.reports.pdfExportDescription : t.reports.csvExportDescription}
              </p>
              <button
                disabled
                className="w-full px-4 py-2 bg-gray-300 text-gray-600 rounded-lg text-sm cursor-not-allowed"
                title={t.reports.previewOnly}
              >
                {preview.format === 'pdf' ? t.reports.exportPDF : t.reports.exportCSV}
              </button>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate text-center">{t.reports.previewOnly}</p>
      </div>
    </div>
  );
}
