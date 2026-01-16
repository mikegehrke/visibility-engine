'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import Button from '@/components/shared/Button';
import Card, { CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/shared/Card';
import { Label, Small, Overline } from '@/components/shared/Typography';
import { useLanguage } from '@/lib/context/LanguageContext';
import { translations } from '@/lib/i18n/translations';

type UserRole = 'creator' | 'company' | null;

export default function RegisterPage() {
  const { language } = useLanguage();
  const t = translations[language];
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
            <Overline className="mb-3">Loslegen</Overline>
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
                <CardTitle className="text-lg">Creator</CardTitle>
                <CardDescription className="text-sm">Für Content-Creator & Influencer</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2.5 pt-0">
                <FeatureItem>Automatische Content-Generierung</FeatureItem>
                <FeatureItem>Social Media Management</FeatureItem>
                <FeatureItem>Performance Analytics</FeatureItem>
                <FeatureItem>Personal Branding Tools</FeatureItem>
              </CardContent>
              <CardFooter className="pt-4">
                <Button variant="primary" className="w-full">
                  Als Creator starten
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
                <CardTitle className="text-lg">Unternehmen</CardTitle>
                <CardDescription className="text-sm">Für Firmen & Teams</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2.5 pt-0">
                <FeatureItem>Team-Kollaboration</FeatureItem>
                <FeatureItem>Brand Management</FeatureItem>
                <FeatureItem>Multi-Channel Publishing</FeatureItem>
                <FeatureItem>Advanced Analytics</FeatureItem>
              </CardContent>
              <CardFooter className="pt-4">
                <Button variant="primary" className="w-full">
                  Als Unternehmen starten
                </Button>
              </CardFooter>
            </Card>
          </div>

          <p className="mt-8 text-center text-sm text-slate">
            Bereits registriert?{' '}
            <Link href="/login" className="text-signal font-medium hover:text-signal/80 transition-colors duration-fast">
              Jetzt anmelden
            </Link>
          </p>

          <p className="mt-4 text-center text-xs text-slate">
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

  // Step 2: Registration Form
  return (
    <div className="flex items-center justify-center px-4 py-12 sm:py-16">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Overline className="mb-3">Account erstellen</Overline>
          <h1 className="text-2xl font-semibold text-ink tracking-tight mb-2">
            {role === 'creator' ? 'Creator-Account' : 'Unternehmens-Account'}
          </h1>
          <button
            onClick={() => setRole(null)}
            className="text-xs text-signal hover:text-signal/80 transition-colors duration-fast"
          >
            Account-Typ ändern
          </button>
        </div>

        <Card variant="glass" className="shadow-lg">
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name">
                  {role === 'creator' ? 'Dein Name' : 'Firmenname'}
                </Label>
                <input
                  id="name"
                  type="text"
                  placeholder={role === 'creator' ? 'Max Mustermann' : 'Muster GmbH'}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full h-11 px-4 rounded-md border border-border bg-surface-1 text-ink placeholder:text-slate/60 focus:outline-none focus:ring-2 focus:ring-signal/50 focus:border-signal transition-all duration-fast"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-Mail</Label>
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
                <Label htmlFor="password">Passwort</Label>
                <input
                  id="password"
                  type="password"
                  placeholder="Mindestens 8 Zeichen"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={8}
                  className="w-full h-11 px-4 rounded-md border border-border bg-surface-1 text-ink placeholder:text-slate/60 focus:outline-none focus:ring-2 focus:ring-signal/50 focus:border-signal transition-all duration-fast"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Passwort bestätigen</Label>
                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="Passwort wiederholen"
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
                    Registrierung...
                  </span>
                ) : 'Account erstellen'}
              </Button>

              <Small className="block text-center text-slate">
                Mit der Registrierung akzeptierst du unsere{' '}
                <Link href="/legal/terms" className="text-signal hover:text-signal/80 transition-colors duration-fast">AGB</Link>
                {' '}und{' '}
                <Link href="/legal/privacy" className="text-signal hover:text-signal/80 transition-colors duration-fast">Datenschutzerklärung</Link>
              </Small>
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
              Bereits registriert?{' '}
              <Link href="/login" className="text-signal font-medium hover:text-signal/80 transition-colors duration-fast">
                Jetzt anmelden
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
