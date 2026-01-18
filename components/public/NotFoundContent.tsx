'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/context/LanguageContext';
import Button from '@/components/shared/Button';
import { H1, Body, Lead } from '@/components/shared/Typography';

export default function NotFoundContent() {
  const { t, language } = useLanguage();
  const content = t.notFound;

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-br from-signal-muted/20 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-tl from-signal-muted/10 via-transparent to-transparent rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-2xl mx-auto text-center">
        {/* 404 Number with glass effect */}
        <div className="relative mb-8">
          <div className="text-[180px] sm:text-[240px] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-signal/30 via-signal-muted/50 to-signal/20 select-none" aria-hidden="true">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-surface-1/80 backdrop-blur-xl border border-border/50 shadow-xl flex items-center justify-center">
              <svg 
                className="w-16 h-16 sm:w-20 sm:h-20 text-signal" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={1.5}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" 
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4 mb-10">
          <H1 className="text-2xl sm:text-3xl">
            {content?.title || (language === 'de' ? 'Seite nicht gefunden' : 'Page Not Found')}
          </H1>
          <Lead className="text-slate max-w-md mx-auto">
            {content?.description || (language === 'de' 
              ? 'Die gesuchte Seite existiert nicht oder wurde verschoben.' 
              : 'The page you\'re looking for doesn\'t exist or has been moved.'
            )}
          </Lead>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/">
            <Button variant="primary" size="lg">
              {content?.ctaHome || (language === 'de' ? 'Zur Startseite' : 'Go to Homepage')}
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button variant="secondary" size="lg">
              {content?.ctaDashboard || (language === 'de' ? 'Dashboard öffnen' : 'Open Dashboard')}
            </Button>
          </Link>
        </div>

        {/* Help text */}
        <Body className="text-slate/60 mt-12 text-sm">
          {content?.helpText || (language === 'de' 
            ? 'Falls du Hilfe benötigst, kontaktiere unser Support-Team.' 
            : 'If you need help, contact our support team.'
          )}
          {' '}
          <Link href="/contact" className="text-signal hover:underline underline-offset-2 transition-colors">
            {content?.contactLink || (language === 'de' ? 'Kontakt aufnehmen' : 'Get in touch')}
          </Link>
        </Body>
      </div>
    </div>
  );
}
