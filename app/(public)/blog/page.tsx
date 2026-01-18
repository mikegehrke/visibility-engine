import { cookies } from 'next/headers';
import { H1, Lead, Overline } from '@/components/shared/Typography';
import { getTranslations, type Locale } from '@/lib/i18n/server';
import type { BlogTranslations } from '@/lib/i18n/locales/en/blog';
import BlogContent from '@/components/public/BlogContent';

export default async function BlogPage() {
  const lang = (cookies().get('language')?.value as Locale) || 'en';
  const t = await getTranslations<BlogTranslations>(lang, 'blog');

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
