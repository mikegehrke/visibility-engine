import Link from 'next/link';
import Button from '@/components/shared/Button';
import { publicTranslations } from '@/lib/i18n/public-translations';

const t = publicTranslations.en;

export default function Header() {
  return (
    <header className="sticky-header border-b border-border/50 safe-area-top">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between safe-area-x">
        {/* Logo */}
        <Link 
          href="/" 
          className="text-lg font-semibold tracking-tight text-ink transition-opacity duration-fast hover:opacity-70"
        >
          Visibility Engine
        </Link>
        
        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-1">
          {[
            { href: '/features', label: t.nav.features },
            { href: '/pricing', label: t.nav.pricing },
            { href: '/about', label: t.nav.about },
            { href: '/blog', label: t.nav.blog },
          ].map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className="px-3 py-2.5 min-h-[44px] flex items-center text-sm text-slate rounded-md transition-all duration-fast hover:text-ink hover:bg-mist active:bg-mist active:text-ink focus-visible:bg-mist focus-visible:text-ink tap-highlight"
            >
              {link.label}
            </Link>
          ))}
        </div>
        
        {/* CTA */}
        <div className="flex items-center gap-3">
          <Link href="/login">
            <Button variant="primary" size="sm">{t.nav.login}</Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
