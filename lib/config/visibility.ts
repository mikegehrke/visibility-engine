// Static data models for Visibility Engine
// NO real data, NO calculations, NO logic
// Placeholder structure only

export type ChannelStatus = 'inactive' | 'active';
export type TrendDirection = 'up' | 'down' | 'neutral';

export interface Channel {
  id: string;
  name: string;
  description: string;
  status: ChannelStatus;
  coverage?: number; // 0-100 percentage
  icon?: string;
}

export interface Metric {
  id: string;
  name: string;
  description: string;
  value: number | string;
  change?: number; // Percentage change
  trend?: TrendDirection;
  unit?: string;
}

export interface TimeSeriesDataPoint {
  date: string;
  value: number;
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
  itemCount?: number; // Items at this stage
}

// Mock channels (static, client-side only)
export const channels: Channel[] = [
  {
    id: 'website',
    name: 'Website',
    description: 'Your owned web presence',
    status: 'active',
    coverage: 45,
  },
  {
    id: 'social',
    name: 'Social Media',
    description: 'Instagram, LinkedIn, TikTok, X',
    status: 'active',
    coverage: 68,
  },
  {
    id: 'video',
    name: 'Video Platforms',
    description: 'YouTube, Vimeo',
    status: 'inactive',
    coverage: 12,
  },
  {
    id: 'ai-search',
    name: 'AI Search',
    description: 'ChatGPT, Perplexity, SearchGPT',
    status: 'inactive',
    coverage: 8,
  },
];

// Mock metrics (static, client-side only)
export const metrics: Metric[] = [
  {
    id: 'visibility-score',
    name: 'Visibility Score',
    description: 'Overall visibility rating',
    value: 67,
    change: 12,
    trend: 'up',
    unit: 'score',
  },
  {
    id: 'reach',
    name: 'Reach',
    description: 'People who saw your content',
    value: 12400,
    change: -5,
    trend: 'down',
    unit: 'people',
  },
  {
    id: 'clicks',
    name: 'Clicks',
    description: 'Total link clicks',
    value: 892,
    change: 8,
    trend: 'up',
    unit: 'clicks',
  },
  {
    id: 'mentions',
    name: 'Mentions',
    description: 'Brand mentions across channels',
    value: 34,
    change: 0,
    trend: 'neutral',
    unit: 'mentions',
  },
];

// Mock flow steps (static, client-side only)
export const flowSteps: FlowStep[] = [
  {
    id: 'content',
    name: 'Content',
    description: 'Create and optimize your content',
    order: 1,
    itemCount: 24,
  },
  {
    id: 'distribution',
    name: 'Distribution',
    description: 'Publish across channels',
    order: 2,
    itemCount: 18,
  },
  {
    id: 'signals',
    name: 'Signals',
    description: 'Track performance metrics',
    order: 3,
    itemCount: 9,
  },
  {
    id: 'insights',
    name: 'Insights',
    description: 'Learn and improve',
    order: 4,
    itemCount: 3,
  },
];

// Time ranges for signal filtering
export const timeRanges = [
  { id: 'last7days', label: 'Last 7 days' },
  { id: 'last30days', label: 'Last 30 days' },
  { id: 'last90days', label: 'Last 90 days' },
  { id: 'allTime', label: 'All time' },
] as const;

// Mock time series data (static, client-side only)
// Generate mock data for different time ranges
function generateMockTimeSeries(days: number, baseValue: number, variance: number): TimeSeriesDataPoint[] {
  const data: TimeSeriesDataPoint[] = [];
  const today = new Date();
  
  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    const randomVariance = (Math.random() - 0.5) * variance;
    const value = Math.max(0, Math.round(baseValue + randomVariance));
    
    data.push({
      date: date.toISOString().split('T')[0],
      value,
    });
  }
  
  return data;
}

// Visibility Score time series (0-100)
export const visibilityScoreData = {
  last7days: generateMockTimeSeries(7, 67, 10),
  last30days: generateMockTimeSeries(30, 65, 15),
  last90days: generateMockTimeSeries(90, 60, 20),
};

// Reach time series
export const reachData = {
  last7days: generateMockTimeSeries(7, 1800, 300),
  last30days: generateMockTimeSeries(30, 12400, 2000),
  last90days: generateMockTimeSeries(90, 11000, 3000),
};

// Clicks time series
export const clicksData = {
  last7days: generateMockTimeSeries(7, 130, 20),
  last30days: generateMockTimeSeries(30, 892, 150),
  last90days: generateMockTimeSeries(90, 800, 200),
};

// Mentions time series
export const mentionsData = {
  last7days: generateMockTimeSeries(7, 5, 2),
  last30days: generateMockTimeSeries(30, 34, 8),
  last90days: generateMockTimeSeries(90, 30, 10),
};
