'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { useDashboard } from '@/lib/context/DashboardContext';
import { H2, H3, Body, Small, Stat, Overline } from '@/components/shared/Typography';
import Card, { CardContent, CardHeader, CardTitle } from '@/components/shared/Card';

// Dynamic imports for Recharts to avoid SSR issues
const AreaChart = dynamic(
  () => import('recharts').then((mod) => mod.AreaChart),
  { ssr: false }
);
const Area = dynamic(
  () => import('recharts').then((mod) => mod.Area),
  { ssr: false }
);
const BarChart = dynamic(
  () => import('recharts').then((mod) => mod.BarChart),
  { ssr: false }
);
const Bar = dynamic(
  () => import('recharts').then((mod) => mod.Bar),
  { ssr: false }
);
const XAxis = dynamic(
  () => import('recharts').then((mod) => mod.XAxis),
  { ssr: false }
);
const YAxis = dynamic(
  () => import('recharts').then((mod) => mod.YAxis),
  { ssr: false }
);
const Tooltip = dynamic(
  () => import('recharts').then((mod) => mod.Tooltip),
  { ssr: false }
);
const ResponsiveContainer = dynamic(
  () => import('recharts').then((mod) => mod.ResponsiveContainer),
  { ssr: false }
);

// Sample data for charts
const trafficData = [
  { name: 'Mon', views: 2400, visitors: 1800 },
  { name: 'Tue', views: 1398, visitors: 980 },
  { name: 'Wed', views: 9800, visitors: 6800 },
  { name: 'Thu', views: 3908, visitors: 2800 },
  { name: 'Fri', views: 4800, visitors: 3200 },
  { name: 'Sat', views: 3800, visitors: 2400 },
  { name: 'Sun', views: 4300, visitors: 2900 },
];

const channelData = [
  { name: 'LinkedIn', value: 4500 },
  { name: 'Twitter/X', value: 3200 },
  { name: 'Organic', value: 2800 },
  { name: 'Direct', value: 1800 },
  { name: 'Email', value: 1200 },
];

const contentPerformance = [
  { 
    title: 'How AI is Transforming Content Strategy',
    views: 12400,
    engagement: '8.2%',
    trend: '+23%',
  },
  { 
    title: 'The Complete Guide to Visibility Metrics',
    views: 8900,
    engagement: '6.5%',
    trend: '+18%',
  },
  { 
    title: '2024 Social Media Trends Report',
    views: 7200,
    engagement: '5.8%',
    trend: '+12%',
  },
  { 
    title: 'Building an Automation-First Workflow',
    views: 5400,
    engagement: '7.1%',
    trend: '+8%',
  },
];

// Time range options
const timeRanges = [
  { label: '7 Days', value: '7d' },
  { label: '30 Days', value: '30d' },
  { label: '90 Days', value: '90d' },
  { label: 'Year', value: '1y' },
];

// Chart colors - use actual hex values because Recharts SVG elements can't resolve CSS variables
const chartColors = {
  signal: '#60A5FA', // blue-400 (dark mode signal color)
  signalLight: 'rgba(96, 165, 250, 0.3)',
  signalFaded: 'rgba(96, 165, 250, 0.15)',
  slate: '#A1A1AA', // zinc-400
  ink: '#FAFAFA', // zinc-50
  surface: '#0F0F11',
  border: '#27272A',
};

// Stat Card
function MetricCard({
  label,
  value,
  change,
  changeUp,
}: {
  label: string;
  value: string;
  change: string;
  changeUp: boolean;
}) {
  return (
    <Card variant="elevated">
      <CardContent className="py-4">
        <Small className="text-slate mb-1 block">{label}</Small>
        <Stat className="text-2xl block mb-1">{value}</Stat>
        <span className={`text-xs font-medium ${changeUp ? 'text-success' : 'text-danger'}`}>
          {changeUp ? '↑' : '↓'} {change} vs last period
        </span>
      </CardContent>
    </Card>
  );
}

