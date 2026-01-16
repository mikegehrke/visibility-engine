import Link from 'next/link';
import { H1, H2, H3, Body, Lead, Small, Overline } from '@/components/shared/Typography';
import Card, { CardHeader, CardContent, CardFooter } from '@/components/shared/Card';
import Button from '@/components/shared/Button';
import { publicTranslations } from '@/lib/i18n/public-translations';

const t = publicTranslations.en;

export default function PricingPage() {
  const plans = [
    {
      name: t.pricing.free.name,
      price: t.pricing.free.price,
      description: t.pricing.free.description,
      features: t.pricing.free.features,
      cta: t.pricing.free.cta,
      highlighted: false,
      href: '/register',
    },
    {
      name: t.pricing.pro.name,
      price: t.pricing.pro.price,
      description: t.pricing.pro.description,
      features: t.pricing.pro.features,
      cta: t.pricing.pro.cta,
      highlighted: false,
      href: '#',
    },
    {
      name: t.pricing.proPlus.name,
      price: t.pricing.proPlus.price,
      description: t.pricing.proPlus.description,
      features: t.pricing.proPlus.features,
      cta: t.pricing.proPlus.cta,
      highlighted: true,
      badge: 'Popular',
      href: '#',
    },
    {
      name: t.pricing.ultimate.name,
      price: t.pricing.ultimate.price,
      description: t.pricing.ultimate.description,
      features: t.pricing.ultimate.features,
      cta: t.pricing.ultimate.cta,
      highlighted: false,
      href: '#',
    },
    {
      name: t.pricing.ultimatePlus.name,
      price: t.pricing.ultimatePlus.price,
      description: t.pricing.ultimatePlus.description,
      features: t.pricing.ultimatePlus.features,
      cta: t.pricing.ultimatePlus.cta,
      highlighted: false,
      href: '#',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-signal-muted/50 to-transparent pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-6 pt-24 pb-16 text-center">
          <Overline className="mb-4 block">Pricing</Overline>
          <H1 className="mb-6 max-w-3xl mx-auto">{t.pricing.hero.title}</H1>
          <Lead className="max-w-2xl mx-auto">
            {t.pricing.hero.subtitle}
          </Lead>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <H2 className="sr-only">{t.pricing.hero.title} Plans</H2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {plans.map((plan) => (
            <Card 
              key={plan.name} 
              variant={plan.highlighted ? 'elevated' : 'outlined'} 
              className={`flex flex-col relative ${plan.highlighted ? 'ring-2 ring-signal/20 shadow-glow' : ''}`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 text-xs font-semibold bg-signal-bg text-white rounded-full">
                    {plan.badge}
                  </span>
                </div>
              )}
              <CardHeader className={plan.badge ? 'pt-4' : ''}>
                <Small className="text-slate font-medium">{plan.name}</Small>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="text-3xl font-semibold text-ink">{plan.price}</span>
                  {!plan.price.includes('Free') && !plan.price.includes('Coming') && <span className="text-slate text-sm">/mo</span>}
                </div>
                <Small className="text-slate mt-2 block">{plan.description}</Small>
              </CardHeader>
              <CardContent className="flex-1 pt-4 border-t border-border/50">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-success flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      <Small className="text-ink">{feature}</Small>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="border-t-0 pt-0">
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
      </section>

      {/* FAQ Section */}
      <section className="border-t border-border bg-surface-1">
        <div className="max-w-3xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <Overline className="mb-3 block">Support</Overline>
            <H2>{t.pricing.faq.title}</H2>
          </div>
          <div className="space-y-8">
            {[
              { q: t.pricing.faq.q1.question, a: t.pricing.faq.q1.answer },
              { q: t.pricing.faq.q2.question, a: t.pricing.faq.q2.answer },
              { q: t.pricing.faq.q3.question, a: t.pricing.faq.q3.answer },
            ].map((faq, idx) => (
              <div key={idx} className="pb-8 border-b border-border/50 last:border-0 last:pb-0">
                <H3 className="mb-3 text-lg">{faq.q}</H3>
                <Body className="text-slate">{faq.a}</Body>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
