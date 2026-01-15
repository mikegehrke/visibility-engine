// Static data models for Visibility Engine
// NO real data, NO calculations, NO logic
// Placeholder structure only

export type ChannelStatus = 'inactive' | 'active';

export interface Channel {
  id: string;
  name: string;
  description: string;
  status: ChannelStatus;
  icon?: string;
}

export interface Metric {
  id: string;
  name: string;
  description: string;
  value: number | string;
  change?: number; // Percentage change
  unit?: string;
}

export interface Signal {
  id: string;
  metric: string;
  value: number;
  timestamp: string;
}

export interface FlowStep {
  id: string;
  name: string;
  description: string;
  order: number;
}

// Mock channels (static, client-side only)
export const channels: Channel[] = [
  {
    id: 'website',
    name: 'Website',
    description: 'Your owned web presence',
    status: 'inactive',
  },
  {
    id: 'social',
    name: 'Social Media',
    description: 'Instagram, LinkedIn, TikTok, X',
    status: 'inactive',
  },
  {
    id: 'video',
    name: 'Video Platforms',
    description: 'YouTube, Vimeo',
    status: 'inactive',
  },
  {
    id: 'ai-search',
    name: 'AI Search',
    description: 'ChatGPT, Perplexity, SearchGPT',
    status: 'inactive',
  },
];

// Mock metrics (static, client-side only)
export const metrics: Metric[] = [
  {
    id: 'visibility-score',
    name: 'Visibility Score',
    description: 'Overall visibility rating',
    value: '--',
  },
  {
    id: 'reach',
    name: 'Reach',
    description: 'People who saw your content',
    value: '--',
  },
  {
    id: 'clicks',
    name: 'Clicks',
    description: 'Total link clicks',
    value: '--',
  },
  {
    id: 'mentions',
    name: 'Mentions',
    description: 'Brand mentions across channels',
    value: '--',
  },
];

// Mock flow steps (static, client-side only)
export const flowSteps: FlowStep[] = [
  {
    id: 'content',
    name: 'Content',
    description: 'Create and optimize your content',
    order: 1,
  },
  {
    id: 'distribution',
    name: 'Distribution',
    description: 'Publish across channels',
    order: 2,
  },
  {
    id: 'signals',
    name: 'Signals',
    description: 'Track performance metrics',
    order: 3,
  },
  {
    id: 'insights',
    name: 'Insights',
    description: 'Learn and improve',
    order: 4,
  },
];

// Time ranges for signal filtering
export const timeRanges = [
  { id: 'last7days', label: 'Last 7 days' },
  { id: 'last30days', label: 'Last 30 days' },
  { id: 'last90days', label: 'Last 90 days' },
  { id: 'allTime', label: 'All time' },
] as const;
