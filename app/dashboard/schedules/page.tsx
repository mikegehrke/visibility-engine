'use client';

import RoadmapPlaceholder from '@/components/shared/RoadmapPlaceholder';

export default function SchedulesPage() {
  return (
    <RoadmapPlaceholder 
      titleKey="schedules"
      description="Intelligent scheduling for optimal content timing."
      features={[
        "AI-optimized publishing times",
        "Cross-platform schedule sync",
        "Bulk scheduling capabilities",
        "Timezone-aware scheduling"
      ]}
    />
  );
}
