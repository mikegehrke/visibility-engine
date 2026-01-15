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
    },
    
    // Section Headers
    sections: {
      core: 'Core',
      visibilityEngine: 'Visibility Engine',
      contentMedia: 'Content & Media',
      automation: 'Automation',
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
    },
    
    // Section Headers
    sections: {
      core: 'Kern',
      visibilityEngine: 'Visibility Engine',
      contentMedia: 'Content & Medien',
      automation: 'Automatisierung',
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
  },
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;
