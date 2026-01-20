export const en = {
  automation: {
    title: 'Automation',
    subtitle: 'Configure how actions are executed automatically',
    enabled: 'Enabled',
    notActiveNotice: 'Automation is not active. Connect your accounts to enable automation.',
    viewDetails: 'View Details',
    automationReady: 'Ready',
    modes: {
      preview: 'Preview',
      manual: 'Manual',
      auto: 'Auto',
    },
    statuses: {
      ready: 'Ready',
      blocked: 'Blocked',
      disabled: 'Disabled',
    },
    blockedReasons: {
      noAccount: 'No account connected',
      rateLimited: 'Rate limited',
      permissionDenied: 'Permission denied',
    },
    safetyNotices: {
      autoModeNotAvailable: 'Auto mode not available',
    },
  },
  autoMode: {
    levels: {
      conservative: 'Conservative',
      balanced: 'Balanced',
      aggressive: 'Aggressive',
    },
  },
  actions: {
    titles: {
      optimizeTitle: 'Optimize Title',
      updateDescription: 'Update Description',
      addTags: 'Add Tags',
      schedulePost: 'Schedule Post',
    },
    descriptions: {
      optimizeTitle: 'Automatically optimize video titles for better visibility',
      updateDescription: 'Update video descriptions with SEO-friendly content',
      addTags: 'Add relevant tags to improve discoverability',
      schedulePost: 'Schedule social media posts for optimal engagement',
    },
  },
  dashboard: {
    title: 'Dashboard',
    welcome: 'Welcome back',
  },
  nav: {
    automation: 'Automation',
    reports: 'Reports',
    rules: 'Rules',
    flow: 'Flow',
    settings: 'Settings',
  },
} as const;
