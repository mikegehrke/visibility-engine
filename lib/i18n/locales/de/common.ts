// German Common/Shared Translations (Nav, Footer)
export const common = {
  nav: {
    features: 'Features',
    pricing: 'Preise',
    about: 'Über uns',
    blog: 'Blog',
    login: 'Anmelden',
    getStarted: 'Jetzt starten',
    product: 'Produkt',
    useCases: 'Anwendungsfälle',
    resources: 'Ressourcen',
  },
  footer: {
    product: 'Produkt',
    company: 'Unternehmen',
    legal: 'Rechtliches',
    features: 'Features',
    pricing: 'Preise',
    about: 'Über uns',
    blog: 'Blog',
    privacy: 'Datenschutz',
    terms: 'Nutzungsbedingungen',
    imprint: 'Impressum',
    copyright: '© 2026 Visibility Engine. Alle Rechte vorbehalten.',
  },
  buttons: {
    startTrial: 'Kostenlos testen',
    learnMore: 'Mehr erfahren',
    viewPricing: 'Preise ansehen',
    getStarted: 'Jetzt starten',
  },
} as const;

export type CommonTranslations = typeof common;
