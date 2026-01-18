// German Pricing Translations
export const pricing = {
  meta: {
    title: 'Preise – Visibility Engine',
    description: 'Wähle den Plan, der zu deinen Bedürfnissen passt. Von kostenlos für Einsteiger bis Enterprise für Teams.',
  },
  hero: {
    overline: 'Preise',
    title: 'Einfache, transparente Preise',
    subtitle: 'Starte kostenlos, upgrade wenn du bereit bist. Keine versteckten Gebühren, keine Überraschungen. Alle bezahlten Pläne beinhalten eine 14-tägige kostenlose Testphase.',
  },
  plans: {
    starter: {
      name: 'Starter',
      price: 'Kostenlos',
      period: '',
      description: 'Perfekt zum Einstieg und Erkunden der Plattform.',
      features: [
        '1 verbundenes Konto',
        '50 geplante Posts/Monat',
        'Basis Analytics',
        'Community Support',
      ],
      cta: 'Jetzt starten',
    },
    creator: {
      name: 'Creator',
      price: '19 €',
      period: '/Monat',
      description: 'Für Creator, die ihre Präsenz skalieren wollen.',
      features: [
        '5 verbundene Konten',
        'Unbegrenzte geplante Posts',
        'Erweiterte Analytics',
        'Automation-Regeln (5)',
        'Priority Support',
      ],
      cta: 'Kostenlos testen',
    },
    professional: {
      name: 'Professional',
      price: '49 €',
      period: '/Monat',
      description: 'Für Power User, die das komplette Visibility-Toolkit brauchen.',
      features: [
        '15 verbundene Konten',
        'Unbegrenzte geplante Posts',
        'Volles Analytics-Paket',
        'Unbegrenzte Automation-Regeln',
        'KI-gestützte Insights',
        'API-Zugang',
        'Priority Support',
      ],
      cta: 'Kostenlos testen',
      badge: 'Beliebteste Wahl',
    },
    team: {
      name: 'Team',
      price: '149 €',
      period: '/Monat',
      description: 'Für Teams und Agenturen, die mehrere Marken verwalten.',
      features: [
        'Unbegrenzte verbundene Konten',
        'Multi-Brand Workspaces',
        '5 Teammitglieder inklusive',
        'Rollenbasierte Berechtigungen',
        'Client Reporting',
        'White-Label-Optionen',
        'Dedizierter Account Manager',
      ],
      cta: 'Vertrieb kontaktieren',
    },
  },
  enterprise: {
    title: 'Benötigst du eine maßgeschneiderte Lösung?',
    description: 'Für große Organisationen mit spezifischen Anforderungen bieten wir individuelle Enterprise-Pläne mit dedizierter Infrastruktur, SLA-Garantien und maßgeschneidertem Onboarding.',
    cta: 'Vertrieb kontaktieren',
  },
  compare: {
    overline: 'Pläne vergleichen',
    title: 'Finde den passenden Plan für deine Bedürfnisse',
    headers: {
      feature: 'Feature',
      starter: 'Starter',
      creator: 'Creator',
      professional: 'Professional',
      team: 'Team',
    },
    rows: {
      connectedAccounts: 'Verbundene Konten',
      scheduledPosts: 'Geplante Posts',
      analytics: 'Analytics',
      automationRules: 'Automation-Regeln',
      aiInsights: 'KI Insights',
      apiAccess: 'API-Zugang',
      teamMembers: 'Teammitglieder',
      whiteLabel: 'White-Label',
    },
    values: {
      starter: ['1', '50/Mo', 'Basis', '—', '—', '—', '1', '—'],
      creator: ['5', 'Unbegrenzt', 'Erweitert', '5', '—', '—', '1', '—'],
      professional: ['15', 'Unbegrenzt', 'Volles Paket', 'Unbegrenzt', '✓', '✓', '1', '—'],
      team: ['Unbegrenzt', 'Unbegrenzt', 'Volles Paket', 'Unbegrenzt', '✓', '✓', '5+', '✓'],
    },
  },
  faq: {
    overline: 'FAQ',
    title: 'Häufig gestellte Fragen',
    items: [
      {
        question: 'Kann ich den Plan jederzeit wechseln?',
        answer: 'Ja, du kannst deinen Plan jederzeit upgraden oder downgraden. Bei einem Upgrade wird dir die anteilige Differenz berechnet. Bei einem Downgrade tritt die Änderung zu Beginn des nächsten Abrechnungszeitraums in Kraft.',
      },
      {
        question: 'Welche Zahlungsmethoden akzeptiert ihr?',
        answer: 'Wir akzeptieren alle gängigen Kreditkarten (Visa, MasterCard, American Express) und PayPal. Für Team- und Enterprise-Pläne bieten wir auch Rechnungsstellung mit NET 30 Zahlungsziel an.',
      },
      {
        question: 'Gibt es eine kostenlose Testversion?',
        answer: 'Ja! Alle bezahlten Pläne beinhalten eine 14-tägige kostenlose Testversion mit vollem Zugang zu allen Features. Keine Kreditkarte erforderlich.',
      },
      {
        question: 'Was passiert, wenn meine Testphase endet?',
        answer: 'Am Ende der Testphase kannst du ein Abo abschließen, um die Premium-Features weiter zu nutzen, oder dein Konto wechselt automatisch zu unserem kostenlosen Starter-Plan.',
      },
      {
        question: 'Bietet ihr Rabatte für jährliche Abrechnung?',
        answer: 'Ja, du sparst 20% bei jährlicher Abrechnung. Diese Option ist für alle bezahlten Pläne beim Checkout verfügbar.',
      },
      {
        question: 'Kann ich mein Abo kündigen?',
        answer: 'Absolut. Du kannst dein Abo jederzeit in deinen Kontoeinstellungen kündigen. Dein Zugang bleibt bis zum Ende des aktuellen Abrechnungszeitraums bestehen.',
      },
    ],
  },
  cta: {
    title: 'Bereit loszulegen?',
    subtitle: 'Schließe dich tausenden von Creators und Teams an, die ihre Visibility Engines aufbauen. Starte noch heute deine 14-tägige kostenlose Testversion.',
    button: 'Kostenlos testen',
  },
} as const;

export type PricingTranslations = typeof pricing;
