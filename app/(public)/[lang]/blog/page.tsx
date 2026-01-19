import { H1, Lead, Overline } from '@/components/shared/Typography';
import BlogContent from '@/components/public/BlogContent';
import { blog as blogEn } from '@/lib/i18n/locales/en/blog';
import { blog as blogDe } from '@/lib/i18n/locales/de/blog';
import { supportedLanguages, type Lang } from '@/lib/i18n/langs';

const translations = { en: blogEn, de: blogDe } as const;

export function generateStaticParams() {
  return supportedLanguages.map((lang) => ({ lang }));
}

export default async function BlogPage({ params }: { params: { lang: string } }) {
  const lang = (params.lang as Lang) || 'en';
  const t = translations[lang];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-signal-muted/30 via-transparent to-transparent pointer-events-none" />
        
        <div className="relative max-w-5xl mx-auto px-6 pt-32 pb-16">
          <div className="max-w-3xl">
            <Overline className="mb-6 block text-signal">{t.hero.overline}</Overline>
            <H1 className="mb-6">
              {t.hero.title}<br />
              <span className="text-signal">{t.hero.titleHighlight}</span>
            </H1>
            <Lead className="text-slate">
              {t.hero.subtitle}
            </Lead>
          </div>
        </div>
      </section>

      <BlogContent t={t} lang={lang} />
    </div>
  );
}
