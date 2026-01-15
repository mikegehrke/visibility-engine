export type PlanId = 'free' | 'pro' | 'pro-plus' | 'ultimate' | 'ultimate-plus';

export interface PlanLimits {
  workspaces: number;
  scheduledPosts: number; // per month
  aiAgents: number; // concurrent
  storage: number; // GB
  teamMembers: number;
  dataRetention: number; // days
}

export interface PlanFeature {
  key: string;
  label: string; // Direct display text
  translationKey: string;
}

export interface Plan {
  id: PlanId;
  name: string;
  nameKey: string; // translation key
  description: string; // Direct display text
  descriptionKey: string; // translation key
  pricing: {
    monthly: number;
    yearly: number;
  };
  displayPrice: string; // Display text (e.g. "Free Forever", "Coming Soon")
  priceKey: string; // translation key
  badge?: string; // Optional badge like "Popular", "Best Value"
  badgeKey?: string; // translation key
  features: PlanFeature[];
  limits: PlanLimits;
  isPopular?: boolean;
}

export const PLANS: Record<PlanId, Plan> = {
  free: {
    id: 'free',
    name: 'Free',
    nameKey: 'billing.plans.free.name',
    description: 'Perfect for getting started',
    descriptionKey: 'billing.plans.free.description',
    pricing: { monthly: 0, yearly: 0 },
    displayPrice: 'Free Forever',
    priceKey: 'billing.plans.free.price',
    features: [
      { key: 'workspaces', label: '1 workspace', translationKey: 'billing.plans.free.features.workspaces' },
      { key: 'contentManagement', label: 'Basic content management', translationKey: 'billing.plans.free.features.contentManagement' },
      { key: 'scheduledPosts', label: 'Up to 10 scheduled posts/month', translationKey: 'billing.plans.free.features.scheduledPosts' },
      { key: 'support', label: 'Community support', translationKey: 'billing.plans.free.features.support' },
      { key: 'dataRetention', label: '7 days data retention', translationKey: 'billing.plans.free.features.dataRetention' },
    ],
    limits: {
      workspaces: 1,
      scheduledPosts: 10,
      aiAgents: 0,
      storage: 1,
      teamMembers: 1,
      dataRetention: 7,
    },
  },
  pro: {
    id: 'pro',
    name: 'Pro',
    nameKey: 'billing.plans.pro.name',
    description: 'For serious creators',
    descriptionKey: 'billing.plans.pro.description',
    pricing: { monthly: 49, yearly: 470 },
    displayPrice: 'Coming Soon',
    priceKey: 'billing.plans.pro.price',
    badge: 'Popular',
    badgeKey: 'billing.badges.popular',
    isPopular: true,
    features: [
      { key: 'workspaces', label: '3 workspaces', translationKey: 'billing.plans.pro.features.workspaces' },
      { key: 'contentLibrary', label: 'Full content library', translationKey: 'billing.plans.pro.features.contentLibrary' },
      { key: 'scheduledPosts', label: 'Unlimited scheduled posts', translationKey: 'billing.plans.pro.features.scheduledPosts' },
      { key: 'analytics', label: 'Basic analytics', translationKey: 'billing.plans.pro.features.analytics' },
      { key: 'support', label: 'Email support', translationKey: 'billing.plans.pro.features.support' },
      { key: 'dataRetention', label: '30 days data retention', translationKey: 'billing.plans.pro.features.dataRetention' },
    ],
    limits: {
      workspaces: 3,
      scheduledPosts: -1, // unlimited
      aiAgents: 0,
      storage: 10,
      teamMembers: 1,
      dataRetention: 90,
    },
  },
  'pro-plus': {
    id: 'pro-plus',
    name: 'Pro+',
    nameKey: 'billing.plans.proPlus.name',
    description: 'Advanced features for power users',
    descriptionKey: 'billing.plans.proPlus.description',
    pricing: { monthly: 99, yearly: 950 },
    displayPrice: 'Coming Soon',
    priceKey: 'billing.plans.proPlus.price',
    badge: 'Best Value',
    badgeKey: 'billing.badges.bestValue',
    isPopular: true,
    features: [
      { key: 'workspaces', label: '10 workspaces', translationKey: 'billing.plans.proPlus.features.workspaces' },
      { key: 'advancedAnalytics', label: 'Advanced analytics', translationKey: 'billing.plans.proPlus.features.advancedAnalytics' },
      { key: 'aiAgents', label: '5 AI agents', translationKey: 'billing.plans.proPlus.features.aiAgents' },
      { key: 'campaigns', label: 'Campaign management', translationKey: 'billing.plans.proPlus.features.campaigns' },
      { key: 'support', label: 'Priority support', translationKey: 'billing.plans.proPlus.features.support' },
      { key: 'dataRetention', label: '1 year data retention', translationKey: 'billing.plans.proPlus.features.dataRetention' },
    ],
    limits: {
      workspaces: 10,
      scheduledPosts: -1,
      aiAgents: 5,
      storage: 50,
      teamMembers: 3,
      dataRetention: 365,
    },
  },
  ultimate: {
    id: 'ultimate',
    name: 'Ultimate',
    nameKey: 'billing.plans.ultimate.name',
    description: 'For teams and agencies',
    descriptionKey: 'billing.plans.ultimate.description',
    pricing: { monthly: 199, yearly: 1910 },
    displayPrice: 'Coming Soon',
    priceKey: 'billing.plans.ultimate.price',
    features: [
      { key: 'workspaces', label: 'Unlimited workspaces', translationKey: 'billing.plans.ultimate.features.workspaces' },
      { key: 'collaboration', label: '10 team members', translationKey: 'billing.plans.ultimate.features.collaboration' },
      { key: 'aiAgents', label: '20 AI agents', translationKey: 'billing.plans.ultimate.features.aiAgents' },
      { key: 'reports', label: 'Custom reports', translationKey: 'billing.plans.ultimate.features.reports' },
      { key: 'api', label: 'API access', translationKey: 'billing.plans.ultimate.features.api' },
      { key: 'dataRetention', label: 'Unlimited data retention', translationKey: 'billing.plans.ultimate.features.dataRetention' },
    ],
    limits: {
      workspaces: -1, // unlimited
      scheduledPosts: -1,
      aiAgents: 20,
      storage: 200,
      teamMembers: 10,
      dataRetention: -1, // unlimited
    },
  },
  'ultimate-plus': {
    id: 'ultimate-plus',
    name: 'Ultimate+',
    nameKey: 'billing.plans.ultimatePlus.name',
    description: 'Enterprise-grade solution',
    descriptionKey: 'billing.plans.ultimatePlus.description',
    pricing: { monthly: 499, yearly: 4790 },
    displayPrice: 'Coming Soon',
    priceKey: 'billing.plans.ultimatePlus.price',
    badge: 'Enterprise',
    badgeKey: 'billing.badges.enterprise',
    features: [
      { key: 'everything', label: 'Everything in Ultimate', translationKey: 'billing.plans.ultimatePlus.features.everything' },
      { key: 'support', label: 'Dedicated account manager', translationKey: 'billing.plans.ultimatePlus.features.support' },
      { key: 'integrations', label: 'Custom integrations', translationKey: 'billing.plans.ultimatePlus.features.integrations' },
      { key: 'sla', label: '99.9% SLA', translationKey: 'billing.plans.ultimatePlus.features.sla' },
      { key: 'whiteLabel', label: 'White-label options', translationKey: 'billing.plans.ultimatePlus.features.whiteLabel' },
      { key: 'onPremise', label: 'On-premise deployment', translationKey: 'billing.plans.ultimatePlus.features.onPremise' },
    ],
    limits: {
      workspaces: -1,
      scheduledPosts: -1,
      aiAgents: -1, // unlimited
      storage: -1, // unlimited
      teamMembers: -1, // unlimited
      dataRetention: -1,
    },
  },
};

// Helper functions
export function getPlanById(id: PlanId): Plan {
  return PLANS[id];
}

export function getAllPlans(): Plan[] {
  return Object.values(PLANS);
}

export function formatLimit(value: number): string {
  if (value === -1) return 'Unlimited';
  return value.toString();
}

export function isUnlimited(value: number): boolean {
  return value === -1;
}
