'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import Button from '@/components/shared/Button';
import Card, { CardContent, CardFooter } from '@/components/shared/Card';
import { Label, Small, Overline } from '@/components/shared/Typography';

export default function ResetPasswordPage({
  params,
}: {
  params: { token: string };
}) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      alert('Passwörter stimmen nicht überein');
      return;
    }
    
    setIsLoading(true);
    
    // Placeholder - no real logic
    console.log('Password reset:', { token: params.token, password });
    
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1000);
  };

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
            <Overline className="mb-3">Erfolgreich</Overline>
            <h1 className="text-2xl font-semibold text-ink tracking-tight">Passwort zurückgesetzt</h1>
            <p className="mt-2 text-sm text-slate">Dein Passwort wurde erfolgreich geändert</p>
          </div>

          <Card variant="glass" className="shadow-lg">
            <CardContent className="py-6">
              <Small className="block text-center">
                Du kannst dich jetzt mit deinem neuen Passwort anmelden.
              </Small>
            </CardContent>

            <CardFooter className="pb-6">
              <Link href="/login" className="w-full">
                <Button variant="primary" className="w-full h-11">
                  Zum Login
                </Button>
              </Link>
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

  return (
    <div className="flex items-center justify-center px-4 py-12 sm:py-16">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-full bg-signal/10 flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-signal" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
          </div>
          <Overline className="mb-3">Neues Passwort</Overline>
          <h1 className="text-2xl font-semibold text-ink tracking-tight mb-2">Passwort zurücksetzen</h1>
          <p className="text-sm text-slate">Wähle ein sicheres Passwort für deinen Account</p>
        </div>

        <Card variant="glass" className="shadow-lg">
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="password">Neues Passwort</Label>
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
                <Small className="text-slate">
                  Mindestens 8 Zeichen. Empfohlen: Groß-/Kleinbuchstaben, Zahlen und Sonderzeichen.
                </Small>
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
                    Wird gespeichert...
                  </span>
                ) : 'Passwort zurücksetzen'}
              </Button>
            </form>
          </CardContent>
        </Card>

        <p className="mt-6 text-center text-xs text-slate">
          <Link href="/login" className="hover:text-ink transition-colors duration-fast inline-flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Zurück zum Login
          </Link>
        </p>
      </div>
    </div>
  );
}
