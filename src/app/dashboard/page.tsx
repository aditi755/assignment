import ClientProfile from "../../components/ClientProfile";
import { getServerAuthSession } from "@/lib/getServerAuthSession";
import { Session } from "next-auth";
import { redirect } from "next/navigation";
export default async function ProfilePage() {
 const session: Session | null = await getServerAuthSession();

   if(!session) {
     redirect("/login");
   }

  return (
    <div className="p-4 bg-white">
      <h1 className="text-xl font-semibold mb-4 text-background">Your dashboard</h1>
      <ClientProfile session={session}/>
    </div>
  );
}
