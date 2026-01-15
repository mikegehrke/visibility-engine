// Auto Mode Levels
export type AutoModeLevel = 'assisted' | 'guarded' | 'full-auto';

// Confidence Level
export type ConfidenceLevel = 'high' | 'medium' | 'low';

// Auto Mode Settings
export interface AutoModeSettings {
  level: AutoModeLevel;
  enabledForScopes: ('signals' | 'distribution' | 'flow')[];
  actionCaps: {
    dailyLimit: number; // -1 for unlimited (owner only)
    perRuleCooldownHours: number;
    perChannelDailyLimit: number;
  };
  automationWindows: {
    enabled: boolean;
    allowedHours: { start: number; end: number }[]; // 24h format
    blackoutDates: string[]; // ISO dates
  };
  confidenceThreshold: number; // 0-100, below this auto→guarded
  requireSimulation: boolean; // Owner can disable
  killSwitchActive: boolean;
}

// Confidence Score
export interface ConfidenceScore {
  ruleId: string;
  score: number; // 0-100
  level: ConfidenceLevel;
  factors: {
    dataQuality: number;
    historicalSuccess: number;
    contextRelevance: number;
  };
  lastUpdated: string; // ISO timestamp
}

// Auto Mode Level Descriptions
export const autoModeLevelInfo = {
  assisted: {
    name: 'Assisted',
    description: 'System suggests actions, you approve each one',
    autoExecute: false,
    requiresConfirmation: true,
  },
  guarded: {
    name: 'Guarded',
    description: 'Auto execution with caps and guards',
    autoExecute: true,
    requiresConfirmation: false,
  },
  'full-auto': {
    name: 'Full Auto',
    description: 'Fully automated within your settings',
    autoExecute: true,
    requiresConfirmation: false,
  },
};

// Default Settings (for non-owner accounts)
export const defaultAutoModeSettings: AutoModeSettings = {
  level: 'guarded',
  enabledForScopes: ['signals', 'distribution'],
  actionCaps: {
    dailyLimit: 10,
    perRuleCooldownHours: 6,
    perChannelDailyLimit: 3,
  },
  automationWindows: {
    enabled: true,
    allowedHours: [{ start: 8, end: 20 }], // 8am - 8pm
    blackoutDates: [],
  },
  confidenceThreshold: 70,
  requireSimulation: true,
  killSwitchActive: false,
};

// Owner Settings (unlimited)
export const ownerAutoModeSettings: AutoModeSettings = {
  level: 'full-auto',
  enabledForScopes: ['signals', 'distribution', 'flow'],
  actionCaps: {
    dailyLimit: -1, // Unlimited
    perRuleCooldownHours: 0, // No cooldown
    perChannelDailyLimit: -1, // Unlimited
  },
  automationWindows: {
    enabled: false, // Owner can run 24/7
    allowedHours: [{ start: 0, end: 24 }],
    blackoutDates: [],
  },
  confidenceThreshold: 50, // Lower threshold
  requireSimulation: false, // Can skip
  killSwitchActive: false,
};

// Mock Confidence Scores
export const mockConfidenceScores: ConfidenceScore[] = [
  {
    ruleId: 'rule-signals-001',
    score: 87,
    level: 'high',
    factors: {
      dataQuality: 90,
      historicalSuccess: 85,
      contextRelevance: 86,
    },
    lastUpdated: new Date().toISOString(),
  },
  {
    ruleId: 'rule-signals-002',
    score: 72,
    level: 'medium',
    factors: {
      dataQuality: 75,
      historicalSuccess: 70,
      contextRelevance: 71,
    },
    lastUpdated: new Date().toISOString(),
  },
  {
    ruleId: 'rule-signals-003',
    score: 45,
    level: 'low',
    factors: {
      dataQuality: 50,
      historicalSuccess: 40,
      contextRelevance: 45,
    },
    lastUpdated: new Date().toISOString(),
  },
  {
    ruleId: 'rule-dist-001',
    score: 91,
    level: 'high',
    factors: {
      dataQuality: 92,
      historicalSuccess: 90,
      contextRelevance: 91,
    },
    lastUpdated: new Date().toISOString(),
  },
  {
    ruleId: 'rule-dist-002',
    score: 68,
    level: 'medium',
    factors: {
      dataQuality: 70,
      historicalSuccess: 65,
      contextRelevance: 69,
    },
    lastUpdated: new Date().toISOString(),
  },
  {
    ruleId: 'rule-flow-001',
    score: 82,
    level: 'high',
    factors: {
      dataQuality: 85,
      historicalSuccess: 80,
      contextRelevance: 81,
    },
    lastUpdated: new Date().toISOString(),
  },
];

// Helper: Get confidence level from score
export const getConfidenceLevel = (score: number): ConfidenceLevel => {
  if (score >= 75) return 'high';
  if (score >= 50) return 'medium';
  return 'low';
};

// Helper: Check if action can execute based on settings
export const canExecuteAuto = (
  settings: AutoModeSettings,
  confidenceScore: number,
  currentHour: number
): { allowed: boolean; reason?: string } => {
  if (settings.killSwitchActive) {
    return { allowed: false, reason: 'Kill switch active' };
  }

  if (confidenceScore < settings.confidenceThreshold) {
    return { allowed: false, reason: 'Confidence score below threshold' };
  }

  if (settings.automationWindows.enabled) {
    const inWindow = settings.automationWindows.allowedHours.some(
      (window) => currentHour >= window.start && currentHour < window.end
    );
    if (!inWindow) {
      return { allowed: false, reason: 'Outside automation window' };
    }
  }

  return { allowed: true };
};
