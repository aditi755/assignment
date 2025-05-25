import { getServerSession } from "next-auth/next";
import {authOptions} from '../auth'
import { Session } from "next-auth";

export async function getServerAuthSession(): Promise<Session | null> {
  return await getServerSession(authOptions);
}
