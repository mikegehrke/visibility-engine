'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import Button from '@/components/shared/Button';
import Card, { CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/shared/Card';
import { Label, Small, Overline } from '@/components/shared/Typography';
import { useLanguage } from '@/lib/context/LanguageContext';

type UserRole = 'creator' | 'company' | null;

export default function RegisterPage() {
  const { t } = useLanguage();
  const [role, setRole] = useState<UserRole>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      alert(t.auth.register.passwordMismatch);
      return;
    }
    
    setIsLoading(true);
    
    // Placeholder - no real logic
    console.log('Registration attempt:', { role, name, email, password });
    
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
      alert(t.auth.register.uiOnly);
    }, 1000);
  };

  // Step 1: Role Selection
  if (!role) {
    return (
      <div className="flex items-center justify-center px-4 py-12 sm:py-16">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-10">
            <Overline className="mb-3">{t.auth.register.overline}</Overline>
            <h1 className="text-2xl font-semibold text-ink tracking-tight mb-2">{t.auth.register.title}</h1>
            <p className="text-sm text-slate">{t.auth.register.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {/* Creator Card */}
            <Card 
              variant="glass" 
              interactive
              className="cursor-pointer group"
              onClick={() => setRole('creator')}
            >
              <CardHeader className="pb-4">
                <div className="w-10 h-10 rounded-lg bg-signal/10 flex items-center justify-center mb-3 group-hover:bg-signal/20 transition-colors duration-fast">
                  <svg className="w-5 h-5 text-signal" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <CardTitle className="text-lg">{t.auth.register.roleCreator}</CardTitle>
                <CardDescription className="text-sm">{t.auth.register.creatorDesc}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2.5 pt-0">
                {t.auth.register.creatorFeatures.map((feature: string, index: number) => (
                  <FeatureItem key={index}>{feature}</FeatureItem>
                ))}
              </CardContent>
              <CardFooter className="pt-4">
                <Button variant="primary" className="w-full">
                  {t.auth.register.startAsCreator}
                </Button>
              </CardFooter>
            </Card>

            {/* Company Card */}
            <Card 
              variant="glass"
              interactive
              className="cursor-pointer group"
              onClick={() => setRole('company')}
            >
              <CardHeader className="pb-4">
                <div className="w-10 h-10 rounded-lg bg-signal/10 flex items-center justify-center mb-3 group-hover:bg-signal/20 transition-colors duration-fast">
                  <svg className="w-5 h-5 text-signal" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                  </svg>
                </div>
                <CardTitle className="text-lg">{t.auth.register.roleCompany}</CardTitle>
                <CardDescription className="text-sm">{t.auth.register.companyDesc}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2.5 pt-0">
                {t.auth.register.companyFeatures.map((feature: string, index: number) => (
                  <FeatureItem key={index}>{feature}</FeatureItem>
                ))}
              </CardContent>
              <CardFooter className="pt-4">
                <Button variant="primary" className="w-full">
                  {t.auth.register.startAsCompany}
                </Button>
              </CardFooter>
            </Card>
          </div>

          <p className="mt-8 text-center text-sm text-slate">
            {t.auth.register.hasAccount}{' '}
            <Link href="/login" className="text-signal font-medium hover:text-signal/80 transition-colors duration-fast">
              {t.auth.register.signIn}
            </Link>
          </p>

          <p className="mt-4 text-center text-xs text-slate">
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

  // Step 2: Registration Form
  return (
    <div className="flex items-center justify-center px-4 py-12 sm:py-16">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Overline className="mb-3">{t.auth.register.createAccountOverline}</Overline>
          <h1 className="text-2xl font-semibold text-ink tracking-tight mb-2">
            {role === 'creator' ? t.auth.register.creatorAccount : t.auth.register.companyAccount}
          </h1>
          <button
            onClick={() => setRole(null)}
            className="text-xs text-signal hover:text-signal/80 transition-colors duration-fast"
          >
            {t.auth.register.changeAccountType}
          </button>
        </div>

        <Card variant="glass" className="shadow-lg">
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name">
                  {role === 'creator' ? t.auth.register.yourName : t.auth.register.companyName}
                </Label>
                <input
                  id="name"
                  type="text"
                  placeholder={role === 'creator' ? t.auth.register.namePlaceholder : t.auth.register.companyPlaceholder}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full h-11 px-4 rounded-md border border-border bg-surface-1 text-ink placeholder:text-slate/60 focus:outline-none focus:ring-2 focus:ring-signal/50 focus:border-signal transition-all duration-fast"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">{t.auth.register.email}</Label>
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

              <div className="space-y-2">
                <Label htmlFor="password">{t.auth.register.password}</Label>
                <input
                  id="password"
                  type="password"
                  placeholder={t.auth.common.passwordPlaceholder}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={8}
                  className="w-full h-11 px-4 rounded-md border border-border bg-surface-1 text-ink placeholder:text-slate/60 focus:outline-none focus:ring-2 focus:ring-signal/50 focus:border-signal transition-all duration-fast"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">{t.auth.register.confirmPassword}</Label>
                <input
                  id="confirmPassword"
                  type="password"
                  placeholder={t.auth.common.repeatPassword}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  minLength={8}
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
                    {t.auth.common.registering}
                  </span>
                ) : t.auth.register.submit}
              </Button>

              <Small className="block text-center text-slate">
                {t.auth.common.termsPrefix}{' '}
                <Link href="/legal/terms" className="text-signal hover:text-signal/80 transition-colors duration-fast">{t.auth.common.termsLink}</Link>
                {' '}{t.auth.common.termsAnd}{' '}
                <Link href="/legal/privacy" className="text-signal hover:text-signal/80 transition-colors duration-fast">{t.auth.common.privacyLink}</Link>
              </Small>
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
              {t.auth.register.hasAccount}{' '}
              <Link href="/login" className="text-signal font-medium hover:text-signal/80 transition-colors duration-fast">
                {t.auth.register.signIn}
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

// Feature item component for role selection cards
function FeatureItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 text-sm text-slate">
      <svg className="w-4 h-4 text-signal flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
      {children}
    </div>
  );
}
