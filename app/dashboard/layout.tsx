'use client';

import { DashboardProvider } from '@/lib/context/DashboardContext';
import Sidebar from '@/components/dashboard/Sidebar';
import DashboardTopBar from '@/components/dashboard/DashboardTopBar';
import { useState, useEffect } from 'react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <DashboardProvider>
      <div className="flex h-screen overflow-hidden bg-smoke">
        {/* Mobile Overlay */}
        {mounted && sidebarOpen && (
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
