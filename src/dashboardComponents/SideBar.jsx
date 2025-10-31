"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Map,
  Settings,
  LogOut,
  ChevronLeft,
  Menu,
  Users,
  Briefcase,
  Globe,
  Wallet,
  MessageCircle,
  CalendarDays,
  FileBarChart,
  Heart,
} from "lucide-react";
import { signOut } from "next-auth/react";

export default function Sidebar({ role, collapsed, setCollapsed, isMobile }) {
  const links = {
    admin: [
      { name: "Dashboard", to: "/dashboard/admin", icon: LayoutDashboard },
      { name: "Users", to: "/dashboard/admin/users", icon: Users },
      { name: "Vendors", to: "/dashboard/admin/vendors", icon: Briefcase },
      { name: "Guides", to: "/dashboard/admin/guides", icon: Globe },
      { name: "Tours", to: "/dashboard/admin/tours", icon: Map },
      { name: "Reports", to: "/dashboard/admin/reports", icon: FileBarChart },
      { name: "Settings", to: "/dashboard/admin/settings", icon: Settings },
    ],
    user: [
      { name: "Dashboard", to: "/dashboard/user", icon: LayoutDashboard },
      { name: "My Bookings", to: "/dashboard/user/bookings", icon: CalendarDays },
      { name: "Wishlist", to: "/dashboard/user/wishlist", icon: Heart },
      { name: "Payments", to: "/dashboard/user/payments", icon: Wallet },
      { name: "Reviews", to: "/dashboard/user/reviews", icon: MessageCircle },
      { name: "Settings", to: "/dashboard/user/settings", icon: Settings },
    ],
  }[role] || [];

   const handleLogout = async () => {
      try {
        await signOut({ callbackUrl: "/" });
      } catch (err) {
        console.error("Logout failed:", err);
      }
    };

  return (
    <>
      {isMobile && !collapsed && (
        <div
          className="fixed inset-0 bg-black/40 z-20"
          onClick={() => setCollapsed(true)}
        />
      )}

      <motion.aside
        initial={{ x: isMobile ? -280 : 0 }}
        animate={{ x: collapsed && isMobile ? -280 : 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 z-30 h-screen flex flex-col bg-white  shadow-lg  transition-all ${
          collapsed && !isMobile ? "w-20" : "w-64"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-gray-200 ">
          {!collapsed && (
           
              <Link href="/"> <h1 className="text-2xl font-bold text-orange-500 tracking-wide">TourEase</h1></Link>
             
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded-full hover:bg-orange-100 dark:hover:bg-gray-800 transition"
          >
            {collapsed ? <Menu size={22} /> : <ChevronLeft size={22} />}
          </button>
        </div>

        {/* Links */}
        <ul className="flex-1 mt-4 px-2 space-y-2 overflow-y-auto">
          {links.map(({ name, to, icon: Icon }) => (
            <li key={to}>
              <Link
                href={to}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  to === window.location.pathname
                    ? "bg-gradient-to-r from-orange-400 to-orange-600 text-white shadow-md"
                    : "text-gray-700 hover:bg-orange-100 hover:text-orange-600"
                }`}
              >
                <Icon size={20} />
                {!collapsed && <span className="font-medium">{name}</span>}
              </Link>
            </li>
          ))}
        </ul>

        {/* Logout */}
        <div onClick={()=>signOut()}  className="p-4 cursor-pointer border-t border-gray-200 ">
          <button className="flex items-center gap-2 w-full justify-center py-2 rounded-xl text-gray-700 hover:text-white hover:bg-orange-500 transition-all shadow-sm">
            <LogOut size={18} />
            {!collapsed && <span className="font-medium">Logout</span>}
          </button>
        </div>
      </motion.aside>
    </>
  );
}
