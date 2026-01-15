// Phase 14: Automation Readiness Layer
// Phase 16A: Auto Mode Engine Integration

import { AutoModeLevel } from './automation-engine';

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
  // Phase 16A: Auto Mode fields
  autoModeEnabled: boolean; // User-facing toggle for this specific automation
  autoModeLevel: AutoModeLevel; // Level applied when auto mode is active
}

// Mock Automation Configs - 8 examples
// Phase 16A: Auto Mode levels assigned based on confidence/risk
export const mockAutomationConfigs: AutomationConfig[] = [
  // Ready for preview (3) - Low risk, high confidence
  {
    id: 'auto-001',
    relatedActionId: 'act-001',
    executionMode: 'preview',
    status: 'ready',
    enabled: false,
    safetyNoticeKey: 'previewOnlyNotice',
    lastSimulationResultKey: 'lowVisibilityWarningPreview',
    autoModeEnabled: true,
    autoModeLevel: 'guarded', // Medium confidence → Guarded
  },
  {
    id: 'auto-002',
    relatedActionId: 'act-002',
    executionMode: 'preview',
    status: 'ready',
    enabled: false,
    safetyNoticeKey: 'previewOnlyNotice',
    lastSimulationResultKey: 'reachDeclineAlertPreview',
    autoModeEnabled: true,
    autoModeLevel: 'full-auto', // High confidence → Full Auto
  },
  {
    id: 'auto-004',
    relatedActionId: 'act-004',
    executionMode: 'preview',
    status: 'ready',
    enabled: false,
    safetyNoticeKey: 'previewOnlyNotice',
    lastSimulationResultKey: 'channelActivationPreview',
    autoModeEnabled: true,
    autoModeLevel: 'guarded', // Medium confidence → Guarded
  },

  // Blocked (2) - Auto mode disabled due to blocks
  {
    id: 'auto-003',
    relatedActionId: 'act-003',
    executionMode: 'preview',
    status: 'blocked',
    enabled: false,
    safetyNoticeKey: 'previewOnlyNotice',
    lastSimulationResultKey: 'clickRateInsightPreview',
    blockedReasonKey: 'blockedMissingPermissions',
    autoModeEnabled: false, // Blocked → No auto mode
    autoModeLevel: 'assisted', // Fallback to assisted
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
    autoModeEnabled: false, // Blocked → No auto mode
    autoModeLevel: 'assisted', // Fallback to assisted
  },

  // Disabled (2) - User disabled, but could use auto
  {
    id: 'auto-006',
    relatedActionId: 'act-006',
    executionMode: 'preview',
    status: 'disabled',
    enabled: false,
    safetyNoticeKey: 'previewOnlyNotice',
    lastSimulationResultKey: 'coveragePositivePreview',
    autoModeEnabled: false, // User disabled
    autoModeLevel: 'full-auto', // High confidence if enabled
  },
  {
    id: 'auto-008',
    relatedActionId: 'act-008',
    executionMode: 'preview',
    status: 'disabled',
    enabled: false,
    safetyNoticeKey: 'previewOnlyNotice',
    lastSimulationResultKey: 'flowHealthUrgentPreview',
    autoModeEnabled: false, // User disabled
    autoModeLevel: 'assisted', // Low confidence → Assisted only
  },

  // Auto mode example (1) - Full Auto capable
  {
    id: 'auto-007',
    relatedActionId: 'act-007',
    executionMode: 'auto',
    status: 'ready', // Changed from blocked to ready
    enabled: true, // Auto mode active
    safetyNoticeKey: 'autoModeNotice',
    lastSimulationResultKey: 'bottleneckAnalysisPreview',
    autoModeEnabled: true,
    autoModeLevel: 'full-auto', // High confidence → Full Auto
  },
];
