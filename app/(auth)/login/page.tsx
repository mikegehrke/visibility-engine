'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import Button from '@/components/shared/Button';
import Card, { CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/shared/Card';
import { Label } from '@/components/shared/Typography';

export default function LoginPage() {
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
      alert('Login UI only - no backend implemented');
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-mist px-4">
      <div className="w-full max-w-md">
        <Card variant="elevated">
          <CardHeader>
            <CardTitle>Willkommen zurück</CardTitle>
            <CardDescription>Melde dich bei deinem Account an</CardDescription>
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

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Passwort</Label>
                  <Link 
                    href="/forgot-password" 
                    className="text-sm text-signal hover:underline"
                  >
                    Vergessen?
                  </Link>
                </div>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                {isLoading ? 'Anmelden...' : 'Anmelden'}
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
              Noch kein Account?{' '}
              <Link href="/register" className="text-signal font-medium hover:underline">
                Jetzt registrieren
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
