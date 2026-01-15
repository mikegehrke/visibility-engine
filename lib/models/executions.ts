// Execution Status Types
export type ExecutionStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled';

// Phase 16A: Execution Type
export type ExecutionType = 'manual' | 'auto';

// Execution Log Model
export interface ExecutionLog {
  id: string;
  actionId: string;
  actionTitleKey: string;
  triggeredBy: string;
  triggeredAt: string; // ISO timestamp
  status: ExecutionStatus;
  resultSummaryKey: string;
  // Phase 16A: Auto Mode fields
  executionType: ExecutionType; // Manual or auto execution
  ruleId?: string; // Rule that triggered auto execution (if executionType === 'auto')
  confidenceScore?: number; // Confidence at execution time (if executionType === 'auto', 0-100)
  explainabilityKey?: string; // Translation key for "why this was automated" (if executionType === 'auto')
}

// Mock Execution Logs (Phase 15A: manual + Phase 16A: auto examples)
export const mockExecutionLogs: ExecutionLog[] = [
  // Manual Executions (Phase 15A)
  {
    id: 'exec-001',
    actionId: 'act-001',
    actionTitleKey: 'showLowVisibilityWarning',
    triggeredBy: 'user@example.com',
    triggeredAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
    status: 'completed',
    resultSummaryKey: 'lowVisibilityWarningExecuted',
    executionType: 'manual',
  },
  {
    id: 'exec-002',
    actionId: 'act-002',
    actionTitleKey: 'sendReachDeclineAlert',
    triggeredBy: 'user@example.com',
    triggeredAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(), // 5 hours ago
    status: 'completed',
    resultSummaryKey: 'reachDeclineAlertExecuted',
    executionType: 'manual',
  },
  // Auto Execution Example (Phase 16A)
  {
    id: 'exec-003',
    actionId: 'act-004',
    actionTitleKey: 'recommendChannelActivation',
    triggeredBy: 'Automation Engine',
    triggeredAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
    status: 'completed',
    resultSummaryKey: 'channelActivationRecommended',
    executionType: 'auto',
    ruleId: 'rule-004',
    confidenceScore: 87,
    explainabilityKey: 'autoExplainHighConfidence',
  },
  {
    id: 'exec-004',
    actionId: 'act-003',
    actionTitleKey: 'displayClickRateInsight',
    triggeredBy: 'user@example.com',
    triggeredAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
    status: 'completed',
    resultSummaryKey: 'clickRateInsightDisplayed',
    executionType: 'manual',
  },
  // Auto Execution Example (Phase 16A)
  {
    id: 'exec-005',
    actionId: 'act-006',
    actionTitleKey: 'prepareBottleneckAnalysis',
    triggeredBy: 'Automation Engine',
    triggeredAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days ago
    status: 'completed',
    resultSummaryKey: 'bottleneckAnalysisPrepared',
    executionType: 'auto',
    ruleId: 'rule-007',
    confidenceScore: 92,
    explainabilityKey: 'autoExplainHighConfidence',
  },
  {
    id: 'exec-006',
    actionId: 'act-005',
    actionTitleKey: 'highlightInactiveChannel',
    triggeredBy: 'user@example.com',
    triggeredAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(), // 4 days ago
    status: 'completed',
    resultSummaryKey: 'inactiveChannelHighlighted',
    executionType: 'manual',
  },
  // Auto Execution Example (Phase 16A - medium confidence)
  {
    id: 'exec-007',
    actionId: 'act-007',
    actionTitleKey: 'showCoveragePositiveFeedback',
    triggeredBy: 'Automation Engine',
    triggeredAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 days ago
    status: 'completed',
    resultSummaryKey: 'coveragePositiveFeedbackShown',
    executionType: 'auto',
    ruleId: 'rule-006',
    confidenceScore: 74,
    explainabilityKey: 'autoExplainMediumConfidence',
  },
  {
    id: 'exec-008',
    actionId: 'act-008',
    actionTitleKey: 'sendFlowHealthUrgentAlert',
    triggeredBy: 'user@example.com',
    triggeredAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(), // 6 days ago
    status: 'completed',
    resultSummaryKey: 'flowHealthAlertSent',
    executionType: 'manual',
  },
];
