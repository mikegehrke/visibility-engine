'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Button from '@/components/shared/Button';
import Card, { CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/shared/Card';
import { Small } from '@/components/shared/Typography';

export default function VerifyEmailPage({
  params,
}: {
  params: { token: string };
}) {
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
      <div className="min-h-screen flex items-center justify-center bg-mist px-4">
        <div className="w-full max-w-md">
          <Card variant="elevated">
            <CardHeader>
              <CardTitle>E-Mail wird verifiziert...</CardTitle>
              <CardDescription>Bitte warten</CardDescription>
            </CardHeader>
            
            <CardContent className="flex justify-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-signal"></div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-mist px-4">
        <div className="w-full max-w-md">
          <Card variant="elevated">
            <CardHeader>
              <CardTitle>E-Mail verifiziert</CardTitle>
              <CardDescription>Dein Account wurde erfolgreich aktiviert</CardDescription>
            </CardHeader>
            
            <CardContent>
              <Small className="block mb-4">
                Vielen Dank! Deine E-Mail-Adresse wurde bestätigt. Du kannst dich jetzt anmelden und loslegen.
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

  // Error state (fallback)
  return (
    <div className="min-h-screen flex items-center justify-center bg-mist px-4">
      <div className="w-full max-w-md">
        <Card variant="elevated">
          <CardHeader>
            <CardTitle>Verifizierung fehlgeschlagen</CardTitle>
            <CardDescription>Der Link ist ungültig oder abgelaufen</CardDescription>
          </CardHeader>
          
          <CardContent>
            <Small className="block mb-4">
              Bitte überprüfe den Link in deiner E-Mail oder fordere einen neuen Verifizierungs-Link an.
            </Small>
          </CardContent>

          <CardFooter className="flex gap-2">
            <Link href="/login" className="flex-1">
              <Button variant="secondary" className="w-full">
                Zum Login
              </Button>
            </Link>
            <Link href="/register" className="flex-1">
              <Button variant="primary" className="w-full">
                Neu registrieren
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
