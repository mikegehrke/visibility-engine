'use client';

import RoadmapPlaceholder from '@/components/shared/RoadmapPlaceholder';

export default function VideoModulePage() {
  return (
    <RoadmapPlaceholder 
      titleKey="videoModule"
      description="Professional video creation and editing tools for your content strategy."
      features={[
        "AI-powered video generation from text",
        "Automated video editing and optimization",
        "Platform-specific video formatting",
        "Video analytics and performance tracking"
      ]}
    />
  );
}
