'use client';

import { useDashboard } from '@/lib/context/DashboardContext';
import { H2, Body } from '@/components/shared/Typography';
import Card from '@/components/shared/Card';

export default function AnalyticsPage() {
  const { currentContext, t } = useDashboard();
  
  const title = currentContext === 'creator' 
    ? t.pages.analytics.creator 
    : t.pages.analytics.company;

  return (
    <div className="space-y-6">
      <H2>{title}</H2>
      <Card variant="outlined">
        <Body className="text-slate">{t.common.placeholder}</Body>
      </Card>
    </div>
  );
}
