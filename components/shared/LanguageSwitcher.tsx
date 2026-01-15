'use client';

import { useLanguage, type Language } from '@/lib/context/LanguageContext';
import { translations } from '@/lib/i18n/translations';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  return (
    <div className="flex gap-2 items-center">
      <button
        onClick={() => handleLanguageChange('en')}
        className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
          language === 'en'
            ? 'bg-signal-bg text-white'
            : 'text-slate hover:text-ink hover:bg-smoke'
        }`}
        aria-label="Switch to English"
      >
        {t.languageSwitcher.en}
      </button>
      <button
        onClick={() => handleLanguageChange('de')}
        className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
          language === 'de'
            ? 'bg-signal-bg text-white'
            : 'text-slate hover:text-ink hover:bg-smoke'
        }`}
        aria-label="Switch to Deutsch"
      >
        {t.languageSwitcher.de}
      </button>
    </div>
  );
}
