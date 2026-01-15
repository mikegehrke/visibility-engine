// Account Types
export type AccountType = 'personal' | 'company' | 'owner';
export type PlanId = 'free' | 'pro-plus' | 'ultimate-plus';

// Account Model
export interface Account {
  id: string;
  email: string;
  accountType: AccountType;
  planId: PlanId;
  isOwner: boolean; // Owner account: unlimited, no billing
  automationAddOn: {
    enabled: boolean;
    includedActions: number;
    usedActions: number;
    overageRate: number; // € per action
  };
}

// Current User (Mock - would come from auth context)
export const currentAccount: Account = {
  id: 'acc-owner-001',
  email: 'owner@visibility-engine.com',
  accountType: 'owner',
  planId: 'ultimate-plus',
  isOwner: true,
  automationAddOn: {
    enabled: true, // Free for owner
    includedActions: -1, // Unlimited
    usedActions: 0,
    overageRate: 0, // No cost for owner
  },
};

// Automation Add-on Product
export const automationAddOnProduct = {
  id: 'addon-automation',
  name: 'Automation Add-on',
  price: 99, // €/month
  includedActions: 10,
  overageRate: 0.5, // €/action
  requiredAccountType: 'company' as const,
  features: [
    'Auto Mode (Level 1-3)',
    '10 automated actions/month included',
    '€0.50 per additional action',
    'Confidence scoring',
    'Action caps & cooldowns',
    'Automation windows',
    'Full audit trail',
  ],
};

// Helper Functions
export const canUseAutoMode = (account: Account): boolean => {
  return account.isOwner || account.automationAddOn.enabled;
};

export const getRemainingActions = (account: Account): number => {
  if (account.isOwner) return -1; // Unlimited
  return Math.max(0, account.automationAddOn.includedActions - account.automationAddOn.usedActions);
};

export const getOverageCost = (account: Account): number => {
  if (account.isOwner) return 0;
  const overage = Math.max(0, account.automationAddOn.usedActions - account.automationAddOn.includedActions);
  return overage * account.automationAddOn.overageRate;
};
