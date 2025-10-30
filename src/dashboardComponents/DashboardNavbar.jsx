"use client";
import { Bell, AlignJustify, Search, ChevronDown } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function DashboardNavbar({ onToggle, collapsed, isMobile }) {
    const {data:session}=useSession();
    const user=session?.user;
    console.log(user)
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="h-16 sticky top-0 z-40 flex items-center justify-between px-3 sm:px-6 bg-white/90 backdrop-blur-lg border-b border-gray-200  shadow-sm"
    >
      {/* Left: Sidebar Toggle (only mobile) + Title */}
      <div className="flex items-center gap-3">
        {isMobile && (
          <div className="flex items-center gap-2">
            <button
            onClick={onToggle}
            className="p-2 rounded-full hover:bg-orange-100  transition"
          >
            <AlignJustify
              size={22}
              className="text-gray-700 "
            />
          </button>
          <Link href="/"> <h1 className="text-2xl font-bold text-orange-500 tracking-wide">TourEase</h1></Link>
          </div>
        )}
        
      </div>

      {/* Middle: Search */}
      <div className="hidden lg:flex items-center flex-1 mx-4 relative">
        <Search className="absolute left-3 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-white  border border-gray-200 rounded-lg pl-9 pr-4 py-2 text-gray-700 focus:ring-2 focus:ring-orange-400 outline-none transition-all"
        />
      </div>

      {/* Right: Notifications + Profile */}
      <div className="flex items-center gap-3">
        <button className="relative p-2 rounded-full hover:bg-orange-100  transition">
          <Bell size={20} className="text-gray-700 " />
          <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-orange-500 rounded-full" />
        </button>

        <div className="flex items-center gap-2 cursor-pointer group relative">
          <div className="w-9 h-9 rounded-full ring-2 ring-orange-500/30 overflow-hidden">
            <Image
              src={
                        user?.image ||
                        "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
                      }
                     
                      
                      referrerPolicy="no-referrer"
                 
              width={36}
              height={36}
              alt="Profile"
            />
          </div>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-sm font-medium text-gray-800 ">
             {user?.name}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">{user?.role}</span>
          </div>
          <ChevronDown
            size={18}
            className="text-gray-500 group-hover:text-gray-700 "
          />
        </div>
      </div>
    </motion.nav>
  );
}
