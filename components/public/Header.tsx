'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from '@/components/shared/Button';
import { useLanguage } from '@/lib/context/LanguageContext';

// Icons
const ChevronDown = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);

const MenuIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

const CloseIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const ArrowRight = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

// Product Icons
const EngineIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
  </svg>
);

const DistributionIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
  </svg>
);

const SignalsIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
);

const AutomationIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12" />
  </svg>
);

const ExplainIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
  </svg>
);

const ReportIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>
);

const ApiIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
  </svg>
);

const CreatorIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
);

const CompanyIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
  </svg>
);

const EnterpriseIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
  </svg>
);

const AgencyIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
);

const BookIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
  </svg>
);

type MenuType = 'product' | 'useCases' | 'resources' | null;

export default function Header() {
  const { t, language, setLanguage } = useLanguage();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MenuType>(null);
  const [mobileExpanded, setMobileExpanded] = useState<MenuType>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveMenu(null);
  }, [pathname]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleMenuEnter = (menuType: MenuType) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menuType);
  };

  const handleMenuLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 150);
  };

  // Type assertion for menu access since it's merged from publicTranslations
  type NavWithMenu = typeof t.nav & {
    menu?: {
      product: any;
      useCases: any;
      industries: any;
      resources: any;
      trust: any;
    };
  };

  // Safe access to menu with fallback
  const navWithMenu = t.nav as NavWithMenu;
  const menu = navWithMenu.menu || {
    product: { title: 'Product', core: { label: 'Core', items: {} }, advanced: { label: 'Advanced', items: {} } },
    useCases: { title: 'Use Cases', items: {} },
    industries: { title: 'Industries', items: {} },
    resources: { title: 'Resources', learn: { label: 'Learn', items: {} }, company: { label: 'Company', items: {} } },
    trust: { title: 'Trust', items: {} },
  };

  // If menu is not yet loaded, show simple navigation
  if (!navWithMenu.menu) {
    return (
      <header className="sticky-header border-b border-border/50 safe-area-top bg-canvas/95 backdrop-blur-md z-50">
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between safe-area-x">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-signal-bg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
              </svg>
            </div>
            <span className="text-base font-semibold tracking-tight text-ink">Visibility Engine</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/features" className="text-sm text-slate hover:text-ink">{t.nav.features}</Link>
            <Link href="/pricing" className="text-sm text-slate hover:text-ink">{t.nav.pricing}</Link>
            <Link href="/login"><Button variant="primary" size="sm">{t.nav.login}</Button></Link>
          </div>
        </nav>
      </header>
    );
  }

  return (
    <>
      <header className="sticky-header border-b border-border/50 safe-area-top bg-canvas/95 backdrop-blur-md z-50">
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between safe-area-x" ref={menuRef}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-signal-bg flex items-center justify-center transition-transform duration-slow group-hover:scale-105">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
              </svg>
            </div>
            <span className="text-base font-semibold tracking-tight text-ink group-hover:text-signal transition-colors duration-slow">
              Visibility Engine
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Product Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMenuEnter('product')}
              onMouseLeave={handleMenuLeave}
            >
              <button className={`px-3 py-2.5 min-h-[44px] flex items-center gap-1 text-sm rounded-md transition-all duration-fast ${activeMenu === 'product' ? 'text-ink bg-mist' : 'text-slate hover:text-ink hover:bg-mist'}`}>
                {menu.product.title}
                <ChevronDown className={`w-4 h-4 transition-transform duration-fast ${activeMenu === 'product' ? 'rotate-180' : ''}`} />
              </button>

              {/* Product Mega Menu */}
              {activeMenu === 'product' && (
                <div className="absolute top-full left-0 pt-2 z-50">
                  <div className="bg-canvas rounded-xl shadow-xl border border-border p-6 min-w-[520px] animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="grid grid-cols-2 gap-8">
                      {/* Core Platform */}
                      <div>
                        <div className="text-xs font-semibold text-slate uppercase tracking-wide mb-3">{menu.product.core.label}</div>
                        <div className="space-y-1">
                          <Link href="/product/visibility-engine" className="flex items-start gap-3 p-2 rounded-lg hover:bg-surface-1 transition-colors group">
                            <div className="p-2 bg-signal-muted rounded-lg text-signal group-hover:bg-signal group-hover:text-white transition-colors">
                              <EngineIcon />
                            </div>
                            <div>
                              <div className="font-medium text-ink">{menu.product.core.items.visibilityEngine.title}</div>
                              <div className="text-sm text-slate">{menu.product.core.items.visibilityEngine.desc}</div>
                            </div>
                          </Link>
                          <Link href="/product/distribution" className="flex items-start gap-3 p-2 rounded-lg hover:bg-surface-1 transition-colors group">
                            <div className="p-2 bg-signal-muted rounded-lg text-signal group-hover:bg-signal group-hover:text-white transition-colors">
                              <DistributionIcon />
                            </div>
                            <div>
                              <div className="font-medium text-ink">{menu.product.core.items.distribution.title}</div>
                              <div className="text-sm text-slate">{menu.product.core.items.distribution.desc}</div>
                            </div>
                          </Link>
                          <Link href="/product/signals-insights" className="flex items-start gap-3 p-2 rounded-lg hover:bg-surface-1 transition-colors group">
                            <div className="p-2 bg-signal-muted rounded-lg text-signal group-hover:bg-signal group-hover:text-white transition-colors">
                              <SignalsIcon />
                            </div>
                            <div>
                              <div className="font-medium text-ink">{menu.product.core.items.signals.title}</div>
                              <div className="text-sm text-slate">{menu.product.core.items.signals.desc}</div>
                            </div>
                          </Link>
                          <Link href="/product/automation" className="flex items-start gap-3 p-2 rounded-lg hover:bg-surface-1 transition-colors group">
                            <div className="p-2 bg-signal-muted rounded-lg text-signal group-hover:bg-signal group-hover:text-white transition-colors">
                              <AutomationIcon />
                            </div>
                            <div>
                              <div className="font-medium text-ink">{menu.product.core.items.automation.title}</div>
                              <div className="text-sm text-slate">{menu.product.core.items.automation.desc}</div>
                            </div>
                          </Link>
                        </div>
                      </div>
                      {/* Advanced */}
                      <div>
                        <div className="text-xs font-semibold text-slate uppercase tracking-wide mb-3">{menu.product.advanced.label}</div>
                        <div className="space-y-1">
                          <Link href="/product/explainability" className="flex items-start gap-3 p-2 rounded-lg hover:bg-surface-1 transition-colors group">
                            <div className="p-2 bg-signal-muted rounded-lg text-signal group-hover:bg-signal group-hover:text-white transition-colors">
                              <ExplainIcon />
                            </div>
                            <div>
                              <div className="font-medium text-ink">{menu.product.advanced.items.explainability.title}</div>
                              <div className="text-sm text-slate">{menu.product.advanced.items.explainability.desc}</div>
                            </div>
                          </Link>
                          <Link href="/product/reporting" className="flex items-start gap-3 p-2 rounded-lg hover:bg-surface-1 transition-colors group">
                            <div className="p-2 bg-signal-muted rounded-lg text-signal group-hover:bg-signal group-hover:text-white transition-colors">
                              <ReportIcon />
                            </div>
                            <div>
                              <div className="font-medium text-ink">{menu.product.advanced.items.reporting.title}</div>
                              <div className="text-sm text-slate">{menu.product.advanced.items.reporting.desc}</div>
                            </div>
                          </Link>
                          <Link href="/product/api" className="flex items-start gap-3 p-2 rounded-lg hover:bg-surface-1 transition-colors group">
                            <div className="p-2 bg-signal-muted rounded-lg text-signal group-hover:bg-signal group-hover:text-white transition-colors">
                              <ApiIcon />
                            </div>
                            <div>
                              <div className="font-medium text-ink">{menu.product.advanced.items.api.title}</div>
                              <div className="text-sm text-slate">{menu.product.advanced.items.api.desc}</div>
                            </div>
                          </Link>
                        </div>
                        {/* CTA */}
                        <div className="mt-6 pt-4 border-t border-border">
                          <Link href="/features" className="flex items-center gap-2 text-sm font-medium text-signal hover:text-signal-hover transition-colors">
                            {t.nav.features}
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Use Cases Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMenuEnter('useCases')}
              onMouseLeave={handleMenuLeave}
            >
              <button className={`px-3 py-2.5 min-h-[44px] flex items-center gap-1 text-sm rounded-md transition-all duration-fast ${activeMenu === 'useCases' ? 'text-ink bg-mist' : 'text-slate hover:text-ink hover:bg-mist'}`}>
                {menu.useCases.title}
                <ChevronDown className={`w-4 h-4 transition-transform duration-fast ${activeMenu === 'useCases' ? 'rotate-180' : ''}`} />
              </button>

              {/* Use Cases Mega Menu */}
              {activeMenu === 'useCases' && (
                <div className="absolute top-full left-0 pt-2 z-50">
                  <div className="bg-canvas rounded-xl shadow-xl border border-border p-6 min-w-[520px] animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="grid grid-cols-2 gap-8">
                      {/* Use Cases */}
                      <div>
                        <div className="text-xs font-semibold text-slate uppercase tracking-wide mb-3">{menu.useCases.title}</div>
                        <div className="space-y-1">
                          <Link href="/use-cases/creators" className="flex items-start gap-3 p-2 rounded-lg hover:bg-surface-1 transition-colors group">
                            <div className="p-2 bg-signal-muted rounded-lg text-signal group-hover:bg-signal group-hover:text-white transition-colors">
                              <CreatorIcon />
                            </div>
                            <div>
                              <div className="font-medium text-ink">{menu.useCases.items.creators.title}</div>
                              <div className="text-sm text-slate">{menu.useCases.items.creators.desc}</div>
                            </div>
                          </Link>
                          <Link href="/use-cases/companies" className="flex items-start gap-3 p-2 rounded-lg hover:bg-surface-1 transition-colors group">
                            <div className="p-2 bg-signal-muted rounded-lg text-signal group-hover:bg-signal group-hover:text-white transition-colors">
                              <CompanyIcon />
                            </div>
                            <div>
                              <div className="font-medium text-ink">{menu.useCases.items.companies.title}</div>
                              <div className="text-sm text-slate">{menu.useCases.items.companies.desc}</div>
                            </div>
                          </Link>
                          <Link href="/use-cases/enterprise" className="flex items-start gap-3 p-2 rounded-lg hover:bg-surface-1 transition-colors group">
                            <div className="p-2 bg-signal-muted rounded-lg text-signal group-hover:bg-signal group-hover:text-white transition-colors">
                              <EnterpriseIcon />
                            </div>
                            <div>
                              <div className="font-medium text-ink">{menu.useCases.items.enterprise.title}</div>
                              <div className="text-sm text-slate">{menu.useCases.items.enterprise.desc}</div>
                            </div>
                          </Link>
                          <Link href="/use-cases/agencies" className="flex items-start gap-3 p-2 rounded-lg hover:bg-surface-1 transition-colors group">
                            <div className="p-2 bg-signal-muted rounded-lg text-signal group-hover:bg-signal group-hover:text-white transition-colors">
                              <AgencyIcon />
                            </div>
                            <div>
                              <div className="font-medium text-ink">{menu.useCases.items.agencies.title}</div>
                              <div className="text-sm text-slate">{menu.useCases.items.agencies.desc}</div>
                            </div>
                          </Link>
                        </div>
                      </div>
                      {/* Industries */}
                      <div>
                        <div className="text-xs font-semibold text-slate uppercase tracking-wide mb-3">{menu.industries.title}</div>
                        <div className="space-y-1">
                          {(['marketing', 'saas', 'ecommerce', 'finance', 'media'] as const).map((key) => (
                            <Link key={key} href={`/industries/${key}`} className="block p-2 rounded-lg hover:bg-surface-1 transition-colors">
                              <div className="font-medium text-ink">{menu.industries.items[key].title}</div>
                              <div className="text-sm text-slate">{menu.industries.items[key].desc}</div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMenuEnter('resources')}
              onMouseLeave={handleMenuLeave}
            >
              <button className={`px-3 py-2.5 min-h-[44px] flex items-center gap-1 text-sm rounded-md transition-all duration-fast ${activeMenu === 'resources' ? 'text-ink bg-mist' : 'text-slate hover:text-ink hover:bg-mist'}`}>
                {menu.resources.title}
                <ChevronDown className={`w-4 h-4 transition-transform duration-fast ${activeMenu === 'resources' ? 'rotate-180' : ''}`} />
              </button>

              {/* Resources Mega Menu */}
              {activeMenu === 'resources' && (
                <div className="absolute top-full left-0 pt-2 z-50">
                  <div className="bg-canvas rounded-xl shadow-xl border border-border p-6 min-w-[520px] animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="grid grid-cols-2 gap-8">
                      {/* Learn */}
                      <div>
                        <div className="text-xs font-semibold text-slate uppercase tracking-wide mb-3">{menu.resources.learn.label}</div>
                        <div className="space-y-1">
                          <Link href="/blog" className="flex items-start gap-3 p-2 rounded-lg hover:bg-surface-1 transition-colors group">
                            <div className="p-2 bg-signal-muted rounded-lg text-signal group-hover:bg-signal group-hover:text-white transition-colors">
                              <BookIcon />
                            </div>
                            <div>
                              <div className="font-medium text-ink">{menu.resources.learn.items.blog.title}</div>
                              <div className="text-sm text-slate">{menu.resources.learn.items.blog.desc}</div>
                            </div>
                          </Link>
                          <Link href="/resources/guides" className="flex items-start gap-3 p-2 rounded-lg hover:bg-surface-1 transition-colors group">
                            <div className="p-2 bg-signal-muted rounded-lg text-signal group-hover:bg-signal group-hover:text-white transition-colors">
                              <BookIcon />
                            </div>
                            <div>
                              <div className="font-medium text-ink">{menu.resources.learn.items.guides.title}</div>
                              <div className="text-sm text-slate">{menu.resources.learn.items.guides.desc}</div>
                            </div>
                          </Link>
                          <Link href="/resources/automation-playbooks" className="flex items-start gap-3 p-2 rounded-lg hover:bg-surface-1 transition-colors group">
                            <div className="p-2 bg-signal-muted rounded-lg text-signal group-hover:bg-signal group-hover:text-white transition-colors">
                              <AutomationIcon />
                            </div>
                            <div>
                              <div className="font-medium text-ink">{menu.resources.learn.items.playbooks.title}</div>
                              <div className="text-sm text-slate">{menu.resources.learn.items.playbooks.desc}</div>
                            </div>
                          </Link>
                        </div>
                      </div>
                      {/* Company & Trust */}
                      <div>
                        <div className="text-xs font-semibold text-slate uppercase tracking-wide mb-3">{menu.resources.company.label}</div>
                        <div className="space-y-1">
                          <Link href="/about" className="block p-2 rounded-lg hover:bg-surface-1 transition-colors">
                            <div className="font-medium text-ink">{menu.resources.company.items.about.title}</div>
                            <div className="text-sm text-slate">{menu.resources.company.items.about.desc}</div>
                          </Link>
                          <Link href="/resources/changelog" className="block p-2 rounded-lg hover:bg-surface-1 transition-colors">
                            <div className="font-medium text-ink">{menu.resources.company.items.changelog.title}</div>
                            <div className="text-sm text-slate">{menu.resources.company.items.changelog.desc}</div>
                          </Link>
                        </div>
                        <div className="text-xs font-semibold text-slate uppercase tracking-wide mb-3 mt-6">{menu.trust.title}</div>
                        <div className="space-y-1">
                          <Link href="/trust/security" className="flex items-start gap-3 p-2 rounded-lg hover:bg-surface-1 transition-colors group">
                            <div className="p-2 bg-signal-muted rounded-lg text-signal group-hover:bg-signal group-hover:text-white transition-colors">
                              <ShieldIcon />
                            </div>
                            <div>
                              <div className="font-medium text-ink">{menu.trust.items.security.title}</div>
                              <div className="text-sm text-slate">{menu.trust.items.security.desc}</div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Direct Links */}
            <Link href="/pricing" className="px-3 py-2.5 min-h-[44px] flex items-center text-sm text-slate rounded-md transition-all duration-fast hover:text-ink hover:bg-mist">
              {t.nav.pricing}
            </Link>
          </div>

          {/* Right: Language Switcher + Login + Mobile Menu */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div className="hidden sm:flex items-center gap-1 bg-surface-1 rounded-lg p-0.5 border border-border/50">
              <div className="pl-2 text-slate">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              </div>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1.5 text-sm font-medium rounded-md transition-all duration-fast ${
                  language === 'en' ? 'bg-canvas text-ink shadow-xs' : 'text-slate hover:text-ink'
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('de')}
                className={`px-2 py-1.5 text-sm font-medium rounded-md transition-all duration-fast ${
                  language === 'de' ? 'bg-canvas text-ink shadow-xs' : 'text-slate hover:text-ink'
                }`}
                aria-label="Auf Deutsch wechseln"
              >
                DE
              </button>
            </div>

            {/* Login Button - Desktop */}
            <Link href="/login" className="hidden sm:block">
              <Button variant="primary" size="sm">{t.nav.login}</Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 -mr-2 text-slate hover:text-ink transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-ink/20 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-canvas shadow-2xl animate-in slide-in-from-right duration-300 flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-6 h-16 border-b border-border">
              <span className="font-semibold text-ink">Menu</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 -mr-2 text-slate hover:text-ink transition-colors"
                aria-label="Close menu"
              >
                <CloseIcon className="w-6 h-6" />
              </button>
            </div>

            {/* Menu Content */}
            <div className="flex-1 overflow-y-auto py-4">
              {/* Product Section */}
              <div className="px-6">
                <button
                  onClick={() => setMobileExpanded(mobileExpanded === 'product' ? null : 'product')}
                  className="flex items-center justify-between w-full py-3 text-left font-medium text-ink"
                >
                  {menu.product.title}
                  <ChevronDown className={`w-5 h-5 text-slate transition-transform ${mobileExpanded === 'product' ? 'rotate-180' : ''}`} />
                </button>
                {mobileExpanded === 'product' && (
                  <div className="pl-4 pb-3 space-y-2">
                    <Link href="/product/visibility-engine" className="block py-2 text-slate hover:text-ink transition-colors">
                      {menu.product.core.items.visibilityEngine.title}
                    </Link>
                    <Link href="/product/distribution" className="block py-2 text-slate hover:text-ink transition-colors">
                      {menu.product.core.items.distribution.title}
                    </Link>
                    <Link href="/product/signals-insights" className="block py-2 text-slate hover:text-ink transition-colors">
                      {menu.product.core.items.signals.title}
                    </Link>
                    <Link href="/product/automation" className="block py-2 text-slate hover:text-ink transition-colors">
                      {menu.product.core.items.automation.title}
                    </Link>
                    <Link href="/product/explainability" className="block py-2 text-slate hover:text-ink transition-colors">
                      {menu.product.advanced.items.explainability.title}
                    </Link>
                    <Link href="/product/reporting" className="block py-2 text-slate hover:text-ink transition-colors">
                      {menu.product.advanced.items.reporting.title}
                    </Link>
                    <Link href="/product/api" className="block py-2 text-slate hover:text-ink transition-colors">
                      {menu.product.advanced.items.api.title}
                    </Link>
                  </div>
                )}
              </div>

              {/* Use Cases Section */}
              <div className="px-6 border-t border-border/50">
                <button
                  onClick={() => setMobileExpanded(mobileExpanded === 'useCases' ? null : 'useCases')}
                  className="flex items-center justify-between w-full py-3 text-left font-medium text-ink"
                >
                  {menu.useCases.title}
                  <ChevronDown className={`w-5 h-5 text-slate transition-transform ${mobileExpanded === 'useCases' ? 'rotate-180' : ''}`} />
                </button>
                {mobileExpanded === 'useCases' && (
                  <div className="pl-4 pb-3 space-y-2">
                    <Link href="/use-cases/creators" className="block py-2 text-slate hover:text-ink transition-colors">
                      {menu.useCases.items.creators.title}
                    </Link>
                    <Link href="/use-cases/companies" className="block py-2 text-slate hover:text-ink transition-colors">
                      {menu.useCases.items.companies.title}
                    </Link>
                    <Link href="/use-cases/enterprise" className="block py-2 text-slate hover:text-ink transition-colors">
                      {menu.useCases.items.enterprise.title}
                    </Link>
                    <Link href="/use-cases/agencies" className="block py-2 text-slate hover:text-ink transition-colors">
                      {menu.useCases.items.agencies.title}
                    </Link>
                    <div className="pt-2 mt-2 border-t border-border/50 text-xs font-semibold text-slate uppercase">{menu.industries.title}</div>
                    <Link href="/industries/marketing" className="block py-2 text-slate hover:text-ink transition-colors">
                      {menu.industries.items.marketing.title}
                    </Link>
                    <Link href="/industries/saas" className="block py-2 text-slate hover:text-ink transition-colors">
                      {menu.industries.items.saas.title}
                    </Link>
                    <Link href="/industries/ecommerce" className="block py-2 text-slate hover:text-ink transition-colors">
                      {menu.industries.items.ecommerce.title}
                    </Link>
                    <Link href="/industries/finance" className="block py-2 text-slate hover:text-ink transition-colors">
                      {menu.industries.items.finance.title}
                    </Link>
                    <Link href="/industries/media" className="block py-2 text-slate hover:text-ink transition-colors">
                      {menu.industries.items.media.title}
                    </Link>
                  </div>
                )}
              </div>

              {/* Resources Section */}
              <div className="px-6 border-t border-border/50">
                <button
                  onClick={() => setMobileExpanded(mobileExpanded === 'resources' ? null : 'resources')}
                  className="flex items-center justify-between w-full py-3 text-left font-medium text-ink"
                >
                  {menu.resources.title}
                  <ChevronDown className={`w-5 h-5 text-slate transition-transform ${mobileExpanded === 'resources' ? 'rotate-180' : ''}`} />
                </button>
                {mobileExpanded === 'resources' && (
                  <div className="pl-4 pb-3 space-y-2">
                    <Link href="/blog" className="block py-2 text-slate hover:text-ink transition-colors">
                      {menu.resources.learn.items.blog.title}
                    </Link>
                    <Link href="/resources/guides" className="block py-2 text-slate hover:text-ink transition-colors">
                      {menu.resources.learn.items.guides.title}
                    </Link>
                    <Link href="/resources/automation-playbooks" className="block py-2 text-slate hover:text-ink transition-colors">
                      {menu.resources.learn.items.playbooks.title}
                    </Link>
                    <Link href="/about" className="block py-2 text-slate hover:text-ink transition-colors">
                      {menu.resources.company.items.about.title}
                    </Link>
                    <Link href="/resources/changelog" className="block py-2 text-slate hover:text-ink transition-colors">
                      {menu.resources.company.items.changelog.title}
                    </Link>
                    <div className="pt-2 mt-2 border-t border-border/50 text-xs font-semibold text-slate uppercase">{menu.trust.title}</div>
                    <Link href="/trust/security" className="block py-2 text-slate hover:text-ink transition-colors">
                      {menu.trust.items.security.title}
                    </Link>
                    <Link href="/trust/privacy" className="block py-2 text-slate hover:text-ink transition-colors">
                      {menu.trust.items.privacy.title}
                    </Link>
                  </div>
                )}
              </div>

              {/* Direct Links */}
              <div className="px-6 border-t border-border/50">
                <Link href="/pricing" className="block py-3 font-medium text-ink">
                  {t.nav.pricing}
                </Link>
                <Link href="/features" className="block py-3 font-medium text-ink">
                  {t.nav.features}
                </Link>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-border bg-surface-1">
              {/* Language Switcher */}
              <div className="flex items-center justify-center gap-2 mb-4">
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                    language === 'en' ? 'bg-signal-bg text-white' : 'bg-canvas text-slate border border-border'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => setLanguage('de')}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                    language === 'de' ? 'bg-signal-bg text-white' : 'bg-canvas text-slate border border-border'
                  }`}
                >
                  Deutsch
                </button>
              </div>
              <Link href="/login" className="block">
                <Button variant="primary" size="lg" className="w-full">{t.nav.login}</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
