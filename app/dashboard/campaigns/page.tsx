'use client';

import RoadmapPlaceholder from '@/components/shared/RoadmapPlaceholder';

export default function CampaignsPage() {
  return (
    <RoadmapPlaceholder 
      titleKey="campaigns"
      description="Strategic campaign management for coordinated content launches."
      features={[
        "Multi-platform campaign orchestration",
        "Campaign timeline and milestones",
        "Budget and resource tracking",
        "Campaign performance analytics"
      ]}
    />
  );
}
