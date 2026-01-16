'use client';

import { useDashboard } from '@/lib/context/DashboardContext';
import { H2, Body, Small, Stat, Overline } from '@/components/shared/Typography';
import Card, { CardContent } from '@/components/shared/Card';

// Stat Card component for dashboard metrics
function StatCard({ 
  label, 
  value, 
  trend,
  trendUp 
}: { 
  label: string; 
  value: string | number;
  trend?: string;
  trendUp?: boolean;
}) {
  return (
    <Card variant="elevated" hover className="group">
      <CardContent className="py-5">
        <Small className="text-slate mb-1 block">{label}</Small>
        <div className="flex items-end justify-between mt-2">
          <Stat className="text-3xl">{value}</Stat>
          {trend && (
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full transition-colors ${
              trendUp 
                ? 'bg-success-muted text-success' 
                : 'bg-danger-muted text-danger'
            }`}>
              {trendUp ? '↑' : '↓'} {trend}
            </span>
          )}
        </div>
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
        <StatCard label="Total Content" value="0" />
        <StatCard label="Active Campaigns" value="0" />
        <StatCard label="Total Reach" value="0" />
        <StatCard label="Engagement Rate" value="—" />
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
