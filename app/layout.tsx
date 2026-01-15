import type { Metadata } from 'next';
import './globals.css';

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
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
