export const translations = {
  en: {
    // Top Bar
    contextSwitcher: {
      creator: 'Creator',
      company: 'Company',
    },
    languageSwitcher: {
      en: 'English',
      de: 'Deutsch',
    },
    
    // Navigation - Core
    nav: {
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
    // Top Bar
    contextSwitcher: {
      creator: 'Creator',
      company: 'Unternehmen',
    },
    languageSwitcher: {
      en: 'Englisch',
      de: 'Deutsch',
    },
    
    // Navigation - Core
    nav: {
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
