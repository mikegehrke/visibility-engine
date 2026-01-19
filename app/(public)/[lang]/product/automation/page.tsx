'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { H1, H2, H3, Body, Lead, Overline } from '@/components/shared/Typography';
import Card, { CardContent } from '@/components/shared/Card';
import Button from '@/components/shared/Button';
import { publicTranslations } from '@/lib/i18n/public-translations';

export default function AutomationPage() {
  const params = useParams();
  const lang = (params.lang as 'en' | 'de') || 'en';
  const l = (path: string) => `/${lang}${path}`;
  const t = publicTranslations[lang];
  const page = t.productPages.automation;

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
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-signal-muted flex items-center justify-center">
                  <svg className="w-6 h-6 text-signal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-ink">Trigger: Schedule</div>
                  <div className="text-xs text-slate">Every day at 9:00 AM</div>
                </div>
              </div>
              <div className="h-8 border-l-2 border-dashed border-border ml-6" />
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                  <svg className="w-6 h-6 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-ink">Condition: Check</div>
                  <div className="text-xs text-slate">If engagement &gt; threshold</div>
                </div>
              </div>
              <div className="h-8 border-l-2 border-dashed border-border ml-6" />
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-ink">Action: Execute</div>
                  <div className="text-xs text-slate">Publish to all channels</div>
                </div>
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
                        ? "M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                        : idx === 1
                        ? "M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                        : "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
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
