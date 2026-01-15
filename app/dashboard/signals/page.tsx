'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { useLanguage } from '@/lib/context/LanguageContext';
import { translations } from '@/lib/i18n/translations';
import { 
  metrics, 
  timeRanges, 
  visibilityScoreData, 
  reachData,
  type TimeSeriesDataPoint 
} from '@/lib/config/visibility';

// Dynamic import for recharts to avoid SSR issues
const LineChart = dynamic(() => import('recharts').then(mod => mod.LineChart), { ssr: false });
const Line = dynamic(() => import('recharts').then(mod => mod.Line), { ssr: false });
const BarChart = dynamic(() => import('recharts').then(mod => mod.BarChart), { ssr: false });
const Bar = dynamic(() => import('recharts').then(mod => mod.Bar), { ssr: false });
const XAxis = dynamic(() => import('recharts').then(mod => mod.XAxis), { ssr: false });
const YAxis = dynamic(() => import('recharts').then(mod => mod.YAxis), { ssr: false });
const CartesianGrid = dynamic(() => import('recharts').then(mod => mod.CartesianGrid), { ssr: false });
const Tooltip = dynamic(() => import('recharts').then(mod => mod.Tooltip), { ssr: false });
const ResponsiveContainer = dynamic(() => import('recharts').then(mod => mod.ResponsiveContainer), { ssr: false });

type TimeRangeId = 'last7days' | 'last30days' | 'last90days';

export default function SignalsPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const [selectedTimeRange, setSelectedTimeRange] = useState<TimeRangeId>('last30days');

  // Get chart data based on selected time range
  const scoreChartData = visibilityScoreData[selectedTimeRange];
  const reachChartData = reachData[selectedTimeRange];

  // Trend icon component
  const TrendIcon = ({ trend }: { trend: 'up' | 'down' | 'neutral' }) => {
    if (trend === 'up') {
      return (
        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      );
    }
    if (trend === 'down') {
      return (
        <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
        </svg>
      );
    }
    return (
      <svg className="w-4 h-4 text-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14" />
      </svg>
    );
  };

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
            onChange={(e) => setSelectedTimeRange(e.target.value as TimeRangeId)}
            aria-label={t.signals.timeRange.label}
            className="px-3 py-2 bg-white text-ink border border-mist rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-signal"
          >
            {timeRanges.slice(0, 3).map((range) => (
              <option key={range.id} value={range.id}>
                {t.signals.timeRange[range.id as keyof typeof t.signals.timeRange]}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric) => {
          const change = metric.change || 0;
          const trend = metric.trend || 'neutral';
          
          return (
            <div
              key={metric.id}
              className="bg-white border border-mist rounded-lg p-6 space-y-3"
            >
              <div className="flex items-start justify-between">
                <div className="text-sm text-slate">
                  {t.signals.metrics[metric.id.replace('-', '') as keyof typeof t.signals.metrics]?.name || metric.name}
                </div>
                <TrendIcon trend={trend} />
              </div>
              
              <div className="text-3xl font-semibold text-ink">
                {typeof metric.value === 'number' ? metric.value.toLocaleString() : metric.value}
              </div>
              
              <div className="flex items-center justify-between">
                <div className="text-xs text-slate">
                  {t.signals.metrics[metric.id.replace('-', '') as keyof typeof t.signals.metrics]?.description || metric.description}
                </div>
                {change !== 0 && (
                  <div className={`text-xs font-medium ${change > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {change > 0 ? '+' : ''}{change}%
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Visibility Score Line Chart */}
        <div className="bg-white border border-mist rounded-lg p-6">
          <h3 className="text-lg font-medium text-ink mb-4">
            {t.signals.metrics.visibilityScore.name}
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={scoreChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis 
                dataKey="date" 
                stroke="#64748B"
                tick={{ fontSize: 12 }}
                tickFormatter={(value) => {
                  const date = new Date(value);
                  return `${date.getMonth() + 1}/${date.getDate()}`;
                }}
              />
              <YAxis stroke="#64748B" tick={{ fontSize: 12 }} domain={[0, 100]} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fff', 
                  border: '1px solid #E5E7EB',
                  borderRadius: '8px'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#6366F1" 
                strokeWidth={2}
                dot={{ fill: '#6366F1', r: 3 }}
                activeDot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Reach Bar Chart */}
        <div className="bg-white border border-mist rounded-lg p-6">
          <h3 className="text-lg font-medium text-ink mb-4">
            {t.signals.metrics.reach.name}
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={reachChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis 
                dataKey="date" 
                stroke="#64748B"
                tick={{ fontSize: 12 }}
                tickFormatter={(value) => {
                  const date = new Date(value);
                  return `${date.getMonth() + 1}/${date.getDate()}`;
                }}
              />
              <YAxis stroke="#64748B" tick={{ fontSize: 12 }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fff', 
                  border: '1px solid #E5E7EB',
                  borderRadius: '8px'
                }}
              />
              <Bar dataKey="value" fill="#10B981" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
