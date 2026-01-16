import { H1, H2, H3, Body, Lead, Overline } from '@/components/shared/Typography';
import Card, { CardHeader, CardContent } from '@/components/shared/Card';
import { publicTranslations } from '@/lib/i18n/public-translations';

const t = publicTranslations.en;

// Feature section component for consistency
function FeatureSection({ 
  overline, 
  title, 
  children 
}: { 
  overline: string; 
  title: string; 
  children: React.ReactNode;
}) {
  return (
    <section className="py-20">
      <div className="mb-12">
        <Overline className="mb-3 block">{overline}</Overline>
        <H2>{title}</H2>
      </div>
      {children}
    </section>
  );
}

// Feature card component
function FeatureCard({ 
  title, 
  description, 
  icon 
}: { 
  title: string; 
  description: string; 
  icon: string;
}) {
  return (
    <Card variant="elevated" hover className="group h-full">
      <CardHeader>
        <div className="w-10 h-10 rounded-lg bg-signal-muted flex items-center justify-center mb-3 transition-transform duration-slow group-hover:scale-105">
          <svg className="w-5 h-5 text-signal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
          </svg>
        </div>
        <H3>{title}</H3>
      </CardHeader>
      <CardContent>
        <Body className="text-slate">{description}</Body>
      </CardContent>
    </Card>
  );
}

export default function FeaturesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-signal-muted/50 to-transparent pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-6 pt-24 pb-16 text-center">
          <Overline className="mb-4 block">Platform</Overline>
          <H1 className="mb-6 max-w-4xl mx-auto">{t.features.hero.title}</H1>
          <Lead className="max-w-2xl mx-auto">
            {t.features.hero.subtitle}
          </Lead>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6">
        {/* Content & Media Management */}
        <FeatureSection overline="Content" title={t.features.contentMedia.title}>
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard 
              title={t.features.contentMedia.video.title}
              description={t.features.contentMedia.video.description}
              icon="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
            />
            <FeatureCard 
              title={t.features.contentMedia.images.title}
              description={t.features.contentMedia.images.description}
              icon="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
            <FeatureCard 
              title={t.features.contentMedia.editor.title}
              description={t.features.contentMedia.editor.description}
              icon="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </div>
        </FeatureSection>

        {/* Automation & Scheduling */}
        <FeatureSection overline="Automation" title={t.features.automation.title}>
          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard 
              title={t.features.automation.campaigns.title}
              description={t.features.automation.campaigns.description}
              icon="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
            />
            <FeatureCard 
              title={t.features.automation.schedules.title}
              description={t.features.automation.schedules.description}
              icon="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
            />
          </div>
        </FeatureSection>

        {/* Analytics & Insights */}
        <FeatureSection overline="Insights" title={t.features.analytics.title}>
          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard 
              title={t.features.analytics.performance.title}
              description={t.features.analytics.performance.description}
              icon="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
            />
            <FeatureCard 
              title={t.features.analytics.reports.title}
              description={t.features.analytics.reports.description}
              icon="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
            />
          </div>
        </FeatureSection>

        {/* AI & Automation */}
        <FeatureSection overline="AI" title={t.features.ai.title}>
          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard 
              title={t.features.ai.agents.title}
              description={t.features.ai.agents.description}
              icon="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
            />
            <FeatureCard 
              title={t.features.ai.optimization.title}
              description={t.features.ai.optimization.description}
              icon="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
            />
          </div>
        </FeatureSection>

        {/* Team & Collaboration */}
        <FeatureSection overline="Team" title={t.features.collaboration.title}>
          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard 
              title={t.features.collaboration.workspaces.title}
              description={t.features.collaboration.workspaces.description}
              icon="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
            />
            <FeatureCard 
              title={t.features.collaboration.roles.title}
              description={t.features.collaboration.roles.description}
              icon="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
            />
          </div>
        </FeatureSection>

        {/* Developer Tools */}
        <FeatureSection overline="Developers" title={t.features.developer.title}>
          <div className="grid md:grid-cols-2 gap-6 pb-24">
            <FeatureCard 
              title={t.features.developer.api.title}
              description={t.features.developer.api.description}
              icon="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
            />
            <FeatureCard 
              title={t.features.developer.webhooks.title}
              description={t.features.developer.webhooks.description}
              icon="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
            />
          </div>
        </FeatureSection>
      </div>
    </div>
  );
}
