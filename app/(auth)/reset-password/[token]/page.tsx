'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import Button from '@/components/shared/Button';
import Card, { CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/shared/Card';
import { Label, Small } from '@/components/shared/Typography';

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
      <div className="min-h-screen flex items-center justify-center bg-mist px-4">
        <div className="w-full max-w-md">
          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Passwort zurückgesetzt</CardTitle>
              <CardDescription>Dein Passwort wurde erfolgreich geändert</CardDescription>
            </CardHeader>
            
            <CardContent>
              <Small className="block mb-4">
                Du kannst dich jetzt mit deinem neuen Passwort anmelden.
              </Small>
            </CardContent>

            <CardFooter>
              <Link href="/login" className="w-full">
                <Button variant="primary" className="w-full">
                  Zum Login
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <p className="mt-4 text-center text-xs text-slate">
            <Link href="/" className="hover:underline">← Zurück zur Startseite</Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-mist px-4">
      <div className="w-full max-w-md">
        <Card variant="elevated">
          <CardHeader>
            <CardTitle>Neues Passwort setzen</CardTitle>
            <CardDescription>Wähle ein sicheres Passwort für deinen Account</CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
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
                  className="w-full h-10 px-3 rounded-sm border border-slate bg-canvas text-ink placeholder:text-slate/50 focus:outline-none focus:ring-2 focus:ring-signal focus:border-transparent transition-all"
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
                  className="w-full h-10 px-3 rounded-sm border border-slate bg-canvas text-ink placeholder:text-slate/50 focus:outline-none focus:ring-2 focus:ring-signal focus:border-transparent transition-all"
                />
              </div>

              <Button 
                type="submit" 
                variant="primary" 
                size="md" 
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? 'Wird gespeichert...' : 'Passwort zurücksetzen'}
              </Button>
            </form>
          </CardContent>

          <CardFooter className="flex-col space-y-4">
            <Small className="text-center text-slate">
              Token: <code className="text-xs font-mono bg-mist px-2 py-1 rounded">{params.token}</code>
            </Small>
          </CardFooter>
        </Card>

        <p className="mt-4 text-center text-xs text-slate">
          <Link href="/login" className="hover:underline">← Zurück zum Login</Link>
        </p>
      </div>
    </div>
  );
}
