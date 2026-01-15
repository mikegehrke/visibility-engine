// Execution Status Types
export type ExecutionStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled';

// Execution Log Model
export interface ExecutionLog {
  id: string;
  actionId: string;
  actionTitleKey: string;
  triggeredBy: string;
  triggeredAt: string; // ISO timestamp
  status: ExecutionStatus;
  resultSummaryKey: string;
}

// Mock Execution Logs (all are simulations)
export const mockExecutionLogs: ExecutionLog[] = [
  {
    id: 'exec-001',
    actionId: 'act-001',
    actionTitleKey: 'showLowVisibilityWarning',
    triggeredBy: 'user@example.com',
    triggeredAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
    status: 'completed',
    resultSummaryKey: 'lowVisibilityWarningExecuted',
  },
  {
    id: 'exec-002',
    actionId: 'act-002',
    actionTitleKey: 'sendReachDeclineAlert',
    triggeredBy: 'user@example.com',
    triggeredAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(), // 5 hours ago
    status: 'completed',
    resultSummaryKey: 'reachDeclineAlertExecuted',
  },
  {
    id: 'exec-003',
    actionId: 'act-004',
    actionTitleKey: 'recommendChannelActivation',
    triggeredBy: 'user@example.com',
    triggeredAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
    status: 'completed',
    resultSummaryKey: 'channelActivationRecommended',
  },
  {
    id: 'exec-004',
    actionId: 'act-003',
    actionTitleKey: 'displayClickRateInsight',
    triggeredBy: 'user@example.com',
    triggeredAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
    status: 'completed',
    resultSummaryKey: 'clickRateInsightDisplayed',
  },
  {
    id: 'exec-005',
    actionId: 'act-006',
    actionTitleKey: 'prepareBottleneckAnalysis',
    triggeredBy: 'user@example.com',
    triggeredAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days ago
    status: 'completed',
    resultSummaryKey: 'bottleneckAnalysisPrepared',
  },
  {
    id: 'exec-006',
    actionId: 'act-005',
    actionTitleKey: 'highlightInactiveChannel',
    triggeredBy: 'user@example.com',
    triggeredAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(), // 4 days ago
    status: 'completed',
    resultSummaryKey: 'inactiveChannelHighlighted',
  },
  {
    id: 'exec-007',
    actionId: 'act-007',
    actionTitleKey: 'showCoveragePositiveFeedback',
    triggeredBy: 'user@example.com',
    triggeredAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 days ago
    status: 'completed',
    resultSummaryKey: 'coveragePositiveFeedbackShown',
  },
  {
    id: 'exec-008',
    actionId: 'act-008',
    actionTitleKey: 'sendFlowHealthUrgentAlert',
    triggeredBy: 'user@example.com',
    triggeredAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(), // 6 days ago
    status: 'completed',
    resultSummaryKey: 'flowHealthAlertSent',
  },
];
