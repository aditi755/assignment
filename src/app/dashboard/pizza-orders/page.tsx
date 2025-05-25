import { getServerAuthSession } from "@/lib/getServerAuthSession";
import { redirect } from "next/navigation";
import ClientPizzaOrderPage from "@/components/ClientPizzaOrderPage";

export default async function PizzaOrdersPage() {
  const session = await getServerAuthSession();

  if (!session) {
    redirect("/login");
  }

  return <ClientPizzaOrderPage session={session} />;
}
