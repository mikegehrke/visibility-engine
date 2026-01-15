import Link from 'next/link';
import { H1, H2, H3, Body, Lead, Small } from '@/components/shared/Typography';
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
      variant: 'outlined' as const,
      href: '/register',
    },
    {
      name: t.pricing.pro.name,
      price: t.pricing.pro.price,
      description: t.pricing.pro.description,
      features: t.pricing.pro.features,
      cta: t.pricing.pro.cta,
      variant: 'outlined' as const,
      href: '#',
    },
    {
      name: t.pricing.proPlus.name,
      price: t.pricing.proPlus.price,
      description: t.pricing.proPlus.description,
      features: t.pricing.proPlus.features,
      cta: t.pricing.proPlus.cta,
      variant: 'elevated' as const,
      href: '#',
    },
    {
      name: t.pricing.ultimate.name,
      price: t.pricing.ultimate.price,
      description: t.pricing.ultimate.description,
      features: t.pricing.ultimate.features,
      cta: t.pricing.ultimate.cta,
      variant: 'outlined' as const,
      href: '#',
    },
    {
      name: t.pricing.ultimatePlus.name,
      price: t.pricing.ultimatePlus.price,
      description: t.pricing.ultimatePlus.description,
      features: t.pricing.ultimatePlus.features,
      cta: t.pricing.ultimatePlus.cta,
      variant: 'outlined' as const,
      href: '#',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <H1 className="mb-6">{t.pricing.hero.title}</H1>
        <Lead className="max-w-3xl mx-auto text-slate">
          {t.pricing.hero.subtitle}
        </Lead>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {plans.map((plan) => (
            <Card key={plan.name} variant={plan.variant} className="flex flex-col">
              <CardHeader>
                <H3 className="mb-2">{plan.name}</H3>
                <Body className="font-bold text-2xl mb-1">{plan.price}</Body>
                <Small className="text-slate">{plan.description}</Small>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <Small>{feature}</Small>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link href={plan.href} className="w-full">
                  <Button
                    variant={plan.variant === 'elevated' ? 'primary' : 'secondary'}
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
      <section className="max-w-4xl mx-auto px-6 py-24">
        <H2 className="text-center mb-16">{t.pricing.faq.title}</H2>
        <div className="space-y-8">
          <div>
            <H3 className="mb-3">{t.pricing.faq.q1.question}</H3>
            <Body className="text-slate">{t.pricing.faq.q1.answer}</Body>
          </div>
          <div>
            <H3 className="mb-3">{t.pricing.faq.q2.question}</H3>
            <Body className="text-slate">{t.pricing.faq.q2.answer}</Body>
          </div>
          <div>
            <H3 className="mb-3">{t.pricing.faq.q3.question}</H3>
            <Body className="text-slate">{t.pricing.faq.q3.answer}</Body>
          </div>
        </div>
      </section>
    </div>
  );
}
