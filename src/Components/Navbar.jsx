'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Menu, X, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const user = session?.user;

  const navItems = [
    { name: "Home", to: "/" },
    { name: "Destinations", to: "/all-destinations" },
    { name: "Create a Trip", to: "/create-trip" },
    // { name: "Add Destination", to: "/add-destination" },
    { name: "Contact Us", to: "/contact-us" },
    { name: "Emergency", to: "/emergency" },
  ];

  const handleLogout = async () => {
    try {
      await signOut({ callbackUrl: "/" });
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <div className="z-200 sticky bg-white/95 top-0 backdrop-blur-md">
      <div className="max-w-[91.67%] mx-auto">
        <div className="px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <Globe className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </div>
              <span className="text-xl sm:text-2xl font-bold text-gray-800">TourEase</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.to;
              return (
                <Link
                  key={item.name}
                  href={item.to}
                  className={`relative px-3 py-2 font-medium transition-all duration-300 ${isActive
                    ? "text-orange-500"
                    : "text-gray-700 hover:text-orange-500"
                    }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* User Section */}
            {status === "loading" ? (
              <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse" />
            ) : user ? (
              <div className="flex items-center gap-3 relative">
                {/* Profile Image with Tooltip */}
                <div
                  className="relative"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <Link href="/profile">
                    <img
                      src={
                        user?.image ||
                        "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
                      }
                      alt="Profile"
                      className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border border-gray-200 cursor-pointer"
                      referrerPolicy="no-referrer"
                    />
                  </Link>

                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: -2 }}
                        animate={{ opacity: 1, y: 4 }}
                        exit={{ opacity: 0, y: -2 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-medium px-3 py-1 rounded-lg shadow-lg pointer-events-none max-w-[150px] truncate text-center"
                      >
                        {user?.name || "User"}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Logout Button */}
                <motion.button
                  onClick={handleLogout}
                  className="hidden lg:block lg:inline-flex items-center gap-1 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 sm:px-6 rounded-full font-semibold hover:shadow-lg transition-all text-sm sm:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </motion.button>
              </div>
            ) : (
              // Login Button
              <Link href="/auth/login">
                <motion.button
                  className="hidden lg:block bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 sm:px-6 rounded-full font-semibold hover:shadow-lg transition-all text-sm sm:text-base"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Log In
                </motion.button>
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-orange-500"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="pt-4 border-t border-gray-200 mt-4">
                <nav className="flex flex-col gap-2">
                  {navItems.map((item) => {
                    const isActive = pathname === item.to;
                    return (
                      <Link
                        key={item.name}
                        href={item.to}
                        className={`text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${isActive
                          ? "bg-orange-50 text-orange-500 border-l-4 border-orange-500"
                          : "text-gray-700 hover:bg-gray-50 hover:text-orange-500"
                          }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                  {user ? (
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsMenuOpen(false);
                      }}
                      className="text-left px-4 py-3 rounded-lg font-medium text-red-500 hover:bg-red-50 flex items-center gap-2"
                    >
                      <LogOut className="w-4 h-4" /> Logout
                    </button>
                  ) : (
                    <Link
                      href="/auth/login"
                      className="text-left px-4 py-3 rounded-lg font-medium text-orange-500 hover:bg-orange-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Log In
                    </Link>
                  )}
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;