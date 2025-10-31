"use client";
import { usePathname } from "next/navigation";

export default function useDashboardCheck() {
  const pathname = usePathname();

 
  const isDashboard = pathname.startsWith("/dashboard");

  return isDashboard;
}
