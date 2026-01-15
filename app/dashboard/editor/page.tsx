'use client';

import RoadmapPlaceholder from '@/components/shared/RoadmapPlaceholder';

export default function EditorPage() {
  return (
    <RoadmapPlaceholder 
      titleKey="editor"
      description="Professional content editor with AI-powered assistance."
      features={[
        "Rich text editing with formatting",
        "AI writing assistance and suggestions",
        "Real-time collaboration",
        "Version history and drafts"
      ]}
    />
  );
}
