'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useDashboard } from '@/lib/context/DashboardContext';
import { Small } from '@/components/shared/Typography';

interface NavItem {
  href: string;
  label: string;
  comingSoon?: boolean;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

export default function Sidebar() {
  const pathname = usePathname();
  const { t } = useDashboard();

  const navSections: NavSection[] = [
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
      title: t.sections.contentMedia,
      items: [
        { href: '/dashboard/content', label: t.nav.contentHub },
        { href: '/dashboard/video', label: t.nav.videoModule, comingSoon: true },
        { href: '/dashboard/images', label: t.nav.imageModule, comingSoon: true },
        { href: '/dashboard/editor', label: t.nav.editor, comingSoon: true },
      ],
    },
    {
      title: t.sections.automation,
      items: [
        { href: '/dashboard/campaigns', label: t.nav.campaigns, comingSoon: true },
        { href: '/dashboard/social', label: t.nav.socialDistribution },
        { href: '/dashboard/schedules', label: t.nav.schedules, comingSoon: true },
      ],
    },
    {
      title: t.sections.communication,
      items: [
        { href: '/dashboard/chat', label: t.nav.chat, comingSoon: true },
        { href: '/dashboard/notifications', label: t.nav.notifications, comingSoon: true },
      ],
    },
    {
      title: t.sections.ai,
      items: [
        { href: '/dashboard/agents', label: t.nav.agents, comingSoon: true },
        { href: '/dashboard/agents/sessions', label: t.nav.agentSessions, comingSoon: true },
        { href: '/dashboard/agents/results', label: t.nav.agentResults, comingSoon: true },
        { href: '/dashboard/agents/history', label: t.nav.agentHistory, comingSoon: true },
      ],
    },
    {
      title: t.sections.visibilityEngine,
      items: [
        { href: '/dashboard/distribution', label: t.nav.distribution },
        { href: '/dashboard/signals', label: t.nav.signals },
        { href: '/dashboard/flow', label: t.nav.flow },
      ],
    },
    {
      title: t.sections.logic,
      items: [
        { href: '/dashboard/rules', label: t.nav.rules },
        { href: '/dashboard/actions', label: t.nav.actions },
        { href: '/dashboard/automation', label: t.nav.automation },
      ],
    },
  ];

  return (
    <aside className="w-64 h-screen border-r border-border bg-canvas flex flex-col">
      {/* Sidebar Content - Scrollable */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {navSections.map((section, idx) => (
          <div key={idx}>
            <Small className="uppercase font-semibold text-slate mb-2 block">
              {section.title}
            </Small>
            <nav className="space-y-1">
              {section.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`
                      flex items-center justify-between px-3 py-2 rounded-sm text-sm transition-all
                      ${isActive 
                        ? 'bg-signal text-white font-medium' 
                        : 'text-ink hover:bg-mist'
                      }
                      ${item.comingSoon ? 'opacity-60' : ''}
                    `}
                  >
                    <span>{item.label}</span>
                    {item.comingSoon && (
                      <span className="text-xs opacity-75">
                        {t.common.comingSoon}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>
        ))}
      </div>
    </aside>
  );
}
