import { getUserRole } from "@/lib/getUserRole";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const role = await getUserRole();
//  const role="admin"

  // যদি user না থাকে → login page
  if (!role) {
    redirect("/auth/login");
  }

  // Role-based redirect
  switch (role) {
    case "user":
      redirect("/dashboard/user");
      break;
    case "admin":
      redirect("/dashboard/admin");
      break;
    case "vendor":
      redirect("/dashboard/vendor");
      break;
    case "guide":
      redirect("/dashboard/guide");
      break;
    default:
      redirect("/auth/login");
  }

  // Optional fallback (never reached)
  return null;
}
