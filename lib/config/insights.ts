// Insights Layer - Derived meaning from metrics
// NO real calculations, NO AI, NO APIs
// Static interpretation only

export type InsightSeverity = 'info' | 'warning' | 'positive';

export interface Insight {
  id: string;
  titleKey: string; // Translation key
  descriptionKey: string; // Translation key
  severity: InsightSeverity;
  relatedMetric?: string;
  icon?: string;
}

export interface ChannelRecommendation {
  channelId: string;
  type: 'activate' | 'optimize' | 'performing';
  messageKey: string; // Translation key
}

export interface FlowBottleneck {
  fromStep: string;
  toStep: string;
  dropPercentage: number;
  messageKey: string; // Translation key
}

// Mock insights derived from current metrics state
export const currentInsights: Insight[] = [
  {
    id: 'visibility-score-increase',
    titleKey: 'visibilityScoreIncrease',
    descriptionKey: 'visibilityScoreIncreaseDesc',
    severity: 'positive',
    relatedMetric: 'visibility-score',
  },
  {
    id: 'reach-decline',
    titleKey: 'reachDecline',
    descriptionKey: 'reachDeclineDesc',
    severity: 'warning',
    relatedMetric: 'reach',
  },
  {
    id: 'click-performance',
    titleKey: 'clickPerformance',
    descriptionKey: 'clickPerformanceDesc',
    severity: 'positive',
    relatedMetric: 'clicks',
  },
  {
    id: 'social-opportunity',
    titleKey: 'socialOpportunity',
    descriptionKey: 'socialOpportunityDesc',
    severity: 'info',
  },
];

// Mock channel recommendations
export const channelRecommendations: ChannelRecommendation[] = [
  {
    channelId: 'website',
    type: 'optimize',
    messageKey: 'websiteOptimize',
  },
  {
    channelId: 'social',
    type: 'performing',
    messageKey: 'socialPerforming',
  },
  {
    channelId: 'video',
    type: 'activate',
    messageKey: 'videoActivate',
  },
  {
    channelId: 'ai-search',
    type: 'activate',
    messageKey: 'aiSearchActivate',
  },
];

// Mock flow bottleneck analysis
export const flowBottlenecks: FlowBottleneck[] = [
  {
    fromStep: 'distribution',
    toStep: 'signals',
    dropPercentage: 50,
    messageKey: 'distributionToSignalsDrop',
  },
  {
    fromStep: 'signals',
    toStep: 'insights',
    dropPercentage: 67,
    messageKey: 'signalsToInsightsDrop',
  },
];
