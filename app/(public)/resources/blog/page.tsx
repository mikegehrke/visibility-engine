'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { H1, Body, Lead, Overline } from '@/components/shared/Typography';
import Button from '@/components/shared/Button';
import { useLanguage } from '@/lib/context/LanguageContext';

export default function ResourcesBlogPage() {
  const router = useRouter();
  const { t } = useLanguage();
  const rp = t.resourcePages?.blog;

  // Auto-redirect after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/blog');
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  // Fallback content if translations not yet loaded
  if (!rp) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-xl mx-auto px-6 text-center">
        {/* Animated Icon */}
        <div className="w-20 h-20 rounded-full bg-signal-muted mx-auto mb-8 flex items-center justify-center animate-pulse">
          <svg className="w-10 h-10 text-signal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </div>

        <Overline className="text-signal mb-4">{rp.overline}</Overline>
        <H1 className="mb-6">{rp.title}</H1>
        <Lead className="text-slate mb-8">{rp.subtitle}</Lead>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/blog">
            <Button variant="primary" size="lg">{rp.primaryCta}</Button>
          </Link>
          <Link href="/resources/guides">
            <Button variant="secondary" size="lg">{rp.secondaryCta}</Button>
          </Link>
        </div>

        <p className="text-sm text-slate mt-8">{rp.redirectNotice}</p>
      </div>
    </div>
  );
}
