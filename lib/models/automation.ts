// Phase 14: Automation Readiness Layer
// NO execution, NO background jobs - only readiness preview

export type ExecutionMode = 'preview' | 'manual' | 'auto';

export type AutomationStatus = 'ready' | 'blocked' | 'disabled';

export interface AutomationConfig {
  id: string;
  relatedActionId: string;
  executionMode: ExecutionMode;
  status: AutomationStatus;
  enabled: boolean; // UI only toggle
  safetyNoticeKey: string;
  lastSimulationResultKey: string;
  blockedReasonKey?: string; // Why automation is blocked (if status === 'blocked')
}

// Mock Automation Configs - 8 examples
// All start in 'preview' or 'disabled', 'auto' exists but is not activatable
export const mockAutomationConfigs: AutomationConfig[] = [
  // Ready for preview (3)
  {
    id: 'auto-001',
    relatedActionId: 'act-001',
    executionMode: 'preview',
    status: 'ready',
    enabled: false,
    safetyNoticeKey: 'previewOnlyNotice',
    lastSimulationResultKey: 'lowVisibilityWarningPreview',
  },
  {
    id: 'auto-002',
    relatedActionId: 'act-002',
    executionMode: 'preview',
    status: 'ready',
    enabled: false,
    safetyNoticeKey: 'previewOnlyNotice',
    lastSimulationResultKey: 'reachDeclineAlertPreview',
  },
  {
    id: 'auto-004',
    relatedActionId: 'act-004',
    executionMode: 'preview',
    status: 'ready',
    enabled: false,
    safetyNoticeKey: 'previewOnlyNotice',
    lastSimulationResultKey: 'channelActivationPreview',
  },

  // Blocked (2)
  {
    id: 'auto-003',
    relatedActionId: 'act-003',
    executionMode: 'preview',
    status: 'blocked',
    enabled: false,
    safetyNoticeKey: 'previewOnlyNotice',
    lastSimulationResultKey: 'clickRateInsightPreview',
    blockedReasonKey: 'blockedMissingPermissions',
  },
  {
    id: 'auto-005',
    relatedActionId: 'act-005',
    executionMode: 'manual',
    status: 'blocked',
    enabled: false,
    safetyNoticeKey: 'manualModeNotice',
    lastSimulationResultKey: 'inactiveChannelPreview',
    blockedReasonKey: 'blockedRequiresPlan',
  },

  // Disabled (2)
  {
    id: 'auto-006',
    relatedActionId: 'act-006',
    executionMode: 'preview',
    status: 'disabled',
    enabled: false,
    safetyNoticeKey: 'previewOnlyNotice',
    lastSimulationResultKey: 'coveragePositivePreview',
  },
  {
    id: 'auto-008',
    relatedActionId: 'act-008',
    executionMode: 'preview',
    status: 'disabled',
    enabled: false,
    safetyNoticeKey: 'previewOnlyNotice',
    lastSimulationResultKey: 'flowHealthUrgentPreview',
  },

  // Auto mode (exists but NOT activatable) (1)
  {
    id: 'auto-007',
    relatedActionId: 'act-007',
    executionMode: 'auto',
    status: 'blocked',
    enabled: false,
    safetyNoticeKey: 'autoModeNotAvailable',
    lastSimulationResultKey: 'bottleneckAnalysisPreview',
    blockedReasonKey: 'blockedAutoNotImplemented',
  },
];
