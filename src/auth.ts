import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { NextAuthConfig } from "next-auth";

if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
  throw new Error('Missing environment variables for Google authentication');
}

export const config: NextAuthConfig = {
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Always redirect to the callbackUrl if provided, otherwise to /dashboard
      if (url.startsWith(baseUrl)) return url;
      return baseUrl + '/dashboard';
    }
  },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    })
  ],
  pages: {
    signIn: '/login'
  }
};

export const { auth, signIn, signOut } = NextAuth(config);

// This will handle all requests to /api/auth/*
const handler = NextAuth(config);
export { handler };