
'use client';

import { signOut } from "next-auth/react";
import Image from "next/image";
import type { Session } from "next-auth";

interface ClientProfileProps {
  session: Session | null;  // session can be null if unauthenticated
}
export default function ClientProfile({ session }: ClientProfileProps) {

  if (status === "loading") return (
    <div className="flex flex-col items-center justify-center min-h-[200px]">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-2"></div>
      <p className="text-gray-600">Loading...</p>
    </div>
  );

  if (status === "unauthenticated") {
    return null;
  }

  return (
    <div className="bg-white text-background rounded-lg shadow-lg p-8 flex flex-col items-center max-w-md w-full">
      <Image
        src={session?.user?.image || ''}
        alt="Profile Picture"
        className="w-20 h-20 rounded-full mb-4 border-2 border-blue-600 shadow"
        width={80}
        height={80}
      />
      <h2 className="text-2xl font-bold mb-2">Hello, {session?.user?.name}!</h2>
      <p className="text-gray-700 mb-6">{session?.user?.email}</p>
      <button
        onClick={() => signOut({ callbackUrl: '/login' })}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition-colors duration-200"
      >
        Log out
      </button>
    </div>
  );
}
