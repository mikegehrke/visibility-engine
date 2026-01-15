'use client';

import { useDashboard } from '@/lib/context/DashboardContext';
import { H2, Body, Small } from '@/components/shared/Typography';
import Card, { CardContent } from '@/components/shared/Card';

export default function DashboardPage() {
  const { currentContext, t } = useDashboard();
  
  const title = currentContext === 'creator' 
    ? t.pages.overview.creator 
    : t.pages.overview.company;

  return (
    <div className="space-y-6">
      <H2>{title}</H2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card variant="elevated">
          <CardContent className="pt-6">
            <div className="text-4xl font-bold mb-2 text-ink">0</div>
            <Small className="text-slate">Total Content</Small>
          </CardContent>
        </Card>
        
        <Card variant="elevated">
          <CardContent className="pt-6">
            <div className="text-4xl font-bold mb-2 text-ink">0</div>
            <Small className="text-slate">Active Campaigns</Small>
          </CardContent>
        </Card>
        
        <Card variant="elevated">
          <CardContent className="pt-6">
            <div className="text-4xl font-bold mb-2 text-ink">0</div>
            <Small className="text-slate">Total Reach</Small>
          </CardContent>
        </Card>
      </div>

      <Card variant="outlined">
        <CardContent className="py-12 text-center">
          <Body className="text-slate">{t.common.placeholder}</Body>
        </CardContent>
      </Card>
    </div>
  );
}
