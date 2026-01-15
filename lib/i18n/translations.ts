// Import public translations
import { publicTranslations } from './public-translations';

export const translations = {
  en: {
    // Merge public translations FIRST
    ...publicTranslations.en,
    
    // Override/extend with dashboard-specific translations
    // Top Bar
    contextSwitcher: {
      creator: 'Creator',
      company: 'Company',
    },
    languageSwitcher: {
      en: 'English',
      de: 'Deutsch',
    },
    
    // Navigation
    nav: {
      // Public pages
      features: 'Features',
      pricing: 'Pricing',
      about: 'About',
      blog: 'Blog',
      login: 'Login',
      getStarted: 'Get Started',
      
      // Dashboard - Core
      overview: 'Overview',
      analytics: 'Analytics',
      billing: 'Billing',
      settings: 'Settings',
      
      // Content & Media
      contentHub: 'Content Hub',
      videoModule: 'Video',
      imageModule: 'Images',
      editor: 'Editor',
      
      // Automation
      campaigns: 'Campaigns',
      socialDistribution: 'Social Distribution',
      schedules: 'Schedules',
      
      // Communication
      chat: 'Chat',
      notifications: 'Notifications',
      
      // AI / Agents
      agents: 'Agents',
      agentSessions: 'Sessions',
      agentResults: 'Results',
      agentHistory: 'History',
      
      // Visibility Engine
      distribution: 'Distribution',
      signals: 'Signals',
      flow: 'Content Flow',
      
      // Logic
      rules: 'Rules & Triggers',
      actions: 'Actions (Preview)',
      
      // Automation
      automation: 'Automation Readiness',
      autoModeSettings: 'Auto Mode Settings',
      
      // Reports
      reports: 'Reports & Exports',
      
      // Execution
      executions: 'Execution Log',
    },
    
    // Section Headers
    sections: {
      core: 'Core',
      visibilityEngine: 'Visibility Engine',
      logic: 'Logic',
      automation: 'Automation',
      reports: 'Reports',
      execution: 'Execution',
      contentMedia: 'Content & Media',
      communication: 'Communication',
      ai: 'AI & Agents',
    },
    
    // Common
    common: {
      comingSoon: 'Coming Soon',
      placeholder: 'This module is currently in development',
      unlimited: 'Unlimited',
      upgrade: 'Upgrade',
      downgrade: 'Downgrade',
      currentPlan: 'Current Plan',
      cancel: 'Cancel',
    },
    
    // Billing
    billing: {
      title: 'Billing & Subscription',
      currentPlan: 'Your Current Plan',
      planComparison: 'Compare Plans',
      billingFrequency: 'Billing Frequency',
      monthly: 'Monthly',
      yearly: 'Yearly',
      yearlyDiscount: 'Save 20%',
      
      badges: {
        popular: 'Popular',
        enterprise: 'Enterprise',
        bestValue: 'Best Value',
      },
      
      usage: {
        label: 'Usage',
        workspaces: 'Workspaces',
        scheduledPosts: 'Scheduled Posts',
        aiAgents: 'AI Agents',
        storage: 'Storage',
        teamMembers: 'Team Members',
        of: 'of',
      },
      
      plans: {
        free: {
          name: 'Free',
          description: 'Perfect for getting started',
          price: 'Free Forever',
          features: {
            workspaces: '1 workspace',
            contentManagement: 'Basic content management',
            scheduledPosts: 'Up to 10 scheduled posts/month',
            support: 'Community support',
            dataRetention: '7 days data retention',
          },
        },
        pro: {
          name: 'Pro',
          description: 'For serious creators',
          price: 'Coming Soon',
          features: {
            workspaces: '3 workspaces',
            contentLibrary: 'Full content library',
            scheduledPosts: 'Unlimited scheduled posts',
            analytics: 'Basic analytics',
            support: 'Email support',
            dataRetention: '90 days data retention',
          },
        },
        proPlus: {
          name: 'Pro+',
          description: 'For power users',
          price: 'Coming Soon',
          features: {
            workspaces: '10 workspaces',
            advancedAnalytics: 'Advanced analytics',
            aiAgents: 'AI agents (5 concurrent)',
            campaigns: 'Campaign automation',
            support: 'Priority support',
            dataRetention: '1 year data retention',
          },
        },
        ultimate: {
          name: 'Ultimate',
          description: 'For teams and agencies',
          price: 'Coming Soon',
          features: {
            workspaces: 'Unlimited workspaces',
            collaboration: 'Team collaboration',
            aiAgents: 'AI agents (20 concurrent)',
            reports: 'Custom reports',
            api: 'API access',
            dataRetention: 'Unlimited data retention',
          },
        },
        ultimatePlus: {
          name: 'Ultimate+',
          description: 'For enterprises',
          price: 'Coming Soon',
          features: {
            everything: 'Everything in Ultimate',
            support: 'Dedicated support',
            integrations: 'Custom integrations',
            sla: 'SLA guarantees',
            whiteLabel: 'White-label options',
            onPremise: 'On-premise deployment',
          },
        },
      },
    },
    
    // Page Titles
    pages: {
      overview: {
        creator: 'Creator Dashboard',
        company: 'Company Dashboard',
      },
      analytics: {
        creator: 'Analytics',
        company: 'Company Analytics',
      },
      billing: {
        creator: 'Billing & Subscription',
        company: 'Company Billing',
      },
      settings: {
        creator: 'Settings',
        company: 'Company Settings',
      },
    },
    
    // Distribution
    distribution: {
      title: 'Distribution Channels',
      subtitle: 'Manage where your content is published',
      channels: {
        website: {
          name: 'Website',
          description: 'Your owned web presence',
        },
        social: {
          name: 'Social Media',
          description: 'Instagram, LinkedIn, TikTok, X',
        },
        video: {
          name: 'Video Platforms',
          description: 'YouTube, Vimeo',
        },
        aiSearch: {
          name: 'AI Search',
          description: 'ChatGPT, Perplexity, SearchGPT',
        },
      },
      status: {
        inactive: 'Inactive',
        active: 'Active',
      },
      configure: 'Configure',
      comingSoon: 'Configuration coming soon',
      coverage: 'Coverage',
      recommendations: {
        websiteOptimize: 'Medium coverage - optimize content distribution',
        socialPerforming: 'Strong performer this week',
        videoActivate: 'Low coverage - consider activating',
        aiSearchActivate: 'Emerging channel - early adoption opportunity',
      },
    },
    
    // Signals
    signals: {
      title: 'Signals & Tracking',
      subtitle: 'Monitor your visibility and reach',
      metrics: {
        visibilityScore: {
          name: 'Visibility Score',
          description: 'Overall visibility rating',
        },
        reach: {
          name: 'Reach',
          description: 'People who saw your content',
        },
        clicks: {
          name: 'Clicks',
          description: 'Total link clicks',
        },
        mentions: {
          name: 'Mentions',
          description: 'Brand mentions across channels',
        },
      },
      timeRange: {
        label: 'Time Range',
        last7days: 'Last 7 days',
        last30days: 'Last 30 days',
        last90days: 'Last 90 days',
        allTime: 'All time',
      },
      chartPlaceholder: 'Chart visualization coming soon',
      noData: 'No data available yet',
      trend: {
        up: 'Trending up',
        down: 'Trending down',
        neutral: 'Stable',
      },
      insights: {
        title: 'What changed?',
        visibilityScoreIncrease: 'Visibility Score Improved',
        visibilityScoreIncreaseDesc: 'Your overall visibility increased by 12% this period, driven by stronger social media presence.',
        reachDecline: 'Reach Declined',
        reachDeclineDesc: 'Your reach dropped by 5% compared to last period. Consider increasing posting frequency.',
        clickPerformance: 'Strong Click Performance',
        clickPerformanceDesc: 'Click-through rate improved by 8%. Your content is resonating with your audience.',
        socialOpportunity: 'Social Media Opportunity',
        socialOpportunityDesc: 'Your social channels show 68% coverage. Increase activity to maximize reach potential.',
      },
    },
    
    // Content Flow
    flow: {
      title: 'Content Flow',
      subtitle: 'Understand how your content creates visibility',
      bottlenecks: {
        title: 'Flow Analysis',
        distributionToSignalsDrop: 'Most content drops between Distribution and Signals. Consider improving tracking setup.',
        signalsToInsightsDrop: 'Large drop from Signals to Insights suggests missed opportunities for optimization.',
      },
      itemsLabel: 'Items',
      steps: {
        content: {
          name: 'Content',
          description: 'Create and optimize your content',
        },
        distribution: {
          name: 'Distribution',
          description: 'Publish across channels',
        },
        signals: {
          name: 'Signals',
          description: 'Track performance metrics',
        },
        insights: {
          name: 'Insights',
          description: 'Learn and improve',
        },
      },
    },
    
    // Rules & Triggers
    rules: {
      title: 'Rules & Triggers',
      subtitle: 'Define conditions and automated responses',
      overview: 'Rules Overview',
      allRules: 'All Rules',
      ruleDetails: 'Rule Details',
      enabled: 'Enabled',
      disabled: 'Disabled',
      viewDetails: 'View Details',
      condition: 'Condition',
      action: 'Action',
      scope: 'Scope',
      preview: {
        if: 'IF',
        then: 'THEN',
      },
      severity: {
        info: 'Info',
        warning: 'Warning',
        critical: 'Critical',
      },
      scopes: {
        signals: 'Signals',
        distribution: 'Distribution',
        flow: 'Flow',
      },
      titles: {
        lowVisibilityWarning: 'Low Visibility Warning',
        reachDeclineAlert: 'Reach Decline Alert',
        clickRateInfo: 'Click Rate Insight',
        lowCoverageWarning: 'Low Coverage Warning',
        channelInactiveAlert: 'Channel Inactive Alert',
        coverageGoodInfo: 'Good Coverage Feedback',
        conversionDropWarning: 'Conversion Drop Warning',
        flowHealthCritical: 'Flow Health Critical',
      },
      descriptions: {
        lowVisibilityWarningDesc: 'Alert when visibility score drops below threshold',
        reachDeclineAlertDesc: 'Notify when reach declines significantly',
        clickRateInfoDesc: 'Show positive feedback when click rate is high',
        lowCoverageWarningDesc: 'Warn when channel coverage is low',
        channelInactiveAlertDesc: 'Alert when channel shows no activity',
        coverageGoodInfoDesc: 'Positive feedback for good coverage',
        conversionDropWarningDesc: 'Warn when flow conversion drops',
        flowHealthCriticalDesc: 'Critical alert for very low flow health',
      },
      actions: {
        showWarningAction: 'Display a warning message to the user',
        sendAlertAction: 'Send an alert notification',
        showInsightAction: 'Show a positive insight card',
        recommendActivationAction: 'Recommend activating the channel',
        highlightChannelAction: 'Highlight the channel in the UI',
        showPositiveFeedbackAction: 'Display positive feedback',
        showBottleneckAction: 'Show bottleneck analysis',
        sendUrgentAlertAction: 'Send an urgent alert notification',
      },
      metrics: {
        visibilityScore: 'Visibility Score',
        reach: 'Reach',
        coverage: 'Coverage',
        clickRate: 'Click Rate',
        flowConversion: 'Flow Conversion',
        channelActivity: 'Channel Activity',
      },
      operators: {
        '<': 'less than',
        '>': 'greater than',
        '<=': 'less than or equal',
        '>=': 'greater than or equal',
        'change': 'changes by',
      },
      timeframes: {
        '7d': '7 days',
        '30d': '30 days',
        '90d': '90 days',
      },
      conditionPreview: '{metric} {operator} {value} within {timeframe}',
      noRules: 'No rules configured yet',
      comingSoon: 'Rule editing coming soon',
    },
    
    // Actions
    actions: {
      title: 'Actions Preview',
      subtitle: 'Simulated automation responses (no execution)',
      overview: 'Actions Overview',
      allActions: 'All Actions',
      actionDetails: 'Action Details',
      enabled: 'Enabled',
      disabled: 'Disabled',
      viewDetails: 'View Details',
      type: 'Type',
      target: 'Target',
      relatedRule: 'Related Rule',
      simulatedResult: 'Simulated Outcome',
      simulation: 'Simulation',
      simulationNotice: 'This action is a simulation. No automation is active.',
      noActions: 'No actions configured yet',
      triggeredBy: 'Triggered by Rule',
      types: {
        notify: 'Notify',
        recommend: 'Recommend',
        prepare: 'Prepare',
      },
      targets: {
        dashboard: 'Dashboard',
        user: 'User',
        system: 'System',
      },
      titles: {
        showLowVisibilityWarning: 'Show Low Visibility Warning',
        sendReachDeclineAlert: 'Send Reach Decline Alert',
        displayClickRateInsight: 'Display Click Rate Insight',
        recommendChannelActivation: 'Recommend Channel Activation',
        highlightInactiveChannel: 'Highlight Inactive Channel',
        showCoveragePositiveFeedback: 'Show Coverage Positive Feedback',
        prepareBottleneckAnalysis: 'Prepare Bottleneck Analysis',
        sendFlowHealthUrgentAlert: 'Send Flow Health Urgent Alert',
      },
      descriptions: {
        showLowVisibilityWarningDesc: 'Display a warning banner on the dashboard when visibility score is low',
        sendReachDeclineAlertDesc: 'Send email notification to user about significant reach decline',
        displayClickRateInsightDesc: 'Show positive insight card highlighting good click performance',
        recommendChannelActivationDesc: 'Display recommendation to activate low-coverage channel',
        highlightInactiveChannelDesc: 'Visually highlight inactive channel in distribution overview',
        showCoveragePositiveFeedbackDesc: 'Show positive notification about good channel coverage',
        prepareBottleneckAnalysisDesc: 'Generate detailed bottleneck analysis data for flow review',
        sendFlowHealthUrgentAlertDesc: 'Send urgent alert about critical flow health issues',
      },
      simulations: {
        lowVisibilityWarningSimulation: 'Would display: "⚠️ Visibility Score is below 40. Consider increasing content activity."',
        reachDeclineAlertSimulation: 'Would send email: "Your reach has declined by 20% in the last 30 days. Review your distribution strategy."',
        clickRateInsightSimulation: 'Would show insight card: "✓ Click rate above 5% - your content is performing well!"',
        channelActivationSimulation: 'Would display recommendation badge: "Low coverage detected. Activate this channel to improve visibility."',
        inactiveChannelSimulation: 'Would add red highlight border and "Inactive" badge to channel card in distribution page.',
        coveragePositiveSimulation: 'Would show notification: "✓ Excellent! Your channel coverage is above 70%."',
        bottleneckAnalysisSimulation: 'Would generate analysis report: "50% drop detected between Distribution and Signals. Check tracking setup."',
        flowHealthUrgentSimulation: 'Would send urgent email: "🚨 Critical: Flow conversion below 30%. Immediate attention required."',
      },
    },
    
    // Automation
    automation: {
      title: 'Automation Readiness',
      subtitle: 'Preview automation configurations (no execution)',
      overview: 'Automation Overview',
      allAutomations: 'All Automations',
      automationDetails: 'Automation Details',
      enabled: 'Enabled',
      disabled: 'Disabled',
      viewDetails: 'View Details',
      enableAutomation: 'Enable Automation',
      mode: 'Execution Mode',
      status: 'Status',
      relatedAction: 'Related Action',
      safetyNotice: 'Safety Notice',
      lastSimulation: 'Last Simulation',
      readinessStatus: 'Readiness Status',
      notActiveNotice: 'Automation is not active. This is a readiness preview.',
      noAutomations: 'No automations configured yet',
      automationReady: 'Automation Ready',
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
      safetyNotices: {
        previewOnlyNotice: 'This automation is in preview mode. No actions will be executed automatically.',
        manualModeNotice: 'This automation requires manual trigger. Automatic execution is disabled.',
        autoModeNotAvailable: 'Automatic mode is not yet available. This feature is planned for future release.',
      },
      blockedReasons: {
        blockedMissingPermissions: 'Missing required permissions. Upgrade your plan to enable this automation.',
        blockedRequiresPlan: 'Requires Pro plan or higher. Upgrade to unlock automation features.',
        blockedAutoNotImplemented: 'Automatic execution is not implemented yet. Feature coming soon.',
      },
      simulationResults: {
        lowVisibilityWarningPreview: 'Preview: Warning banner would be displayed on dashboard with visibility score alert.',
        reachDeclineAlertPreview: 'Preview: Email notification would be sent about reach decline with recommended actions.',
        clickRateInsightPreview: 'Preview: Positive insight card would appear highlighting good click performance.',
        channelActivationPreview: 'Preview: Recommendation badge would be added to low-coverage channel card.',
        inactiveChannelPreview: 'Preview: Inactive channel would be highlighted with red border and warning badge.',
        coveragePositivePreview: 'Preview: Positive feedback notification would be displayed for good coverage.',
        bottleneckAnalysisPreview: 'Preview: Detailed bottleneck analysis report would be generated for review.',
        flowHealthUrgentPreview: 'Preview: Urgent alert email would be sent regarding critical flow health.',
      },
    },

    // Reports & Exports
    reports: {
      title: 'Reports & Exports',
      subtitle: 'Executive summaries and export previews',
      overview: 'Report Overview',
      allReports: 'All Reports',
      reportDetails: 'Report Details',
      
      // Report Properties
      type: 'Type',
      period: 'Period',
      summary: 'Executive Summary',
      highlightsLabel: 'Key Highlights',
      metrics: 'Metrics Overview',
      relatedRules: 'Related Rules',
      relatedActions: 'Related Actions',
      
      // Actions
      viewReport: 'View Report',
      exportPDF: 'Export PDF',
      exportCSV: 'Export CSV',
      
      // Types
      types: {
        weekly: 'Weekly',
        monthly: 'Monthly',
        custom: 'Custom',
      },
      
      // Notices
      exportNotice: 'Exports are previews. No files are generated.',
      previewOnly: 'Preview Only - No actual export functionality',
      
      // Export Previews
      exportPreview: 'Export Preview',
      pdfExportDescription: 'PDF format with charts, tables, and executive summary. Ideal for presentations and sharing.',
      csvExportDescription: 'CSV format with raw data and metrics. Ideal for further analysis in spreadsheet tools.',
      
      // Report Titles
      titles: {
        weeklyVisibilityReport: 'Weekly Visibility Report',
        monthlyPerformanceReport: 'Monthly Performance Report',
        customSnapshot: 'Custom Performance Snapshot',
      },
      
      // Summaries
      summaries: {
        weeklyVisibilitySummary: 'Overall visibility performance remains strong with an 87/100 score. Reach increased by 12% compared to previous week. Minor attention needed in social media engagement.',
        monthlyPerformanceSummary: 'Monthly performance shows steady growth with 82/100 visibility score. Total reach exceeded 560K, representing 18% growth. Three new distribution channels activated successfully.',
        customSnapshotSummary: 'Custom period analysis reveals moderate performance at 79/100. Reach metrics stable at 98K. Two optimization opportunities identified in content flow.',
      },
      
      // Highlights
      highlights: {
        weeklyHighlight1: 'Visibility score improved by 5 points',
        weeklyHighlight2: 'Reach increased by 12% (17,400 new impressions)',
        weeklyHighlight3: 'Click-through rate stable at 6.1%',
        weeklyHighlight4: '3 automated rules triggered successfully',
        
        monthlyHighlight1: 'Activated 3 new distribution channels',
        monthlyHighlight2: 'Reach grew by 18% month-over-month',
        monthlyHighlight3: 'Engagement rate improved to 7.2%',
        monthlyHighlight4: '5 content bottlenecks resolved',
        monthlyHighlight5: '8 automated actions executed',
        
        customHighlight1: 'Identified 2 flow optimization opportunities',
        customHighlight2: 'Maintained stable reach during test period',
        customHighlight3: '2 new automation rules configured',
      },
    },

    // Execution & Manual Triggers
    execution: {
      title: 'Execution Log',
      subtitle: 'Manual action execution history (simulated)',
      overview: 'Execution Overview',
      allExecutions: 'All Executions',
      executionDetails: 'Execution Details',
      
      // Properties
      action: 'Action',
      triggeredBy: 'Triggered By',
      triggeredAt: 'Triggered At',
      status: 'Status',
      result: 'Result',
      
      // Manual Execution
      manualExecution: 'Manual Execution',
      runAction: 'Run Action',
      viewExecutionLog: 'View Execution Log',
      
      // Confirm Dialog
      confirmTitle: 'Confirm Action Execution',
      confirmMessage: 'Are you sure you want to run this action?',
      confirmNotice: 'This is a simulated execution. No real changes will be made.',
      confirmButton: 'Confirm & Run',
      cancelButton: 'Cancel',
      
      // Status
      statuses: {
        pending: 'Pending',
        confirmed: 'Confirmed',
        completed: 'Completed',
        cancelled: 'Cancelled',
      },
      
      // Notices
      simulationNotice: 'All executions are simulated. No real actions are performed.',
      noAutoMode: 'Manual execution only. No automatic background processing.',
      executionSuccess: 'Action executed successfully (simulation)',
      
      // Result Summaries
      results: {
        lowVisibilityWarningExecuted: 'Simulated: Warning banner displayed in dashboard with visibility score alert.',
        reachDeclineAlertExecuted: 'Simulated: Email notification sent about reach decline with recommended actions.',
        clickRateInsightDisplayed: 'Simulated: Positive insight card displayed highlighting good click performance.',
        channelActivationRecommended: 'Simulated: Recommendation badge added to low-coverage channel card.',
        inactiveChannelHighlighted: 'Simulated: Inactive channel highlighted with red border and warning badge.',
        coveragePositiveFeedbackShown: 'Simulated: Positive feedback notification displayed for good coverage.',
        bottleneckAnalysisPrepared: 'Simulated: Detailed bottleneck analysis report generated for review.',
        flowHealthAlertSent: 'Simulated: Urgent alert email sent regarding critical flow health.',
      },
    },

    // Auto Mode Engine (Phase 16A)
    autoMode: {
      title: 'Auto Mode Settings',
      subtitle: 'Configure automation levels, caps, and safety guards',
      enabled: 'Auto Mode Enabled',
      disabled: 'Auto Mode Disabled',
      
      // Account Status
      ownerAccount: 'Owner Account - Unlimited Auto Mode',
      requiresAddon: 'Requires Automation Add-on',
      addonActive: 'Automation Add-on Active',
      
      // Levels
      level: 'Automation Level',
      levels: {
        assisted: 'Assisted',
        guarded: 'Guarded',
        'full-auto': 'Full Auto',
      },
      levelDescriptions: {
        assisted: 'System suggests actions, you approve each one',
        guarded: 'Auto execution with caps and guards',
        'full-auto': 'Fully automated within your settings',
      },
      
      // Confidence
      confidence: 'Confidence Score',
      confidenceLevels: {
        high: 'High',
        medium: 'Medium',
        low: 'Low',
      },
      confidenceThreshold: 'Minimum Confidence',
      
      // Caps & Limits
      actionCaps: 'Action Caps',
      dailyLimit: 'Daily Limit',
      ruleCooldown: 'Rule Cooldown',
      channelLimit: 'Per Channel Limit',
      unlimited: 'Unlimited',
      hours: 'hours',
      actionsPerDay: 'actions/day',
      
      // Windows
      automationWindows: 'Automation Windows',
      allowedHours: 'Allowed Hours',
      blackoutDates: 'Blackout Dates',
      alwaysOn: 'Always On (24/7)',
      
      // Safety
      killSwitch: 'Kill Switch',
      killSwitchActive: 'All automation paused',
      killSwitchInactive: 'Automation running',
      activateKillSwitch: 'Activate Kill Switch',
      deactivateKillSwitch: 'Deactivate Kill Switch',
      
      // Execution Type
      executionTypes: {
        manual: 'Manual',
        auto: 'Auto',
      },
      
      // Usage & Billing
      usage: 'Automation Usage',
      includedActions: 'Included Actions',
      usedActions: 'Used Actions',
      remainingActions: 'Remaining',
      overageActions: 'Overage Actions',
      overageCost: 'Overage Cost',
      perAction: 'per action',
      
      // Notices
      ownerPrivileges: 'Owner account: Auto Mode is free and unlimited. No billing caps apply.',
      addonRequired: 'Automation Add-on required for Auto Mode. Available for Company accounts only.',
      limitReached: 'Action limit reached. Automation paused until next billing cycle or upgrade.',
      confidenceBelowThreshold: 'Confidence score below threshold. Action downgraded to manual approval.',
      outsideWindow: 'Outside automation window. Action will execute during next allowed time.',
      
      // Explainability
      whyExecuted: 'Why was this executed?',
      triggeredByRule: 'Triggered by Rule',
      confidenceScore: 'Confidence Score',
      withinWindow: 'Within automation window',
      belowCap: 'Below action cap',
      approvedBy: 'Approved by',
      
      // Explainability (for execution log tooltips)
      explainability: {
        autoExplainHighConfidence: 'High confidence score (85%+) allowed fully automated execution',
        autoExplainMediumConfidence: 'Medium confidence score (70-84%) - executed with guarded mode safety checks',
        autoExplainLowConfidence: 'Low confidence score (below 70%) - would require manual approval but executed in assisted mode',
      },
    },
    
    // Phase 16B: Simulation Layer
    simulation: {
      title: 'Simulation Results',
      evaluatedAt: 'Evaluated',
      justNow: 'just now',
      hoursAgo: 'h ago',
      daysAgo: 'd ago',
      
      // Risk Levels
      riskLevels: {
        low: 'Low Risk',
        medium: 'Medium Risk',
        high: 'High Risk',
      },
      
      // Metrics
      expectedImpact: 'Expected Impact',
      estimatedActions: 'Estimated Actions',
      estimatedCost: 'Estimated Cost',
      confidence: 'Prediction Confidence',
      basedOnData: 'Based on',
      dataPoints: 'data points',
      action: 'action',
      actions: 'actions',
      free: 'Free (Owner)',
      
      // Approval
      approved: 'Approved for Auto Execution',
      approvedBy: 'Approved by',
      approvalRequired: 'Company account: Approval required before Auto Mode can execute this automation.',
      ownerOptional: 'Owner account: You can approve or skip simulation.',
      approveForAutoExecution: 'Approve for Auto Execution',
      approve: 'Approve',
      skipSimulation: 'Skip Simulation',
      
      // Disclaimer
      disclaimer: 'Estimated impact based on recent system data. Actual results may vary.',
    },
    
    // Phase 16B: Deep Explainability
    explainability: {
      whyThisActionRan: 'Why This Action Ran',
      triggeredBy: 'Triggered By Rule',
      metricCrossedThreshold: 'Metric crossed threshold',
      threshold: 'Threshold',
      before: 'Before',
      after: 'After',
      thresholdValue: 'Threshold',
      evaluationWindow: 'Evaluation Window',
      evaluatedAt: 'Evaluated At',
      cooldownStatus: 'Cooldown Status',
      cooldownStatuses: {
        active: 'Active (Within Cooldown)',
        expired: 'Expired (Ready)',
        none: 'None',
      },
      confidenceBreakdown: 'Confidence Breakdown',
      totalConfidence: 'Total Confidence',
      dataBasedExplanation: 'All values are based on actual system metrics at execution time.',
    },
  },
  
  de: {
    // Merge public translations
    ...publicTranslations.de,
    
    // Top Bar
    contextSwitcher: {
      creator: 'Creator',
      company: 'Unternehmen',
    },
    languageSwitcher: {
      en: 'Englisch',
      de: 'Deutsch',
    },
    
    // Navigation
    nav: {
      // Public pages
      features: 'Features',
      pricing: 'Preise',
      about: 'Über uns',
      blog: 'Blog',
      login: 'Anmelden',
      getStarted: 'Jetzt starten',
      
      // Dashboard - Core
      overview: 'Übersicht',
      analytics: 'Analytics',
      billing: 'Abrechnung',
      settings: 'Einstellungen',
      
      // Content & Media
      contentHub: 'Content Hub',
      videoModule: 'Video',
      imageModule: 'Bilder',
      editor: 'Editor',
      
      // Automation
      campaigns: 'Kampagnen',
      socialDistribution: 'Social Distribution',
      schedules: 'Zeitpläne',
      
      // Communication
      chat: 'Chat',
      notifications: 'Benachrichtigungen',
      
      // AI / Agents
      agents: 'Agenten',
      agentSessions: 'Sitzungen',
      agentResults: 'Ergebnisse',
      agentHistory: 'Verlauf',
      
      // Visibility Engine
      distribution: 'Distribution',
      signals: 'Signale',
      flow: 'Content Flow',
      
      // Logic
      rules: 'Regeln & Trigger',
      actions: 'Aktionen (Vorschau)',
      
      // Automation
      automation: 'Automatisierungs-Bereitschaft',
      autoModeSettings: 'Auto-Mode-Einstellungen',
      
      // Reports
      reports: 'Reports & Exporte',
      
      // Execution
      executions: 'Ausführungsprotokoll',
    },
    
    // Section Headers
    sections: {
      core: 'Kern',
      visibilityEngine: 'Visibility Engine',
      logic: 'Logik',
      automation: 'Automatisierung',
      reports: 'Reports',
      execution: 'Ausführung',
      contentMedia: 'Content & Medien',
      communication: 'Kommunikation',
      ai: 'KI & Agenten',
    },
    
    // Common
    common: {
      comingSoon: 'Demnächst',
      placeholder: 'Dieses Modul befindet sich aktuell in Entwicklung',
      unlimited: 'Unbegrenzt',
      upgrade: 'Upgraden',
      downgrade: 'Downgraden',
      currentPlan: 'Aktueller Plan',
      cancel: 'Abbrechen',
    },
    
    // Billing
    billing: {
      title: 'Abrechnung & Abo',
      currentPlan: 'Dein aktueller Plan',
      planComparison: 'Pläne vergleichen',
      billingFrequency: 'Abrechnungsintervall',
      monthly: 'Monatlich',
      yearly: 'Jährlich',
      yearlyDiscount: 'Spare 20%',
      
      badges: {
        popular: 'Beliebt',
        enterprise: 'Enterprise',
        bestValue: 'Bestes Angebot',
      },
      
      usage: {
        label: 'Nutzung',
        workspaces: 'Workspaces',
        scheduledPosts: 'Geplante Posts',
        aiAgents: 'KI-Agenten',
        storage: 'Speicher',
        teamMembers: 'Team-Mitglieder',
        of: 'von',
      },
      
      plans: {
        free: {
          name: 'Free',
          description: 'Perfekt für den Einstieg',
          price: 'Kostenlos Forever',
          features: {
            workspaces: '1 Workspace',
            contentManagement: 'Basis Content-Management',
            scheduledPosts: 'Bis zu 10 geplante Posts/Monat',
            support: 'Community Support',
            dataRetention: '7 Tage Daten-Retention',
          },
        },
        pro: {
          name: 'Pro',
          description: 'Für ernsthafte Creator',
          price: 'Kommt bald',
          features: {
            workspaces: '3 Workspaces',
            contentLibrary: 'Vollständige Content Library',
            scheduledPosts: 'Unbegrenzte geplante Posts',
            analytics: 'Basis Analytics',
            support: 'Email Support',
            dataRetention: '90 Tage Daten-Retention',
          },
        },
        proPlus: {
          name: 'Pro+',
          description: 'Für Power User',
          price: 'Kommt bald',
          features: {
            workspaces: '10 Workspaces',
            advancedAnalytics: 'Erweiterte Analytics',
            aiAgents: 'KI-Agenten (5 gleichzeitig)',
            campaigns: 'Campaign Automation',
            support: 'Priority Support',
            dataRetention: '1 Jahr Daten-Retention',
          },
        },
        ultimate: {
          name: 'Ultimate',
          description: 'Für Teams und Agenturen',
          price: 'Kommt bald',
          features: {
            workspaces: 'Unbegrenzte Workspaces',
            collaboration: 'Team Collaboration',
            aiAgents: 'KI-Agenten (20 gleichzeitig)',
            reports: 'Custom Reports',
            api: 'API-Zugang',
            dataRetention: 'Unbegrenzte Daten-Retention',
          },
        },
        ultimatePlus: {
          name: 'Ultimate+',
          description: 'Für Enterprises',
          price: 'Kommt bald',
          features: {
            everything: 'Alles aus Ultimate',
            support: 'Dedicated Support',
            integrations: 'Custom Integrationen',
            sla: 'SLA-Garantien',
            whiteLabel: 'White-Label-Optionen',
            onPremise: 'On-Premise Deployment',
          },
        },
      },
    },
    
    // Page Titles
    pages: {
      overview: {
        creator: 'Creator Dashboard',
        company: 'Unternehmens-Dashboard',
      },
      analytics: {
        creator: 'Analytics',
        company: 'Unternehmens-Analytics',
      },
      billing: {
        creator: 'Abrechnung & Abo',
        company: 'Unternehmens-Abrechnung',
      },
      settings: {
        creator: 'Einstellungen',
        company: 'Unternehmens-Einstellungen',
      },
    },
    
    // Distribution
    distribution: {
      title: 'Distributions-Kanäle',
      subtitle: 'Verwalte, wo dein Content veröffentlicht wird',
      channels: {
        website: {
          name: 'Website',
          description: 'Deine eigene Web-Präsenz',
        },
        social: {
          name: 'Social Media',
          description: 'Instagram, LinkedIn, TikTok, X',
        },
        video: {
          name: 'Video-Plattformen',
          description: 'YouTube, Vimeo',
        },
        aiSearch: {
          name: 'KI-Suche',
          description: 'ChatGPT, Perplexity, SearchGPT',
        },
      },
      status: {
        inactive: 'Inaktiv',
        active: 'Aktiv',
      },
      configure: 'Konfigurieren',
      comingSoon: 'Konfiguration demnächst verfügbar',
      coverage: 'Abdeckung',
      recommendations: {
        websiteOptimize: 'Mittlere Abdeckung - Content-Distribution optimieren',
        socialPerforming: 'Starke Performance diese Woche',
        videoActivate: 'Geringe Abdeckung - Aktivierung erwägen',
        aiSearchActivate: 'Aufstrebender Kanal - Early-Adoption-Chance',
      },
    },
    
    // Signals
    signals: {
      title: 'Signale & Tracking',
      subtitle: 'Überwache deine Sichtbarkeit und Reichweite',
      metrics: {
        visibilityScore: {
          name: 'Sichtbarkeits-Score',
          description: 'Gesamtbewertung deiner Sichtbarkeit',
        },
        reach: {
          name: 'Reichweite',
          description: 'Personen, die deinen Content gesehen haben',
        },
        clicks: {
          name: 'Klicks',
          description: 'Gesamt-Link-Klicks',
        },
        mentions: {
          name: 'Erwähnungen',
          description: 'Marken-Erwähnungen über alle Kanäle',
        },
      },
      timeRange: {
        label: 'Zeitraum',
        last7days: 'Letzte 7 Tage',
        last30days: 'Letzte 30 Tage',
        last90days: 'Letzte 90 Tage',
        allTime: 'Gesamt',
      },
      chartPlaceholder: 'Chart-Visualisierung demnächst verfügbar',
      noData: 'Noch keine Daten verfügbar',
      trend: {
        up: 'Steigend',
        down: 'Fallend',
        neutral: 'Stabil',
      },
      insights: {
        title: 'Was hat sich geändert?',
        visibilityScoreIncrease: 'Sichtbarkeits-Score verbessert',
        visibilityScoreIncreaseDesc: 'Deine Gesamtsichtbarkeit ist in dieser Periode um 12% gestiegen, getrieben durch stärkere Social-Media-Präsenz.',
        reachDecline: 'Reichweite gesunken',
        reachDeclineDesc: 'Deine Reichweite ist im Vergleich zur letzten Periode um 5% gesunken. Erwäge, die Posting-Frequenz zu erhöhen.',
        clickPerformance: 'Starke Click-Performance',
        clickPerformanceDesc: 'Click-Through-Rate um 8% verbessert. Dein Content kommt bei deinem Publikum an.',
        socialOpportunity: 'Social-Media-Chance',
        socialOpportunityDesc: 'Deine Social-Kanäle zeigen 68% Abdeckung. Erhöhe die Aktivität, um Reichweiten-Potenzial zu maximieren.',
      },
    },
    
    // Content Flow
    flow: {
      title: 'Content Flow',
      subtitle: 'Verstehe, wie dein Content Sichtbarkeit erzeugt',
      bottlenecks: {
        title: 'Flow-Analyse',
        distributionToSignalsDrop: 'Die meisten Inhalte gehen zwischen Distribution und Signalen verloren. Erwäge, das Tracking-Setup zu verbessern.',
        signalsToInsightsDrop: 'Großer Verlust von Signalen zu Insights deutet auf verpasste Optimierungs-Chancen hin.',
      },
      itemsLabel: 'Elemente',
      steps: {
        content: {
          name: 'Content',
          description: 'Erstelle und optimiere deinen Content',
        },
        distribution: {
          name: 'Distribution',
          description: 'Veröffentliche über Kanäle',
        },
        signals: {
          name: 'Signale',
          description: 'Verfolge Performance-Metriken',
        },
        insights: {
          name: 'Insights',
          description: 'Lerne und verbessere',
        },
      },
    },
    
    // Rules & Triggers
    rules: {
      title: 'Regeln & Trigger',
      subtitle: 'Definiere Bedingungen und automatisierte Reaktionen',
      overview: 'Regelübersicht',
      allRules: 'Alle Regeln',
      ruleDetails: 'Regeldetails',
      enabled: 'Aktiviert',
      disabled: 'Deaktiviert',
      viewDetails: 'Details anzeigen',
      condition: 'Bedingung',
      action: 'Aktion',
      scope: 'Bereich',
      preview: {
        if: 'WENN',
        then: 'DANN',
      },
      severity: {
        info: 'Info',
        warning: 'Warnung',
        critical: 'Kritisch',
      },
      scopes: {
        signals: 'Signale',
        distribution: 'Distribution',
        flow: 'Flow',
      },
      titles: {
        lowVisibilityWarning: 'Niedrige Sichtbarkeitswarnung',
        reachDeclineAlert: 'Reichweitenrückgang-Alarm',
        clickRateInfo: 'Klickrate-Einsicht',
        lowCoverageWarning: 'Niedrige Abdeckungswarnung',
        channelInactiveAlert: 'Kanal-Inaktivitäts-Alarm',
        coverageGoodInfo: 'Gute Abdeckungs-Rückmeldung',
        conversionDropWarning: 'Konversionsrückgang-Warnung',
        flowHealthCritical: 'Flow-Gesundheit Kritisch',
      },
      descriptions: {
        lowVisibilityWarningDesc: 'Warnung bei Unterschreitung des Sichtbarkeits-Schwellenwerts',
        reachDeclineAlertDesc: 'Benachrichtigung bei signifikantem Reichweitenrückgang',
        clickRateInfoDesc: 'Positive Rückmeldung bei hoher Klickrate',
        lowCoverageWarningDesc: 'Warnung bei niedriger Kanalabdeckung',
        channelInactiveAlertDesc: 'Alarm bei fehlender Kanalaktivität',
        coverageGoodInfoDesc: 'Positive Rückmeldung für gute Abdeckung',
        conversionDropWarningDesc: 'Warnung bei sinkendem Flow-Conversion',
        flowHealthCriticalDesc: 'Kritischer Alarm bei sehr niedriger Flow-Gesundheit',
      },
      actions: {
        showWarningAction: 'Eine Warnmeldung anzeigen',
        sendAlertAction: 'Eine Alarm-Benachrichtigung senden',
        showInsightAction: 'Eine positive Insight-Karte anzeigen',
        recommendActivationAction: 'Empfehle Kanalaktivierung',
        highlightChannelAction: 'Markiere den Kanal in der UI',
        showPositiveFeedbackAction: 'Positive Rückmeldung anzeigen',
        showBottleneckAction: 'Bottleneck-Analyse anzeigen',
        sendUrgentAlertAction: 'Dringende Alarm-Benachrichtigung senden',
      },
      metrics: {
        visibilityScore: 'Sichtbarkeits-Score',
        reach: 'Reichweite',
        coverage: 'Abdeckung',
        clickRate: 'Klickrate',
        flowConversion: 'Flow-Konversion',
        channelActivity: 'Kanalaktivität',
      },
      operators: {
        '<': 'kleiner als',
        '>': 'größer als',
        '<=': 'kleiner oder gleich',
        '>=': 'größer oder gleich',
        'change': 'ändert sich um',
      },
      timeframes: {
        '7d': '7 Tage',
        '30d': '30 Tage',
        '90d': '90 Tage',
      },
      conditionPreview: '{metric} {operator} {value} innerhalb von {timeframe}',
      noRules: 'Noch keine Regeln konfiguriert',
      comingSoon: 'Regelbearbeitung demnächst verfügbar',
    },
    
    // Actions
    actions: {
      title: 'Aktionen-Vorschau',
      subtitle: 'Simulierte Automatisierungs-Antworten (keine Ausführung)',
      overview: 'Aktionen-Übersicht',
      allActions: 'Alle Aktionen',
      actionDetails: 'Aktionsdetails',
      enabled: 'Aktiviert',
      disabled: 'Deaktiviert',
      viewDetails: 'Details anzeigen',
      type: 'Typ',
      target: 'Ziel',
      relatedRule: 'Zugehörige Regel',
      simulatedResult: 'Simuliertes Ergebnis',
      simulation: 'Simulation',
      simulationNotice: 'Diese Aktion ist eine Simulation. Keine Automatisierung ist aktiv.',
      noActions: 'Noch keine Aktionen konfiguriert',
      triggeredBy: 'Ausgelöst durch Regel',
      types: {
        notify: 'Benachrichtigen',
        recommend: 'Empfehlen',
        prepare: 'Vorbereiten',
      },
      targets: {
        dashboard: 'Dashboard',
        user: 'Benutzer',
        system: 'System',
      },
      titles: {
        showLowVisibilityWarning: 'Niedrige Sichtbarkeitswarnung anzeigen',
        sendReachDeclineAlert: 'Reichweitenrückgang-Alarm senden',
        displayClickRateInsight: 'Klickrate-Einsicht anzeigen',
        recommendChannelActivation: 'Kanalaktivierung empfehlen',
        highlightInactiveChannel: 'Inaktiven Kanal hervorheben',
        showCoveragePositiveFeedback: 'Positive Abdeckungs-Rückmeldung zeigen',
        prepareBottleneckAnalysis: 'Bottleneck-Analyse vorbereiten',
        sendFlowHealthUrgentAlert: 'Dringenden Flow-Gesundheits-Alarm senden',
      },
      descriptions: {
        showLowVisibilityWarningDesc: 'Ein Warnbanner im Dashboard anzeigen, wenn Sichtbarkeits-Score niedrig ist',
        sendReachDeclineAlertDesc: 'E-Mail-Benachrichtigung über signifikanten Reichweitenrückgang senden',
        displayClickRateInsightDesc: 'Positive Insight-Karte mit guter Klick-Performance anzeigen',
        recommendChannelActivationDesc: 'Empfehlung zur Aktivierung von Kanälen mit niedriger Abdeckung anzeigen',
        highlightInactiveChannelDesc: 'Inaktiven Kanal in Distribution-Übersicht visuell hervorheben',
        showCoveragePositiveFeedbackDesc: 'Positive Benachrichtigung über gute Kanalabdeckung anzeigen',
        prepareBottleneckAnalysisDesc: 'Detaillierte Bottleneck-Analysedaten für Flow-Review generieren',
        sendFlowHealthUrgentAlertDesc: 'Dringenden Alarm über kritische Flow-Gesundheitsprobleme senden',
      },
      simulations: {
        lowVisibilityWarningSimulation: 'Würde anzeigen: "⚠️ Sichtbarkeits-Score ist unter 40. Erwäge mehr Content-Aktivität."',
        reachDeclineAlertSimulation: 'Würde E-Mail senden: "Deine Reichweite ist in den letzten 30 Tagen um 20% gesunken. Überprüfe deine Distributions-Strategie."',
        clickRateInsightSimulation: 'Würde Insight-Karte zeigen: "✓ Klickrate über 5% - dein Content performt gut!"',
        channelActivationSimulation: 'Würde Empfehlungs-Badge anzeigen: "Niedrige Abdeckung erkannt. Aktiviere diesen Kanal für bessere Sichtbarkeit."',
        inactiveChannelSimulation: 'Würde roten Rahmen und "Inaktiv"-Badge zur Kanal-Karte auf Distribution-Seite hinzufügen.',
        coveragePositiveSimulation: 'Würde Benachrichtigung zeigen: "✓ Exzellent! Deine Kanalabdeckung liegt über 70%."',
        bottleneckAnalysisSimulation: 'Würde Analysebericht generieren: "50% Rückgang zwischen Distribution und Signalen erkannt. Prüfe Tracking-Setup."',
        flowHealthUrgentSimulation: 'Würde dringende E-Mail senden: "🚨 Kritisch: Flow-Konversion unter 30%. Sofortige Aufmerksamkeit erforderlich."',
      },
    },
    
    // Automation
    automation: {
      title: 'Automatisierungs-Bereitschaft',
      subtitle: 'Vorschau Automatisierungs-Konfigurationen (keine Ausführung)',
      overview: 'Automatisierungs-Übersicht',
      allAutomations: 'Alle Automatisierungen',
      automationDetails: 'Automatisierungsdetails',
      enabled: 'Aktiviert',
      disabled: 'Deaktiviert',
      viewDetails: 'Details anzeigen',
      enableAutomation: 'Automatisierung aktivieren',
      mode: 'Ausführungsmodus',
      status: 'Status',
      relatedAction: 'Zugehörige Aktion',
      safetyNotice: 'Sicherheitshinweis',
      lastSimulation: 'Letzte Simulation',
      readinessStatus: 'Bereitschaftsstatus',
      notActiveNotice: 'Automatisierung ist nicht aktiv. Dies ist eine Bereitschaftsvorschau.',
      noAutomations: 'Noch keine Automatisierungen konfiguriert',
      automationReady: 'Automatisierung Bereit',
      modes: {
        preview: 'Vorschau',
        manual: 'Manuell',
        auto: 'Auto',
      },
      statuses: {
        ready: 'Bereit',
        blocked: 'Blockiert',
        disabled: 'Deaktiviert',
      },
      safetyNotices: {
        previewOnlyNotice: 'Diese Automatisierung ist im Vorschaumodus. Keine Aktionen werden automatisch ausgeführt.',
        manualModeNotice: 'Diese Automatisierung erfordert manuelle Auslösung. Automatische Ausführung ist deaktiviert.',
        autoModeNotAvailable: 'Automatischer Modus ist noch nicht verfügbar. Dieses Feature ist für zukünftige Releases geplant.',
      },
      blockedReasons: {
        blockedMissingPermissions: 'Fehlende erforderliche Berechtigungen. Upgrade deinen Plan um diese Automatisierung zu aktivieren.',
        blockedRequiresPlan: 'Erfordert Pro-Plan oder höher. Upgrade um Automatisierungs-Features freizuschalten.',
        blockedAutoNotImplemented: 'Automatische Ausführung ist noch nicht implementiert. Feature kommt bald.',
      },
      simulationResults: {
        lowVisibilityWarningPreview: 'Vorschau: Warnbanner würde im Dashboard mit Sichtbarkeits-Score-Alarm angezeigt.',
        reachDeclineAlertPreview: 'Vorschau: E-Mail-Benachrichtigung würde über Reichweitenrückgang mit empfohlenen Maßnahmen gesendet.',
        clickRateInsightPreview: 'Vorschau: Positive Insight-Karte würde erscheinen und gute Klick-Performance hervorheben.',
        channelActivationPreview: 'Vorschau: Empfehlungs-Badge würde zur Kanal-Karte mit niedriger Abdeckung hinzugefügt.',
        inactiveChannelPreview: 'Vorschau: Inaktiver Kanal würde mit rotem Rahmen und Warnungs-Badge hervorgehoben.',
        coveragePositivePreview: 'Vorschau: Positive Feedback-Benachrichtigung würde für gute Abdeckung angezeigt.',
        bottleneckAnalysisPreview: 'Vorschau: Detaillierter Bottleneck-Analysebericht würde zur Überprüfung generiert.',
        flowHealthUrgentPreview: 'Vorschau: Dringende Alarm-E-Mail würde bezüglich kritischer Flow-Gesundheit gesendet.',
      },
    },

    // Reports & Exports
    reports: {
      title: 'Reports & Exporte',
      subtitle: 'Executive Summaries und Export-Vorschauen',
      overview: 'Report-Übersicht',
      allReports: 'Alle Reports',
      reportDetails: 'Report-Details',
      
      // Report Properties
      type: 'Typ',
      period: 'Zeitraum',
      summary: 'Executive Summary',
      highlightsLabel: 'Wichtigste Erkenntnisse',
      metrics: 'Metriken-Übersicht',
      relatedRules: 'Verknüpfte Regeln',
      relatedActions: 'Verknüpfte Aktionen',
      
      // Actions
      viewReport: 'Report anzeigen',
      exportPDF: 'PDF exportieren',
      exportCSV: 'CSV exportieren',
      
      // Types
      types: {
        weekly: 'Wöchentlich',
        monthly: 'Monatlich',
        custom: 'Benutzerdefiniert',
      },
      
      // Notices
      exportNotice: 'Exporte sind Vorschauen. Es werden keine Dateien erzeugt.',
      previewOnly: 'Nur Vorschau - Keine echte Export-Funktion',
      
      // Export Previews
      exportPreview: 'Export-Vorschau',
      pdfExportDescription: 'PDF-Format mit Diagrammen, Tabellen und Executive Summary. Ideal für Präsentationen und Austausch.',
      csvExportDescription: 'CSV-Format mit Rohdaten und Metriken. Ideal für weitere Analysen in Tabellenkalkulations-Tools.',
      
      // Report Titles
      titles: {
        weeklyVisibilityReport: 'Wöchentlicher Visibility-Report',
        monthlyPerformanceReport: 'Monatlicher Performance-Report',
        customSnapshot: 'Benutzerdefinierte Performance-Übersicht',
      },
      
      // Summaries
      summaries: {
        weeklyVisibilitySummary: 'Die Gesamt-Visibility-Performance bleibt stark mit einem Score von 87/100. Reichweite um 12% gegenüber Vorwoche gestiegen. Geringfügige Aufmerksamkeit bei Social-Media-Engagement erforderlich.',
        monthlyPerformanceSummary: 'Monatliche Performance zeigt stetiges Wachstum mit 82/100 Visibility-Score. Gesamtreichweite überschritt 560K, was 18% Wachstum entspricht. Drei neue Distributions-Kanäle erfolgreich aktiviert.',
        customSnapshotSummary: 'Benutzerdefinierte Perioden-Analyse zeigt moderate Performance mit 79/100. Reichweiten-Metriken stabil bei 98K. Zwei Optimierungs-Möglichkeiten im Content-Flow identifiziert.',
      },
      
      // Highlights
      highlights: {
        weeklyHighlight1: 'Visibility-Score um 5 Punkte verbessert',
        weeklyHighlight2: 'Reichweite um 12% gestiegen (17.400 neue Impressionen)',
        weeklyHighlight3: 'Click-Through-Rate stabil bei 6,1%',
        weeklyHighlight4: '3 automatisierte Regeln erfolgreich ausgelöst',
        
        monthlyHighlight1: '3 neue Distributions-Kanäle aktiviert',
        monthlyHighlight2: 'Reichweite um 18% Monat-über-Monat gewachsen',
        monthlyHighlight3: 'Engagement-Rate auf 7,2% verbessert',
        monthlyHighlight4: '5 Content-Bottlenecks aufgelöst',
        monthlyHighlight5: '8 automatisierte Aktionen ausgeführt',
        
        customHighlight1: '2 Flow-Optimierungs-Möglichkeiten identifiziert',
        customHighlight2: 'Stabile Reichweite während Test-Periode gehalten',
        customHighlight3: '2 neue Automatisierungs-Regeln konfiguriert',
      },
    },

    // Execution & Manual Triggers
    execution: {
      title: 'Ausführungsprotokoll',
      subtitle: 'Manuelle Aktionsausführungs-Historie (simuliert)',
      overview: 'Ausführungs-Übersicht',
      allExecutions: 'Alle Ausführungen',
      executionDetails: 'Ausführungs-Details',
      
      // Properties
      action: 'Aktion',
      triggeredBy: 'Ausgelöst von',
      triggeredAt: 'Ausgelöst am',
      status: 'Status',
      result: 'Ergebnis',
      
      // Manual Execution
      manualExecution: 'Manuelle Ausführung',
      runAction: 'Aktion ausführen',
      viewExecutionLog: 'Ausführungsprotokoll anzeigen',
      
      // Confirm Dialog
      confirmTitle: 'Aktionsausführung bestätigen',
      confirmMessage: 'Möchten Sie diese Aktion wirklich ausführen?',
      confirmNotice: 'Dies ist eine simulierte Ausführung. Es werden keine echten Änderungen vorgenommen.',
      confirmButton: 'Bestätigen & Ausführen',
      cancelButton: 'Abbrechen',
      
      // Status
      statuses: {
        pending: 'Ausstehend',
        confirmed: 'Bestätigt',
        completed: 'Abgeschlossen',
        cancelled: 'Abgebrochen',
      },
      
      // Notices
      simulationNotice: 'Alle Ausführungen sind simuliert. Es werden keine echten Aktionen durchgeführt.',
      noAutoMode: 'Nur manuelle Ausführung. Keine automatische Hintergrundverarbeitung.',
      executionSuccess: 'Aktion erfolgreich ausgeführt (Simulation)',
      
      // Result Summaries
      results: {
        lowVisibilityWarningExecuted: 'Simuliert: Warnbanner im Dashboard mit Sichtbarkeits-Score-Alarm angezeigt.',
        reachDeclineAlertExecuted: 'Simuliert: E-Mail-Benachrichtigung über Reichweitenrückgang mit empfohlenen Maßnahmen gesendet.',
        clickRateInsightDisplayed: 'Simuliert: Positive Insight-Karte mit guter Klick-Performance angezeigt.',
        channelActivationRecommended: 'Simuliert: Empfehlungs-Badge zur Kanal-Karte mit niedriger Abdeckung hinzugefügt.',
        inactiveChannelHighlighted: 'Simuliert: Inaktiver Kanal mit rotem Rahmen und Warnungs-Badge hervorgehoben.',
        coveragePositiveFeedbackShown: 'Simuliert: Positive Feedback-Benachrichtigung für gute Abdeckung angezeigt.',
        bottleneckAnalysisPrepared: 'Simuliert: Detaillierter Bottleneck-Analysebericht zur Überprüfung generiert.',
        flowHealthAlertSent: 'Simuliert: Dringende Alarm-E-Mail bzgl. kritischer Flow-Gesundheit gesendet.',
      },
    },

    // Auto Mode Engine (Phase 16A)
    autoMode: {
      title: 'Auto-Mode-Einstellungen',
      subtitle: 'Automatisierungsstufen, Caps und Sicherheits-Guards konfigurieren',
      enabled: 'Auto Mode aktiviert',
      disabled: 'Auto Mode deaktiviert',
      
      // Account Status
      ownerAccount: 'Owner-Account - Unbegrenzter Auto Mode',
      requiresAddon: 'Erfordert Automation Add-on',
      addonActive: 'Automation Add-on aktiv',
      
      // Levels
      level: 'Automatisierungsstufe',
      levels: {
        assisted: 'Assistiert',
        guarded: 'Bewacht',
        'full-auto': 'Voll automatisch',
      },
      levelDescriptions: {
        assisted: 'System schlägt Aktionen vor, Sie genehmigen jede einzelne',
        guarded: 'Auto-Ausführung mit Caps und Guards',
        'full-auto': 'Vollautomatisch innerhalb Ihrer Einstellungen',
      },
      
      // Confidence
      confidence: 'Konfidenz-Score',
      confidenceLevels: {
        high: 'Hoch',
        medium: 'Mittel',
        low: 'Niedrig',
      },
      confidenceThreshold: 'Minimale Konfidenz',
      
      // Caps & Limits
      actionCaps: 'Aktions-Caps',
      dailyLimit: 'Tageslimit',
      ruleCooldown: 'Regel-Cooldown',
      channelLimit: 'Limit pro Kanal',
      unlimited: 'Unbegrenzt',
      hours: 'Stunden',
      actionsPerDay: 'Aktionen/Tag',
      
      // Windows
      automationWindows: 'Automatisierungs-Fenster',
      allowedHours: 'Erlaubte Zeiten',
      blackoutDates: 'Blackout-Termine',
      alwaysOn: 'Immer aktiv (24/7)',
      
      // Safety
      killSwitch: 'Not-Aus',
      killSwitchActive: 'Alle Automatisierung pausiert',
      killSwitchInactive: 'Automatisierung läuft',
      activateKillSwitch: 'Not-Aus aktivieren',
      deactivateKillSwitch: 'Not-Aus deaktivieren',
      
      // Execution Type
      executionTypes: {
        manual: 'Manuell',
        auto: 'Automatisch',
      },
      
      // Usage & Billing
      usage: 'Automatisierungs-Nutzung',
      includedActions: 'Inkl. Aktionen',
      usedActions: 'Genutzte Aktionen',
      remainingActions: 'Verbleibend',
      overageActions: 'Überzählige Aktionen',
      overageCost: 'Mehrkosten',
      perAction: 'pro Aktion',
      
      // Notices
      ownerPrivileges: 'Owner-Account: Auto Mode ist kostenlos und unbegrenzt. Keine Abrechnungs-Caps.',
      addonRequired: 'Automation Add-on erforderlich für Auto Mode. Nur für Company-Accounts verfügbar.',
      limitReached: 'Aktionslimit erreicht. Automatisierung pausiert bis zum nächsten Abrechnungszyklus oder Upgrade.',
      confidenceBelowThreshold: 'Konfidenz-Score unter Schwellwert. Aktion herabgestuft auf manuelle Genehmigung.',
      outsideWindow: 'Außerhalb Automatisierungs-Fenster. Aktion wird während nächster erlaubter Zeit ausgeführt.',
      
      // Explainability
      whyExecuted: 'Warum wurde dies ausgeführt?',
      triggeredByRule: 'Ausgelöst durch Regel',
      confidenceScore: 'Konfidenz-Score',
      withinWindow: 'Innerhalb Automatisierungs-Fenster',
      belowCap: 'Unter Aktions-Cap',
      approvedBy: 'Genehmigt von',
      
      // Explainability (for execution log tooltips)
      explainability: {
        autoExplainHighConfidence: 'Hoher Konfidenz-Score (85%+) ermöglichte vollautomatische Ausführung',
        autoExplainMediumConfidence: 'Mittlerer Konfidenz-Score (70-84%) - ausgeführt mit Guarded-Mode-Sicherheitschecks',
        autoExplainLowConfidence: 'Niedriger Konfidenz-Score (unter 70%) - würde manuelle Genehmigung erfordern, aber im Assisted-Mode ausgeführt',
      },
    },
    
    // Phase 16B: Simulation Layer
    simulation: {
      title: 'Simulations-Ergebnisse',
      evaluatedAt: 'Berechnet',
      justNow: 'gerade eben',
      hoursAgo: 'h her',
      daysAgo: 'd her',
      
      // Risk Levels
      riskLevels: {
        low: 'Niedriges Risiko',
        medium: 'Mittleres Risiko',
        high: 'Hohes Risiko',
      },
      
      // Metrics
      expectedImpact: 'Erwartete Wirkung',
      estimatedActions: 'Geschätzte Aktionen',
      estimatedCost: 'Geschätzte Kosten',
      confidence: 'Vorhersage-Konfidenz',
      basedOnData: 'Basierend auf',
      dataPoints: 'Datenpunkten',
      action: 'Aktion',
      actions: 'Aktionen',
      free: 'Kostenlos (Owner)',
      
      // Approval
      approved: 'Freigegeben für Auto-Ausführung',
      approvedBy: 'Freigegeben von',
      approvalRequired: 'Company-Account: Freigabe erforderlich bevor Auto Mode diese Automatisierung ausführen kann.',
      ownerOptional: 'Owner-Account: Sie können freigeben oder Simulation überspringen.',
      approveForAutoExecution: 'Für Auto-Ausführung freigeben',
      approve: 'Freigeben',
      skipSimulation: 'Simulation überspringen',
      
      // Disclaimer
      disclaimer: 'Geschätzte Wirkung basierend auf aktuellen Systemdaten. Tatsächliche Ergebnisse können variieren.',
    },
    
    // Phase 16B: Deep Explainability
    explainability: {
      whyThisActionRan: 'Warum diese Aktion ausgeführt wurde',
      triggeredBy: 'Ausgelöst durch Regel',
      metricCrossedThreshold: 'Metrik überschritt Schwellwert',
      threshold: 'Schwellwert',
      before: 'Vorher',
      after: 'Nachher',
      thresholdValue: 'Schwellwert',
      evaluationWindow: 'Auswertungs-Zeitfenster',
      evaluatedAt: 'Ausgewertet am',
      cooldownStatus: 'Cooldown-Status',
      cooldownStatuses: {
        active: 'Aktiv (Innerhalb Cooldown)',
        expired: 'Abgelaufen (Bereit)',
        none: 'Keiner',
      },
      confidenceBreakdown: 'Konfidenz-Aufschlüsselung',
      totalConfidence: 'Gesamt-Konfidenz',
      dataBasedExplanation: 'Alle Werte basieren auf tatsächlichen System-Metriken zum Ausführungszeitpunkt.',
    },
  },
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;
