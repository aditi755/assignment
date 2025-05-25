'use client'; 

import { SessionProvider } from 'next-auth/react';
import Link from 'next/link';

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white text-background flex flex-col max-h-screen">
      <nav className="flex items-center justify-between px-8 py-4 shadow-sm border-b bg-gray-50">
        <div className="font-bold text-lg tracking-wide">Dashboard</div>
        <div className="flex gap-6">
          <Link href="/dashboard" className="hover:underline">Home</Link>
          <Link href="/dashboard/pizza-orders" className="hover:underline">Pizza Orders</Link>
        </div>
      </nav>
      <main className="flex-1 flex justify-center relative top-10 max-h-screen">
        <SessionProvider>{children}</SessionProvider>
      </main>
    </div>
  );
}
