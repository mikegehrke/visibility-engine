import { H1, H2, H3, Body, Lead } from '@/components/shared/Typography';
import Card, { CardHeader, CardContent } from '@/components/shared/Card';
import { publicTranslations } from '@/lib/i18n/public-translations';

// Static export
export const dynamic = 'force-static';
export const revalidate = false;

const t = publicTranslations.en;

export const metadata = {
  title: t.about.meta.title,
  description: t.about.meta.description,
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <H1 className="mb-6">{t.about.hero.title}</H1>
        <Lead className="text-slate">{t.about.hero.subtitle}</Lead>
      </section>

      {/* Vision */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <H2 className="mb-8">{t.about.vision.title}</H2>
        <Body className="text-slate leading-relaxed text-lg">
          {t.about.vision.content}
        </Body>
      </section>

      {/* Philosophy */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <H2 className="text-center mb-12">{t.about.philosophy.title}</H2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card variant="elevated">
            <CardHeader>
              <H3>{t.about.philosophy.principle1.title}</H3>
            </CardHeader>
            <CardContent>
              <Body className="text-slate">
                {t.about.philosophy.principle1.description}
              </Body>
            </CardContent>
          </Card>
          <Card variant="elevated">
            <CardHeader>
              <H3>{t.about.philosophy.principle2.title}</H3>
            </CardHeader>
            <CardContent>
              <Body className="text-slate">
                {t.about.philosophy.principle2.description}
              </Body>
            </CardContent>
          </Card>
          <Card variant="elevated">
            <CardHeader>
              <H3>{t.about.philosophy.principle3.title}</H3>
            </CardHeader>
            <CardContent>
              <Body className="text-slate">
                {t.about.philosophy.principle3.description}
              </Body>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-6xl mx-auto px-6 py-16 pb-24">
        <H2 className="text-center mb-12">{t.about.values.title}</H2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card variant="outlined">
            <CardHeader>
              <H3>{t.about.values.transparency.title}</H3>
            </CardHeader>
            <CardContent>
              <Body className="text-slate">
                {t.about.values.transparency.description}
              </Body>
            </CardContent>
          </Card>
          <Card variant="outlined">
            <CardHeader>
              <H3>{t.about.values.quality.title}</H3>
            </CardHeader>
            <CardContent>
              <Body className="text-slate">
                {t.about.values.quality.description}
              </Body>
            </CardContent>
          </Card>
          <Card variant="outlined">
            <CardHeader>
              <H3>{t.about.values.empowerment.title}</H3>
            </CardHeader>
            <CardContent>
              <Body className="text-slate">
                {t.about.values.empowerment.description}
              </Body>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
