import Link from 'next/link';
import { landing as landingEn } from '@/lib/i18n/locales/en/landing';
import { landing as landingDe } from '@/lib/i18n/locales/de/landing';
import { supportedLanguages, type Lang } from '@/lib/i18n/langs';

// Static translations map
const translations = {
  en: landingEn,
  de: landingDe,
} as const;

// Generate static params for SSG
export function generateStaticParams() {
  return supportedLanguages.map((lang) => ({ lang }));
}

// Force static generation - NO cookies, NO runtime
export const dynamic = 'force-static';
export const revalidate = 3600;

// SEO Metadata
export async function generateMetadata({ params }: { params: { lang: string } }) {
  const lang = (params.lang as Lang) || 'en';
  const t = translations[lang];
  
  return {
    title: `Visibility Engine - ${t.hero.title} ${t.hero.titleHighlight}`,
    description: t.hero.subtitle,
    alternates: {
      canonical: `https://visibility-engine.com/${lang}`,
      languages: {
        'en': 'https://visibility-engine.com/en',
        'de': 'https://visibility-engine.com/de',
      },
    },
  };
}

export default function HomePage({ params }: { params: { lang: string } }) {
  // Get locale from URL params - NO cookies!
  const lang = (params.lang as Lang) || 'en';
  const t = translations[lang];
  
  // Helper to prefix links with lang
  const l = (path: string) => `/${lang}${path}`;

  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-signal-muted/30 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(29,78,216,0.08),transparent)] pointer-events-none" />
        
        {/* Grid pattern - CSS only */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-grid-pattern" aria-hidden="true" />
        
        {/* Floating orbs */}
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-signal/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-signal-muted/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
        
        <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-24">
          <div className="max-w-4xl">
            <span className="text-xs font-semibold uppercase tracking-[0.1em] mb-6 block text-signal">
              {t.hero.overline}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-[-0.025em] text-ink text-balance mb-8">
              {t.hero.title}<br />
              <span className="text-signal">{t.hero.titleHighlight}</span>
            </h1>
            <p className="text-lg sm:text-xl font-normal leading-[1.6] text-balance mb-12 max-w-2xl text-slate">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href={l('/register')}
                className="inline-flex items-center justify-center font-medium h-12 min-h-[44px] px-6 text-[15px] rounded-lg bg-signal-bg text-white hover:bg-signal-bg-hover hover:-translate-y-px shadow-sm hover:shadow-md transition-all"
              >
                {t.hero.ctaPrimary}
              </Link>
              <Link 
                href={l('/features')}
                className="inline-flex items-center justify-center font-medium h-12 min-h-[44px] px-6 text-[15px] rounded-lg border border-border bg-canvas text-ink hover:bg-mist hover:-translate-y-px transition-all"
              >
                {t.hero.ctaSecondary}
              </Link>
            </div>
          </div>
          
          {/* Abstract UI preview */}
          <div className="hidden lg:block absolute top-32 right-0 w-[500px] h-[400px] pointer-events-none" aria-hidden="true">
            <div className="absolute top-0 right-0 w-80 h-48 rounded-2xl bg-surface-1/80 backdrop-blur-xl border border-border/50 shadow-2xl transform rotate-3 translate-x-12">
              <div className="p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-signal/10 flex items-center justify-center">
                    <div className="w-5 h-5 rounded bg-signal/60" />
                  </div>
                  <div>
                    <div className="h-3 w-24 bg-foreground/20 rounded" />
                    <div className="h-2 w-16 bg-foreground/10 rounded mt-1.5" />
                  </div>
                </div>
                <div className="space-y-2.5">
                  <div className="h-2 w-full bg-foreground/10 rounded" />
                  <div className="h-2 w-4/5 bg-foreground/10 rounded" />
                  <div className="h-2 w-3/5 bg-foreground/10 rounded" />
                </div>
              </div>
            </div>
            
            <div className="absolute top-32 right-24 w-40 h-24 rounded-xl bg-surface-1/90 backdrop-blur-xl border border-border/50 shadow-xl transform -rotate-6">
              <div className="p-4">
                <div className="text-xs text-slate mb-1">Reach</div>
                <div className="text-2xl font-bold text-signal">+247%</div>
                <div className="mt-2 h-1.5 w-full bg-signal/20 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-signal rounded-full" />
                </div>
              </div>
            </div>
            
            <div className="absolute top-56 right-0 w-48 h-16 rounded-lg bg-surface-1/90 backdrop-blur-xl border border-border/50 shadow-lg transform rotate-2">
              <div className="p-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                </div>
                <div>
                  <div className="h-2 w-20 bg-foreground/20 rounded" />
                  <div className="h-1.5 w-12 bg-foreground/10 rounded mt-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-border/50 bg-surface-1/50">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <p className="text-center text-sm font-medium text-slate mb-8">
            {t.trustBar.title}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10">
            {t.trustBar.categories.map((cat, index) => (
              <div 
                key={index} 
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-2/50 border border-border/50"
              >
                <span className="text-lg" aria-hidden="true">{cat.icon}</span>
                <span className="text-sm font-medium text-foreground">{cat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-32">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-xs font-semibold uppercase tracking-[0.1em] text-signal mb-4 block">
            {t.problem.overline}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-[1.1] tracking-[-0.02em] text-ink text-balance mb-6">
            {t.problem.title}
          </h2>
          <p className="font-normal text-slate text-lg">
            {t.problem.subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {t.problem.stats.map((item, idx) => (
            <div key={idx} className="rounded-lg p-8 bg-canvas border border-border text-center">
              <div className="w-12 h-12 rounded-xl bg-danger-muted flex items-center justify-center mx-auto mb-6">
                <svg className="w-6 h-6 text-danger" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={
                    idx === 0 ? 'M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5' :
                    idx === 1 ? 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z' :
                    'M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z'
                  } />
                </svg>
              </div>
              <div className="text-4xl font-semibold text-ink tracking-tight mb-3">{item.stat}</div>
              <p className="text-base font-normal leading-[1.7] text-slate">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section className="border-y border-border bg-surface-1">
        <div className="max-w-6xl mx-auto px-6 py-32">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <span className="text-xs font-semibold uppercase tracking-[0.1em] mb-4 block text-signal">
              {t.solution.overline}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-[1.1] tracking-[-0.02em] text-ink text-balance mb-6">
              {t.solution.title}
            </h2>
            <p className="font-normal text-slate text-lg">
              {t.solution.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {t.solution.steps.map((item, idx) => (
              <div key={idx} className="rounded-lg p-8 bg-canvas shadow-sm border border-border/60 hover:shadow-md hover:border-border hover:-translate-y-0.5 transition-all cursor-pointer group">
                <div className="text-5xl font-semibold text-signal/15 mb-6 tracking-tight">{item.num}</div>
                <h3 className="text-lg sm:text-xl font-semibold leading-[1.25] tracking-[-0.01em] text-ink mb-4 group-hover:text-signal transition-colors">
                  {item.title}
                </h3>
                <p className="text-base font-normal leading-[1.7] text-slate mb-6">{item.description}</p>
                <ul className="space-y-2">
                  {item.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2 text-sm text-ink/80">
                      <svg className="w-4 h-4 text-signal flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOR WHO SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-32">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-xs font-semibold uppercase tracking-[0.1em] text-signal mb-4 block">
            {t.forWho.overline}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-[1.1] tracking-[-0.02em] text-ink text-balance">
            {t.forWho.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Creators */}
          <div className="rounded-lg p-8 bg-canvas shadow-sm border border-border/60 hover:shadow-md hover:-translate-y-0.5 transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-signal-muted flex items-center justify-center mb-6 transition-transform group-hover:scale-105">
              <svg className="w-7 h-7 text-signal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold leading-[1.25] tracking-[-0.01em] text-ink mb-4">
              {t.forWho.creators.title}
            </h3>
            <p className="text-base font-normal leading-[1.7] text-slate mb-6">
              {t.forWho.creators.description}
            </p>
            <ul className="space-y-3">
              {t.forWho.creators.features.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-ink/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-signal" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Companies */}
          <div className="rounded-lg p-8 bg-canvas shadow-sm border border-border/60 hover:shadow-md hover:-translate-y-0.5 transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-signal-muted flex items-center justify-center mb-6 transition-transform group-hover:scale-105">
              <svg className="w-7 h-7 text-signal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold leading-[1.25] tracking-[-0.01em] text-ink mb-4">
              {t.forWho.companies.title}
            </h3>
            <p className="text-base font-normal leading-[1.7] text-slate mb-6">
              {t.forWho.companies.description}
            </p>
            <ul className="space-y-3">
              {t.forWho.companies.features.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-ink/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-signal" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PLATFORM FEATURES */}
      <section className="border-y border-border bg-surface-1">
        <div className="max-w-6xl mx-auto px-6 py-32">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.1em] text-signal mb-4 block">
              {t.platform.overline}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-[1.1] tracking-[-0.02em] text-ink text-balance mb-6">
              {t.platform.title}
            </h2>
            <p className="font-normal text-slate text-lg">
              {t.platform.subtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.platform.features.map((feature, idx) => (
              <div key={idx} className="rounded-lg p-4 bg-canvas border border-border hover:shadow-md hover:-translate-y-0.5 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-canvas border border-border flex items-center justify-center flex-shrink-0 group-hover:border-signal/30 group-hover:bg-signal-muted transition-all">
                    <svg className="w-5 h-5 text-signal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-base leading-[1.7] font-medium text-ink mb-1">{feature.label}</p>
                    <p className="text-sm text-slate">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-6xl mx-auto px-6 py-32">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.1em] text-signal mb-4 block">
            {t.testimonials.overline}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-[1.1] tracking-[-0.02em] text-ink text-balance">
            {t.testimonials.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {t.testimonials.items.map((item, idx) => (
            <div key={idx} className="rounded-lg p-8 bg-canvas shadow-sm border border-border/60">
              <blockquote className="text-lg text-ink leading-relaxed mb-6">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-signal-muted flex items-center justify-center">
                  <span className="text-sm font-semibold text-signal">
                    {item.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-ink">{item.name}</div>
                  <div className="text-sm text-slate">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-border bg-ink">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-[1.1] tracking-[-0.02em] text-balance mb-6 text-canvas">
            {t.cta.title}
          </h2>
          <p className="text-lg sm:text-xl font-normal leading-[1.6] text-balance mb-10 text-canvas/70 max-w-2xl mx-auto">
            {t.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href={l('/register')}
              className="inline-flex items-center justify-center font-medium h-12 min-h-[44px] px-6 text-[15px] rounded-lg bg-signal-bg text-white hover:bg-signal-bg-hover hover:-translate-y-px shadow-sm hover:shadow-md transition-all"
            >
              {t.cta.ctaPrimary}
            </Link>
            <Link 
              href={l('/pricing')}
              className="px-6 py-3 text-base font-medium rounded-xl border-2 border-canvas/30 text-canvas bg-transparent hover:bg-canvas/10 hover:border-canvas/50 transition-all inline-flex items-center justify-center"
            >
              {t.cta.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
