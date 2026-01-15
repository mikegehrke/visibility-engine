// Phase 16B: Simulation-Before-Auto
// Provides predictable impact analysis before automation execution

export type RiskLevel = 'low' | 'medium' | 'high';

export interface SimulationResult {
  id: string;
  automationId: string; // Links to AutomationConfig
  ruleId: string;
  actionId: string;
  
  // Impact Prediction
  expectedImpact: string; // e.g., "+12% Reach", "-8% Cost"
  estimatedActions: number; // How many actions will be triggered
  estimatedCost: number; // EUR cost (0 for owner)
  riskLevel: RiskLevel;
  
  // Evaluation Data
  evaluatedAt: string; // ISO timestamp
  basedOnDataPoints: number; // How many data points used for simulation
  confidenceInPrediction: number; // 0-100
  
  // Approval Status
  approved: boolean;
  approvedBy?: string; // User email
  approvedAt?: string; // ISO timestamp
  requiresApproval: boolean; // True for Company, False for Owner
}

// Mock Simulation Results (8 examples, matching 8 automation configs)
export const mockSimulationResults: SimulationResult[] = [
  // auto-001: Low Visibility Warning - Low Risk, High Confidence
  {
    id: 'sim-001',
    automationId: 'auto-001',
    ruleId: 'rule-001',
    actionId: 'act-001',
    expectedImpact: '+18% Content Visibility (avg)',
    estimatedActions: 3,
    estimatedCost: 1.50,
    riskLevel: 'low',
    evaluatedAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(), // 6h ago
    basedOnDataPoints: 247,
    confidenceInPrediction: 89,
    approved: true,
    approvedBy: 'user@example.com',
    approvedAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    requiresApproval: false, // Owner account
  },
  
  // auto-002: Reach Decline Alert - Low Risk, Very High Confidence
  {
    id: 'sim-002',
    automationId: 'auto-002',
    ruleId: 'rule-002',
    actionId: 'act-002',
    expectedImpact: '+22% Reach Recovery',
    estimatedActions: 5,
    estimatedCost: 2.50,
    riskLevel: 'low',
    evaluatedAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(), // 3h ago
    basedOnDataPoints: 512,
    confidenceInPrediction: 94,
    approved: true,
    approvedBy: 'user@example.com',
    approvedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    requiresApproval: false, // Owner account
  },
  
  // auto-004: Channel Activation - Medium Risk
  {
    id: 'sim-004',
    automationId: 'auto-004',
    ruleId: 'rule-004',
    actionId: 'act-004',
    expectedImpact: '+31% Multi-Channel Coverage',
    estimatedActions: 2,
    estimatedCost: 1.00,
    riskLevel: 'medium',
    evaluatedAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(), // 12h ago
    basedOnDataPoints: 189,
    confidenceInPrediction: 76,
    approved: true,
    approvedBy: 'user@example.com',
    approvedAt: new Date(Date.now() - 11 * 60 * 60 * 1000).toISOString(),
    requiresApproval: false, // Owner account
  },
  
  // auto-003: Click Rate Insight - BLOCKED (not approved)
  {
    id: 'sim-003',
    automationId: 'auto-003',
    ruleId: 'rule-003',
    actionId: 'act-003',
    expectedImpact: '+9% Click-through Rate',
    estimatedActions: 1,
    estimatedCost: 0.50,
    riskLevel: 'low',
    evaluatedAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // 1d ago
    basedOnDataPoints: 156,
    confidenceInPrediction: 82,
    approved: false, // Awaiting approval
    requiresApproval: true, // Company account (hypothetical)
  },
  
  // auto-005: Inactive Channel - BLOCKED
  {
    id: 'sim-005',
    automationId: 'auto-005',
    ruleId: 'rule-005',
    actionId: 'act-005',
    expectedImpact: '+14% Channel Engagement',
    estimatedActions: 4,
    estimatedCost: 2.00,
    riskLevel: 'medium',
    evaluatedAt: new Date(Date.now() - 18 * 60 * 60 * 1000).toISOString(), // 18h ago
    basedOnDataPoints: 203,
    confidenceInPrediction: 71,
    approved: false,
    requiresApproval: true, // Company account
  },
  
  // auto-006: Coverage Positive - Disabled (not approved yet)
  {
    id: 'sim-006',
    automationId: 'auto-006',
    ruleId: 'rule-006',
    actionId: 'act-006',
    expectedImpact: '+5% Overall Coverage',
    estimatedActions: 1,
    estimatedCost: 0.50,
    riskLevel: 'low',
    evaluatedAt: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(), // 8h ago
    basedOnDataPoints: 341,
    confidenceInPrediction: 88,
    approved: false,
    requiresApproval: false, // Owner can skip
  },
  
  // auto-007: Bottleneck Analysis - High Risk, Active
  {
    id: 'sim-007',
    automationId: 'auto-007',
    ruleId: 'rule-007',
    actionId: 'act-007',
    expectedImpact: '-12% Processing Time',
    estimatedActions: 6,
    estimatedCost: 3.00,
    riskLevel: 'high',
    evaluatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2h ago
    basedOnDataPoints: 428,
    confidenceInPrediction: 92,
    approved: true,
    approvedBy: 'user@example.com',
    approvedAt: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
    requiresApproval: false, // Owner account
  },
  
  // auto-008: Flow Health Alert - Medium Risk
  {
    id: 'sim-008',
    automationId: 'auto-008',
    ruleId: 'rule-008',
    actionId: 'act-008',
    expectedImpact: '+27% Flow Health Score',
    estimatedActions: 3,
    estimatedCost: 1.50,
    riskLevel: 'medium',
    evaluatedAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(), // 4h ago
    basedOnDataPoints: 278,
    confidenceInPrediction: 79,
    approved: false, // User disabled automation
    requiresApproval: false, // Owner account
  },
];

// Helper: Get simulation by automation ID
export function getSimulationByAutomationId(automationId: string): SimulationResult | undefined {
  return mockSimulationResults.find((sim) => sim.automationId === automationId);
}

// Helper: Check if automation can execute (approved or owner without requirement)
export function canAutomationExecute(automationId: string): boolean {
  const sim = getSimulationByAutomationId(automationId);
  if (!sim) return false;
  
  // Owner can execute without approval if not required
  if (!sim.requiresApproval) return true;
  
  // Company requires approval
  return sim.approved;
}

// Helper: Get risk level color classes
export function getRiskLevelStyles(level: RiskLevel) {
  switch (level) {
    case 'low':
      return {
        bg: 'bg-green-50',
        border: 'border-green-200',
        text: 'text-green-700',
        badge: 'bg-green-100 text-green-700 border-green-200',
      };
    case 'medium':
      return {
        bg: 'bg-amber-50',
        border: 'border-amber-200',
        text: 'text-amber-700',
        badge: 'bg-amber-100 text-amber-700 border-amber-200',
      };
    case 'high':
      return {
        bg: 'bg-red-50',
        border: 'border-red-200',
        text: 'text-red-700',
        badge: 'bg-red-100 text-red-700 border-red-200',
      };
  }
}
