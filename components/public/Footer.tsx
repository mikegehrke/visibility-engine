import Link from 'next/link';
import { publicTranslations } from '@/lib/i18n/public-translations';

const t = publicTranslations.en;

export default function Footer() {
  return (
    <footer className="border-t border-mist mt-auto bg-canvas">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">{t.footer.product}</h3>
            <div className="flex flex-col gap-2">
              <Link href="/features" className="text-slate hover:text-ink transition-colors text-sm">{t.footer.features}</Link>
              <Link href="/pricing" className="text-slate hover:text-ink transition-colors text-sm">{t.footer.pricing}</Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">{t.footer.company}</h3>
            <div className="flex flex-col gap-2">
              <Link href="/about" className="text-slate hover:text-ink transition-colors text-sm">{t.footer.about}</Link>
              <Link href="/blog" className="text-slate hover:text-ink transition-colors text-sm">{t.footer.blog}</Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">{t.footer.legal}</h3>
            <div className="flex flex-col gap-2">
              <Link href="/privacy" className="text-slate hover:text-ink transition-colors text-sm">{t.footer.privacy}</Link>
              <Link href="/terms" className="text-slate hover:text-ink transition-colors text-sm">{t.footer.terms}</Link>
              <Link href="/imprint" className="text-slate hover:text-ink transition-colors text-sm">{t.footer.imprint}</Link>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-mist text-center text-slate text-sm">
          {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
