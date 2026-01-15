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
  roadmap?: boolean; // Marks sections as planned/coming
}

export default function Sidebar() {
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
      className={`
        flex items-center justify-between px-3 py-2 rounded-md text-sm transition-all duration-150
        ${isActive 
          ? 'bg-signal text-white font-medium' 
          : item.comingSoon 
            ? 'text-slate/60 hover:text-slate hover:bg-mist/50'
            : 'text-ink hover:bg-mist'
        }
      `}
    >
      <span>{item.label}</span>
      {item.badge && (
        <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${
          item.badge === 'new' ? 'bg-success/10 text-success' : 'bg-signal/10 text-signal'
        }`}>
          {item.badge.toUpperCase()}
        </span>
      )}
    </Link>
  );

  return (
    <aside className="w-64 h-screen border-r border-border bg-canvas flex flex-col">
      {/* Active Features */}
      <div className="flex-1 overflow-y-auto py-4">
        <div className="px-4 space-y-6">
          {activeFeatures.map((section, idx) => (
            <div key={idx}>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate/70 px-3 mb-2 block">
                {section.title}
              </span>
              <nav className="space-y-0.5">
                {section.items.map((item) => renderNavItem(item, pathname === item.href))}
              </nav>
            </div>
          ))}
        </div>

        {/* Separator */}
        <div className="my-6 mx-4 border-t border-border" />

        {/* Roadmap Section */}
        <div className="px-4">
          <div className="flex items-center gap-2 px-3 mb-3">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate/50">
              Roadmap
            </span>
            <span className="text-[10px] text-slate/40 font-normal normal-case">
              Planned features
            </span>
          </div>
          <div className="space-y-4">
            {roadmapFeatures.map((section, idx) => (
              <div key={idx}>
                <span className="text-[10px] font-medium text-slate/40 px-3 mb-1 block">
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
    </aside>
  );
}
