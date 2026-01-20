import { use } from 'react';
import { notFound } from 'next/navigation';
import StaticHeader from '@/components/public/StaticHeader';
import StaticFooter from '@/components/public/StaticFooter';
import { supportedLanguages, isValidLang, type Lang } from '@/lib/i18n/langs';

// Generate static params for all languages at build time
export function generateStaticParams() {
  return supportedLanguages.map((lang) => ({ lang }));
}

// Metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langParam } = await params;
  const lang = isValidLang(langParam) ? langParam : 'en';
  const baseUrl = 'https://visibility-engine.com';
  
  return {
    alternates: {
      canonical: `${baseUrl}/${lang}`,
      languages: {
        'en': `${baseUrl}/en`,
        'de': `${baseUrl}/de`,
      },
    },
  };
}

export default function PublicLangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = use(params);
  
  // Validate language - redirect to 404 if invalid
  if (!isValidLang(lang)) {
    notFound();
  }

  return (
    <>
      <StaticHeader lang={lang} />
      <main>{children}</main>
      <StaticFooter lang={lang} />
    </>
  );
}
