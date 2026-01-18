'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Button from '@/components/shared/Button';
import Card, { CardContent, CardFooter } from '@/components/shared/Card';
import { Small, Overline } from '@/components/shared/Typography';
import { useLanguage } from '@/lib/context/LanguageContext';

export default function VerifyEmailPage({
  params,
}: {
  params: { token: string };
}) {
  const { t } = useLanguage();
  const [isVerifying, setIsVerifying] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    // Simulate verification process
    const timer = setTimeout(() => {
      console.log('Email verification:', { token: params.token });
      setIsVerifying(false);
      setIsSuccess(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, [params.token]);

  if (isVerifying) {
    return (
      <div className="flex items-center justify-center px-4 py-12 sm:py-16">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Overline className="mb-3">{t.auth.verifyEmail.overline}</Overline>
            <h1 className="text-2xl font-semibold text-ink tracking-tight">{t.auth.verifyEmail.title}</h1>
          </div>

          <Card variant="glass" className="shadow-lg">
            <CardContent className="flex justify-center py-12">
              <div className="relative">
                <div className="w-12 h-12 rounded-full border-2 border-signal/20 border-t-signal animate-spin" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className="flex items-center justify-center px-4 py-12 sm:py-16">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-12 h-12 rounded-full bg-signal/10 flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-signal" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <Overline className="mb-3">{t.auth.verifyEmail.successOverline}</Overline>
            <h1 className="text-2xl font-semibold text-ink tracking-tight">{t.auth.verifyEmail.successTitle}</h1>
            <p className="mt-2 text-sm text-slate">{t.auth.verifyEmail.successSubtitle}</p>
          </div>

          <Card variant="glass" className="shadow-lg">
            <CardContent className="py-6">
              <Small className="block text-center">
                {t.auth.verifyEmail.successDesc}
              </Small>
            </CardContent>

            <CardFooter className="pb-6">
              <Link href="/login" className="w-full">
                <Button variant="primary" className="w-full h-11">
                  {t.auth.common.goToLogin}
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

  // Error state (fallback)
  return (
    <div className="flex items-center justify-center px-4 py-12 sm:py-16">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
          </div>
          <Overline className="mb-3 text-red-500/80">{t.auth.verifyEmail.errorOverline}</Overline>
          <h1 className="text-2xl font-semibold text-ink tracking-tight">{t.auth.verifyEmail.errorTitle}</h1>
          <p className="mt-2 text-sm text-slate">{t.auth.verifyEmail.errorSubtitle}</p>
        </div>

        <Card variant="glass" className="shadow-lg">
          <CardContent className="py-6">
            <Small className="block text-center">
              {t.auth.verifyEmail.errorDesc}
            </Small>
          </CardContent>

          <CardFooter className="flex gap-3 pb-6">
            <Link href="/login" className="flex-1">
              <Button variant="secondary" className="w-full h-11">
                {t.auth.common.goToLogin}
              </Button>
            </Link>
            <Link href="/register" className="flex-1">
              <Button variant="primary" className="w-full h-11">
                {t.auth.verifyEmail.registerAgain}
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
