'use client';

import { useDashboard } from '@/lib/context/DashboardContext';
import { H2, Body } from '@/components/shared/Typography';
import Card from '@/components/shared/Card';

export default function ImageModulePage() {
  const { t } = useDashboard();

  return (
    <div className="space-y-6">
      <H2>{t.nav.imageModule}</H2>
      <Card variant="outlined">
        <Body className="text-slate">{t.common.placeholder}</Body>
      </Card>
    </div>
  );
}
