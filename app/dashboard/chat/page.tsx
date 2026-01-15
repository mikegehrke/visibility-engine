'use client';

import RoadmapPlaceholder from '@/components/shared/RoadmapPlaceholder';

export default function ChatPage() {
  return (
    <RoadmapPlaceholder 
      titleKey="chat"
      description="Real-time communication hub for team collaboration."
      features={[
        "Team messaging and channels",
        "AI-assisted content discussions",
        "Integrated workflow notifications",
        "Cross-platform synchronization"
      ]}
    />
  );
}
