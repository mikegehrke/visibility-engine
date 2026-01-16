import Link from 'next/link';
import { H1, H2, H3, Body, Lead, Overline } from '@/components/shared/Typography';
import Card, { CardHeader, CardContent } from '@/components/shared/Card';
import Button from '@/components/shared/Button';
import { publicTranslations } from '@/lib/i18n/public-translations';

const t = publicTranslations.en;

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Commanding, confident */}
      <section className="relative overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-signal-muted/50 to-transparent pointer-events-none" />
        
        <div className="relative max-w-5xl mx-auto px-6 pt-24 pb-32 text-center">
          <Overline className="mb-4 block">Visibility Engine</Overline>
          <H1 className="mb-6 max-w-4xl mx-auto">{t.landing.hero.title}</H1>
          <Lead className="mb-10 max-w-2xl mx-auto">
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
        </div>
      </section>

      {/* For Who Section - Clear value proposition */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <Overline className="mb-3 block">Built For</Overline>
          <H2>{t.landing.forWho.title}</H2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <Card variant="elevated" hover className="group">
            <CardHeader>
              <div className="w-10 h-10 rounded-lg bg-signal-muted flex items-center justify-center mb-3 transition-transform duration-slow group-hover:scale-105">
                <svg className="w-5 h-5 text-signal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <H3>{t.landing.forWho.creators.title}</H3>
            </CardHeader>
            <CardContent>
              <Body className="text-slate">
                {t.landing.forWho.creators.description}
              </Body>
            </CardContent>
          </Card>
          <Card variant="elevated" hover className="group">
            <CardHeader>
              <div className="w-10 h-10 rounded-lg bg-signal-muted flex items-center justify-center mb-3 transition-transform duration-slow group-hover:scale-105">
                <svg className="w-5 h-5 text-signal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                </svg>
              </div>
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

      {/* How It Works Section - Visual storytelling */}
      <section className="border-y border-border bg-surface-1">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <Overline className="mb-3 block">How It Works</Overline>
            <H2>{t.landing.howItWorks.title}</H2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { num: '01', title: t.landing.howItWorks.step1.title, desc: t.landing.howItWorks.step1.description },
              { num: '02', title: t.landing.howItWorks.step2.title, desc: t.landing.howItWorks.step2.description },
              { num: '03', title: t.landing.howItWorks.step3.title, desc: t.landing.howItWorks.step3.description },
            ].map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl font-semibold text-signal/20 mb-4 tracking-tight">{step.num}</div>
                <H3 className="mb-3">{step.title}</H3>
                <Body className="text-slate">{step.desc}</Body>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Overview Section - Structured grid */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <Overline className="mb-3 block">Platform</Overline>
          <H2>{t.landing.features.title}</H2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { label: t.landing.features.contentHub, icon: 'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z' },
            { label: t.landing.features.automation, icon: 'M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z' },
            { label: t.landing.features.analytics, icon: 'M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605' },
            { label: t.landing.features.ai, icon: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z' },
            { label: t.landing.features.collaboration, icon: 'M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z' },
            { label: t.landing.features.api, icon: 'M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z' },
          ].map((feature, idx) => (
            <Card key={idx} variant="flat" padding="compact" hover>
              <CardContent className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-canvas border border-border flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-signal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={feature.icon} />
                  </svg>
                </div>
                <Body className="font-medium text-ink">{feature.label}</Body>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/features">
            <Button variant="secondary">View All Features</Button>
          </Link>
        </div>
      </section>

      {/* Final CTA Section - Strong close */}
      <section className="border-t border-border bg-surface-1">
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <H2 className="mb-4">{t.landing.cta.title}</H2>
          <Lead className="mb-10 max-w-xl mx-auto">
            {t.landing.cta.subtitle}
          </Lead>
          <Link href="/register">
            <Button variant="primary" size="lg">
              {t.landing.cta.button}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
