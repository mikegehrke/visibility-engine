'use client';

import Link from 'next/link';
import { H1, H2, H3, Body, Lead, Overline } from '@/components/shared/Typography';
import Card, { CardContent } from '@/components/shared/Card';
import { useLanguage } from '@/lib/context/LanguageContext';

export default function SecurityPage() {
  const { t } = useLanguage();
  const s = t.trustPages.security;

  const principles = [
    {
      title: s.principles.encryption.title,
      description: s.principles.encryption.description,
      icon: 'M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z',
    },
    {
      title: s.principles.access.title,
      description: s.principles.access.description,
      icon: 'M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z',
    },
    {
      title: s.principles.monitoring.title,
      description: s.principles.monitoring.description,
      icon: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z',
    },
    {
      title: s.principles.availability.title,
      description: s.principles.availability.description,
      icon: 'M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418',
    },
  ];

  const technicalDetails = [
    {
      title: s.technical.infrastructure.title,
      items: s.technical.infrastructure.items,
    },
    {
      title: s.technical.dataProtection.title,
      items: s.technical.dataProtection.items,
    },
    {
      title: s.technical.accessControl.title,
      items: s.technical.accessControl.items,
    },
  ];

  const certifications = [
    {
      title: s.certifications.soc2.title,
      status: s.certifications.soc2.status,
      description: s.certifications.soc2.description,
    },
    {
      title: s.certifications.gdpr.title,
      status: s.certifications.gdpr.status,
      description: s.certifications.gdpr.description,
    },
    {
      title: s.certifications.iso.title,
      status: s.certifications.iso.status,
      description: s.certifications.iso.description,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-signal-muted/20 to-transparent pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-6 pt-32 pb-16 text-center">
          <Overline className="mb-4 block text-signal">{s.hero.overline}</Overline>
          <H1 className="mb-6">{s.hero.title}</H1>
          <Lead className="text-slate max-w-2xl mx-auto">{s.hero.subtitle}</Lead>
        </div>
      </section>

      {/* Key Principles */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <Overline className="mb-4 block text-signal">{s.principles.overline}</Overline>
          <H2 className="mb-4">{s.principles.title}</H2>
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

      {/* Technical Details */}
      <section className="border-y border-border bg-surface-1">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <Overline className="mb-4 block text-signal">{s.technical.overline}</Overline>
            <H2 className="mb-4">{s.technical.title}</H2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {technicalDetails.map((section, idx) => (
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

      {/* Certifications & Standards */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <Overline className="mb-4 block text-signal">{s.certifications.overline}</Overline>
          <H2 className="mb-4">{s.certifications.title}</H2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <Card key={idx} variant="outlined" padding="spacious">
              <CardContent className="text-center">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-signal-muted text-signal mb-4">
                  {cert.status}
                </div>
                <H3 className="mb-3">{cert.title}</H3>
                <Body className="text-slate text-sm">{cert.description}</Body>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="border-t border-border bg-surface-1">
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <H2 className="mb-4">{s.contact.title}</H2>
          <Body className="text-slate mb-6 max-w-xl mx-auto">{s.contact.description}</Body>
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
