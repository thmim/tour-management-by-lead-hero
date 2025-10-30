"use client";
import { useState, useEffect } from "react";
import Sidebar from "./SideBar";
import DashboardNavbar from "./DashboardNavbar";


export default function DashboardLayoutClient({ children, role }) {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggle = () => setCollapsed((prev) => !prev);

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <Sidebar
        role={role}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        isMobile={isMobile}
      />

      <div
        className={`flex flex-col flex-1 transition-all duration-300 ${
          isMobile ? "ml-0" : collapsed ? "ml-20" : "ml-64"
        }`}
      >
        <DashboardNavbar
          onToggle={handleToggle}
          collapsed={collapsed}
          isMobile={isMobile}
        />
        <main className="flex-1 p-4 md:p-6 overflow-y-auto bg-gray-50 rounded-tl-3xl shadow-inner">
          {children}
        </main>
      </div>
    </div>
  );
}
