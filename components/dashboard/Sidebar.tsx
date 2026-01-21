'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useDashboard } from '@/lib/context/DashboardContext';

interface NavItem {
  href: string;
  label: string;
  comingSoon?: boolean;
  badge?: 'new' | 'beta';
}

interface NavSection {
  title: string;
  items: NavItem[];
  roadmap?: boolean;
}

interface SidebarProps {
  onClose?: () => void;
}

export default function Sidebar({ onClose }: SidebarProps) {
  const pathname = usePathname();
  const { t } = useDashboard();

  // Active feature sections - fully functional
  const activeFeatures: NavSection[] = [
    {
      title: t.sections.core,
      items: [
        { href: '/dashboard', label: t.nav.overview },
        { href: '/dashboard/analytics', label: t.nav.analytics },
        { href: '/dashboard/settings/billing', label: t.nav.billing },
        { href: '/dashboard/settings', label: t.nav.settings },
      ],
    },
    {
      title: t.sections.visibilityEngine,
      items: [
        { href: '/dashboard/signals', label: t.nav.signals },
        { href: '/dashboard/distribution', label: t.nav.distribution },
        { href: '/dashboard/flow', label: t.nav.flow },
      ],
    },
    {
      title: t.sections.logic,
      items: [
        { href: '/dashboard/rules', label: t.nav.rules },
        { href: '/dashboard/actions', label: t.nav.actions },
      ],
    },
    {
      title: t.sections.automation,
      items: [
        { href: '/dashboard/automation', label: t.nav.automation },
        { href: '/dashboard/automation/settings', label: t.nav.autoModeSettings },
        { href: '/dashboard/executions', label: t.nav.executions },
      ],
    },
    {
      title: t.sections.contentMedia,
      items: [
        { href: '/dashboard/content', label: t.nav.contentHub },
        { href: '/dashboard/social', label: t.nav.socialDistribution },
        { href: '/dashboard/reports', label: t.nav.reports },
      ],
    },
  ];

  // Roadmap sections - planned features, clearly marked
  const roadmapFeatures: NavSection[] = [
    {
      title: t.sections.contentMedia,
      roadmap: true,
      items: [
        { href: '/dashboard/video', label: t.nav.videoModule, comingSoon: true },
        { href: '/dashboard/images', label: t.nav.imageModule, comingSoon: true },
        { href: '/dashboard/editor', label: t.nav.editor, comingSoon: true },
        { href: '/dashboard/campaigns', label: t.nav.campaigns, comingSoon: true },
        { href: '/dashboard/schedules', label: t.nav.schedules, comingSoon: true },
      ],
    },
    {
      title: t.sections.ai,
      roadmap: true,
      items: [
        { href: '/dashboard/agents', label: t.nav.agents, comingSoon: true },
        { href: '/dashboard/agents/sessions', label: t.nav.agentSessions, comingSoon: true },
        { href: '/dashboard/agents/results', label: t.nav.agentResults, comingSoon: true },
      ],
    },
    {
      title: t.sections.communication,
      roadmap: true,
      items: [
        { href: '/dashboard/chat', label: t.nav.chat, comingSoon: true },
        { href: '/dashboard/notifications', label: t.nav.notifications, comingSoon: true },
      ],
    },
  ];

  const renderNavItem = (item: NavItem, isActive: boolean) => (
    <Link
      key={item.href}
      href={item.href}
      onClick={onClose}
      className={`
        flex items-center justify-between px-3 py-2.5 min-h-[44px] rounded-lg text-[13px] font-medium
        transition-all duration-fast ease-out-expo tap-highlight
        ${isActive 
          ? 'bg-signal-bg text-white shadow-sm' 
          : item.comingSoon 
            ? 'text-slate/50 hover:text-slate hover:bg-surface-1 active:bg-surface-1 focus-visible:bg-surface-1'
            : 'text-ink/80 hover:text-ink hover:bg-surface-1 active:text-ink active:bg-surface-1 focus-visible:text-ink focus-visible:bg-surface-1'
        }
      `}
    >
      <span>{item.label}</span>
      {item.badge && (
        <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-md ${
          item.badge === 'new' 
            ? 'bg-success-muted text-success' 
            : 'bg-signal-muted text-signal'
        }`}>
          {item.badge.toUpperCase()}
        </span>
      )}
    </Link>
  );

  return (
    <>
      {/* Mobile Header mit Close Button - nur wenn onClose vorhanden */}
      {onClose && (
        <div className="flex items-center justify-between h-14 px-4 border-b border-border shrink-0 bg-canvas">
          <a href="/dashboard" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-signal flex items-center justify-center">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
              </svg>
            </div>
            <span className="text-base font-semibold text-ink">
              {t.sidebar?.appName || 'Visibility Engine'}
            </span>
          </a>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate hover:text-ink hover:bg-surface-1 active:bg-surface-2 transition-colors touch-target"
            title={t.sidebar?.closeMenu || 'Close menu'}
            aria-label={t.sidebar?.closeMenu || 'Close menu'}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
      
      {/* Navigation Content */}
      <div className={onClose ? "flex-1 overflow-y-auto" : ""}>
        <div className="py-5">
          <div className="px-4 space-y-6">
            {activeFeatures.map((section, idx) => (
              <div key={idx}>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate/60 px-3 mb-2 block">
                  {section.title}
                </span>
                <nav className="space-y-0.5">
                  {section.items.map((item) => renderNavItem(item, pathname === item.href))}
                </nav>
              </div>
            ))}
          </div>

          {/* Separator */}
          <div className="my-6 mx-4 border-t border-border/50" />

          {/* Roadmap Section */}
          <div className="px-4">
            <div className="flex items-center gap-2 px-3 mb-4">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate/40">
                {t.sections.roadmap}
              </span>
              <span className="text-[10px] text-slate/30 font-normal normal-case">
                {t.sections.planned}
              </span>
            </div>
            <div className="space-y-5">
              {roadmapFeatures.map((section, idx) => (
                <div key={idx}>
                  <span className="text-[10px] font-medium text-slate/30 px-3 mb-1.5 block">
                    {section.title}
                  </span>
                  <nav className="space-y-0.5">
                    {section.items.map((item) => renderNavItem(item, pathname === item.href))}
                  </nav>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
