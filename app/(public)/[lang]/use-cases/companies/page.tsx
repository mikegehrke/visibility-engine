'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { H1, H2, H3, Body, Lead, Overline } from '@/components/shared/Typography';
import Card, { CardContent } from '@/components/shared/Card';
import Button from '@/components/shared/Button';
import { publicTranslations } from '@/lib/i18n/public-translations';

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
  'M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z', // Team coordination
  'M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z', // Brand consistency
  'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z', // ROI tracking
  'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z', // Manual processes
];

const solutionIcons = [
  'M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z', // Multi-brand workspaces
  'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z', // Brand guidelines
  'M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z', // ROI attribution
  'M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z', // Automation
];

export default function CompaniesPage() {
  const params = useParams();
  const lang = (params.lang as 'en' | 'de') || 'en';
  const l = (path: string) => `/${lang}${path}`;
  const t = publicTranslations[lang];
  const uc = t.useCasePages?.companies;

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
            <Link href={l('/register')}>
              <Button variant="primary" size="lg">{uc.hero.ctaPrimary}</Button>
            </Link>
            <Link href={l('/features')}>
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
          <Link href={l('/register')}>
            <Button variant="primary" size="lg">{uc.cta.primary}</Button>
          </Link>
          <Link href={l('/pricing')}>
            <Button variant="secondary" size="lg">{uc.cta.secondary}</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
