'use client';

import { DashboardProvider } from '@/lib/context/DashboardContext';
import Sidebar from '@/components/dashboard/Sidebar';
import DashboardTopBar from '@/components/dashboard/DashboardTopBar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardProvider>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <DashboardTopBar />
          <main className="flex-1 overflow-y-auto bg-mist p-6">{children}</main>
        </div>
      </div>
    </DashboardProvider>
  );
}
