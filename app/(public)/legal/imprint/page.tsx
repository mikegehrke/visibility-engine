'use client';

import Link from 'next/link';
import { H1, H2, Body, Lead, Overline, Small } from '@/components/shared/Typography';
import { useLanguage } from '@/lib/context/LanguageContext';

export default function ImprintPage() {
  const { t } = useLanguage();
  const p = t.legalPages.imprint;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-signal-muted/20 to-transparent pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-6 pt-32 pb-12">
          <Overline className="mb-4 block text-signal">{p.overline}</Overline>
          <H1 className="mb-4">{p.title}</H1>
          <Lead className="text-slate">{p.subtitle}</Lead>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-6 py-12 pb-24">
        <div className="prose-container space-y-12">
          
          {/* Company Information */}
          <div>
            <H2 className="mb-6 text-xl">{p.company.title}</H2>
            <div className="space-y-4">
              <Body className="text-ink font-medium">{p.company.name}</Body>
              <Body className="text-slate whitespace-pre-line">{p.company.address}</Body>
            </div>
          </div>

          {/* Contact */}
          <div className="pt-8 border-t border-border">
            <H2 className="mb-6 text-xl">{p.contact.title}</H2>
            <div className="space-y-3">
              <Body className="text-slate">
                <span className="text-ink font-medium">{p.contact.email}:</span>{' '}
                <Link href="/contact" className="text-signal hover:underline">
                  hallo@visibility-engine.com
                </Link>
              </Body>
              <Body className="text-slate">
                <span className="text-ink font-medium">{p.contact.phone}:</span> +49 30 1234567
              </Body>
              <Body className="text-slate">
                <span className="text-ink font-medium">{p.contact.website}:</span>{' '}
                <a href="https://visibility-engine.com" className="text-signal hover:underline">
                  visibility-engine.com
                </a>
              </Body>
            </div>
          </div>

          {/* Registration */}
          <div className="pt-8 border-t border-border">
            <H2 className="mb-6 text-xl">{p.registration.title}</H2>
            <div className="space-y-3">
              <Body className="text-slate">
                <span className="text-ink font-medium">{p.registration.court}:</span> Amtsgericht Berlin-Charlottenburg
              </Body>
              <Body className="text-slate">
                <span className="text-ink font-medium">{p.registration.number}:</span> HRB 123456 B
              </Body>
              <Body className="text-slate">
                <span className="text-ink font-medium">{p.registration.vatId}:</span> DE123456789
              </Body>
            </div>
          </div>

          {/* Responsible for Content */}
          <div className="pt-8 border-t border-border">
            <H2 className="mb-6 text-xl">{p.responsibility.title}</H2>
            <Body className="text-slate">
              {p.responsibility.according}:<br />
              [Name]<br />
              Musterstraße 123<br />
              10115 Berlin
            </Body>
          </div>

          {/* Disclaimer */}
          <div className="pt-8 border-t border-border">
            <H2 className="mb-6 text-xl">{p.disclaimer.title}</H2>
            <div className="space-y-6">
              <div>
                <Body className="text-ink font-medium mb-2">{p.disclaimer.liability.title}</Body>
                <Body className="text-slate leading-relaxed">{p.disclaimer.liability.text}</Body>
              </div>
              <div>
                <Body className="text-ink font-medium mb-2">{p.disclaimer.links.title}</Body>
                <Body className="text-slate leading-relaxed">{p.disclaimer.links.text}</Body>
              </div>
            </div>
          </div>

          {/* Last Updated */}
          <div className="pt-8 border-t border-border">
            <Small className="text-slate">Last updated: January 2026</Small>
          </div>
        </div>
      </section>
    </div>
  );
}
