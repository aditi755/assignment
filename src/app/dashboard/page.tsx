// app/dashboard/page.tsx
import ClientProfile from "./ClientProfile";

export default function ProfilePage() {
  return (
    <div className="p-4 bg-white">
      <h1 className="text-xl font-semibold mb-4 text-background">Your dashboard</h1>
      <ClientProfile />
    </div>
  );
}
