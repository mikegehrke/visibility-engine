'use client';

import Link from 'next/link';
import { H1, H2, H3, Body, Lead, Overline, Small } from '@/components/shared/Typography';
import { useLanguage } from '@/lib/context/LanguageContext';

export default function PrivacyPage() {
  const { t } = useLanguage();
  const p = t.legalPages.privacy;

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
          
          {/* Overview */}
          <div>
            <H2 className="mb-6 text-xl">{p.overview.title}</H2>
            <Body className="text-slate leading-relaxed">{p.overview.text}</Body>
          </div>

          {/* Data Controller */}
          <div className="pt-8 border-t border-border">
            <H2 className="mb-6 text-xl">{p.dataController.title}</H2>
            <div className="space-y-4">
              <Body className="text-slate">{p.dataController.text}</Body>
              <Body className="text-slate">
                Visibility Engine GmbH<br />
                Musterstraße 123<br />
                10115 Berlin<br />
                Email: <Link href="/contact" className="text-signal hover:underline">hallo@visibility-engine.com</Link>
              </Body>
            </div>
          </div>

          {/* Data Collection */}
          <div className="pt-8 border-t border-border">
            <H2 className="mb-6 text-xl">{p.dataCollection.title}</H2>
            <div className="space-y-6">
              <div>
                <H3 className="text-base mb-3">{p.dataCollection.account.title}</H3>
                <Body className="text-slate leading-relaxed">{p.dataCollection.account.text}</Body>
              </div>
              <div>
                <H3 className="text-base mb-3">{p.dataCollection.usage.title}</H3>
                <Body className="text-slate leading-relaxed">{p.dataCollection.usage.text}</Body>
              </div>
            </div>
          </div>

          {/* Your Rights */}
          <div className="pt-8 border-t border-border">
            <H2 className="mb-6 text-xl">{p.rights.title}</H2>
            <Body className="text-slate leading-relaxed">{p.rights.text}</Body>
          </div>

          {/* Contact */}
          <div className="pt-8 border-t border-border">
            <H2 className="mb-6 text-xl">{p.contact.title}</H2>
            <div className="space-y-4">
              <Body className="text-slate leading-relaxed">{p.contact.text}</Body>
              <Body className="text-slate">
                <Link href="/contact" className="text-signal hover:underline">
                  hallo@visibility-engine.com
                </Link>
              </Body>
            </div>
          </div>

          {/* Last Updated */}
          <div className="pt-8 border-t border-border">
            <Small className="text-slate">{p.lastUpdated}: January 2026</Small>
          </div>
        </div>
      </section>
    </div>
  );
}
