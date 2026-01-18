// German About Translations
export const about = {
  meta: {
    title: 'Über uns – Visibility Engine',
    description: 'Erfahre mehr über unsere Vision, Creators und Unternehmen mit professionellen Visibility-Tools zu empowern.',
  },
  hero: {
    overline: 'Über uns',
    title: 'Das Betriebssystem',
    titleHighlight: 'für digitale Sichtbarkeit',
    subtitle: 'Unsere Mission ist es, jedem Creator und Unternehmen die Tools zu geben, um Content in messbares Wachstum zu verwandeln—ohne das Chaos verstreuter Systeme.',
  },
  stats: {
    users: { value: '10K+', label: 'Aktive Nutzer' },
    posts: { value: '50M+', label: 'Geplante Posts' },
    uptime: { value: '99,9%', label: 'Uptime SLA' },
    support: { value: '24/7', label: 'Support-Abdeckung' },
  },
  vision: {
    overline: 'Unsere Vision',
    title: 'Von Content-Chaos zu Visibility Control',
    paragraph1: 'Die Creator Economy und die content-getriebene Geschäftswelt sind explodiert—aber die Tools haben nicht mitgehalten. Die meisten Professionals jonglieren mit fünf oder mehr Plattformen, verlieren Stunden an manuelle Aufgaben und tappen im Dunkeln, was wirklich funktioniert.',
    paragraph2: 'Wir haben Visibility Engine als Kommandozentrale gebaut, die alles zusammenbringt: eine Plattform, auf der Content, Automatisierung und Intelligenz konvergieren. Nicht noch ein Tool zum Managen—ein System, das sich selbst verwaltet.',
    quote: 'Jeder Creator und jedes Unternehmen verdient die Visibility-Infrastruktur, die einst nur Enterprises mit dedizierten Teams und Millionen-Budgets zur Verfügung stand.',
    quoteAuthor: 'Das Gründungsprinzip',
    quoteTeam: 'Visibility Engine Team',
  },
  values: {
    overline: 'Unsere Werte',
    title: 'Was jede Entscheidung leitet',
    clarity: {
      title: 'Klarheit statt Komplexität',
      description: 'Wir glauben, dass die besten Tools unsichtbar wirken. Jedes Feature, jede Interface-Entscheidung zielt darauf ab, die kognitive Last zu reduzieren—nicht zu erhöhen.',
    },
    dataInformed: {
      title: 'Daten-informiert, nicht daten-überwältigt',
      description: 'Rohdaten sind Rauschen. Insights sind Signal. Wir transformieren Metriken in handlungsrelevante Intelligenz, die echte Entscheidungen antreibt.',
    },
    automation: {
      title: 'Automatisierung, die verstärkt',
      description: 'Das Ziel ist nicht, menschliches Urteilsvermögen zu ersetzen—sondern Menschen zu befreien, sich auf das Wesentliche zu konzentrieren. Automatisierung übernimmt das Repetitive; du übernimmst das Kreative.',
    },
    trust: {
      title: 'Vertrauen durch Transparenz',
      description: 'Keine Black Boxes. Keine versteckten Agenden. Wir zeigen dir genau, wie Dinge funktionieren, was wir messen und warum. Deine Daten bleiben deine.',
    },
  },
  approach: {
    overline: 'Unser Ansatz',
    title: 'Anders gebaut, mit Absicht',
    privacy: {
      num: '01',
      title: 'Privacy-First Architektur',
      description: 'Deine Daten trainieren niemals unsere Modelle. Dein Content bleibt deiner. Wir bauen Vertrauen durch strikte Datenisolation und transparente Richtlinien.',
    },
    performance: {
      num: '02',
      title: 'Performance ohne Kompromisse',
      description: 'Unter 100ms Antwortzeiten. 99,9% Uptime-Garantie. Wir sind besessen von Millisekunden, damit du nie warten musst.',
    },
    open: {
      num: '03',
      title: 'Offen, wo es zählt',
      description: 'Voller API-Zugang. Umfangreiche Webhooks. Native Integrationen. Deine Visibility Engine sollte zu deinem Stack passen, nicht umgekehrt.',
    },
  },
  cta: {
    title: 'Bereit, dabei zu sein?',
    subtitle: 'Beginne heute mit dem Aufbau deiner Visibility Engine. Kostenlos starten, leistungsstark genug, um mit dir zu skalieren.',
    primaryButton: 'Kostenlos starten',
    secondaryButton: 'Features erkunden',
  },
} as const;

export type AboutTranslations = typeof about;
