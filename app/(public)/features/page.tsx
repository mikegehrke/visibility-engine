'use client';

import { H1, H2, H3, Body, Lead } from '@/components/shared/Typography';
import Card, { CardHeader, CardContent } from '@/components/shared/Card';
import { useLanguage } from '@/lib/context/LanguageContext';
import { translations } from '@/lib/i18n/translations';

export default function FeaturesPage() {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <H1 className="mb-6">{t.features.hero.title}</H1>
        <Lead className="max-w-3xl mx-auto text-slate">
          {t.features.hero.subtitle}
        </Lead>
      </section>

      {/* Content & Media Management */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <H2 className="mb-12">{t.features.contentMedia.title}</H2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card variant="elevated">
            <CardHeader>
              <H3>{t.features.contentMedia.video.title}</H3>
            </CardHeader>
            <CardContent>
              <Body className="text-slate">
                {t.features.contentMedia.video.description}
              </Body>
            </CardContent>
          </Card>
          <Card variant="elevated">
            <CardHeader>
              <H3>{t.features.contentMedia.images.title}</H3>
            </CardHeader>
            <CardContent>
              <Body className="text-slate">
                {t.features.contentMedia.images.description}
              </Body>
            </CardContent>
          </Card>
          <Card variant="elevated">
            <CardHeader>
              <H3>{t.features.contentMedia.editor.title}</H3>
            </CardHeader>
            <CardContent>
              <Body className="text-slate">
                {t.features.contentMedia.editor.description}
              </Body>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Automation & Scheduling */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <H2 className="mb-12">{t.features.automation.title}</H2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card variant="elevated">
            <CardHeader>
              <H3>{t.features.automation.campaigns.title}</H3>
            </CardHeader>
            <CardContent>
              <Body className="text-slate">
                {t.features.automation.campaigns.description}
              </Body>
            </CardContent>
          </Card>
          <Card variant="elevated">
            <CardHeader>
              <H3>{t.features.automation.schedules.title}</H3>
            </CardHeader>
            <CardContent>
              <Body className="text-slate">
                {t.features.automation.schedules.description}
              </Body>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Analytics & Insights */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <H2 className="mb-12">{t.features.analytics.title}</H2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card variant="elevated">
            <CardHeader>
              <H3>{t.features.analytics.performance.title}</H3>
            </CardHeader>
            <CardContent>
              <Body className="text-slate">
                {t.features.analytics.performance.description}
              </Body>
            </CardContent>
          </Card>
          <Card variant="elevated">
            <CardHeader>
              <H3>{t.features.analytics.reports.title}</H3>
            </CardHeader>
            <CardContent>
              <Body className="text-slate">
                {t.features.analytics.reports.description}
              </Body>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* AI & Automation */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <H2 className="mb-12">{t.features.ai.title}</H2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card variant="elevated">
            <CardHeader>
              <H3>{t.features.ai.agents.title}</H3>
            </CardHeader>
            <CardContent>
              <Body className="text-slate">
                {t.features.ai.agents.description}
              </Body>
            </CardContent>
          </Card>
          <Card variant="elevated">
            <CardHeader>
              <H3>{t.features.ai.optimization.title}</H3>
            </CardHeader>
            <CardContent>
              <Body className="text-slate">
                {t.features.ai.optimization.description}
              </Body>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Team & Collaboration */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <H2 className="mb-12">{t.features.collaboration.title}</H2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card variant="elevated">
            <CardHeader>
              <H3>{t.features.collaboration.workspaces.title}</H3>
            </CardHeader>
            <CardContent>
              <Body className="text-slate">
                {t.features.collaboration.workspaces.description}
              </Body>
            </CardContent>
          </Card>
          <Card variant="elevated">
            <CardHeader>
              <H3>{t.features.collaboration.roles.title}</H3>
            </CardHeader>
            <CardContent>
              <Body className="text-slate">
                {t.features.collaboration.roles.description}
              </Body>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Developer Tools */}
      <section className="max-w-6xl mx-auto px-6 py-16 pb-24">
        <H2 className="mb-12">{t.features.developer.title}</H2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card variant="elevated">
            <CardHeader>
              <H3>{t.features.developer.api.title}</H3>
            </CardHeader>
            <CardContent>
              <Body className="text-slate">
                {t.features.developer.api.description}
              </Body>
            </CardContent>
          </Card>
          <Card variant="elevated">
            <CardHeader>
              <H3>{t.features.developer.webhooks.title}</H3>
            </CardHeader>
            <CardContent>
              <Body className="text-slate">
                {t.features.developer.webhooks.description}
              </Body>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
