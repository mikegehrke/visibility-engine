import Link from 'next/link';
import { supportedLanguages, type Lang } from '@/lib/i18n/langs';
import ExplainerAnimation from '@/components/public/ExplainerAnimation';

// Translations
const translations = {
  en: {
    hero: {
      overline: 'How It Works',
      title: 'From Market Chaos to Strategic Clarity',
      subtitle: 'Visibility Engine transforms the overwhelming flood of digital signals into actionable intelligence. Here is exactly how it works.',
    },
    problem: {
      title: 'The Problem: Digital Blindness',
      description: 'Every day, your potential customers search for solutions you offer. They scroll past content like yours. They ask AI assistants questions you could answer. But without visibility, you are invisible.',
      points: [
        'Billions of searches happen daily—most competitors miss their share',
        'Social algorithms change weekly—manual tracking is impossible',
        'AI assistants cite sources you have never heard of—while ignoring you',
        'By the time you spot a trend, it is already over',
      ],
    },
    steps: {
      title: 'The Visibility Engine Process',
      items: [
        {
          num: '01',
          title: 'Signal Collection',
          description: 'We monitor the entire digital landscape in real-time. Every search query, every trending topic, every viral post, every AI citation. Billions of signals, unified.',
          details: [
            'Google Search patterns & ranking shifts',
            'YouTube trends & engagement signals',
            'TikTok virality indicators',
            'AI assistant source citations',
            'Competitor visibility movements',
          ],
        },
        {
          num: '02',
          title: 'Position Mapping',
          description: 'Where do you currently appear? We map your exact visibility across every platform, every keyword, every audience segment. No blind spots.',
          details: [
            'Cross-platform visibility score',
            'Keyword position tracking',
            'Audience reach measurement',
            'Share of voice analysis',
            'Competitor benchmarking',
          ],
        },
        {
          num: '03',
          title: 'Gap Detection',
          description: 'The magic happens here. We compare market demand against your visibility to find the exact gaps—where opportunity exists but you are not showing up.',
          details: [
            'Untapped keyword opportunities',
            'Audience segments you are missing',
            'Content formats competitors dominate',
            'Timing mismatches in publishing',
            'Platform presence gaps',
          ],
        },
        {
          num: '04',
          title: 'Recommendation Engine',
          description: 'No more guesswork. For every gap, you get a concrete, prioritized action. What to create, when to publish, where to focus—backed by data.',
          details: [
            'Priority-ranked action items',
            'Content briefs with signal backing',
            'Optimal timing recommendations',
            'Platform-specific strategies',
            'Estimated impact projections',
          ],
        },
        {
          num: '05',
          title: 'Continuous Monitoring',
          description: 'Markets change. Algorithms shift. Competitors adapt. Visibility Engine never stops watching—and alerts you the moment action is needed.',
          details: [
            'Real-time visibility alerts',
            'Competitor movement notifications',
            'Algorithm change detection',
            'Performance tracking',
            'Trend emergence signals',
          ],
        },
      ],
    },
    comparison: {
      title: 'Without Visibility Engine vs. With Visibility Engine',
      without: {
        title: 'Without',
        items: [
          'Publish content and hope it works',
          'Check rankings manually once a month',
          'React to trends after they peak',
          'Guess what competitors are doing',
          'Miss opportunities you never knew existed',
        ],
      },
      with: {
        title: 'With Visibility Engine',
        items: [
          'Publish content with signal-backed confidence',
          'Real-time visibility tracking across all platforms',
          'Act on trends before competitors notice',
          'See competitor strategies as they unfold',
          'Capture every opportunity in your market',
        ],
      },
    },
    examples: {
      title: 'Real Scenarios',
      company: {
        title: 'For Companies',
        scenario: 'A B2B SaaS company discovers through Visibility Engine that their competitors are not showing up for a high-intent keyword cluster. Within 2 weeks, they create targeted content and capture 47% of that search traffic.',
      },
      creator: {
        title: 'For Creators',
        scenario: 'A tech creator sees a signal that a specific topic is trending in their niche but no major creator has covered it. They publish within 24 hours and the video becomes their most-viewed of the quarter.',
      },
    },
    cta: {
      title: 'Ready to See Your Visibility?',
      subtitle: 'Stop guessing. Start seeing. Get your first visibility report today.',
      primary: 'Start Free Trial',
      secondary: 'View Pricing',
    },
    animation: {
      steps: [
        {
          title: 'Market Signals Emerge',
          description: 'Every second, billions of signals flow across Google, YouTube, TikTok, and AI platforms. Trends form, conversations start, opportunities appear.',
        },
        {
          title: 'Platforms React',
          description: 'Search engines update rankings. Social algorithms shift. AI models learn new patterns. The digital landscape is constantly changing.',
        },
        {
          title: 'We Compare Your Position',
          description: 'Visibility Engine maps where you stand versus the market. Real-time comparison across all channels shows exactly where you are visible—and where you are not.',
        },
        {
          title: 'Gaps Become Clear',
          description: 'Missing keywords, untapped audiences, timing mismatches—we identify the specific gaps between your current visibility and your potential.',
        },
        {
          title: 'Action Recommendations',
          description: 'No guesswork. Concrete, prioritized actions to close each gap. What to publish, when to publish, where to focus—backed by data.',
        },
      ],
    },
  },
  de: {
    hero: {
      overline: 'So funktioniert es',
      title: 'Vom Markt-Chaos zur strategischen Klarheit',
      subtitle: 'Visibility Engine verwandelt die überwältigende Flut digitaler Signale in umsetzbare Intelligenz. So funktioniert es genau.',
    },
    problem: {
      title: 'Das Problem: Digitale Blindheit',
      description: 'Jeden Tag suchen potenzielle Kunden nach Lösungen, die du anbietest. Sie scrollen an Content wie deinem vorbei. Sie stellen KI-Assistenten Fragen, die du beantworten könntest. Aber ohne Sichtbarkeit bist du unsichtbar.',
      points: [
        'Milliarden Suchen täglich—die meisten Wettbewerber verpassen ihren Anteil',
        'Social-Algorithmen ändern sich wöchentlich—manuelles Tracking ist unmöglich',
        'KI-Assistenten zitieren Quellen, von denen du noch nie gehört hast—während sie dich ignorieren',
        'Bis du einen Trend bemerkst, ist er bereits vorbei',
      ],
    },
    steps: {
      title: 'Der Visibility Engine Prozess',
      items: [
        {
          num: '01',
          title: 'Signal-Erfassung',
          description: 'Wir überwachen die gesamte digitale Landschaft in Echtzeit. Jede Suchanfrage, jedes Trending-Thema, jeder virale Post, jede KI-Zitation. Milliarden Signale, vereint.',
          details: [
            'Google Search Muster & Ranking-Verschiebungen',
            'YouTube Trends & Engagement-Signale',
            'TikTok Viralitäts-Indikatoren',
            'KI-Assistenten Quellen-Zitate',
            'Wettbewerber Sichtbarkeits-Bewegungen',
          ],
        },
        {
          num: '02',
          title: 'Positions-Mapping',
          description: 'Wo erscheinst du aktuell? Wir kartieren deine exakte Sichtbarkeit über jede Plattform, jedes Keyword, jedes Zielgruppen-Segment. Keine blinden Flecken.',
          details: [
            'Cross-Platform Sichtbarkeits-Score',
            'Keyword-Position Tracking',
            'Reichweiten-Messung',
            'Share of Voice Analyse',
            'Wettbewerber-Benchmarking',
          ],
        },
        {
          num: '03',
          title: 'Lücken-Erkennung',
          description: 'Hier passiert die Magie. Wir vergleichen Marktnachfrage mit deiner Sichtbarkeit um die exakten Lücken zu finden—wo Chancen existieren, aber du nicht auftauchst.',
          details: [
            'Unerschlossene Keyword-Chancen',
            'Zielgruppen-Segmente, die du verpasst',
            'Content-Formate, die Wettbewerber dominieren',
            'Timing-Diskrepanzen beim Publishing',
            'Plattform-Präsenz-Lücken',
          ],
        },
        {
          num: '04',
          title: 'Empfehlungs-Engine',
          description: 'Kein Rätselraten mehr. Für jede Lücke bekommst du eine konkrete, priorisierte Aktion. Was erstellen, wann publizieren, wo fokussieren—datengestützt.',
          details: [
            'Prioritäts-gerankte Aktionspunkte',
            'Content-Briefs mit Signal-Backing',
            'Optimale Timing-Empfehlungen',
            'Plattform-spezifische Strategien',
            'Geschätzte Impact-Projektionen',
          ],
        },
        {
          num: '05',
          title: 'Kontinuierliches Monitoring',
          description: 'Märkte ändern sich. Algorithmen verschieben sich. Wettbewerber passen sich an. Visibility Engine beobachtet ohne Unterbrechung—und alarmiert dich im Moment, wenn Handlung nötig ist.',
          details: [
            'Echtzeit Sichtbarkeits-Alerts',
            'Wettbewerber-Bewegungs-Benachrichtigungen',
            'Algorithmus-Änderungs-Erkennung',
            'Performance-Tracking',
            'Trend-Entstehungs-Signale',
          ],
        },
      ],
    },
    comparison: {
      title: 'Ohne Visibility Engine vs. Mit Visibility Engine',
      without: {
        title: 'Ohne',
        items: [
          'Content publizieren und hoffen dass es funktioniert',
          'Rankings manuell einmal im Monat prüfen',
          'Auf Trends reagieren nachdem sie ihren Peak erreicht haben',
          'Raten was Wettbewerber machen',
          'Chancen verpassen, von denen du nie wusstest',
        ],
      },
      with: {
        title: 'Mit Visibility Engine',
        items: [
          'Content publizieren mit signal-gestütztem Vertrauen',
          'Echtzeit Sichtbarkeits-Tracking über alle Plattformen',
          'Auf Trends handeln bevor Wettbewerber sie bemerken',
          'Wettbewerber-Strategien sehen während sie sich entfalten',
          'Jede Chance in deinem Markt erfassen',
        ],
      },
    },
    examples: {
      title: 'Reale Szenarien',
      company: {
        title: 'Für Unternehmen',
        scenario: 'Ein B2B SaaS-Unternehmen entdeckt durch Visibility Engine, dass ihre Wettbewerber für ein High-Intent Keyword-Cluster nicht auftauchen. Innerhalb von 2 Wochen erstellen sie gezielten Content und erfassen 47% dieses Such-Traffics.',
      },
      creator: {
        title: 'Für Creator',
        scenario: 'Ein Tech-Creator sieht ein Signal, dass ein bestimmtes Thema in ihrer Nische trendet, aber kein großer Creator es behandelt hat. Sie publizieren innerhalb von 24 Stunden und das Video wird ihr meistgesehenes des Quartals.',
      },
    },
    cta: {
      title: 'Bereit deine Sichtbarkeit zu sehen?',
      subtitle: 'Hör auf zu raten. Fang an zu sehen. Erhalte heute deinen ersten Sichtbarkeitsbericht.',
      primary: 'Kostenlos testen',
      secondary: 'Preise ansehen',
    },
    animation: {
      steps: [
        {
          title: 'Marktsignale entstehen',
          description: 'Jede Sekunde fließen Milliarden Signale über Google, YouTube, TikTok und KI-Plattformen. Trends bilden sich, Gespräche beginnen, Chancen erscheinen.',
        },
        {
          title: 'Plattformen reagieren',
          description: 'Suchmaschinen aktualisieren Rankings. Social-Algorithmen verschieben sich. KI-Modelle lernen neue Muster. Die digitale Landschaft verändert sich konstant.',
        },
        {
          title: 'Wir vergleichen deine Position',
          description: 'Visibility Engine zeigt wo du im Vergleich zum Markt stehst. Echtzeit-Vergleich über alle Kanäle zeigt genau wo du sichtbar bist—und wo nicht.',
        },
        {
          title: 'Lücken werden sichtbar',
          description: 'Fehlende Keywords, unerschlossene Zielgruppen, Timing-Fehler—wir identifizieren die spezifischen Lücken zwischen deiner aktuellen Sichtbarkeit und deinem Potenzial.',
        },
        {
          title: 'Handlungsempfehlungen',
          description: 'Kein Rätselraten. Konkrete, priorisierte Aktionen um jede Lücke zu schließen. Was publizieren, wann publizieren, wo fokussieren—datengestützt.',
        },
      ],
    },
  },
} as const;

