'use client';

import RoadmapPlaceholder from '@/components/shared/RoadmapPlaceholder';

export default function AgentHistoryPage() {
  return (
    <RoadmapPlaceholder 
      titleKey="agentHistory"
      description="Complete history of all AI agent activities."
      features={[
        "Full audit trail",
        "Activity timeline visualization",
        "Search and filter capabilities",
        "Export and compliance reports"
      ]}
    />
  );
}
