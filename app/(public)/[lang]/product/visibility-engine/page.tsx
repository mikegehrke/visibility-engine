'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { H1, H2, H3, Body, Lead, Overline } from '@/components/shared/Typography';
import Card, { CardContent } from '@/components/shared/Card';
import Button from '@/components/shared/Button';
import { publicTranslations } from '@/lib/i18n/public-translations';

export default function VisibilityEnginePage() {
  const params = useParams();
  const lang = (params.lang as 'en' | 'de') || 'en';
  const l = (path: string) => `/${lang}${path}`;
  const t = publicTranslations[lang];
  const page = t.productPages.visibilityEngine;

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
              <Link href={l('/register')}>
                <Button variant="primary" size="lg">
                  {page.cta.primary}
                </Button>
              </Link>
              <Link href={l('/features')}>
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
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-16 bg-surface-2 rounded-lg animate-pulse" />
              ))}
            </div>
            <div className="mt-6 flex items-center gap-2 text-slate text-sm">
              <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
              <span>Disconnected tools = Wasted time</span>
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
                        ? "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                        : idx === 1
                        ? "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
                        : "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
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
            <Link href={l('/register')}>
              <Button variant="primary" size="lg">
                {page.cta.primary}
              </Button>
            </Link>
            <Link href={l('/features')}>
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
