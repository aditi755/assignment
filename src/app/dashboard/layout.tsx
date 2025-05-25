'use client'; 

import { SessionProvider } from 'next-auth/react';

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white text-background flex justify-center relative top-20 max-h-screen">
      <SessionProvider>{children}</SessionProvider>
    </div>
  );
}
