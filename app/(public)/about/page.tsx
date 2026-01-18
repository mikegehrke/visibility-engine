import { cookies } from 'next/headers';
import Link from 'next/link';
import { H1, H2, H3, Body, Lead, Overline } from '@/components/shared/Typography';
import Card, { CardContent } from '@/components/shared/Card';
import Button from '@/components/shared/Button';
import { getTranslations, type Locale } from '@/lib/i18n/server';
import type { AboutTranslations } from '@/lib/i18n/locales/en/about';

export default async function AboutPage() {
  const lang = (cookies().get('language')?.value as Locale) || 'en';
  const t = await getTranslations<AboutTranslations>(lang, 'about');

  const values = [
    {
      title: t.values.clarity.title,
      description: t.values.clarity.description,
      icon: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z',
    },
    {
      title: t.values.dataInformed.title,
      description: t.values.dataInformed.description,
      icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z',
    },
    {
      title: t.values.automation.title,
      description: t.values.automation.description,
      icon: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z',
    },
    {
      title: t.values.trust.title,
      description: t.values.trust.description,
      icon: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z',
    },
  ];

  const stats = [
    { value: t.stats.users.value, label: t.stats.users.label },
    { value: t.stats.posts.value, label: t.stats.posts.label },
    { value: t.stats.uptime.value, label: t.stats.uptime.label },
    { value: t.stats.support.value, label: t.stats.support.label },
  ];

  const approaches = [
    {
      num: t.approach.privacy.num,
      title: t.approach.privacy.title,
      description: t.approach.privacy.description,
    },
    {
      num: t.approach.performance.num,
      title: t.approach.performance.title,
      description: t.approach.performance.description,
    },
    {
      num: t.approach.open.num,
      title: t.approach.open.title,
      description: t.approach.open.description,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-signal-muted/30 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(29,78,216,0.08),transparent)] pointer-events-none" />
        
        <div className="relative max-w-4xl mx-auto px-6 pt-32 pb-20 text-center">
          <Overline className="mb-6 block text-signal">{t.hero.overline}</Overline>
          <H1 className="mb-8">
            {t.hero.title}<br />
            <span className="text-signal">{t.hero.titleHighlight}</span>
          </H1>
          <Lead className="max-w-2xl mx-auto text-slate">
            {t.hero.subtitle}
          </Lead>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-border bg-surface-1">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-signal tracking-tight mb-2">{stat.value}</div>
                <div className="text-sm text-slate">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Overline className="mb-4 block text-signal">{t.vision.overline}</Overline>
            <H2 className="mb-6">{t.vision.title}</H2>
            <Body className="text-slate text-lg leading-relaxed mb-6">
              {t.vision.paragraph1}
            </Body>
            <Body className="text-slate text-lg leading-relaxed">
              {t.vision.paragraph2}
            </Body>
          </div>
          <Card variant="elevated" padding="spacious">
            <CardContent>
              <blockquote className="text-lg text-ink leading-relaxed italic">
                "{t.vision.quote}"
              </blockquote>
              <div className="mt-6 pt-6 border-t border-border">
                <div className="text-sm font-medium text-ink">{t.vision.quoteAuthor}</div>
                <div className="text-sm text-slate">{t.vision.quoteTeam}</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values Section */}
      <section className="border-y border-border bg-surface-1">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <Overline className="mb-4 block text-signal">{t.values.overline}</Overline>
            <H2>{t.values.title}</H2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, idx) => (
              <Card key={idx} variant="outlined" padding="spacious" hover className="group">
                <CardContent>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-signal-muted flex items-center justify-center flex-shrink-0 transition-transform duration-slow group-hover:scale-105">
                      <svg className="w-6 h-6 text-signal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={value.icon} />
                      </svg>
                    </div>
                    <div>
                      <H3 className="mb-3">{value.title}</H3>
                      <Body className="text-slate">{value.description}</Body>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <Overline className="mb-4 block text-signal">{t.approach.overline}</Overline>
          <H2>{t.approach.title}</H2>
        </div>

        <div className="space-y-12">
          {approaches.map((item, idx) => (
            <div key={idx} className="flex items-start gap-8">
              <div className="text-5xl font-bold text-signal/10 flex-shrink-0 hidden md:block">{item.num}</div>
              <div>
                <H3 className="mb-3">{item.title}</H3>
                <Body className="text-slate text-lg">{item.description}</Body>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-ink">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <H2 className="mb-6 text-canvas">{t.cta.title}</H2>
          <Lead className="mb-10 text-canvas/70 max-w-2xl mx-auto">
            {t.cta.subtitle}
          </Lead>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button variant="primary" size="lg">
                {t.cta.primaryButton}
              </Button>
            </Link>
            <Link href="/features">
              <button className="px-6 py-3 text-base font-medium rounded-xl border-2 border-canvas/30 text-canvas bg-transparent hover:bg-canvas/10 hover:border-canvas/50 transition-all duration-fast">
                {t.cta.secondaryButton}
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
