'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { H1, H2, Body, Lead, Overline, Small } from '@/components/shared/Typography';
import { publicTranslations } from '@/lib/i18n/public-translations';

export default function TermsOfServicePage() {
  const params = useParams();
  const lang = (params.lang as 'en' | 'de') || 'en';
  const l = (path: string) => `/${lang}${path}`;
  const t = publicTranslations[lang];
  const p = t.legalPages.terms;

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
          
          {/* Introduction */}
          <div>
            <H2 className="mb-6 text-xl">{p.introduction.title}</H2>
            <Body className="text-slate leading-relaxed">{p.introduction.text}</Body>
          </div>

          {/* Eligibility */}
          <div className="pt-8 border-t border-border">
            <H2 className="mb-6 text-xl">{p.eligibility.title}</H2>
            <Body className="text-slate leading-relaxed">{p.eligibility.text}</Body>
          </div>

          {/* Account */}
          <div className="pt-8 border-t border-border">
            <H2 className="mb-6 text-xl">{p.account.title}</H2>
            <Body className="text-slate leading-relaxed">{p.account.text}</Body>
          </div>

          {/* Acceptable Use */}
          <div className="pt-8 border-t border-border">
            <H2 className="mb-6 text-xl">{p.acceptable.title}</H2>
            <Body className="text-slate leading-relaxed">{p.acceptable.text}</Body>
          </div>

          {/* Termination */}
          <div className="pt-8 border-t border-border">
            <H2 className="mb-6 text-xl">{p.termination.title}</H2>
            <Body className="text-slate leading-relaxed">{p.termination.text}</Body>
          </div>

          {/* Contact */}
          <div className="pt-8 border-t border-border">
            <H2 className="mb-6 text-xl">{p.contact.title}</H2>
            <div className="space-y-4">
              <Body className="text-slate leading-relaxed">{p.contact.text}</Body>
              <Body className="text-slate">
                <Link href={l('/contact')} className="text-signal hover:underline">
                  hallo@visibility-engine.com
                </Link>
              </Body>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
