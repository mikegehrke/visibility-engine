'use client';

import dynamic from 'next/dynamic';
import { DashboardProvider } from '@/lib/context/DashboardContext';
import { useState } from 'react';

// Dynamic imports with ssr: false - completely prevents hydration errors
const Sidebar = dynamic(() => import('@/components/dashboard/Sidebar'), { 
  ssr: false,
  loading: () => <div className="w-64 h-screen bg-canvas border-r border-border" />
});
const DashboardTopBar = dynamic(() => import('@/components/dashboard/DashboardTopBar'), { 
  ssr: false,
  loading: () => <div className="h-14 bg-canvas border-b border-border" />
});

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <DashboardProvider>
      <div className="flex h-screen overflow-hidden bg-smoke">
        {/* Mobile Overlay */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        
        {/* Sidebar - hidden on mobile, slide-in when open */}
        <div className={`
          fixed inset-y-0 left-0 z-50 lg:relative lg:z-0
          transform transition-transform duration-300 ease-out-expo
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          <Sidebar onClose={() => setSidebarOpen(false)} />
        </div>
        
        <div className="flex-1 flex flex-col min-w-0">
          <DashboardTopBar onMenuClick={() => setSidebarOpen(true)} />
          <main className="flex-1 overflow-y-auto p-4 lg:p-6">
            <div className="max-w-7xl mx-auto">
              {children}
            </div>
          </main>
        </div>
      </div>
    </DashboardProvider>
  );
}
