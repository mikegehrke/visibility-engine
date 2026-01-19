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

// Feature card component
function FeatureCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="p-6 bg-surface-1 rounded-xl border border-border">
      <div className="w-10 h-10 rounded-lg bg-signal-muted flex items-center justify-center mb-4">
        <svg className="w-5 h-5 text-signal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
        </svg>
      </div>
      <H3 className="text-base mb-2">{title}</H3>
      <Body className="text-slate text-sm">{description}</Body>
    </div>
  );
}

// Icon paths
const challengeIcons = [
  'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z', // Chart
  'M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5', // Multi-channel
  'M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941', // Attribution
  'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z', // Time
];

const solutionIcons = [
  'M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605', // Analytics
  'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5', // Calendar
  'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z', // AI
  'M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244', // Connect
];

const featureIcons = [
  'M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z', // Pie chart
  'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z', // Audience
  'M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z', // Grid
  'M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0', // Bell
  'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z', // Document
  'M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z', // Money
];

export default function MarketingIndustryPage() {
  const params = useParams();
  const lang = (params.lang as 'en' | 'de') || 'en';
  const l = (path: string) => `/${lang}${path}`;
  const t = publicTranslations[lang];
  const ind = t.industryPages?.marketing;

  // Fallback content if translations not yet loaded
  if (!ind) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-signal-muted/30 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(29,78,216,0.08),transparent)] pointer-events-none" />
        
        <div className="relative max-w-4xl mx-auto px-6 pt-32 pb-20 text-center">
          <Overline className="mb-6 block text-signal">{ind.hero.overline}</Overline>
          <H1 className="mb-8">
            {ind.hero.title}<br />
            <span className="text-signal">{ind.hero.titleHighlight}</span>
          </H1>
          <Lead className="max-w-2xl mx-auto text-slate mb-10">
            {ind.hero.subtitle}
          </Lead>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={l('/register')}>
              <Button variant="primary" size="lg">{ind.hero.ctaPrimary}</Button>
            </Link>
            <Link href={l('/features')}>
              <Button variant="secondary" size="lg">{ind.hero.ctaSecondary}</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="border-y border-border bg-surface-1">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <Overline className="mb-4 block text-red-600 dark:text-red-400">{ind.challenges.overline}</Overline>
            <H2 className="mb-4">{ind.challenges.title}</H2>
            <Body className="text-slate max-w-2xl mx-auto">{ind.challenges.subtitle}</Body>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {ind.challenges.items.map((item, idx) => (
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
          <Overline className="mb-4 block text-signal">{ind.solutions.overline}</Overline>
          <H2 className="mb-4">{ind.solutions.title}</H2>
          <Body className="text-slate max-w-2xl mx-auto">{ind.solutions.subtitle}</Body>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {ind.solutions.items.map((item, idx) => (
            <SolutionCard
              key={idx}
              title={item.title}
              description={item.description}
              icon={solutionIcons[idx]}
            />
          ))}
        </div>
      </section>

      {/* Key Features Section */}
      <section className="border-y border-border bg-surface-1">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <Overline className="mb-4 block text-signal">{ind.features.overline}</Overline>
            <H2 className="mb-4">{ind.features.title}</H2>
            <Body className="text-slate max-w-2xl mx-auto">{ind.features.subtitle}</Body>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ind.features.items.map((item, idx) => (
              <FeatureCard
                key={idx}
                title={item.title}
                description={item.description}
                icon={featureIcons[idx]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <H2 className="mb-6">{ind.cta.title}</H2>
        <Body className="text-slate text-lg max-w-2xl mx-auto mb-10">
          {ind.cta.subtitle}
        </Body>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={l('/register')}>
            <Button variant="primary" size="lg">{ind.cta.primary}</Button>
          </Link>
          <Link href={l('/pricing')}>
            <Button variant="secondary" size="lg">{ind.cta.secondary}</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
