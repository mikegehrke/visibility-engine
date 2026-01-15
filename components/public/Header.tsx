'use client';

import Link from 'next/link';
import Button from '@/components/shared/Button';
import LanguageSwitcher from '@/components/shared/LanguageSwitcher';
import { useLanguage } from '@/lib/context/LanguageContext';
import { translations } from '@/lib/i18n/translations';

export default function Header() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <header className="border-b border-mist">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold">Visibility Engine</Link>
        <div className="flex items-center gap-6">
          <Link href="/features" className="text-slate hover:text-ink transition-colors">{t.nav.features}</Link>
          <Link href="/pricing" className="text-slate hover:text-ink transition-colors">{t.nav.pricing}</Link>
          <Link href="/about" className="text-slate hover:text-ink transition-colors">{t.nav.about}</Link>
          <Link href="/blog" className="text-slate hover:text-ink transition-colors">{t.nav.blog}</Link>
          <LanguageSwitcher />
          <Link href="/login">
            <Button variant="primary" size="sm">{t.nav.login}</Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
