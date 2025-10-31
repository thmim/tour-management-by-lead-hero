import DashboardLayoutClient from "@/dashboardComponents/DashboardLayoutClient";
import { getUserRole } from "@/lib/getUserRole";


export default async function DashboardLayout({ children }) {
  const role = await getUserRole();
  // const role="admin"

  if (!role) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <p className="text-lg text-gray-700">
          Access Denied. Please{" "}
          <a href="/auth/login" className="text-orange-500 underline">
            login
          </a>
          .
        </p>
      </div>
    );
  }

  return <DashboardLayoutClient role={role}>{children}</DashboardLayoutClient>;
}