export default function AnalyticsPage() {
  const { currentContext, t } = useDashboard();
  const [timeRange, setTimeRange] = useState('30d');
  
  const title = currentContext === 'creator' 
    ? t.pages.analytics.creator 
    : t.pages.analytics.company;

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-start justify-between">
        <div>
          <Overline className="mb-1 block text-slate">Insights</Overline>
          <H2>{title}</H2>
        </div>
        <div className="flex gap-1 p-1 bg-surface-1 rounded-lg border border-border">
          {timeRanges.map((range) => (
            <button
              key={range.value}
              onClick={() => setTimeRange(range.value)}
              className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors duration-fast ${
                timeRange === range.value
                  ? 'bg-surface-0 shadow-sm text-ink'
                  : 'text-slate hover:text-ink'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard label="Total Views" value="32.4K" change="12%" changeUp={true} />
        <MetricCard label="Unique Visitors" value="18.2K" change="8%" changeUp={true} />
        <MetricCard label="Avg. Engagement" value="6.8%" change="3%" changeUp={true} />
        <MetricCard label="Conversion Rate" value="2.4%" change="1%" changeUp={false} />
      </div>

      {/* Traffic Chart */}
      <Card variant="elevated">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Traffic Overview</CardTitle>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-signal" />
                <Small className="text-slate">Page Views</Small>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-signal/40" />
                <Small className="text-slate">Visitors</Small>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trafficData}>
                <defs>
                  <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={chartColors.signal} stopOpacity={0.3} />
                    <stop offset="95%" stopColor={chartColors.signal} stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={chartColors.signal} stopOpacity={0.15} />
                    <stop offset="95%" stopColor={chartColors.signal} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis 
                  dataKey="name" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: chartColors.slate, fontSize: 12 }}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: chartColors.slate, fontSize: 12 }}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: chartColors.surface,
                    border: `1px solid ${chartColors.border}`,
                    borderRadius: '8px',
                    color: chartColors.ink,
                  }}
                  labelStyle={{ color: chartColors.ink }}
                />
                <Area
                  type="monotone"
                  dataKey="views"
                  stroke={chartColors.signal}
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorViews)"
                />
                <Area
                  type="monotone"
                  dataKey="visitors"
                  stroke={chartColors.signal}
                  strokeWidth={2}
                  strokeOpacity={0.5}
                  fillOpacity={1}
                  fill="url(#colorVisitors)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Channel Breakdown */}
        <Card variant="elevated">
          <CardHeader>
            <CardTitle>Traffic by Channel</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={channelData} layout="vertical">
                  <XAxis 
                    type="number"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: chartColors.slate, fontSize: 12 }}
                  />
                  <YAxis 
                    type="category"
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: chartColors.ink, fontSize: 12 }}
                    width={80}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: chartColors.surface,
                      border: `1px solid ${chartColors.border}`,
                      borderRadius: '8px',
                      color: chartColors.ink,
                    }}
                    labelStyle={{ color: chartColors.ink }}
                  />
                  <Bar 
                    dataKey="value" 
                    fill={chartColors.signal}
                    radius={[0, 4, 4, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Top Content */}
        <Card variant="elevated">
          <CardHeader>
            <CardTitle>Top Performing Content</CardTitle>
          </CardHeader>
          <CardContent className="divide-y divide-border">
            {contentPerformance.map((content, idx) => (
              <div key={idx} className="py-3 first:pt-0 last:pb-0">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <Body className="font-medium text-ink truncate">{content.title}</Body>
                    <div className="flex items-center gap-4 mt-1">
                      <Small className="text-slate">{content.views.toLocaleString()} views</Small>
                      <Small className="text-slate">{content.engagement} engagement</Small>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-success bg-success-muted px-2 py-0.5 rounded-full">
                    {content.trend}
                  </span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Insights Card */}
      <Card variant="glass" className="border border-signal/20">
        <CardContent className="py-5">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-signal-muted flex items-center justify-center text-signal flex-shrink-0">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
              </svg>
            </div>
            <div>
              <H3 className="text-base mb-1">AI-Powered Insight</H3>
              <Body className="text-slate">
                Your LinkedIn content is performing 43% better than other channels. Consider increasing 
                your posting frequency on this platform and repurposing top-performing content for maximum reach.
              </Body>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
