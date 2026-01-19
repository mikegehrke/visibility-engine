'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { H1, H2, H3, Body, Lead, Overline } from '@/components/shared/Typography';
import Card, { CardContent } from '@/components/shared/Card';
import { publicTranslations } from '@/lib/i18n/public-translations';

export default function CompliancePage() {
  const params = useParams();
  const lang = (params.lang as 'en' | 'de') || 'en';
  const l = (path: string) => `/${lang}${path}`;
  const t = publicTranslations[lang];
  const c = t.trustPages.compliance;

  const principles = [
    {
      title: c.principles.standards.title,
      description: c.principles.standards.description,
      icon: 'M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z',
    },
    {
      title: c.principles.audits.title,
      description: c.principles.audits.description,
      icon: 'M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z',
    },
    {
      title: c.principles.documentation.title,
      description: c.principles.documentation.description,
      icon: 'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z',
    },
    {
      title: c.principles.continuous.title,
      description: c.principles.continuous.description,
      icon: 'M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99',
    },
  ];

  const frameworks = [
    {
      title: c.frameworks.gdpr.title,
      status: c.frameworks.gdpr.status,
      description: c.frameworks.gdpr.description,
      items: c.frameworks.gdpr.items,
    },
    {
      title: c.frameworks.soc2.title,
      status: c.frameworks.soc2.status,
      description: c.frameworks.soc2.description,
      items: c.frameworks.soc2.items,
    },
    {
      title: c.frameworks.iso.title,
      status: c.frameworks.iso.status,
      description: c.frameworks.iso.description,
      items: c.frameworks.iso.items,
    },
  ];

  const auditAreas = [
    { title: c.audits.security.title, description: c.audits.security.description },
    { title: c.audits.dataHandling.title, description: c.audits.dataHandling.description },
    { title: c.audits.accessControl.title, description: c.audits.accessControl.description },
    { title: c.audits.vendorManagement.title, description: c.audits.vendorManagement.description },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-signal-muted/20 to-transparent pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-6 pt-32 pb-16 text-center">
          <Overline className="mb-4 block text-signal">{c.hero.overline}</Overline>
          <H1 className="mb-6">{c.hero.title}</H1>
          <Lead className="text-slate max-w-2xl mx-auto">{c.hero.subtitle}</Lead>
        </div>
      </section>

      {/* Key Principles */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <Overline className="mb-4 block text-signal">{c.principles.overline}</Overline>
          <H2 className="mb-4">{c.principles.title}</H2>
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

      {/* Frameworks & Standards */}
      <section className="border-y border-border bg-surface-1">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <Overline className="mb-4 block text-signal">{c.frameworks.overline}</Overline>
            <H2 className="mb-4">{c.frameworks.title}</H2>
          </div>

          <div className="space-y-6">
            {frameworks.map((framework, idx) => (
              <Card key={idx} variant="elevated" padding="spacious">
                <CardContent>
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="md:w-1/3">
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-signal-muted text-signal mb-3">
                        {framework.status}
                      </div>
                      <H3 className="mb-2">{framework.title}</H3>
                      <Body className="text-slate text-sm">{framework.description}</Body>
                    </div>
                    <div className="md:w-2/3 md:border-l md:border-border md:pl-6">
                      <ul className="grid sm:grid-cols-2 gap-3">
                        {framework.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2">
                            <svg className="w-5 h-5 text-signal flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            <Body className="text-slate text-sm">{item}</Body>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Readiness */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <Overline className="mb-4 block text-signal">{c.audits.overline}</Overline>
          <H2 className="mb-4">{c.audits.title}</H2>
          <Body className="text-slate max-w-2xl mx-auto">{c.audits.subtitle}</Body>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {auditAreas.map((area, idx) => (
            <Card key={idx} variant="outlined" padding="compact">
              <CardContent>
                <H3 className="mb-2 text-base">{area.title}</H3>
                <Body className="text-slate text-sm">{area.description}</Body>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="border-t border-border bg-surface-1">
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <H2 className="mb-4">{c.contact.title}</H2>
          <Body className="text-slate mb-6 max-w-xl mx-auto">{c.contact.description}</Body>
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
