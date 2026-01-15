// Phase 16B: Rollback/Undo System
// Allows selective reversal of automated actions where safe and feasible

export interface RollbackCapability {
  rollbackable: boolean;
  rollbackReasonKey?: string; // Why rollback is/isn't possible
  rollbackWindow?: number; // Hours within which rollback is allowed (e.g., 24h)
}

// Rollback result after undo operation
export interface RollbackResult {
  success: boolean;
  newExecutionLogId: string; // ID of the rollback execution log entry
  message: string;
  rolledBackAt: string; // ISO timestamp
}

// Define which action types are rollbackable
export const actionRollbackCapabilities: Record<string, RollbackCapability> = {
  // ROLLBACKABLE: Schedule & Campaign Controls
  'act-001': { 
    rollbackable: true, 
    rollbackReasonKey: 'scheduleChangesReversible',
    rollbackWindow: 24,
  }, // Low Visibility Warning (Schedule adjustment)
  
  'act-004': { 
    rollbackable: true, 
    rollbackReasonKey: 'campaignControlReversible',
    rollbackWindow: 48,
  }, // Channel Activation (Can deactivate)
  
  'act-005': { 
    rollbackable: true, 
    rollbackReasonKey: 'campaignControlReversible',
    rollbackWindow: 48,
  }, // Highlight Inactive Channel (Can remove highlight)
  
  'act-006': { 
    rollbackable: true, 
    rollbackReasonKey: 'queueStatusReversible',
    rollbackWindow: 12,
  }, // Bottleneck Analysis (Queue priority)
  
  'act-007': { 
    rollbackable: true, 
    rollbackReasonKey: 'contentPriorityReversible',
    rollbackWindow: 24,
  }, // Coverage Positive Feedback (Content priority)
  
  // NOT ROLLBACKABLE: External Publications & Irreversible Actions
  'act-002': { 
    rollbackable: false, 
    rollbackReasonKey: 'externalPublicationIrreversible',
  }, // Reach Decline Alert (External notification sent)
  
  'act-003': { 
    rollbackable: false, 
    rollbackReasonKey: 'analyticsDisplayIrreversible',
  }, // Click Rate Insight (Analytics display)
  
  'act-008': { 
    rollbackable: false, 
    rollbackReasonKey: 'urgentAlertIrreversible',
  }, // Flow Health Urgent Alert (External alert)
};

// Check if action can be rolled back
export function canRollback(actionId: string, executionTimestamp: string): boolean {
  const capability = actionRollbackCapabilities[actionId];
  if (!capability || !capability.rollbackable) return false;
  
  // Check if within rollback window
  if (capability.rollbackWindow) {
    const executionTime = new Date(executionTimestamp).getTime();
    const now = new Date().getTime();
    const hoursSince = (now - executionTime) / (1000 * 60 * 60);
    
    if (hoursSince > capability.rollbackWindow) return false;
  }
  
  return true;
}

// Get rollback capability for action
export function getRollbackCapability(actionId: string): RollbackCapability | undefined {
  return actionRollbackCapabilities[actionId];
}

// Perform rollback (in production, this would call API)
export function performRollback(executionLogId: string, actionId: string): RollbackResult {
  const newLogId = `exec-rollback-${Date.now()}`;
  
  return {
    success: true,
    newExecutionLogId: newLogId,
    message: 'Action successfully rolled back. Previous state restored.',
    rolledBackAt: new Date().toISOString(),
  };
}
