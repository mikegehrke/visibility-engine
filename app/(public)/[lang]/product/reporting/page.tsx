'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { H1, H2, H3, Body, Lead, Overline } from '@/components/shared/Typography';
import Card, { CardContent } from '@/components/shared/Card';
import Button from '@/components/shared/Button';
import { publicTranslations } from '@/lib/i18n/public-translations';

export default function ReportingPage() {
  const params = useParams();
  const lang = (params.lang as 'en' | 'de') || 'en';
  const l = (path: string) => `/${lang}${path}`;
  const t = publicTranslations[lang];
  const page = t.productPages.reporting;

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
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <span className="font-medium text-ink">Monthly Performance Report</span>
                <span className="text-xs px-2 py-1 rounded bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">Auto-generated</span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-canvas rounded-lg p-3 border border-border">
                  <div className="text-2xl font-semibold text-ink">124K</div>
                  <div className="text-xs text-slate">Total Reach</div>
                </div>
                <div className="bg-canvas rounded-lg p-3 border border-border">
                  <div className="text-2xl font-semibold text-signal">+47%</div>
                  <div className="text-xs text-slate">vs Last Month</div>
                </div>
                <div className="bg-canvas rounded-lg p-3 border border-border">
                  <div className="text-2xl font-semibold text-ink">8.2K</div>
                  <div className="text-xs text-slate">Engagement</div>
                </div>
              </div>
              <div className="h-24 flex items-end gap-1">
                {[30, 45, 35, 60, 55, 70, 65, 80, 75, 90, 85, 95].map((h, i) => (
                  <div 
                    key={i} 
                    className="flex-1 bg-signal/60 rounded-t"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2 text-signal text-sm font-medium pt-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
                <span>Export as PDF, PPT, or Share Live</span>
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
                        ? "M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
                        : idx === 1
                        ? "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
                        : "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
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
