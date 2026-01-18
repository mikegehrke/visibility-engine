// German Landing Page Translations
export const landing = {
  hero: {
    overline: 'Die Visibility Plattform',
    title: 'Content in',
    titleHighlight: 'Messbares Wachstum',
    subtitle: 'Das Betriebssystem für Creator und Unternehmen, um Content zu orchestrieren, Distribution zu automatisieren und Sichtbarkeit in Umsatz zu verwandeln.',
    ctaPrimary: 'Kostenlos testen',
    ctaSecondary: 'Plattform ansehen',
  },
  trustBar: {
    title: 'Entwickelt für Creators, Unternehmen & Enterprise',
    categories: [
      { icon: '🎬', label: 'Creators' },
      { icon: '🏢', label: 'Agenturen' },
      { icon: '🚀', label: 'Startups' },
      { icon: '🏛️', label: 'Enterprise' },
      { icon: '📈', label: 'Growth Teams' },
    ],
  },
  problem: {
    overline: 'Die Herausforderung',
    title: 'Content-Chaos tötet Wachstum',
    subtitle: 'Verstreute Tools, manuelle Prozesse, null Sichtbarkeit in das, was wirklich funktioniert. Die meisten Creator und Teams fliegen blind, während die Konkurrenz ihren Erfolg systematisiert.',
    stats: [
      { stat: '73%', label: 'des Contents erreicht nie sein potenzielles Publikum' },
      { stat: '12 Std', label: 'durchschnittliche wöchentliche Zeit verloren durch manuelle Distribution' },
      { stat: '40%', label: 'der Chancen verpasst durch Timing-Fehler' },
    ],
  },
  solution: {
    overline: 'Die Lösung',
    title: 'Eine Plattform, komplette Sichtbarkeit',
    subtitle: 'Von Content-Erstellung bis Performance-Insights—orchestriere deine gesamte Visibility Engine in einem intelligenten System.',
    steps: [
      {
        num: '01',
        title: 'Signals & Insights',
        description: 'Echtzeit-Tracking über alle Kanäle. Wisse was funktioniert, was nicht, und warum—bevor es andere tun.',
        features: ['Cross-Platform Analytics', 'Trend-Erkennung', 'Wettbewerbs-Signale'],
      },
      {
        num: '02',
        title: 'Smart Automation',
        description: 'Regelbasierte Workflows, die im perfekten Moment ausgeführt werden. Von Distribution bis Engagement—automatisiert.',
        features: ['Scheduling Engine', 'Trigger-basierte Aktionen', 'A/B Optimierung'],
      },
      {
        num: '03',
        title: 'Growth Intelligence',
        description: 'KI-gestützte Empfehlungen, die Daten in umsetzbare Wachstumsstrategien verwandeln, denen du vertrauen kannst.',
        features: ['Predictive Insights', 'Content Scoring', 'ROI Attribution'],
      },
    ],
  },
  forWho: {
    overline: 'Gebaut für',
    title: 'Professionals, die Sichtbarkeit ernst nehmen',
    creators: {
      title: 'Creator & Influencer',
      description: 'Skaliere deine Personal Brand ohne deinen Workload zu skalieren. Automatisiere das Repetitive, fokussiere auf das Kreative—während deine Sichtbarkeit wächst.',
      features: ['Multi-Plattform Scheduling', 'Audience Insights', 'Monetarisierungs-Tracking', 'Brand Deal Management'],
    },
    companies: {
      title: 'Teams & Agenturen',
      description: 'Koordiniere Kampagnen, manage mehrere Marken und beweise ROI—alles von einem Command Center, gebaut für professionelle Workflows.',
      features: ['Multi-Brand Workspaces', 'Team Collaboration', 'Client Reporting', 'White-Label Optionen'],
    },
  },
  platform: {
    overline: 'Plattform',
    title: 'Alles was du brauchst um zu gewinnen',
    subtitle: 'Ein komplettes Toolkit für modernes Visibility Management.',
    features: [
      { label: 'Content Hub', desc: 'Zentralisiertes Asset Management' },
      { label: 'Smart Scheduling', desc: 'KI-optimiertes Timing' },
      { label: 'Analytics Engine', desc: 'Cross-Platform Insights' },
      { label: 'Automation Rules', desc: 'Trigger-basierte Workflows' },
      { label: 'Team Workspaces', desc: 'Kollaborative Umgebung' },
      { label: 'API & Integrations', desc: 'Erweiterbare Plattform' },
    ],
  },
  testimonials: {
    overline: 'Ergebnisse',
    title: 'Vertraut von Growth Leaders',
    items: [
      {
        quote: 'Visibility Engine hat transformiert, wie wir Content Distribution angehen. Was früher Tage dauerte, passiert jetzt automatisch—mit besseren Ergebnissen.',
        name: 'Sarah Kim',
        role: 'Head of Content, TechScale',
      },
      {
        quote: 'Endlich eine Plattform, die versteht, dass Creator Insights brauchen, nicht nur Scheduling. Die Automation Rules allein sparen mir 10+ Stunden pro Woche.',
        name: 'Marcus Rodriguez',
        role: 'Creator, 500K+ Follower',
      },
    ],
  },
  cta: {
    title: 'Bereit deine Visibility Engine zu bauen?',
    subtitle: 'Schließe dich tausenden von Creators und Teams an, die ihre Content-Strategie transformiert haben. Starte heute kostenlos—keine Kreditkarte erforderlich.',
    ctaPrimary: 'Kostenlos testen',
    ctaSecondary: 'Preise ansehen',
  },
} as const;

export type LandingTranslations = typeof landing;
