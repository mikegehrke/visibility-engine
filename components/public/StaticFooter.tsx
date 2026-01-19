import Link from 'next/link';
import { publicTranslations } from '@/lib/i18n/public-translations';

type Lang = 'en' | 'de';

interface StaticFooterProps {
  lang: Lang;
}

export default function StaticFooter({ lang }: StaticFooterProps) {
  // Get translations statically from publicTranslations
  const t = publicTranslations[lang];
  
  // Helper to prefix links with lang
  const l = (path: string) => `/${lang}${path}`;
  
  const footerLinks = [
    {
      title: t.footer.product,
      links: [
        { href: l('/features'), label: t.footer.features },
        { href: l('/pricing'), label: t.footer.pricing },
      ],
    },
    {
      title: t.footer.company,
      links: [
        { href: l('/about'), label: t.footer.about },
        { href: l('/blog'), label: t.footer.blog },
      ],
    },
    {
      title: t.footer.legal,
      links: [
        { href: l('/legal/privacy'), label: t.footer.privacy },
        { href: l('/legal/terms'), label: t.footer.terms },
        { href: l('/legal/imprint'), label: t.footer.imprint },
      ],
    },
  ];

  return (
    <footer className="border-t border-border mt-auto bg-surface-1">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link href={l('/')} className="text-lg font-semibold text-ink">
              Visibility Engine
            </Link>
            <p className="mt-3 text-sm text-slate leading-relaxed">
              The professional content visibility platform.
            </p>
          </div>
          
          {/* Link columns */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className="text-sm text-slate transition-colors duration-fast hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate">
            {t.footer.copyright}
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-slate/60">
              Built with precision.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
