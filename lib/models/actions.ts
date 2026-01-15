// Phase 13: Actions Preview Layer
// NO execution, NO automation - only simulation and preview

export type ActionType = 'notify' | 'recommend' | 'prepare';

export type ActionTarget = 'dashboard' | 'user' | 'system';

export interface Action {
  id: string;
  titleKey: string;
  descriptionKey: string;
  type: ActionType;
  target: ActionTarget;
  relatedRuleId: string;
  simulatedResultKey: string;
  enabled: boolean;
}

// Mock Actions - 8 examples linked to rules
export const mockActions: Action[] = [
  // Signals Actions (3)
  {
    id: 'act-001',
    titleKey: 'showLowVisibilityWarning',
    descriptionKey: 'showLowVisibilityWarningDesc',
    type: 'notify',
    target: 'dashboard',
    relatedRuleId: 'sig-001',
    simulatedResultKey: 'lowVisibilityWarningSimulation',
    enabled: true,
  },
  {
    id: 'act-002',
    titleKey: 'sendReachDeclineAlert',
    descriptionKey: 'sendReachDeclineAlertDesc',
    type: 'notify',
    target: 'user',
    relatedRuleId: 'sig-002',
    simulatedResultKey: 'reachDeclineAlertSimulation',
    enabled: true,
  },
  {
    id: 'act-003',
    titleKey: 'displayClickRateInsight',
    descriptionKey: 'displayClickRateInsightDesc',
    type: 'recommend',
    target: 'dashboard',
    relatedRuleId: 'sig-003',
    simulatedResultKey: 'clickRateInsightSimulation',
    enabled: false,
  },

  // Distribution Actions (3)
  {
    id: 'act-004',
    titleKey: 'recommendChannelActivation',
    descriptionKey: 'recommendChannelActivationDesc',
    type: 'recommend',
    target: 'dashboard',
    relatedRuleId: 'dist-001',
    simulatedResultKey: 'channelActivationSimulation',
    enabled: true,
  },
  {
    id: 'act-005',
    titleKey: 'highlightInactiveChannel',
    descriptionKey: 'highlightInactiveChannelDesc',
    type: 'notify',
    target: 'dashboard',
    relatedRuleId: 'dist-002',
    simulatedResultKey: 'inactiveChannelSimulation',
    enabled: true,
  },
  {
    id: 'act-006',
    titleKey: 'showCoveragePositiveFeedback',
    descriptionKey: 'showCoveragePositiveFeedbackDesc',
    type: 'notify',
    target: 'user',
    relatedRuleId: 'dist-003',
    simulatedResultKey: 'coveragePositiveSimulation',
    enabled: true,
  },

  // Flow Actions (2)
  {
    id: 'act-007',
    titleKey: 'prepareBottleneckAnalysis',
    descriptionKey: 'prepareBottleneckAnalysisDesc',
    type: 'prepare',
    target: 'system',
    relatedRuleId: 'flow-001',
    simulatedResultKey: 'bottleneckAnalysisSimulation',
    enabled: true,
  },
  {
    id: 'act-008',
    titleKey: 'sendFlowHealthUrgentAlert',
    descriptionKey: 'sendFlowHealthUrgentAlertDesc',
    type: 'notify',
    target: 'user',
    relatedRuleId: 'flow-002',
    simulatedResultKey: 'flowHealthUrgentSimulation',
    enabled: false,
  },
];
