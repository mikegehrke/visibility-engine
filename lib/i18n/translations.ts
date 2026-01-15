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
    },
    
    // Section Headers
    sections: {
      core: 'Core',
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
    },
    
    // Section Headers
    sections: {
      core: 'Kern',
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
  },
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;