// Generate static params for SSG
export function generateStaticParams() {
  return supportedLanguages.map((lang) => ({ lang }));
}

// Force static generation
export const dynamic = 'force-static';
export const revalidate = 3600;

// SEO Metadata
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang = (langParam as Lang) || 'en';
  const t = translations[lang];
  
  return {
    title: `${t.hero.title} | Visibility Engine`,
    description: t.hero.subtitle,
    alternates: {
      canonical: `https://visibility-engine.com/${lang}/how-it-works`,
      languages: {
        'en': 'https://visibility-engine.com/en/how-it-works',
        'de': 'https://visibility-engine.com/de/how-it-works',
      },
    },
  };
}

export default async function HowItWorksPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang = (langParam as Lang) || 'en';
  const t = translations[lang];
  const l = (path: string) => `/${lang}${path}`;

  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-signal-muted/30 via-transparent to-transparent pointer-events-none" />
        
        <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-16">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.1em] mb-6 block text-signal">
              {t.hero.overline}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-[-0.025em] text-ink text-balance mb-8">
              {t.hero.title}
            </h1>
            <p className="text-lg sm:text-xl font-normal leading-[1.6] text-balance max-w-2xl mx-auto text-slate">
              {t.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* ANIMATED EXPLAINER */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <ExplainerAnimation 
          lang={lang}
          steps={t.animation.steps.map((step) => ({
            title: step.title,
            description: step.description,
            duration: 5000,
          }))}
          autoPlay={true}
        />
      </section>

      {/* PROBLEM SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-ink mb-6">
            {t.problem.title}
          </h2>
          <p className="text-lg text-slate mb-8">
            {t.problem.description}
          </p>
          <ul className="space-y-4">
            {t.problem.points.map((point, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-danger-muted flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 text-danger" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <span className="text-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* DETAILED STEPS */}
      <section className="bg-surface-1/50 border-y border-border/50">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="text-2xl sm:text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-ink text-center mb-16">
            {t.steps.title}
          </h2>
          
          <div className="space-y-16">
            {t.steps.items.map((step, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center`}
              >
                {/* Step number & content */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl font-bold text-signal/30">{step.num}</span>
                    <h3 className="text-xl font-semibold text-ink">{step.title}</h3>
                  </div>
                  <p className="text-slate mb-6">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail, didx) => (
                      <li key={didx} className="flex items-center gap-3 text-sm text-foreground">
                        <svg className="w-4 h-4 text-signal shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Visual */}
                <div className="flex-1 w-full max-w-md">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-signal/5 to-signal-muted/10 border border-border/50 flex items-center justify-center">
                    <div className="text-8xl opacity-30">{step.num}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-2xl sm:text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-ink text-center mb-16">
          {t.comparison.title}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Without */}
          <div className="rounded-2xl border border-danger/20 bg-danger-muted/10 p-8">
            <h3 className="text-lg font-semibold text-danger mb-6">{t.comparison.without.title}</h3>
            <ul className="space-y-4">
              {t.comparison.without.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-foreground">
                  <svg className="w-5 h-5 text-danger shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          {/* With */}
          <div className="rounded-2xl border border-signal/20 bg-signal-muted/10 p-8">
            <h3 className="text-lg font-semibold text-signal mb-6">{t.comparison.with.title}</h3>
            <ul className="space-y-4">
              {t.comparison.with.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-foreground">
                  <svg className="w-5 h-5 text-signal shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* EXAMPLES */}
      <section className="bg-surface-1/50 border-y border-border/50">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="text-2xl sm:text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-ink text-center mb-16">
            {t.examples.title}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Company example */}
            <div className="rounded-2xl bg-canvas border border-border p-8">
              <div className="w-12 h-12 rounded-xl bg-signal/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-signal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-ink mb-4">{t.examples.company.title}</h3>
              <p className="text-slate">{t.examples.company.scenario}</p>
            </div>
            
            {/* Creator example */}
            <div className="rounded-2xl bg-canvas border border-border p-8">
              <div className="w-12 h-12 rounded-xl bg-signal/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-signal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-ink mb-4">{t.examples.creator.title}</h3>
              <p className="text-slate">{t.examples.creator.scenario}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-[1.1] tracking-[-0.02em] text-ink text-balance mb-6">
          {t.cta.title}
        </h2>
        <p className="text-lg text-slate mb-12 max-w-2xl mx-auto">
          {t.cta.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href={l('/register')}
            className="inline-flex items-center justify-center font-medium h-12 min-h-[44px] px-8 text-[15px] rounded-lg bg-signal-bg text-white hover:bg-signal-bg-hover hover:-translate-y-px shadow-sm hover:shadow-md transition-all"
          >
            {t.cta.primary}
          </Link>
          <Link 
            href={l('/pricing')}
            className="inline-flex items-center justify-center font-medium h-12 min-h-[44px] px-8 text-[15px] rounded-lg border border-border bg-canvas text-ink hover:bg-mist hover:-translate-y-px transition-all"
          >
            {t.cta.secondary}
          </Link>
        </div>
      </section>
    </div>
  );
}
