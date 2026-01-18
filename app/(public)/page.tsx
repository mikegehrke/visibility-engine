'use client';

import Link from 'next/link';
import { H1, H2, H3, Body, Lead, Overline } from '@/components/shared/Typography';
import Card, { CardContent } from '@/components/shared/Card';
import Button from '@/components/shared/Button';
import { useLanguage } from '@/lib/context/LanguageContext';

export default function HomePage() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen">
      {/* ═══════════════════════════════════════════════════════════
          HERO SECTION - Enterprise SaaS, commanding presence
          ═══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        {/* Subtle gradient background - refined, not flashy */}
        <div className="absolute inset-0 bg-gradient-to-b from-signal-muted/30 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(29,78,216,0.08),transparent)] pointer-events-none" />
        
        {/* Decorative grid pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" aria-hidden="true">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>
        
        {/* Floating orbs - subtle depth */}
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-signal/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-signal-muted/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
        
        <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-24">
          <div className="max-w-4xl">
            <Overline className="mb-6 block text-signal">{t.landing.hero.overline}</Overline>
            <H1 className="mb-8">
              {t.landing.hero.title}<br />
              <span className="text-signal">{t.landing.hero.titleHighlight}</span>
            </H1>
            <Lead className="mb-12 max-w-2xl text-slate">
              {t.landing.hero.subtitle}
            </Lead>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/register">
                <Button variant="primary" size="lg">
                  {t.landing.hero.ctaPrimary}
                </Button>
              </Link>
              <Link href="/features">
                <Button variant="secondary" size="lg">
                  {t.landing.hero.ctaSecondary}
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Abstract UI preview - floating cards suggesting the dashboard */}
          <div className="hidden lg:block absolute top-32 right-0 w-[500px] h-[400px] pointer-events-none" aria-hidden="true">
            {/* Main glass card */}
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
            
            {/* Floating metric card */}
            <div className="absolute top-32 right-24 w-40 h-24 rounded-xl bg-surface-1/90 backdrop-blur-xl border border-border/50 shadow-xl transform -rotate-6">
              <div className="p-4">
                <div className="text-xs text-slate mb-1">Reach</div>
                <div className="text-2xl font-bold text-signal">+247%</div>
                <div className="mt-2 h-1.5 w-full bg-signal/20 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-signal rounded-full" />
                </div>
              </div>
            </div>
            
            {/* Small notification card */}
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

      {/* ═══════════════════════════════════════════════════════════
          TRUST BAR - Social proof, enterprise credibility
          ═══════════════════════════════════════════════════════════ */}
      <section className="border-y border-border/50 bg-surface-1/50">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <p className="text-center text-sm font-medium text-slate mb-8">
            {t.landing.trustBar.title}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10">
            {/* Category badges instead of fake logos */}
            {(t.landing.trustBar.categories || [
              { icon: '🎬', label: 'Creators' },
              { icon: '🏢', label: 'Agencies' },
              { icon: '🚀', label: 'Startups' },
              { icon: '🏛️', label: 'Enterprise' },
              { icon: '📈', label: 'Growth Teams' },
            ]).map((cat: { icon: string; label: string }, index: number) => (
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

      {/* ═══════════════════════════════════════════════════════════
          PROBLEM SECTION - Pain points, relatable
          ═══════════════════════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-6 py-32">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <Overline className="mb-4 block">{t.landing.problem.overline}</Overline>
          <H2 className="mb-6">{t.landing.problem.title}</H2>
          <Body className="text-slate text-lg">
            {t.landing.problem.subtitle}
          </Body>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              stat: t.landing.problem.stats[0].stat,
              label: t.landing.problem.stats[0].label,
              icon: 'M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5',
            },
            {
              stat: t.landing.problem.stats[1].stat,
              label: t.landing.problem.stats[1].label,
              icon: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z',
            },
            {
              stat: t.landing.problem.stats[2].stat,
              label: t.landing.problem.stats[2].label,
              icon: 'M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z',
            },
          ].map((item, idx) => (
            <Card key={idx} variant="outlined" padding="spacious" className="text-center">
              <CardContent>
                <div className="w-12 h-12 rounded-xl bg-danger-muted flex items-center justify-center mx-auto mb-6">
                  <svg className="w-6 h-6 text-danger" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <div className="text-4xl font-semibold text-ink tracking-tight mb-3">{item.stat}</div>
                <Body className="text-slate">{item.label}</Body>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SOLUTION SECTION - The answer, clear value
          ═══════════════════════════════════════════════════════════ */}
      <section className="border-y border-border bg-surface-1">
        <div className="max-w-6xl mx-auto px-6 py-32">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <Overline className="mb-4 block text-signal">{t.landing.solution.overline}</Overline>
            <H2 className="mb-6">{t.landing.solution.title}</H2>
            <Body className="text-slate text-lg">
              {t.landing.solution.subtitle}
            </Body>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {t.landing.solution.steps.map((item, idx) => (
              <Card key={idx} variant="elevated" padding="spacious" hover className="group">
                <CardContent>
                  <div className="text-5xl font-semibold text-signal/15 mb-6 tracking-tight">{item.num}</div>
                  <H3 className="mb-4 group-hover:text-signal transition-colors duration-slow">{item.title}</H3>
                  <Body className="text-slate mb-6">{item.description}</Body>
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
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FOR WHO SECTION - Audience segments
          ═══════════════════════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-6 py-32">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <Overline className="mb-4 block">{t.landing.forWho.overline}</Overline>
          <H2>{t.landing.forWho.title}</H2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card variant="elevated" padding="spacious" hover className="group">
            <CardContent>
              <div className="w-14 h-14 rounded-2xl bg-signal-muted flex items-center justify-center mb-6 transition-transform duration-slow group-hover:scale-105">
                <svg className="w-7 h-7 text-signal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <H3 className="mb-4">{t.landing.forWho.creators.title}</H3>
              <Body className="text-slate mb-6">
                {t.landing.forWho.creators.description}
              </Body>
              <ul className="space-y-3">
                {t.landing.forWho.creators.features.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-ink/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-signal" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card variant="elevated" padding="spacious" hover className="group">
            <CardContent>
              <div className="w-14 h-14 rounded-2xl bg-signal-muted flex items-center justify-center mb-6 transition-transform duration-slow group-hover:scale-105">
                <svg className="w-7 h-7 text-signal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                </svg>
              </div>
              <H3 className="mb-4">{t.landing.forWho.companies.title}</H3>
              <Body className="text-slate mb-6">
                {t.landing.forWho.companies.description}
              </Body>
              <ul className="space-y-3">
                {t.landing.forWho.companies.features.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-ink/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-signal" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FEATURES GRID - Platform capabilities
          ═══════════════════════════════════════════════════════════ */}
      <section className="border-y border-border bg-surface-1">
        <div className="max-w-6xl mx-auto px-6 py-32">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Overline className="mb-4 block">{t.landing.platform.overline}</Overline>
            <H2 className="mb-6">{t.landing.platform.title}</H2>
            <Body className="text-slate text-lg">
              {t.landing.platform.subtitle}
            </Body>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.landing.platform.features.map((feature, idx) => (
              <Card key={idx} variant="outlined" padding="compact" hover className="group">
                <CardContent className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-canvas border border-border flex items-center justify-center flex-shrink-0 group-hover:border-signal/30 group-hover:bg-signal-muted transition-all duration-slow">
                    <svg className="w-5 h-5 text-signal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <Body className="font-medium text-ink mb-1">{feature.label}</Body>
                    <p className="text-sm text-slate">{feature.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          TESTIMONIAL SECTION - Social proof
          ═══════════════════════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-6 py-32">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Overline className="mb-4 block">{t.landing.testimonials.overline}</Overline>
          <H2>{t.landing.testimonials.title}</H2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {t.landing.testimonials.items.map((item, idx) => (
            <Card key={idx} variant="elevated" padding="spacious">
              <CardContent>
                <blockquote className="text-lg text-ink leading-relaxed mb-6">
                  "{item.quote}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-signal-muted flex items-center justify-center">
                    <span className="text-sm font-semibold text-signal">{item.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <div>
                    <div className="font-medium text-ink">{item.name}</div>
                    <div className="text-sm text-slate">{item.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FINAL CTA - Strong close
          ═══════════════════════════════════════════════════════════ */}
      <section className="border-t border-border bg-ink">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <H2 className="mb-6 text-canvas">{t.landing.cta.title}</H2>
          <Lead className="mb-10 text-canvas/70 max-w-2xl mx-auto">
            {t.landing.cta.subtitle}
          </Lead>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button variant="primary" size="lg">
                {t.landing.cta.ctaPrimary}
              </Button>
            </Link>
            <Link href="/pricing">
              <button className="px-6 py-3 text-base font-medium rounded-xl border-2 border-canvas/30 text-canvas bg-transparent hover:bg-canvas/10 hover:border-canvas/50 transition-all duration-fast">
                {t.landing.cta.ctaSecondary}
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
