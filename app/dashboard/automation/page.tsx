'use client';

import { useDashboardLanguage } from '@/lib/dashboard/DashboardLanguageContext';

export default function AutomationPage() {
  const { t } = useDashboardLanguage();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold">{t.automation.title}</h1>
      <p className="text-gray-600 mt-1">{t.automation.subtitle}</p>
    </div>
  );
}
