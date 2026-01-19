import { notFound } from 'next/navigation';
import StaticHeader from '@/components/public/StaticHeader';
import StaticFooter from '@/components/public/StaticFooter';
import { supportedLanguages, isValidLang, type Lang } from '@/lib/i18n/langs';

// Generate static params for all languages at build time
export function generateStaticParams() {
  return supportedLanguages.map((lang) => ({ lang }));
}

// Metadata for SEO
export async function generateMetadata({ params }: { params: { lang: string } }) {
  const lang = isValidLang(params.lang) ? params.lang : 'en';
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
  params: { lang: string };
}) {
  // Validate language - redirect to 404 if invalid
  if (!isValidLang(params.lang)) {
    notFound();
  }

  return (
    <>
      <StaticHeader lang={params.lang} />
      <main>{children}</main>
      <StaticFooter lang={params.lang} />
    </>
  );
}
