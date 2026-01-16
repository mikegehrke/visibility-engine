'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import Button from '@/components/shared/Button';
import Card, { CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/shared/Card';
import { Label, Overline } from '@/components/shared/Typography';
import { useLanguage } from '@/lib/context/LanguageContext';
import { translations } from '@/lib/i18n/translations';

export default function LoginPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Placeholder - no real logic
    console.log('Login attempt:', { email, password });
    
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
      alert(t.auth.login.uiOnly);
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center px-4 py-12 sm:py-16">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Overline className="mb-3">Willkommen zurück</Overline>
          <h1 className="text-2xl font-semibold text-ink tracking-tight">{t.auth.login.title}</h1>
          <p className="mt-2 text-sm text-slate">{t.auth.login.subtitle}</p>
        </div>

        <Card variant="glass" className="shadow-lg">
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="email">{t.auth.login.email}</Label>
                <input
                  id="email"
                  type="email"
                  placeholder="name@beispiel.de"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full h-11 px-4 rounded-md border border-border bg-surface-1 text-ink placeholder:text-slate/60 focus:outline-none focus:ring-2 focus:ring-signal/50 focus:border-signal transition-all duration-fast"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">{t.auth.login.password}</Label>
                  <Link 
                    href="/forgot-password" 
                    className="text-xs text-signal hover:text-signal/80 transition-colors duration-fast"
                  >
                    {t.auth.login.forgotPassword}
                  </Link>
                </div>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                    Anmelden...
                  </span>
                ) : t.auth.login.submit}
              </Button>
            </form>
          </CardContent>

          <CardFooter className="flex-col space-y-4 pb-6">
            <div className="relative w-full">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-surface-0 px-3 text-slate tracking-wide">oder</span>
              </div>
            </div>

            <p className="text-sm text-center text-slate">
              {t.auth.login.noAccount}{' '}
              <Link href="/register" className="text-signal font-medium hover:text-signal/80 transition-colors duration-fast">
                {t.auth.login.signUp}
              </Link>
            </p>
          </CardFooter>
        </Card>

        <p className="mt-6 text-center text-xs text-slate">
          <Link href="/" className="hover:text-ink transition-colors duration-fast inline-flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Zurück zur Startseite
          </Link>
        </p>
      </div>
    </div>
  );
}
