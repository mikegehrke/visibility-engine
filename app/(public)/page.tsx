import Link from 'next/link';
import { H1, H2, H3, Body, Lead } from '@/components/shared/Typography';
import Card, { CardHeader, CardContent } from '@/components/shared/Card';
import Button from '@/components/shared/Button';
import { publicTranslations } from '@/lib/i18n/public-translations';

const t = publicTranslations.en;

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <H1 className="mb-6">{t.landing.hero.title}</H1>
        <Lead className="mb-12 max-w-3xl mx-auto text-slate">
          {t.landing.hero.subtitle}
        </Lead>
        <div className="flex gap-4 justify-center">
          <Link href="/register">
            <Button variant="primary" size="lg">
              {t.landing.hero.ctaPrimary}
            </Button>
          </Link>
          <Link href="/features">
            <Button variant="secondary" size="lg">
              {t.landing.hero.ctaSecondary}
            </Button>
          </Link>
        </div>
      </section>

      {/* For Who Section */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <H2 className="text-center mb-16">{t.landing.forWho.title}</H2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card variant="elevated">
            <CardHeader>
              <H3>{t.landing.forWho.creators.title}</H3>
            </CardHeader>
            <CardContent>
              <Body className="text-slate">
                {t.landing.forWho.creators.description}
              </Body>
            </CardContent>
          </Card>
          <Card variant="elevated">
            <CardHeader>
              <H3>{t.landing.forWho.companies.title}</H3>
            </CardHeader>
            <CardContent>
              <Body className="text-slate">
                {t.landing.forWho.companies.description}
              </Body>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 bg-canvas">
        <H2 className="text-center mb-16">{t.landing.howItWorks.title}</H2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 mx-auto">
              1
            </div>
            <H3 className="mb-4">{t.landing.howItWorks.step1.title}</H3>
            <Body className="text-slate">
              {t.landing.howItWorks.step1.description}
            </Body>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 mx-auto">
              2
            </div>
            <H3 className="mb-4">{t.landing.howItWorks.step2.title}</H3>
            <Body className="text-slate">
              {t.landing.howItWorks.step2.description}
            </Body>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 mx-auto">
              3
            </div>
            <H3 className="mb-4">{t.landing.howItWorks.step3.title}</H3>
            <Body className="text-slate">
              {t.landing.howItWorks.step3.description}
            </Body>
          </div>
        </div>
      </section>

      {/* Features Overview Section */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <H2 className="text-center mb-16">{t.landing.features.title}</H2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card variant="outlined">
            <CardContent>
              <Body className="font-semibold mb-2 text-ink">
                {t.landing.features.contentHub}
              </Body>
            </CardContent>
          </Card>
          <Card variant="outlined">
            <CardContent>
              <Body className="font-semibold mb-2 text-ink">
                {t.landing.features.automation}
              </Body>
            </CardContent>
          </Card>
          <Card variant="outlined">
            <CardContent>
              <Body className="font-semibold mb-2 text-ink">
                {t.landing.features.analytics}
              </Body>
            </CardContent>
          </Card>
          <Card variant="outlined">
            <CardContent>
              <Body className="font-semibold mb-2 text-ink">
                {t.landing.features.ai}
              </Body>
            </CardContent>
          </Card>
          <Card variant="outlined">
            <CardContent>
              <Body className="font-semibold mb-2 text-ink">
                {t.landing.features.collaboration}
              </Body>
            </CardContent>
          </Card>
          <Card variant="outlined">
            <CardContent>
              <Body className="font-semibold mb-2 text-ink">
                {t.landing.features.api}
              </Body>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mt-12">
          <Link href="/features">
            <Button variant="secondary">View All Features</Button>
          </Link>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <H2 className="mb-6">{t.landing.cta.title}</H2>
        <Lead className="mb-12 max-w-2xl mx-auto text-slate">
          {t.landing.cta.subtitle}
        </Lead>
        <Link href="/register">
          <Button variant="primary" size="lg">
            {t.landing.cta.button}
          </Button>
        </Link>
      </section>
    </div>
  );
}
