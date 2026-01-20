import { redirect } from 'next/navigation';

// Redirect root to /en (default language)
export default function RootPage() {
  redirect('/en');
}
