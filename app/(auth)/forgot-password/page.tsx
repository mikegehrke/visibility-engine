'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import Button from '@/components/shared/Button';
import Card, { CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/shared/Card';
import { Label, Small } from '@/components/shared/Typography';
import { useLanguage } from '@/lib/context/LanguageContext';
import { translations } from '@/lib/i18n/translations';

export default function ForgotPasswordPage() {
  const { language } = useLanguage();
  const t = translations[language];
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
      <div className="min-h-screen flex items-center justify-center bg-mist px-4">
        <div className="w-full max-w-md">
          <Card variant="elevated">
            <CardHeader>
              <CardTitle>E-Mail versendet</CardTitle>
              <CardDescription>Überprüfe dein Postfach</CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <Small className="block">
                Wir haben dir eine E-Mail an <strong>{email}</strong> gesendet.
              </Small>
              <Small className="block">
                Klicke auf den Link in der E-Mail, um dein Passwort zurückzusetzen.
              </Small>
              <Small className="block text-slate">
                Keine E-Mail erhalten? Überprüfe deinen Spam-Ordner oder{' '}
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-signal hover:underline"
                >
                  versuche es erneut
                </button>
                .
              </Small>
            </CardContent>

            <CardFooter>
              <Link href="/login" className="w-full">
                <Button variant="primary" className="w-full">
                  Zurück zum Login
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
            <CardTitle>Passwort vergessen?</CardTitle>
            <CardDescription>
              Kein Problem. Gib deine E-Mail-Adresse ein und wir senden dir einen Link zum Zurücksetzen.
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">E-Mail</Label>
                <input
                  id="email"
                  type="email"
                  placeholder="name@beispiel.de"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
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
                {isLoading ? 'Wird gesendet...' : 'Reset-Link senden'}
              </Button>
            </form>
          </CardContent>

          <CardFooter className="flex-col space-y-4">
            <div className="relative w-full">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-mist"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-canvas px-2 text-slate">oder</span>
              </div>
            </div>

            <p className="text-sm text-center text-slate">
              Doch erinnert?{' '}
              <Link href="/login" className="text-signal font-medium hover:underline">
                Zurück zum Login
              </Link>
            </p>
          </CardFooter>
        </Card>

        <p className="mt-4 text-center text-xs text-slate">
          <Link href="/" className="hover:underline">← Zurück zur Startseite</Link>
        </p>
      </div>
    </div>
  );
}
