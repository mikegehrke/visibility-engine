// Phase 12: Rules & Triggers Data Models
// NO automation, NO execution - only structure and mock data

export type RuleSeverity = 'info' | 'warning' | 'critical';

export type RuleMetric = 
  | 'visibilityScore' 
  | 'reach' 
  | 'coverage' 
  | 'clickRate'
  | 'flowConversion'
  | 'channelActivity';

export type RuleOperator = '<' | '>' | '<=' | '>=' | 'change';

export type RuleTimeframe = '7d' | '30d' | '90d';

export type RuleScope = 'signals' | 'distribution' | 'flow';

export interface RuleCondition {
  metric: RuleMetric;
  operator: RuleOperator;
  value: number;
  timeframe: RuleTimeframe;
}

export interface RuleAction {
  label: string;
  descriptionKey: string;
}

export interface Rule {
  id: string;
  titleKey: string;
  descriptionKey: string;
  severity: RuleSeverity;
  condition: RuleCondition;
  action: RuleAction;
  scope: RuleScope;
  enabled: boolean;
}

// Mock Rules - 8 examples across all scopes
export const mockRules: Rule[] = [
  // Signals Rules (3)
  {
    id: 'sig-001',
    titleKey: 'lowVisibilityWarning',
    descriptionKey: 'lowVisibilityWarningDesc',
    severity: 'warning',
    condition: {
      metric: 'visibilityScore',
      operator: '<',
      value: 40,
      timeframe: '7d',
    },
    action: {
      label: 'Show warning',
      descriptionKey: 'showWarningAction',
    },
    scope: 'signals',
    enabled: true,
  },
  {
    id: 'sig-002',
    titleKey: 'reachDeclineAlert',
    descriptionKey: 'reachDeclineAlertDesc',
    severity: 'critical',
    condition: {
      metric: 'reach',
      operator: 'change',
      value: -20,
      timeframe: '30d',
    },
    action: {
      label: 'Send alert',
      descriptionKey: 'sendAlertAction',
    },
    scope: 'signals',
    enabled: true,
  },
  {
    id: 'sig-003',
    titleKey: 'clickRateInfo',
    descriptionKey: 'clickRateInfoDesc',
    severity: 'info',
    condition: {
      metric: 'clickRate',
      operator: '>',
      value: 5,
      timeframe: '7d',
    },
    action: {
      label: 'Show insight',
      descriptionKey: 'showInsightAction',
    },
    scope: 'signals',
    enabled: false,
  },

  // Distribution Rules (3)
  {
    id: 'dist-001',
    titleKey: 'lowCoverageWarning',
    descriptionKey: 'lowCoverageWarningDesc',
    severity: 'warning',
    condition: {
      metric: 'coverage',
      operator: '<',
      value: 30,
      timeframe: '7d',
    },
    action: {
      label: 'Recommend activation',
      descriptionKey: 'recommendActivationAction',
    },
    scope: 'distribution',
    enabled: true,
  },
  {
    id: 'dist-002',
    titleKey: 'channelInactiveAlert',
    descriptionKey: 'channelInactiveAlertDesc',
    severity: 'critical',
    condition: {
      metric: 'channelActivity',
      operator: '<',
      value: 1,
      timeframe: '30d',
    },
    action: {
      label: 'Highlight channel',
      descriptionKey: 'highlightChannelAction',
    },
    scope: 'distribution',
    enabled: true,
  },
  {
    id: 'dist-003',
    titleKey: 'coverageGoodInfo',
    descriptionKey: 'coverageGoodInfoDesc',
    severity: 'info',
    condition: {
      metric: 'coverage',
      operator: '>',
      value: 70,
      timeframe: '7d',
    },
    action: {
      label: 'Show positive feedback',
      descriptionKey: 'showPositiveFeedbackAction',
    },
    scope: 'distribution',
    enabled: true,
  },

  // Flow Rules (2)
  {
    id: 'flow-001',
    titleKey: 'conversionDropWarning',
    descriptionKey: 'conversionDropWarningDesc',
    severity: 'warning',
    condition: {
      metric: 'flowConversion',
      operator: '<',
      value: 50,
      timeframe: '7d',
    },
    action: {
      label: 'Show bottleneck analysis',
      descriptionKey: 'showBottleneckAction',
    },
    scope: 'flow',
    enabled: true,
  },
  {
    id: 'flow-002',
    titleKey: 'flowHealthCritical',
    descriptionKey: 'flowHealthCriticalDesc',
    severity: 'critical',
    condition: {
      metric: 'flowConversion',
      operator: '<',
      value: 30,
      timeframe: '30d',
    },
    action: {
      label: 'Send urgent alert',
      descriptionKey: 'sendUrgentAlertAction',
    },
    scope: 'flow',
    enabled: false,
  },
];
