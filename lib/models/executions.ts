// Execution Status Types
export type ExecutionStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled';

// Phase 16A: Execution Type
export type ExecutionType = 'manual' | 'auto';

// Phase 16B: Trigger Metrics (before/after/threshold)
export interface TriggerMetrics {
  metricName: string; // e.g., "visibilityScore", "reachRate"
  from: number; // Value before trigger
  to: number; // Value at trigger
  threshold: number; // Threshold that was crossed
  unit?: string; // e.g., "%", "points"
}

// Phase 16B: Confidence Breakdown
export interface ConfidenceBreakdown {
  ruleName: string;
  ruleId: string;
  contribution: number; // Percentage contribution to total confidence (0-100)
}

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
  
  // Phase 16B: Deep Explainability (for auto executions only)
  triggerMetrics?: TriggerMetrics; // What metric triggered this
  evaluationWindow?: string; // e.g., "last 2h", "last 6h"
  evaluatedAt?: string; // ISO timestamp when rule was evaluated
  confidenceBreakdown?: ConfidenceBreakdown[]; // How confidence was calculated
  cooldownStatus?: 'active' | 'expired' | 'none'; // Cooldown state at execution
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
  // Auto Execution Example (Phase 16A + 16B: Full Explainability)
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
    // Phase 16B: Deep Explainability
    triggerMetrics: {
      metricName: 'Multi-Channel Coverage',
      from: 68,
      to: 54,
      threshold: 60,
      unit: '%',
    },
    evaluationWindow: 'last 6h',
    evaluatedAt: new Date(Date.now() - 24 * 60 * 60 * 1000 - 15 * 60 * 1000).toISOString(), // 15min before execution
    confidenceBreakdown: [
      { ruleName: 'Channel Diversity Check', ruleId: 'rule-004', contribution: 52 },
      { ruleName: 'Engagement Health', ruleId: 'rule-002', contribution: 35 },
    ],
    cooldownStatus: 'expired',
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
  // Auto Execution Example (Phase 16A + 16B: High Confidence)
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
    // Phase 16B: Deep Explainability
    triggerMetrics: {
      metricName: 'Processing Time',
      from: 2.3,
      to: 4.8,
      threshold: 3.5,
      unit: 's',
    },
    evaluationWindow: 'last 2h',
    evaluatedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000 - 8 * 60 * 1000).toISOString(), // 8min before execution
    confidenceBreakdown: [
      { ruleName: 'Flow Performance Monitor', ruleId: 'rule-007', contribution: 68 },
      { ruleName: 'System Health Check', ruleId: 'rule-008', contribution: 24 },
    ],
    cooldownStatus: 'expired',
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
  // Auto Execution Example (Phase 16A + 16B: Medium Confidence)
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
    // Phase 16B: Deep Explainability
    triggerMetrics: {
      metricName: 'Content Coverage',
      from: 82,
      to: 91,
      threshold: 85,
      unit: '%',
    },
    evaluationWindow: 'last 12h',
    evaluatedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000 - 22 * 60 * 1000).toISOString(), // 22min before execution
    confidenceBreakdown: [
      { ruleName: 'Coverage Quality Monitor', ruleId: 'rule-006', contribution: 48 },
      { ruleName: 'Channel Diversity Check', ruleId: 'rule-004', contribution: 26 },
    ],
    cooldownStatus: 'active', // Was within cooldown but allowed
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
