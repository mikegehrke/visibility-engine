'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import Button from '@/components/shared/Button';
import Card, { CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/shared/Card';
import { Label, Small } from '@/components/shared/Typography';
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
      <div className="min-h-screen flex items-center justify-center bg-mist px-4">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">{t.auth.register.title}</h1>
            <p className="text-slate">{t.auth.register.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Creator Card */}
            <Card 
              variant="elevated" 
              className="cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setRole('creator')}
            >
              <CardHeader>
                <CardTitle>Creator</CardTitle>
                <CardDescription>Für Content-Creator & Influencer</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Small>✓ Automatische Content-Generierung</Small>
                <Small>✓ Social Media Management</Small>
                <Small>✓ Performance Analytics</Small>
                <Small>✓ Personal Branding Tools</Small>
              </CardContent>
              <CardFooter>
                <Button variant="primary" className="w-full">
                  Als Creator starten
                </Button>
              </CardFooter>
            </Card>

            {/* Company Card */}
            <Card 
              variant="elevated"
              className="cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setRole('company')}
            >
              <CardHeader>
                <CardTitle>Unternehmen</CardTitle>
                <CardDescription>Für Firmen & Teams</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Small>✓ Team-Kollaboration</Small>
                <Small>✓ Brand Management</Small>
                <Small>✓ Multi-Channel Publishing</Small>
                <Small>✓ Advanced Analytics</Small>
              </CardContent>
              <CardFooter>
                <Button variant="primary" className="w-full">
                  Als Unternehmen starten
                </Button>
              </CardFooter>
            </Card>
          </div>

          <p className="mt-8 text-center text-sm text-slate">
            Bereits registriert?{' '}
            <Link href="/login" className="text-signal font-medium hover:underline">
              Jetzt anmelden
            </Link>
          </p>

          <p className="mt-4 text-center text-xs text-slate">
            <Link href="/" className="hover:underline">← Zurück zur Startseite</Link>
          </p>
        </div>
      </div>
    );
  }

  // Step 2: Registration Form
  return (
    <div className="min-h-screen flex items-center justify-center bg-mist px-4 py-8">
      <div className="w-full max-w-md">
        <Card variant="elevated">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Account erstellen</CardTitle>
                <CardDescription>
                  {role === 'creator' ? 'Creator-Account' : 'Unternehmens-Account'}
                </CardDescription>
              </div>
              <button
                onClick={() => setRole(null)}
                className="text-sm text-signal hover:underline"
              >
                Ändern
              </button>
            </div>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
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
                  className="w-full h-10 px-3 rounded-sm border border-slate bg-canvas text-ink placeholder:text-slate/50 focus:outline-none focus:ring-2 focus:ring-signal focus:border-transparent transition-all"
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
                  className="w-full h-10 px-3 rounded-sm border border-slate bg-canvas text-ink placeholder:text-slate/50 focus:outline-none focus:ring-2 focus:ring-signal focus:border-transparent transition-all"
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
                  className="w-full h-10 px-3 rounded-sm border border-slate bg-canvas text-ink placeholder:text-slate/50 focus:outline-none focus:ring-2 focus:ring-signal focus:border-transparent transition-all"
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
                {isLoading ? 'Registrierung läuft...' : 'Account erstellen'}
              </Button>

              <Small className="block text-center">
                Mit der Registrierung akzeptierst du unsere{' '}
                <Link href="/legal/terms" className="text-signal hover:underline">AGB</Link>
                {' '}und{' '}
                <Link href="/legal/privacy" className="text-signal hover:underline">Datenschutzerklärung</Link>
              </Small>
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
              Bereits registriert?{' '}
              <Link href="/login" className="text-signal font-medium hover:underline">
                Jetzt anmelden
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
