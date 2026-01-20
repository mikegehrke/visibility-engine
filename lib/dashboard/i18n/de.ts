export const de = {
  automation: {
    title: 'Automatisierung',
    subtitle: 'Konfigurieren Sie, wie Aktionen automatisch ausgeführt werden',
    enabled: 'Aktiviert',
    notActiveNotice: 'Automatisierung ist nicht aktiv. Verbinden Sie Ihre Konten, um die Automatisierung zu aktivieren.',
    viewDetails: 'Details anzeigen',
    automationReady: 'Bereit',
    modes: {
      preview: 'Vorschau',
      manual: 'Manuell',
      auto: 'Automatisch',
    },
    statuses: {
      ready: 'Bereit',
      blocked: 'Blockiert',
      disabled: 'Deaktiviert',
    },
    blockedReasons: {
      noAccount: 'Kein Konto verbunden',
      rateLimited: 'Rate limitiert',
      permissionDenied: 'Zugriff verweigert',
    },
    safetyNotices: {
      autoModeNotAvailable: 'Auto-Modus nicht verfügbar',
    },
  },
  autoMode: {
    levels: {
      conservative: 'Konservativ',
      balanced: 'Ausgewogen',
      aggressive: 'Aggressiv',
    },
  },
  actions: {
    titles: {
      optimizeTitle: 'Titel optimieren',
      updateDescription: 'Beschreibung aktualisieren',
      addTags: 'Tags hinzufügen',
      schedulePost: 'Beitrag planen',
    },
    descriptions: {
      optimizeTitle: 'Videotitel automatisch für bessere Sichtbarkeit optimieren',
      updateDescription: 'Videobeschreibungen mit SEO-freundlichem Inhalt aktualisieren',
      addTags: 'Relevante Tags hinzufügen, um die Auffindbarkeit zu verbessern',
      schedulePost: 'Social-Media-Beiträge für optimales Engagement planen',
    },
  },
  dashboard: {
    title: 'Dashboard',
    welcome: 'Willkommen zurück',
  },
  nav: {
    automation: 'Automatisierung',
    reports: 'Berichte',
    rules: 'Regeln',
    flow: 'Ablauf',
    settings: 'Einstellungen',
  },
} as const;
