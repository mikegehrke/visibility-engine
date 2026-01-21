'use client';

import Link from 'next/link';
import { useDashboard } from '@/lib/context/DashboardContext';
import { H2, H3, Body, Small, Stat, Overline } from '@/components/shared/Typography';
import Card, { CardContent } from '@/components/shared/Card';
import Button from '@/components/shared/Button';

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
  icon,
  href
}: { 
  label: string; 
  value: string | number;
  trend?: string;
  trendUp?: boolean;
  icon: React.ReactNode;
  href?: string;
}) {
  const content = (
    <Card variant="elevated" hover className="group h-full">
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

  if (href) {
    return <Link href={href} className="block">{content}</Link>;
  }
  return content;
}

// Quick action card
function QuickAction({
  title,
  description,
  icon,
  href,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}) {
  return (
    <Link href={href}>
      <Card variant="outlined" hover className="group h-full">
        <CardContent className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-surface-1 border border-border flex items-center justify-center text-signal flex-shrink-0 transition-all duration-slow group-hover:bg-signal-muted group-hover:border-signal/20">
            {icon}
          </div>
          <div>
            <Body className="font-medium text-ink mb-1 group-hover:text-signal transition-colors duration-slow">{title}</Body>
            <Small className="text-slate">{description}</Small>
          </div>
          <svg className="w-5 h-5 text-slate ml-auto flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </CardContent>
      </Card>
    </Link>
  );
}

export default function DashboardPage() {
  const { currentContext, t } = useDashboard();
  
  const title = currentContext === 'creator' 
    ? t.pages.overview.creator 
    : t.pages.overview.company;

  const quickActions = [
    {
      title: t.dashboardOverview.actions.signalsMetrics.title,
      description: t.dashboardOverview.actions.signalsMetrics.description,
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
      href: '/dashboard/signals',
    },
    {
      title: t.dashboardOverview.actions.automationRules.title,
      description: t.dashboardOverview.actions.automationRules.description,
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        </svg>
      ),
      href: '/dashboard/automation',
    },
    {
      title: t.dashboardOverview.actions.contentFlow.title,
      description: t.dashboardOverview.actions.contentFlow.description,
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
        </svg>
      ),
      href: '/dashboard/flow',
    },
    {
      title: t.dashboardOverview.actions.distribution.title,
      description: t.dashboardOverview.actions.distribution.description,
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
        </svg>
      ),
      href: '/dashboard/distribution',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div>
          <Overline className="mb-1 block text-slate">{t.dashboardOverview.dashboard}</Overline>
          <H2 className="text-xl sm:text-2xl">{title}</H2>
        </div>
        <Link href="/dashboard/settings">
          <Button variant="secondary" size="sm">
            <svg className="w-4 h-4 sm:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
            </svg>
            <span className="hidden sm:inline">{t.dashboardOverview.settings}</span>
          </Button>
        </Link>
      </div>
      
      {/* Stats Grid */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <H3 className="text-base">{t.dashboardOverview.keyMetrics}</H3>
          <Link href="/dashboard/analytics" className="text-sm font-medium text-signal hover:text-signal-hover transition-colors">
            {t.dashboardOverview.viewAllAnalytics} →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard 
            label={t.dashboardOverview.metrics.totalContent}
            value="0" 
            icon={metricIcons.content}
            href="/dashboard/content"
          />
          <StatCard 
            label={t.dashboardOverview.metrics.activeAutomations}
            value="0" 
            icon={metricIcons.campaigns}
            href="/dashboard/automation"
          />
          <StatCard 
            label={t.dashboardOverview.metrics.totalReach}
            value="0" 
            icon={metricIcons.reach}
            href="/dashboard/signals"
          />
          <StatCard 
            label={t.dashboardOverview.metrics.engagementRate}
            value="—" 
            icon={metricIcons.engagement}
            href="/dashboard/signals"
          />
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <H3 className="text-base mb-4">{t.dashboardOverview.quickActions}</H3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {quickActions.map((action, idx) => (
            <QuickAction
              key={idx}
              title={action.title}
              description={action.description}
              icon={action.icon}
              href={action.href}
            />
          ))}
        </div>
      </div>

      {/* Getting Started / Empty State */}
      <Card variant="glass" padding="spacious" className="border border-border">
        <CardContent className="text-center py-8">
          <div className="w-14 h-14 rounded-2xl bg-signal-muted flex items-center justify-center mx-auto mb-5">
            <svg className="w-7 h-7 text-signal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
            </svg>
          </div>
          <Body className="text-ink font-medium mb-2">{t.dashboardOverview.gettingStarted.title}</Body>
          <Small className="text-slate block max-w-md mx-auto mb-6">
            {t.dashboardOverview.gettingStarted.description}
          </Small>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/dashboard/signals">
              <Button variant="primary">
                {t.dashboardOverview.gettingStarted.exploreSignals}
              </Button>
            </Link>
            <Link href="/dashboard/automation">
              <Button variant="secondary">
                {t.dashboardOverview.gettingStarted.setUpAutomation}
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
