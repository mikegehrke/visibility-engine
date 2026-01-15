'use client';

import RoadmapPlaceholder from '@/components/shared/RoadmapPlaceholder';

export default function NotificationsPage() {
  return (
    <RoadmapPlaceholder 
      titleKey="notifications"
      description="Centralized notification management for staying informed."
      features={[
        "Real-time alerts and updates",
        "Customizable notification preferences",
        "Priority-based notification filtering",
        "Cross-device synchronization"
      ]}
    />
  );
}
