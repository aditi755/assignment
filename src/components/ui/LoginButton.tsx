"use client";
import { signIn } from "next-auth/react";

export default function LoginButton() {
  return (
    <button
      type="button"
      onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
      className="bg-blue-600 text-white px-4 py-2 rounded flex justify-center items-center gap-2"
    >
      Sign in with Google
    </button>
  );
}