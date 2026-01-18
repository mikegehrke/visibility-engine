// English Pricing Translations
export const pricing = {
  meta: {
    title: 'Pricing – Visibility Engine',
    description: 'Choose the plan that fits your needs. From free for beginners to enterprise for teams.',
  },
  hero: {
    overline: 'Pricing',
    title: 'Simple, Transparent Pricing',
    subtitle: "Start free, upgrade when you're ready. No hidden fees, no surprises. All paid plans include a 14-day free trial.",
  },
  plans: {
    starter: {
      name: 'Starter',
      price: 'Free',
      period: '',
      description: 'Perfect for getting started and exploring the platform.',
      features: [
        '1 connected account',
        '50 scheduled posts/month',
        'Basic analytics',
        'Community support',
      ],
      cta: 'Get Started',
    },
    creator: {
      name: 'Creator',
      price: '$19',
      period: '/month',
      description: 'For individual creators ready to scale their presence.',
      features: [
        '5 connected accounts',
        'Unlimited scheduled posts',
        'Advanced analytics',
        'Automation rules (5)',
        'Priority support',
      ],
      cta: 'Start Free Trial',
    },
    professional: {
      name: 'Professional',
      price: '$49',
      period: '/month',
      description: 'For power users who need the full visibility toolkit.',
      features: [
        '15 connected accounts',
        'Unlimited scheduled posts',
        'Full analytics suite',
        'Unlimited automation rules',
        'AI-powered insights',
        'API access',
        'Priority support',
      ],
      cta: 'Start Free Trial',
      badge: 'Most Popular',
    },
    team: {
      name: 'Team',
      price: '$149',
      period: '/month',
      description: 'For teams and agencies managing multiple brands.',
      features: [
        'Unlimited connected accounts',
        'Multi-brand workspaces',
        '5 team members included',
        'Role-based permissions',
        'Client reporting',
        'White-label options',
        'Dedicated account manager',
      ],
      cta: 'Contact Sales',
    },
  },
  enterprise: {
    title: 'Need a custom solution?',
    description: 'For large organizations with specific requirements, we offer custom Enterprise plans with dedicated infrastructure, SLA guarantees, and tailored onboarding.',
    cta: 'Contact Sales',
  },
  compare: {
    overline: 'Compare Plans',
    title: 'Find the Right Fit for Your Needs',
    headers: {
      feature: 'Feature',
      starter: 'Starter',
      creator: 'Creator',
      professional: 'Professional',
      team: 'Team',
    },
    rows: {
      connectedAccounts: 'Connected accounts',
      scheduledPosts: 'Scheduled posts',
      analytics: 'Analytics',
      automationRules: 'Automation rules',
      aiInsights: 'AI insights',
      apiAccess: 'API access',
      teamMembers: 'Team members',
      whiteLabel: 'White-label',
    },
    values: {
      starter: ['1', '50/mo', 'Basic', '—', '—', '—', '1', '—'],
      creator: ['5', 'Unlimited', 'Advanced', '5', '—', '—', '1', '—'],
      professional: ['15', 'Unlimited', 'Full suite', 'Unlimited', '✓', '✓', '1', '—'],
      team: ['Unlimited', 'Unlimited', 'Full suite', 'Unlimited', '✓', '✓', '5+', '✓'],
    },
  },
  faq: {
    overline: 'FAQ',
    title: 'Frequently Asked Questions',
    items: [
      {
        question: 'Can I switch plans at any time?',
        answer: "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll be charged the prorated difference. When downgrading, the change takes effect at the start of your next billing cycle.",
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards (Visa, MasterCard, American Express) and PayPal. For Team and Enterprise plans, we also offer invoicing with NET 30 terms.',
      },
      {
        question: 'Is there a free trial?',
        answer: 'Yes! All paid plans include a 14-day free trial with full access to all features. No credit card required to start your trial.',
      },
      {
        question: 'What happens when my trial ends?',
        answer: 'At the end of your trial, you can choose to subscribe to continue using premium features, or your account will automatically switch to our free Starter plan.',
      },
      {
        question: 'Do you offer discounts for annual billing?',
        answer: 'Yes, you can save 20% by choosing annual billing. This option is available for all paid plans during checkout.',
      },
      {
        question: 'Can I cancel my subscription?',
        answer: 'Absolutely. You can cancel your subscription at any time from your account settings. Your access continues until the end of your current billing period.',
      },
    ],
  },
  cta: {
    title: 'Ready to Get Started?',
    subtitle: 'Join thousands of creators and teams building their visibility engines. Start your 14-day free trial today.',
    button: 'Start Free Trial',
  },
} as const;

export type PricingTranslations = typeof pricing;
