import Link from 'next/link';
import { H1, H2, H3, Body, Lead, Small, Overline } from '@/components/shared/Typography';
import Card, { CardHeader, CardContent, CardFooter } from '@/components/shared/Card';
import Button from '@/components/shared/Button';
import { pricing as pricingEn } from '@/lib/i18n/locales/en/pricing';
import { pricing as pricingDe } from '@/lib/i18n/locales/de/pricing';
import { supportedLanguages, type Lang } from '@/lib/i18n/langs';

const translations = { en: pricingEn, de: pricingDe } as const;

export function generateStaticParams() {
  return supportedLanguages.map((lang) => ({ lang }));
}

export default async function PricingPage({ params }: { params: { lang: string } }) {
  const lang = (params.lang as Lang) || 'en';
  const l = (path: string) => `/${lang}${path}`;
  const pt = translations[lang];

  const plans = [
    {
      ...pt.plans.starter,
      highlighted: false,
      href: l('/register'),
      badge: undefined as string | undefined,
    },
    {
      ...pt.plans.creator,
      highlighted: false,
      href: l('/register'),
      badge: undefined as string | undefined,
    },
    {
      ...pt.plans.professional,
      highlighted: true,
      href: l('/register'),
    },
    {
      ...pt.plans.team,
      highlighted: false,
      href: l('/register'),
      badge: undefined as string | undefined,
    },
  ];

  const compareRows = [
    { key: 'connectedAccounts', feature: pt.compare.rows.connectedAccounts },
    { key: 'scheduledPosts', feature: pt.compare.rows.scheduledPosts },
    { key: 'analytics', feature: pt.compare.rows.analytics },
    { key: 'automationRules', feature: pt.compare.rows.automationRules },
    { key: 'aiInsights', feature: pt.compare.rows.aiInsights },
    { key: 'apiAccess', feature: pt.compare.rows.apiAccess },
    { key: 'teamMembers', feature: pt.compare.rows.teamMembers },
    { key: 'whiteLabel', feature: pt.compare.rows.whiteLabel },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-signal-muted/30 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(29,78,216,0.08),transparent)] pointer-events-none" />
        
        <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-16">
          <div className="max-w-3xl mx-auto text-center">
            <Overline className="mb-6 block text-signal">{pt.hero.overline}</Overline>
            <H1 className="mb-6">
              {pt.hero.title}
            </H1>
            <Lead className="max-w-2xl mx-auto text-slate">
              {pt.hero.subtitle}
            </Lead>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <Card 
              key={plan.name} 
              variant={plan.highlighted ? 'elevated' : 'outlined'} 
              className={`flex flex-col relative ${plan.highlighted ? 'ring-2 ring-signal shadow-glow lg:scale-105 lg:-my-2' : ''}`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 text-xs font-semibold bg-signal-bg text-white rounded-full shadow-md whitespace-nowrap">
                    {plan.badge}
                  </span>
                </div>
              )}
              <CardHeader className={`${plan.badge ? 'pt-6' : ''} pb-4`}>
                <Small className="text-slate font-semibold uppercase tracking-wide">{plan.name}</Small>
                <div className="flex items-baseline gap-1 mt-3">
                  <span className="text-4xl font-bold text-ink tracking-tight">{plan.price}</span>
                  {plan.period && <span className="text-slate text-sm">{plan.period}</span>}
                </div>
                <Body className="text-slate mt-3 text-sm">{plan.description}</Body>
              </CardHeader>
              <CardContent className="flex-1 pt-4 border-t border-border/50">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-success flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      <span className="text-sm text-ink">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="border-t-0 pt-4">
                <Link href={plan.href} className="w-full">
                  <Button
                    variant={plan.highlighted ? 'primary' : 'secondary'}
                    className="w-full"
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Enterprise callout */}
        <Card variant="outlined" className="mt-12">
          <CardContent className="flex flex-col md:flex-row items-center justify-between gap-6 py-2">
            <div>
              <H3 className="mb-2">{pt.enterprise.title}</H3>
              <Body className="text-slate">
                {pt.enterprise.description}
              </Body>
            </div>
            <Link href={l('/contact')} className="flex-shrink-0">
              <Button variant="secondary">{pt.enterprise.cta}</Button>
            </Link>
          </CardContent>
        </Card>
      </section>

      {/* Comparison Table - Mobile Friendly */}
      <section className="border-y border-border bg-surface-1">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <Overline className="mb-4 block">{pt.compare.overline}</Overline>
            <H2>{pt.compare.title}</H2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 pr-4 font-medium text-slate">{pt.compare.headers.feature}</th>
                  <th className="text-center py-4 px-3 font-medium text-slate">{pt.compare.headers.starter}</th>
                  <th className="text-center py-4 px-3 font-medium text-slate">{pt.compare.headers.creator}</th>
                  <th className="text-center py-4 px-3 font-medium text-signal">{pt.compare.headers.professional}</th>
                  <th className="text-center py-4 pl-3 font-medium text-slate">{pt.compare.headers.team}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {compareRows.map((row, idx) => (
                  <tr key={idx}>
                    <td className="py-4 pr-4 text-ink">{row.feature}</td>
                    <td className="py-4 px-3 text-center text-slate">{pt.compare.values.starter[idx]}</td>
                    <td className="py-4 px-3 text-center text-slate">{pt.compare.values.creator[idx]}</td>
                    <td className="py-4 px-3 text-center text-ink font-medium">{pt.compare.values.professional[idx]}</td>
                    <td className="py-4 pl-3 text-center text-slate">{pt.compare.values.team[idx]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <Overline className="mb-4 block">{pt.faq.overline}</Overline>
          <H2>{pt.faq.title}</H2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {pt.faq.items.map((faq, idx) => (
            <div key={idx}>
              <H3 className="text-base mb-3">{faq.question}</H3>
              <Body className="text-slate text-sm">{faq.answer}</Body>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-border bg-ink">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <H2 className="mb-6 text-canvas">{pt.cta.title}</H2>
          <Lead className="mb-10 text-canvas/70 max-w-2xl mx-auto">
            {pt.cta.subtitle}
          </Lead>
          <Link href={l('/register')}>
            <Button variant="primary" size="lg">
              {pt.cta.button}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
