'use client';

import Link from 'next/link';
import { H1, H2, H3, Body, Lead, Overline } from '@/components/shared/Typography';
import Card, { CardContent } from '@/components/shared/Card';
import Button from '@/components/shared/Button';
import { useLanguage } from '@/lib/context/LanguageContext';

// Challenge card component
function ChallengeCard({ 
  title, 
  description, 
  icon 
}: { 
  title: string; 
  description: string; 
  icon: string;
}) {
  return (
    <Card variant="outlined" padding="compact" className="group h-full border-red-200 dark:border-red-900/30 bg-red-50/50 dark:bg-red-950/10">
      <CardContent className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center flex-shrink-0">
          <svg className="w-5 h-5 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
          </svg>
        </div>
        <div>
          <H3 className="text-base mb-1">{title}</H3>
          <Body className="text-slate text-sm">{description}</Body>
        </div>
      </CardContent>
    </Card>
  );
}

// Solution card component
function SolutionCard({ 
  title, 
  description, 
  icon 
}: { 
  title: string; 
  description: string; 
  icon: string;
}) {
  return (
    <Card variant="outlined" padding="compact" hover className="group h-full">
      <CardContent className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-lg bg-signal-muted flex items-center justify-center flex-shrink-0 transition-transform duration-slow group-hover:scale-105">
          <svg className="w-5 h-5 text-signal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
          </svg>
        </div>
        <div>
          <H3 className="text-base mb-1">{title}</H3>
          <Body className="text-slate text-sm">{description}</Body>
        </div>
      </CardContent>
    </Card>
  );
}

// Metric card component
function MetricCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center p-6 bg-surface-1 rounded-xl border border-border">
      <div className="text-3xl md:text-4xl font-bold text-signal tracking-tight mb-2">{value}</div>
      <div className="text-sm text-slate">{label}</div>
    </div>
  );
}

// Icon paths
const challengeIcons = [
  'M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6', // Scale
  'M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z', // Security
  'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z', // Compliance
  'M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244', // Integration
];

const solutionIcons = [
  'M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z', // Dedicated infrastructure
  'M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33', // SSO/SCIM
  'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z', // Audit logs
  'M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75', // Custom SLAs
];

export default function EnterprisePage() {
  const { t } = useLanguage();
  const uc = t.useCasePages?.enterprise;

  // Fallback content if translations not yet loaded
  if (!uc) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-signal-muted/30 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(29,78,216,0.08),transparent)] pointer-events-none" />
        
        <div className="relative max-w-4xl mx-auto px-6 pt-32 pb-20 text-center">
          <Overline className="mb-6 block text-signal">{uc.hero.overline}</Overline>
          <H1 className="mb-8">
            {uc.hero.title}<br />
            <span className="text-signal">{uc.hero.titleHighlight}</span>
          </H1>
          <Lead className="max-w-2xl mx-auto text-slate mb-10">
            {uc.hero.subtitle}
          </Lead>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button variant="primary" size="lg">{uc.hero.ctaPrimary}</Button>
            </Link>
            <Link href="/features">
              <Button variant="secondary" size="lg">{uc.hero.ctaSecondary}</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="border-y border-border bg-surface-1">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <Overline className="mb-4 block text-red-600 dark:text-red-400">{uc.challenges.overline}</Overline>
            <H2 className="mb-4">{uc.challenges.title}</H2>
            <Body className="text-slate max-w-2xl mx-auto">{uc.challenges.subtitle}</Body>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {uc.challenges.items.map((item, idx) => (
              <ChallengeCard
                key={idx}
                title={item.title}
                description={item.description}
                icon={challengeIcons[idx]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <Overline className="mb-4 block text-signal">{uc.solutions.overline}</Overline>
          <H2 className="mb-4">{uc.solutions.title}</H2>
          <Body className="text-slate max-w-2xl mx-auto">{uc.solutions.subtitle}</Body>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {uc.solutions.items.map((item, idx) => (
            <SolutionCard
              key={idx}
              title={item.title}
              description={item.description}
              icon={solutionIcons[idx]}
            />
          ))}
        </div>
      </section>

      {/* Metrics Section */}
      <section className="border-y border-border bg-surface-1">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <Overline className="mb-4 block text-signal">{uc.metrics.overline}</Overline>
            <H2>{uc.metrics.title}</H2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {uc.metrics.items.map((item, idx) => (
              <MetricCard key={idx} value={item.value} label={item.label} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <H2 className="mb-6">{uc.cta.title}</H2>
        <Body className="text-slate text-lg max-w-2xl mx-auto mb-10">
          {uc.cta.subtitle}
        </Body>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/register">
            <Button variant="primary" size="lg">{uc.cta.primary}</Button>
          </Link>
          <Link href="/pricing">
            <Button variant="secondary" size="lg">{uc.cta.secondary}</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
