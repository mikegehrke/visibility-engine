import { H1, H2, H3, Body, Lead, Overline } from '@/components/shared/Typography';
import Card, { CardHeader, CardContent } from '@/components/shared/Card';
import { publicTranslations } from '@/lib/i18n/public-translations';

const t = publicTranslations.en;

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-signal-muted/50 to-transparent pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6 pt-24 pb-16 text-center">
          <Overline className="mb-4 block">About</Overline>
          <H1 className="mb-6">{t.about.hero.title}</H1>
          <Lead>{t.about.hero.subtitle}</Lead>
        </div>
      </section>

      {/* Vision */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <Overline className="mb-3 block">Vision</Overline>
        <H2 className="mb-8">{t.about.vision.title}</H2>
        <Body className="text-slate leading-relaxed text-lg">
          {t.about.vision.content}
        </Body>
      </section>

      {/* Philosophy */}
      <section className="border-y border-border bg-surface-1">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <Overline className="mb-3 block">Philosophy</Overline>
            <H2>{t.about.philosophy.title}</H2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: t.about.philosophy.principle1.title, desc: t.about.philosophy.principle1.description, icon: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z' },
              { title: t.about.philosophy.principle2.title, desc: t.about.philosophy.principle2.description, icon: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z' },
              { title: t.about.philosophy.principle3.title, desc: t.about.philosophy.principle3.description, icon: 'M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941' },
            ].map((principle, idx) => (
              <Card key={idx} variant="elevated" hover className="group h-full">
                <CardHeader>
                  <div className="w-10 h-10 rounded-lg bg-signal-muted flex items-center justify-center mb-3 transition-transform duration-slow group-hover:scale-105">
                    <svg className="w-5 h-5 text-signal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={principle.icon} />
                    </svg>
                  </div>
                  <H3>{principle.title}</H3>
                </CardHeader>
                <CardContent>
                  <Body className="text-slate">{principle.desc}</Body>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <Overline className="mb-3 block">Values</Overline>
          <H2>{t.about.values.title}</H2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: t.about.values.transparency.title, desc: t.about.values.transparency.description },
            { title: t.about.values.quality.title, desc: t.about.values.quality.description },
            { title: t.about.values.empowerment.title, desc: t.about.values.empowerment.description },
          ].map((value, idx) => (
            <Card key={idx} variant="flat" padding="spacious">
              <CardHeader>
                <span className="text-4xl font-semibold text-signal/20 mb-2 block">0{idx + 1}</span>
                <H3>{value.title}</H3>
              </CardHeader>
              <CardContent>
                <Body className="text-slate">{value.desc}</Body>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
