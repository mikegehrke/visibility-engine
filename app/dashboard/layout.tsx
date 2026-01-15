'use client';

import { LanguageProvider } from '@/lib/context/LanguageContext';
import { DashboardProvider } from '@/lib/context/DashboardContext';
import Sidebar from '@/components/dashboard/Sidebar';
import DashboardTopBar from '@/components/dashboard/DashboardTopBar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider>
      <DashboardProvider>
        <div className="flex h-screen overflow-hidden bg-smoke">
          <Sidebar />
          <div className="flex-1 flex flex-col min-w-0">
            <DashboardTopBar />
            <main className="flex-1 overflow-y-auto p-6">
              <div className="max-w-7xl mx-auto">
                {children}
              </div>
            </main>
          </div>
        </div>
      </DashboardProvider>
    </LanguageProvider>
  );
}
