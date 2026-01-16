'use client';

import { useDashboard } from '@/lib/context/DashboardContext';
import { H2, Body, Small, Stat, Overline } from '@/components/shared/Typography';
import Card, { CardContent } from '@/components/shared/Card';

// Metric icons
const metricIcons = {
  content: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  ),
  campaigns: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
  reach: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>
  ),
  engagement: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
    </svg>
  ),
};

// Stat Card component for dashboard metrics
function StatCard({ 
  label, 
  value, 
  trend,
  trendUp,
  icon
}: { 
  label: string; 
  value: string | number;
  trend?: string;
  trendUp?: boolean;
  icon: React.ReactNode;
}) {
  return (
    <Card variant="elevated" hover className="group">
      <CardContent className="py-5">
        <div className="flex items-start justify-between mb-3">
          <div className="w-10 h-10 rounded-lg bg-signal-muted flex items-center justify-center text-signal transition-transform duration-slow group-hover:scale-105">
            {icon}
          </div>
          {trend && (
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
              trendUp 
                ? 'bg-success-muted text-success' 
                : 'bg-danger-muted text-danger'
            }`}>
              {trendUp ? '↑' : '↓'} {trend}
            </span>
          )}
        </div>
        <Stat className="text-3xl block mb-1">{value}</Stat>
        <Small className="text-slate">{label}</Small>
      </CardContent>
    </Card>
  );
}

export default function DashboardPage() {
  const { currentContext, t } = useDashboard();
  
  const title = currentContext === 'creator' 
    ? t.pages.overview.creator 
    : t.pages.overview.company;

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <Overline className="mb-1 block text-slate">Dashboard</Overline>
        <H2>{title}</H2>
      </div>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Total Content" value="0" icon={metricIcons.content} />
        <StatCard label="Active Campaigns" value="0" icon={metricIcons.campaigns} />
        <StatCard label="Total Reach" value="0" icon={metricIcons.reach} />
        <StatCard label="Engagement Rate" value="—" icon={metricIcons.engagement} />
      </div>

      {/* Quick Actions / Empty State */}
      <Card variant="flat" padding="spacious">
        <CardContent className="text-center py-12">
          <div className="w-12 h-12 rounded-xl bg-signal-muted flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-signal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </div>
          <Body className="text-ink font-medium mb-2">Get started with your first content</Body>
          <Small className="text-slate block max-w-sm mx-auto">
            {t.common.placeholder}
          </Small>
        </CardContent>
      </Card>
    </div>
  );
}
