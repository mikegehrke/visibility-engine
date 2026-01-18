'use client';

import Link from 'next/link';
import { H1, H2, H3, Body, Lead, Overline } from '@/components/shared/Typography';
import Card, { CardContent } from '@/components/shared/Card';
import Button from '@/components/shared/Button';
import { useLanguage } from '@/lib/context/LanguageContext';

export default function SignalsInsightsPage() {
  const { t } = useLanguage();
  const page = t.productPages.signalsInsights;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-signal-muted/30 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(29,78,216,0.08),transparent)] pointer-events-none" />
        
        <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <Overline className="mb-6 block text-signal">{page.hero.overline}</Overline>
            <H1 className="mb-8">
              {page.hero.title}<br />
              <span className="text-signal">{page.hero.titleHighlight}</span>
            </H1>
            <Lead className="mb-12 max-w-2xl mx-auto text-slate">
              {page.hero.subtitle}
            </Lead>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button variant="primary" size="lg">
                  {page.cta.primary}
                </Button>
              </Link>
              <Link href="/features">
                <Button variant="secondary" size="lg">
                  {page.cta.secondary}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Overline className="mb-4 block text-signal">{page.problem.overline}</Overline>
            <H2 className="mb-6">{page.problem.title}</H2>
            <Body className="text-slate text-lg leading-relaxed mb-8">
              {page.problem.description}
            </Body>
            <ul className="space-y-4">
              {page.problem.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <Body className="text-slate">{point}</Body>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-surface-1 rounded-2xl p-8 border border-border">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate">Signal Strength</span>
                <span className="text-sm font-medium text-signal">Strong</span>
              </div>
              <div className="h-32 flex items-end gap-2">
                {[40, 65, 45, 80, 60, 90, 75, 85, 70, 95, 88, 92].map((h, i) => (
                  <div 
                    key={i} 
                    className="flex-1 bg-signal/20 rounded-t transition-all hover:bg-signal/40"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2 text-signal text-sm font-medium">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                </svg>
                <span>Trend detected: +23% engagement</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-surface-1 border-y border-border">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <Overline className="mb-4 block text-signal">{page.howItWorks.overline}</Overline>
            <H2>{page.howItWorks.title}</H2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {page.howItWorks.steps.map((step, idx) => (
              <Card key={idx} variant="elevated" padding="spacious" className="relative">
                <div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-signal text-white flex items-center justify-center text-sm font-semibold">
                  {idx + 1}
                </div>
                <CardContent className="pt-4">
                  <H3 className="mb-3">{step.title}</H3>
                  <Body className="text-slate">{step.description}</Body>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Different Section */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <Overline className="mb-4 block text-signal">{page.different.overline}</Overline>
          <H2>{page.different.title}</H2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {page.different.points.map((point, idx) => (
            <Card key={idx} variant="outlined" padding="spacious" hover>
              <CardContent>
                <div className="w-12 h-12 rounded-xl bg-signal-muted flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-signal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={
                      idx === 0 
                        ? "M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
                        : idx === 1
                        ? "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                        : "M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                    } />
                  </svg>
                </div>
                <H3 className="mb-2">{point.title}</H3>
                <Body className="text-slate">{point.description}</Body>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-ink">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <H2 className="mb-6 text-canvas">{page.cta.title}</H2>
          <Lead className="mb-10 text-canvas/70 max-w-2xl mx-auto">
            {page.cta.subtitle}
          </Lead>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button variant="primary" size="lg">
                {page.cta.primary}
              </Button>
            </Link>
            <Link href="/features">
              <button className="px-6 py-3 text-base font-medium rounded-xl border-2 border-canvas/30 text-canvas bg-transparent hover:bg-canvas/10 hover:border-canvas/50 transition-all duration-fast">
                {page.cta.secondary}
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
