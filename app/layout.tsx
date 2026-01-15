import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/lib/context/LanguageContext';

export const metadata: Metadata = {
  title: 'Visibility Engine',
  description: 'Automatische Sichtbarkeit für Creator & Unternehmen',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
