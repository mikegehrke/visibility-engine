'use client';

import Link from 'next/link';
import { H1, H2, H3, Body, Lead, Overline } from '@/components/shared/Typography';
import Card, { CardContent } from '@/components/shared/Card';
import { useLanguage } from '@/lib/context/LanguageContext';

export default function PrivacyTrustPage() {
  const { t } = useLanguage();
  const p = t.trustPages.privacy;

  const principles = [
    {
      title: p.principles.ownership.title,
      description: p.principles.ownership.description,
      icon: 'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z',
    },
    {
      title: p.principles.minimal.title,
      description: p.principles.minimal.description,
      icon: 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12',
    },
    {
      title: p.principles.noSelling.title,
      description: p.principles.noSelling.description,
      icon: 'M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636',
    },
    {
      title: p.principles.control.title,
      description: p.principles.control.description,
      icon: 'M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75',
    },
  ];

  const practices = [
    {
      title: p.practices.collection.title,
      items: p.practices.collection.items,
    },
    {
      title: p.practices.storage.title,
      items: p.practices.storage.items,
    },
    {
      title: p.practices.sharing.title,
      items: p.practices.sharing.items,
    },
  ];

  const rights = [
    { title: p.rights.access.title, description: p.rights.access.description },
    { title: p.rights.portability.title, description: p.rights.portability.description },
    { title: p.rights.deletion.title, description: p.rights.deletion.description },
    { title: p.rights.correction.title, description: p.rights.correction.description },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-signal-muted/20 to-transparent pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-6 pt-32 pb-16 text-center">
          <Overline className="mb-4 block text-signal">{p.hero.overline}</Overline>
          <H1 className="mb-6">{p.hero.title}</H1>
          <Lead className="text-slate max-w-2xl mx-auto">{p.hero.subtitle}</Lead>
        </div>
      </section>

      {/* Key Principles */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <Overline className="mb-4 block text-signal">{p.principles.overline}</Overline>
          <H2 className="mb-4">{p.principles.title}</H2>
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

      {/* Data Practices */}
      <section className="border-y border-border bg-surface-1">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <Overline className="mb-4 block text-signal">{p.practices.overline}</Overline>
            <H2 className="mb-4">{p.practices.title}</H2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {practices.map((section, idx) => (
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

      {/* Your Rights */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <Overline className="mb-4 block text-signal">{p.rights.overline}</Overline>
          <H2 className="mb-4">{p.rights.title}</H2>
          <Body className="text-slate max-w-2xl mx-auto">{p.rights.subtitle}</Body>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {rights.map((right, idx) => (
            <Card key={idx} variant="outlined" padding="compact">
              <CardContent>
                <H3 className="mb-2 text-base">{right.title}</H3>
                <Body className="text-slate text-sm">{right.description}</Body>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* GDPR Section */}
      <section className="border-y border-border bg-surface-1">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Overline className="mb-4 block text-signal">{p.gdpr.overline}</Overline>
              <H2 className="mb-4">{p.gdpr.title}</H2>
              <Body className="text-slate leading-relaxed">{p.gdpr.description}</Body>
            </div>
            <Card variant="elevated" padding="spacious">
              <CardContent>
                <ul className="space-y-4">
                  {p.gdpr.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-signal flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <Body className="text-slate text-sm">{item}</Body>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-background">
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <H2 className="mb-4">{p.contact.title}</H2>
          <Body className="text-slate mb-6 max-w-xl mx-auto">{p.contact.description}</Body>
          <Link 
            href="/contact" 
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
