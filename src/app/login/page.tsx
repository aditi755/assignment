// app/login/page.tsx

import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import { redirect } from "next/navigation";
import LoginButton from "./LoginButton";

export default async function LoginPage() {
  const session = await getServerSession(authOptions);

  if (session) {
    // Redirect to dashboard if user is already authenticated
    redirect("/dashboard");
  }

  // Otherwise, show the sign-in button
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-2xl font-bold mb-4">Please sign in</h1>
      <LoginButton />
    </div>
  );
}
