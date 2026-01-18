'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import Button from '@/components/shared/Button';
import Card, { CardContent, CardFooter } from '@/components/shared/Card';
import { Label, Small, Overline } from '@/components/shared/Typography';
import { useLanguage } from '@/lib/context/LanguageContext';

export default function ForgotPasswordPage() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Placeholder - no real logic
    console.log('Password reset request:', { email });
    
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="flex items-center justify-center px-4 py-12 sm:py-16">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-12 h-12 rounded-full bg-signal/10 flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-signal" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <Overline className="mb-3">{t.auth.forgotPassword.emailSentOverline}</Overline>
            <h1 className="text-2xl font-semibold text-ink tracking-tight">{t.auth.forgotPassword.emailSentTitle}</h1>
          </div>

          <Card variant="glass" className="shadow-lg">
            <CardContent className="py-6 space-y-4">
              <Small className="block">
                {t.auth.forgotPassword.emailSentTo} <strong className="text-ink">{email}</strong> gesendet.
              </Small>
              <Small className="block">
                {t.auth.forgotPassword.emailSentDesc}
              </Small>
              <Small className="block text-slate">
                {t.auth.forgotPassword.noEmail}{' '}
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-signal hover:text-signal/80 transition-colors duration-fast"
                >
                  {t.auth.forgotPassword.tryAgain}
                </button>
                .
              </Small>
            </CardContent>

            <CardFooter className="pb-6">
              <Link href="/login" className="w-full">
                <Button variant="primary" className="w-full h-11">
                  {t.auth.common.backToLogin}
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <p className="mt-6 text-center text-xs text-slate">
            <Link href="/" className="hover:text-ink transition-colors duration-fast inline-flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              {t.auth.common.backToHome}
            </Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center px-4 py-12 sm:py-16">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-full bg-signal/10 flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-signal" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
            </svg>
          </div>
          <Overline className="mb-3">{t.auth.forgotPassword.overline}</Overline>
          <h1 className="text-2xl font-semibold text-ink tracking-tight mb-2">{t.auth.forgotPassword.title}</h1>
          <p className="text-sm text-slate">
            {t.auth.forgotPassword.subtitle}
          </p>
        </div>

        <Card variant="glass" className="shadow-lg">
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="email">{t.auth.forgotPassword.email}</Label>
                <input
                  id="email"
                  type="email"
                  placeholder={t.auth.common.emailPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full h-11 px-4 rounded-md border border-border bg-surface-1 text-ink placeholder:text-slate/60 focus:outline-none focus:ring-2 focus:ring-signal/50 focus:border-signal transition-all duration-fast"
                />
              </div>

              <Button 
                type="submit" 
                variant="primary" 
                size="md" 
                className="w-full h-11"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    {t.auth.common.sending}
                  </span>
                ) : t.auth.forgotPassword.submit}
              </Button>
            </form>
          </CardContent>

          <CardFooter className="flex-col space-y-4 pb-6">
            <div className="relative w-full">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-surface-0 px-3 text-slate tracking-wide">{t.auth.common.or}</span>
              </div>
            </div>

            <p className="text-sm text-center text-slate">
              {t.auth.forgotPassword.remembered}{' '}
              <Link href="/login" className="text-signal font-medium hover:text-signal/80 transition-colors duration-fast">
                {t.auth.forgotPassword.backToLogin}
              </Link>
            </p>
          </CardFooter>
        </Card>

        <p className="mt-6 text-center text-xs text-slate">
          <Link href="/" className="hover:text-ink transition-colors duration-fast inline-flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            {t.auth.common.backToHome}
          </Link>
        </p>
      </div>
    </div>
  );
}
