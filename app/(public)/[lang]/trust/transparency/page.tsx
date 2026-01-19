'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { H1, H2, H3, Body, Lead, Overline } from '@/components/shared/Typography';
import Card, { CardContent } from '@/components/shared/Card';
import { publicTranslations } from '@/lib/i18n/public-translations';

export default function TransparencyPage() {
  const params = useParams();
  const lang = (params.lang as 'en' | 'de') || 'en';
  const l = (path: string) => `/${lang}${path}`;
  const t = publicTranslations[lang];
  const tr = t.trustPages.transparency;

  const principles = [
    {
      title: tr.principles.noBlackBox.title,
      description: tr.principles.noBlackBox.description,
      icon: 'M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
    },
    {
      title: tr.principles.explainableAI.title,
      description: tr.principles.explainableAI.description,
      icon: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z',
    },
    {
      title: tr.principles.control.title,
      description: tr.principles.control.description,
      icon: 'M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5',
    },
    {
      title: tr.principles.visibility.title,
      description: tr.principles.visibility.description,
      icon: 'M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6',
    },
  ];

  const features = [
    {
      title: tr.features.decisionLogs.title,
      items: tr.features.decisionLogs.items,
    },
    {
      title: tr.features.auditTrail.title,
      items: tr.features.auditTrail.items,
    },
    {
      title: tr.features.explainability.title,
      items: tr.features.explainability.items,
    },
  ];

  const commitments = [
    { title: tr.commitments.openCommunication.title, description: tr.commitments.openCommunication.description },
    { title: tr.commitments.changelog.title, description: tr.commitments.changelog.description },
    { title: tr.commitments.feedback.title, description: tr.commitments.feedback.description },
    { title: tr.commitments.honesty.title, description: tr.commitments.honesty.description },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-signal-muted/20 to-transparent pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-6 pt-32 pb-16 text-center">
          <Overline className="mb-4 block text-signal">{tr.hero.overline}</Overline>
          <H1 className="mb-6">{tr.hero.title}</H1>
          <Lead className="text-slate max-w-2xl mx-auto">{tr.hero.subtitle}</Lead>
        </div>
      </section>

      {/* Key Principles */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <Overline className="mb-4 block text-signal">{tr.principles.overline}</Overline>
          <H2 className="mb-4">{tr.principles.title}</H2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {principles.map((principle, idx) => (
            <Card key={idx} variant="outlined" padding="spacious" className="group">
              <CardContent>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-signal-muted flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-signal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={principle.icon} />
                    </svg>
                  </div>
                  <div>
                    <H3 className="mb-2">{principle.title}</H3>
                    <Body className="text-slate">{principle.description}</Body>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How We Deliver Transparency */}
      <section className="border-y border-border bg-surface-1">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <Overline className="mb-4 block text-signal">{tr.features.overline}</Overline>
            <H2 className="mb-4">{tr.features.title}</H2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((section, idx) => (
              <div key={idx}>
                <H3 className="mb-4 text-lg">{section.title}</H3>
                <ul className="space-y-3">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-signal flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <Body className="text-slate text-sm">{item}</Body>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitments */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <Overline className="mb-4 block text-signal">{tr.commitments.overline}</Overline>
          <H2 className="mb-4">{tr.commitments.title}</H2>
          <Body className="text-slate max-w-2xl mx-auto">{tr.commitments.subtitle}</Body>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {commitments.map((commitment, idx) => (
            <Card key={idx} variant="outlined" padding="compact">
              <CardContent>
                <H3 className="mb-2 text-base">{commitment.title}</H3>
                <Body className="text-slate text-sm">{commitment.description}</Body>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Quote Section */}
      <section className="border-y border-border bg-surface-1">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <Card variant="elevated" padding="spacious">
            <CardContent className="text-center">
              <svg className="w-10 h-10 text-signal/40 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-xl text-ink leading-relaxed mb-6">
                {tr.quote.text}
              </blockquote>
              <div className="text-sm text-slate">{tr.quote.attribution}</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-background">
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <H2 className="mb-4">{tr.contact.title}</H2>
          <Body className="text-slate mb-6 max-w-xl mx-auto">{tr.contact.description}</Body>
          <Link 
            href={l('/contact')} 
            className="inline-flex items-center gap-2 text-signal hover:underline font-medium"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            hallo@visibility-engine.com
          </Link>
        </div>
      </section>
    </div>
  );
}
