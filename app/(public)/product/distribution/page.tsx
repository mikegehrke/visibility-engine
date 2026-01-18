'use client';

import Link from 'next/link';
import { H1, H2, H3, Body, Lead, Overline } from '@/components/shared/Typography';
import Card, { CardContent } from '@/components/shared/Card';
import Button from '@/components/shared/Button';
import { useLanguage } from '@/lib/context/LanguageContext';

export default function DistributionPage() {
  const { t } = useLanguage();
  const page = t.productPages.distribution;

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
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#1DA1F2] flex items-center justify-center">
                  <span className="text-white text-sm font-bold">X</span>
                </div>
                <div className="h-3 bg-surface-2 rounded flex-1" />
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] flex items-center justify-center">
                  <span className="text-white text-sm font-bold">IG</span>
                </div>
                <div className="h-3 bg-surface-2 rounded flex-1" />
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#0077B5] flex items-center justify-center">
                  <span className="text-white text-sm font-bold">in</span>
                </div>
                <div className="h-3 bg-surface-2 rounded flex-1" />
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#FF0000] flex items-center justify-center">
                  <span className="text-white text-sm font-bold">YT</span>
                </div>
                <div className="h-3 bg-surface-2 rounded flex-1" />
              </div>
            </div>
            <div className="mt-6 flex items-center gap-2 text-signal text-sm font-medium">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span>One source → All platforms</span>
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
                        ? "M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                        : idx === 1
                        ? "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        : "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5"
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
