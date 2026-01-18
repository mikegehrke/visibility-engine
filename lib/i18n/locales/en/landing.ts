// English Landing Page Translations
export const landing = {
  hero: {
    overline: 'The Visibility Platform',
    title: 'Turn Content Into',
    titleHighlight: 'Measurable Growth',
    subtitle: 'The operating system for creators and companies to orchestrate content, automate distribution, and transform visibility into revenue.',
    ctaPrimary: 'Start Free Trial',
    ctaSecondary: 'See Platform',
  },
  trustBar: {
    title: 'Built for creators, companies & enterprises',
    categories: [
      { icon: '🎬', label: 'Creators' },
      { icon: '🏢', label: 'Agencies' },
      { icon: '🚀', label: 'Startups' },
      { icon: '🏛️', label: 'Enterprise' },
      { icon: '📈', label: 'Growth Teams' },
    ],
  },
  problem: {
    overline: 'The Challenge',
    title: 'Content Chaos Kills Growth',
    subtitle: 'Scattered tools, manual processes, zero visibility into what actually works. Most creators and teams are flying blind while competitors systematize their success.',
    stats: [
      { stat: '73%', label: 'of content never reaches its potential audience' },
      { stat: '12hrs', label: 'average weekly time lost to manual distribution' },
      { stat: '40%', label: 'of opportunities missed due to timing errors' },
    ],
  },
  solution: {
    overline: 'The Solution',
    title: 'One Platform, Complete Visibility',
    subtitle: 'From content creation to performance insights—orchestrate your entire visibility engine in one intelligent system.',
    steps: [
      {
        num: '01',
        title: 'Signals & Insights',
        description: 'Real-time tracking across all channels. Know what works, what does not, and why—before anyone else.',
        features: ['Cross-platform analytics', 'Trend detection', 'Competitive signals'],
      },
      {
        num: '02',
        title: 'Smart Automation',
        description: 'Rules-based workflows that execute at the perfect moment. From distribution to engagement—automated.',
        features: ['Scheduling engine', 'Trigger-based actions', 'A/B optimization'],
      },
      {
        num: '03',
        title: 'Growth Intelligence',
        description: 'AI-powered recommendations that turn data into actionable growth strategies you can trust.',
        features: ['Predictive insights', 'Content scoring', 'ROI attribution'],
      },
    ],
  },
  forWho: {
    overline: 'Built For',
    title: 'Professionals Who Take Visibility Seriously',
    creators: {
      title: 'Creators & Influencers',
      description: 'Scale your personal brand without scaling your workload. Automate the repetitive, focus on the creative—while your visibility compounds.',
      features: ['Multi-platform scheduling', 'Audience insights', 'Monetization tracking', 'Brand deal management'],
    },
    companies: {
      title: 'Teams & Agencies',
      description: 'Coordinate campaigns, manage multiple brands, and prove ROI—all from one command center built for professional workflows.',
      features: ['Multi-brand workspaces', 'Team collaboration', 'Client reporting', 'White-label options'],
    },
  },
  platform: {
    overline: 'Platform',
    title: 'Everything You Need to Win',
    subtitle: 'A complete toolkit for modern visibility management.',
    features: [
      { label: 'Content Hub', desc: 'Centralized asset management' },
      { label: 'Smart Scheduling', desc: 'AI-optimized timing' },
      { label: 'Analytics Engine', desc: 'Cross-platform insights' },
      { label: 'Automation Rules', desc: 'Trigger-based workflows' },
      { label: 'Team Workspaces', desc: 'Collaborative environment' },
      { label: 'API & Integrations', desc: 'Extensible platform' },
    ],
  },
  testimonials: {
    overline: 'Results',
    title: 'Trusted by Growth Leaders',
    items: [
      {
        quote: 'Visibility Engine transformed how we approach content distribution. What used to take our team days now happens automatically—with better results.',
        name: 'Sarah Kim',
        role: 'Head of Content, TechScale',
      },
      {
        quote: 'Finally, a platform that understands creators need insights, not just scheduling. The automation rules alone save me 10+ hours every week.',
        name: 'Marcus Rodriguez',
        role: 'Creator, 500K+ followers',
      },
    ],
  },
  cta: {
    title: 'Ready to Build Your Visibility Engine?',
    subtitle: 'Join thousands of creators and teams who have transformed their content strategy. Start your free trial today—no credit card required.',
    ctaPrimary: 'Start Free Trial',
    ctaSecondary: 'View Pricing',
  },
} as const;

export type LandingTranslations = typeof landing;
