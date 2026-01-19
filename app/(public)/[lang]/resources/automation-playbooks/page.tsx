'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { H1, H2, H3, Body, Lead, Overline } from '@/components/shared/Typography';
import Card, { CardContent } from '@/components/shared/Card';
import Button from '@/components/shared/Button';
import { publicTranslations } from '@/lib/i18n/public-translations';

// Playbook card component
function PlaybookCard({ 
  title, 
  description, 
  stepsCount,
  useCase,
  icon,
  cta,
  slug 
}: { 
  title: string; 
  description: string; 
  stepsCount: string;
  useCase: string;
  icon: string;
  cta: string;
  slug: string;
}) {
  return (
    <Link href={`/resources/automation-playbooks/${slug}`} className="block h-full">
      <Card variant="outlined" padding="default" hover className="group h-full flex flex-col">
        <CardContent className="flex flex-col h-full">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-signal to-signal/70 flex items-center justify-center flex-shrink-0 transition-transform duration-slow group-hover:scale-105">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
              </svg>
            </div>
            <div className="flex-1">
              <H3 className="text-lg mb-1 group-hover:text-signal transition-colors">{title}</H3>
              <span className="inline-flex items-center gap-1.5 text-xs text-slate">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
                </svg>
                {stepsCount}
              </span>
            </div>
          </div>
          <Body className="text-slate text-sm mb-3 flex-grow">{description}</Body>
          <div className="bg-signal-muted/50 rounded-lg px-3 py-2 mb-4">
            <span className="text-xs font-medium text-signal">{useCase}</span>
          </div>
          <Button variant="secondary" size="sm" className="w-full mt-auto group-hover:bg-signal group-hover:text-white transition-colors">
            {cta}
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
}

// Icon paths for playbooks
const playbookIcons = [
  'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5',
  'M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z',
  'M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0',
  'M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z',
  'M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z',
  'M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99',
];

export default function AutomationPlaybooksPage() {
  const params = useParams();
  const lang = (params.lang as 'en' | 'de') || 'en';
  const l = (path: string) => `/${lang}${path}`;
  const t = publicTranslations[lang];
  const rp = t.resourcePages?.automationPlaybooks;

  // Fallback content if translations not yet loaded
  if (!rp) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  const playbooks = [
    { ...rp.items.contentCalendar, icon: playbookIcons[0], slug: 'content-calendar' },
    { ...rp.items.performanceAlerts, icon: playbookIcons[1], slug: 'performance-alerts' },
    { ...rp.items.engagementBoost, icon: playbookIcons[2], slug: 'engagement-booster' },
    { ...rp.items.crossPosting, icon: playbookIcons[3], slug: 'cross-platform' },
    { ...rp.items.aiOptimization, icon: playbookIcons[4], slug: 'ai-optimization' },
    { ...rp.items.republishing, icon: playbookIcons[5], slug: 'evergreen-republishing' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-signal-muted/30 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16">
          <div className="max-w-3xl">
            <Overline className="text-signal mb-4">{rp.hero.overline}</Overline>
            <H1 className="mb-6">{rp.hero.title}</H1>
            <Lead className="text-slate max-w-2xl">{rp.hero.subtitle}</Lead>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {rp.benefits.map((benefit: string, index: number) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              <span className="text-sm font-medium text-foreground">{benefit}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Playbooks Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="mb-8">
          <H2 className="mb-2">{rp.grid.title}</H2>
          <Body className="text-slate">{rp.grid.subtitle}</Body>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {playbooks.map((playbook, index) => (
            <PlaybookCard
              key={index}
              title={playbook.title}
              description={playbook.description}
              stepsCount={playbook.stepsCount}
              useCase={playbook.useCase}
              icon={playbook.icon}
              cta={rp.cta}
              slug={playbook.slug}
            />
          ))}
        </div>
      </section>

      {/* Custom Playbook CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <Card variant="elevated" padding="spacious" className="bg-gradient-to-br from-surface-2 to-surface-1 border-signal/20">
          <CardContent className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-20 h-20 rounded-2xl bg-signal flex items-center justify-center flex-shrink-0">
              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </div>
            <div className="flex-1 text-center lg:text-left">
              <H2 className="mb-2">{rp.custom.title}</H2>
              <Body className="text-slate max-w-xl">{rp.custom.description}</Body>
            </div>
            <Link href={l('/contact')}>
              <Button variant="primary" size="lg">{rp.custom.button}</Button>
            </Link>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
