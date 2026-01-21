'use client';

import dynamic from 'next/dynamic';
import { DashboardProvider, useDashboard } from '@/lib/context/DashboardContext';
import { useState, useEffect, useCallback } from 'react';
import Sidebar from '@/components/dashboard/Sidebar';

const DashboardTopBar = dynamic(
  () => import('@/components/dashboard/DashboardTopBar'),
  { ssr: false }
);

/**
 * Dashboard Layout mit CSS Grid Architektur
 * 
 * Desktop: [Sidebar | Content] - Grid Layout
 * Mobile: Content + Drawer Overlay
 * 
 * Features:
 * - Sidebar scrollt unabhängig vom Content
 * - Sidebar ein/ausklappbar (persistiert in localStorage)
 * - Keine fixed positioning Hacks
 * - Hydration-safe
 */
function DashboardLayoutInner({ children }: { children: React.ReactNode }) {
  const { t } = useDashboard();
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Mount state & localStorage für Sidebar-Zustand
  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('sidebar-collapsed');
    if (saved === 'true') setSidebarCollapsed(true);
  }, []);

  // Sidebar-Zustand persistieren
  useEffect(() => {
    if (mounted) {
      localStorage.setItem('sidebar-collapsed', String(sidebarCollapsed));
    }
  }, [sidebarCollapsed, mounted]);

  // Mobile Drawer: Escape-Key & Body-Scroll-Lock
  useEffect(() => {
    if (!menuOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const openMenu = useCallback(() => setMenuOpen(true), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const toggleSidebar = useCallback(() => setSidebarCollapsed(c => !c), []);

  return (
    <>
      {/* 
        CSS Grid Layout für Desktop
        WICHTIG: h-screen + overflow-hidden auf Grid
        Sidebar und Main haben jeweils eigene Scroll-Container
      */}
      <div 
        className={`
          grid h-screen overflow-hidden transition-all duration-300 ease-out
          ${sidebarCollapsed 
            ? 'lg:grid-cols-[64px_1fr]' 
            : 'lg:grid-cols-[260px_1fr]'
          }
        `}
      >
        {/* ===== DESKTOP SIDEBAR ===== */}
        <aside 
          className="
            hidden lg:flex flex-col
            bg-canvas border-r border-border
            h-full overflow-hidden
          "
          aria-label={t.sidebar?.appName || 'Sidebar'}
        >
          {/* Sidebar Header mit Logo */}
          <div className="h-14 flex items-center px-3 border-b border-border shrink-0">
            <a 
              href="/dashboard" 
              className="flex items-center gap-2.5 group overflow-hidden"
            >
              <div className="w-8 h-8 rounded-lg bg-signal flex items-center justify-center shrink-0">
                <svg 
                  className="w-5 h-5 text-white" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth={2}
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" 
                  />
                </svg>
              </div>
              {!sidebarCollapsed && (
                <span className="text-base font-semibold text-ink whitespace-nowrap">
                  {t.sidebar?.appName || 'Visibility Engine'}
                </span>
              )}
            </a>
          </div>
          
          {/* Navigation - scrollt unabhängig */}
          {!sidebarCollapsed && (
            <div className="flex-1 overflow-y-auto overflow-x-hidden">
              <Sidebar />
            </div>
          )}
          
          {/* Collapsed state: nur Icons */}
          {sidebarCollapsed && (
            <div className="flex-1 flex flex-col items-center py-4 gap-2">
              {/* Placeholder für collapsed icons - kann später erweitert werden */}
            </div>
          )}
          
          {/* Collapse Toggle Button */}
          <div className="shrink-0 border-t border-border p-2">
            <button
              onClick={toggleSidebar}
              className={`
                w-full flex items-center gap-2 px-3 py-2
                text-sm text-slate hover:text-ink hover:bg-surface-1
                rounded-lg transition-colors
                ${sidebarCollapsed ? 'justify-center' : 'justify-start'}
              `}
              title={sidebarCollapsed 
                ? (t.sidebar?.expand || 'Expand') 
                : (t.sidebar?.collapse || 'Collapse')
              }
              aria-label={sidebarCollapsed 
                ? (t.sidebar?.expand || 'Expand') 
                : (t.sidebar?.collapse || 'Collapse')
              }
            >
              <svg 
                className={`w-4 h-4 transition-transform duration-300 ${sidebarCollapsed ? 'rotate-180' : ''}`}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M11 19l-7-7 7-7m8 14l-7-7 7-7" 
                />
              </svg>
              {!sidebarCollapsed && (
                <span>{t.sidebar?.collapse || 'Collapse'}</span>
              )}
            </button>
          </div>
        </aside>

        {/* ===== MAIN CONTENT AREA ===== */}
        <div className="flex flex-col h-full bg-smoke overflow-hidden">
          {/* Sticky TopBar - shrink-0 damit es nicht schrumpft */}
          <div className="shrink-0">
            <DashboardTopBar 
              onMenuClick={openMenu} 
              onToggleSidebar={toggleSidebar}
              sidebarCollapsed={sidebarCollapsed}
            />
          </div>
          
          {/* Main Content - EINZIGER Scroll-Container für Content */}
          <main className="flex-1 overflow-y-auto p-4 lg:p-6">
            <div className="max-w-7xl mx-auto">
              {children}
            </div>
          </main>
        </div>
      </div>

      {/* ===== MOBILE DRAWER ===== */}
      {mounted && menuOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-50"
          role="dialog"
          aria-modal="true"
          aria-label={t.sidebar?.menu || 'Menu'}
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 transition-opacity"
            onClick={closeMenu}
            aria-hidden="true"
          />
          
          {/* Drawer Panel */}
          <div 
            className="
              absolute inset-y-0 left-0 
              w-72 max-w-[85vw] 
              bg-canvas border-r border-border shadow-xl 
              flex flex-col
              animate-slide-in-left
            "
          >
            <Sidebar onClose={closeMenu} />
          </div>
        </div>
      )}
    </>
  );
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardProvider>
      <DashboardLayoutInner>{children}</DashboardLayoutInner>
    </DashboardProvider>
  );
}
