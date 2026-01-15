'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { translations } from '@/lib/i18n/translations';
import { metrics, timeRanges } from '@/lib/config/visibility';

export default function SignalsPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const [selectedTimeRange, setSelectedTimeRange] = useState('last30days');

  return (
    <div className="space-y-6">
      {/* Header with Time Range Selector */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-ink">{t.signals.title}</h1>
          <p className="text-slate mt-1">{t.signals.subtitle}</p>
        </div>
        
        {/* Time Range Selector */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-slate">{t.signals.timeRange.label}:</span>
          <select
            value={selectedTimeRange}
            onChange={(e) => setSelectedTimeRange(e.target.value)}
            aria-label={t.signals.timeRange.label}
            className="px-3 py-2 bg-white text-ink border border-mist rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-signal"
          >
            {timeRanges.map((range) => (
              <option key={range.id} value={range.id}>
                {t.signals.timeRange[range.id as keyof typeof t.signals.timeRange]}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric) => (
          <div
            key={metric.id}
            className="bg-white border border-mist rounded-lg p-6 space-y-2"
          >
            <div className="flex items-start justify-between">
              <div className="text-sm text-slate">
                {t.signals.metrics[metric.id.replace('-', '') as keyof typeof t.signals.metrics]?.name || metric.name}
              </div>
            </div>
            <div className="text-3xl font-semibold text-ink">{metric.value}</div>
            <div className="text-xs text-slate">
              {t.signals.metrics[metric.id.replace('-', '') as keyof typeof t.signals.metrics]?.description || metric.description}
            </div>
          </div>
        ))}
      </div>

      {/* Chart Placeholder */}
      <div className="bg-white border border-mist rounded-lg p-8">
        <div className="flex flex-col items-center justify-center space-y-3 py-16">
          <div className="w-16 h-16 bg-mist rounded-lg flex items-center justify-center">
            <svg
              className="w-8 h-8 text-slate"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </div>
          <p className="text-slate text-sm">{t.signals.chartPlaceholder}</p>
        </div>
      </div>

      {/* Info Notice */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <p className="text-sm text-amber-900">{t.signals.noData}</p>
      </div>
    </div>
  );
}
