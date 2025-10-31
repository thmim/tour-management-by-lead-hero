"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, LogOut, User, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDestinationsOpen, setIsDestinationsOpen] = useState(false);
  const [hoveredCountry, setHoveredCountry] = useState("France");
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();
  const { data: session, status } = useSession();
  const user = session?.user;

  const navItems = [
    { name: "Home", to: "/" },
    { name: "Destinations", to: "/all-destinations" },
    { name: "Create a Trip", to: "/create-trip" },
    { name: "Contact Us", to: "/contact-us" },
    { name: "Emergency", to: "/emergency" },
  ];

const destinations = [
  {
    name: "Chattogram Division",
    image: "https://i.ibb.co/6Fsk5rM/bandarban-hills.jpg",
    tours: [
      { location: "Cox’s Bazar", image: "https://i.ibb.co/nRHvw9m/coxs1.jpg" },
      { location: "Bandarban", image: "https://i.ibb.co/6Fsk5rM/bandarban-hills.jpg" },
      { location: "Rangamati", image: "https://i.ibb.co/Vq5KYDk/rangamati.jpg" },
      { location: "Saint Martin’s Island", image: "https://i.ibb.co/0sXLh6D/saint1.jpg" },
    ],
  },
  {
    name: "Dhaka Division",
    image: "https://i.ibb.co/nRJPnHz/sonargaon.jpg",
    tours: [
      { location: "Sonargaon", image: "https://i.ibb.co/nRJPnHz/sonargaon.jpg" },
      { location: "Panam City", image: "https://i.ibb.co/6g8RbzC/panam-city.jpg" },
      { location: "Lalbagh Fort", image: "https://i.ibb.co/FzBzFpC/lalbagh.jpg" },
    ],
  },
  {
    name: "Sylhet Division",
    image: "https://i.ibb.co/1nYb2tH/tea-garden.jpg",
    tours: [
      { location: "Jaflong", image: "https://i.ibb.co/fX7sVHZ/jaflong.jpg" },
      { location: "Ratargul Swamp Forest", image: "https://i.ibb.co/V9c7gdD/ratargul.jpg" },
      { location: "Bichanakandi", image: "https://i.ibb.co/nBTRFfB/bichanakandi.jpg" },
      { location: "Srimangal", image: "https://i.ibb.co/1nYb2tH/tea-garden.jpg" },
    ],
  },
  {
    name: "Khulna Division",
    image: "https://i.ibb.co/GV8Zh9C/sundarban1.jpg",
    tours: [
      { location: "Sundarbans", image: "https://i.ibb.co/GV8Zh9C/sundarban1.jpg" },
      { location: "Mongla Port", image: "https://i.ibb.co/5YDYvKn/mongla.jpg" },
      { location: "Shat Gambuj Mosque", image: "https://i.ibb.co/mRBYLCW/shatgambuj.jpg" },
    ],
  },
  {
    name: "Barisal Division",
    image: "https://i.ibb.co/2W5VqYr/kuakata1.jpg",
    tours: [
      { location: "Kuakata Sea Beach", image: "https://i.ibb.co/2W5VqYr/kuakata1.jpg" },
      { location: "Durga Sagar", image: "https://i.ibb.co/TBrMbrH/durga-sagar.jpg" },
      { location: "Floating Guava Market", image: "https://i.ibb.co/3MkGZKp/guava-market.jpg" },
    ],
  },
  {
    name: "Rajshahi Division",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzYkwVMQEEUccGfnkqnly8weIu9nqAbK2vo-FLYzT36km7wQMKvy7pWVR0CkgEPAo3GeIFdoQrHPhlxlqpvDrx4ENCHFuU-qFSBlm-oh7CLc7jEWEOo5YS40UQuO9EPguGnoBcjitPexF6a=w540-h312-n-k-no",
    tours: [
      { location: "Paharpur (Somapura Mahavihara)", image: "https://i.ibb.co.com/Xkt2hV0Q/1200px-22.jpg" },
      { location: "Bagha Mosque", image: "https://i.ibb.co.com/C3R5cqv3/944bdaf93f02094ef46659d67c3c36fc.jpg" },
      { location: "pakshi hardinge bridge", image: "https://i.ibb.co.com/V07MPF4t/images.jpg" },
    ],
  },
  {
    name: "Rangpur Division",
    image: "https://i.ibb.co/LNBrTnt/tajhat-palace.jpg",
    tours: [
      { location: "Tajhat Palace", image: "https://i.ibb.co/LNBrTnt/tajhat-palace.jpg" },
      { location: "Kantajew Temple", image: "https://i.ibb.co/hKNx7y1/kantajew.jpg" },
      { location: "Vinno Jagat", image: "https://i.ibb.co/f1KcvRB/vinnojagat.jpg" },
    ],
  },
  {
    name: "Mymensingh Division",
    image: "https://i.ibb.co/xCjkr3F/mymensingh-town-hall.jpg",
    tours: [
      { location: "Shoshi Lodge", image: "https://i.ibb.co/sHG17tN/shoshi-lodge.jpg" },
      { location: "Zainul Abedin Museum", image: "https://i.ibb.co/RbgJpGn/zainul.jpg" },
      { location: "Garo Hills", image: "https://i.ibb.co/w4fVCV2/garo-hills.jpg" },
    ],
  },
];


  const handleLogout = async () => {
    try {
      await signOut({ callbackUrl: "/" });
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isTransparent =
    (pathname === "/" || pathname === "/all-destinations") && !isScrolled;

  const activeCountry =
    destinations.find((d) => d.name === hoveredCountry) || destinations[0];

  return (
    <div
      className={`fixed top-0 left-0 w-full z-[200] transition-all duration-500 ${
        isTransparent
          ? "bg-transparent"
          : "backdrop-blur-md bg-white/80 shadow-sm"
      }`}
    >
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
              <img src="/logo.png" alt="logo" className="w-8 sm:w-10" />
              <span
                className={`text-xl sm:text-2xl font-bold transition-colors ${
                  isTransparent ? "text-white drop-shadow-md" : "text-gray-900"
                }`}
              >
                TourEase
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 relative">
            {navItems.map((item) => {
              const isActive = pathname === item.to;

              // Destinations Dropdown
              if (item.name === "Destinations") {
                return (
                  <div
                    key={item.name}
                    className="relative group"
                    onMouseEnter={() => setIsDestinationsOpen(true)}
                    onMouseLeave={() => setIsDestinationsOpen(false)}
                  >
                    <button
                      className={`relative px-3 py-2 font-medium transition-all duration-300 ${
                        isTransparent
                          ? isActive
                            ? "text-orange-400"
                            : "text-white hover:text-orange-400"
                          : isActive
                          ? "text-orange-500"
                          : "text-gray-800 hover:text-orange-500"
                      }`}
                    >
                      {item.name}
                    </button>

                    {/* Mega Dropdown */}
                    <AnimatePresence>
                      {isDestinationsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 20, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.97 }}
                          transition={{ duration: 0.3 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[1000px] bg-white rounded-2xl shadow-xl p-6 grid grid-cols-[1.1fr_1.3fr_1.2fr] gap-6 z-50"
                        >
                          {/* Left Column */}
                          <div className="border-r border-gray-200 pr-6">
                            <h4 className="text-orange-500 font-semibold mb-3">
                              Top destinations
                            </h4>
                            <ul className="space-y-2">
                              {destinations.map((d) => (
                                <li
                                  key={d.name}
                                  onMouseEnter={() => setHoveredCountry(d.name)}
                                >
                                  <Link
                                    href={`/destinations/${d.name
                                      .toLowerCase()
                                      .replace(/\s+/g, "-")}`}
                                    className={`block text-gray-700 hover:text-orange-500 transition-colors ${
                                      hoveredCountry === d.name
                                        ? "font-semibold text-orange-600"
                                        : ""
                                    }`}
                                  >
                                    {d.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                            <Link
                              href="/all-destinations"
                              className="block mt-4 text-orange-500 hover:underline font-medium"
                            >
                              View All
                            </Link>
                          </div>

                          {/* Middle Column */}
                          <div className="flex flex-col justify-between">
                            <h4 className="text-gray-800 font-semibold mb-4">
                              {hoveredCountry} Highlights
                            </h4>
                            <div className="flex flex-wrap gap-4">
                              {activeCountry.tours.map((tour) => (
                                <Link
                                  key={tour.location}
                                  href={`/tours/${tour.location
                                    .toLowerCase()
                                    .replace(/\s+/g, "-")}`}
                                  className="flex flex-col items-center gap-2 group w-[90px]"
                                >
                                  <img
                                    src={tour.image}
                                    alt={tour.location}
                                    className="w-16 h-16 rounded-full object-cover border-2 border-gray-200 group-hover:border-orange-400 transition-all"
                                  />
                                  <span className="text-xs text-gray-700 group-hover:text-orange-500 text-center leading-tight">
                                    {tour.location}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* Right Column */}
                          <motion.div
                            key={activeCountry.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="relative rounded-xl overflow-hidden group max-h-[220px]"
                          >
                            <img
                              src={activeCountry.image}
                              alt={activeCountry.name}
                              className="w-full h-full object-cover rounded-xl"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all rounded-xl flex flex-col justify-center items-center text-white p-4">
                              <h4 className="text-lg font-semibold mb-2 text-center">
                                Explore {activeCountry.name}
                              </h4>
                              <Link
                                href={`/destinations/${activeCountry.name.toLowerCase()}`}
                                className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-full text-sm font-semibold transition-all"
                              >
                                View Details
                              </Link>
                            </div>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              // Normal nav links
              return (
                <Link
                  key={item.name}
                  href={item.to}
                  className={`relative px-3 py-2 font-medium transition-all duration-300 ${
                    isTransparent
                      ? isActive
                        ? "text-orange-400"
                        : "text-white hover:text-orange-400"
                      : isActive
                      ? "text-orange-500"
                      : "text-gray-800 hover:text-orange-500"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Side (User / Login + Mobile Menu) */}
          <div className="flex items-center gap-2 sm:gap-4 relative">
            {status === "loading" ? (
              <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse" />
            ) : user ? (
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="focus:outline-none"
                >
                  <img
                    src={
                      user?.image ||
                      "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
                    }
                    alt="Profile"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-200 cursor-pointer"
                    referrerPolicy="no-referrer"
                  />
                </button>

                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-3 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50"
                    >
                      <Link
                        href="/dashboard"
                        className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-all"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        <LayoutDashboard className="w-4 h-4" />
                        Dashboard
                      </Link>
                      <Link
                        href="/profile"
                        className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-all"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        <User className="w-4 h-4" />
                        Profile
                      </Link>
                      <button
                        onClick={() => {
                          handleLogout();
                          setIsDropdownOpen(false);
                        }}
                        className="w-full flex items-center gap-2 px-4 py-2 text-red-500 hover:bg-red-50 transition-all"
                      >
                        <LogOut className="w-4 h-4" /> Logout
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
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
              className={`lg:hidden p-2 transition-colors ${
                isTransparent ? "text-white" : "text-gray-800"
              } hover:text-orange-400`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              onClick={() => setIsMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[250]"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 w-[80%] sm:w-[60%] h-screen bg-white shadow-2xl z-[300] flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b">
                <h2 className="text-xl font-semibold text-orange-500">Menu</h2>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-gray-700 hover:text-orange-500 transition-all"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Links */}
              <div className="flex-1 overflow-y-auto">
                <ul className="flex flex-col px-6 py-4 space-y-4">
                  {navItems.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.to}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block text-lg font-medium transition-colors ${
                          pathname === item.to
                            ? "text-orange-500"
                            : "text-gray-700 hover:text-orange-500"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Section */}
              <div className="border-t p-6">
                {user ? (
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-center gap-2 bg-red-500 text-white py-2 rounded-full font-semibold hover:bg-red-600 transition-all"
                  >
                    <LogOut className="w-4 h-4" /> Logout
                  </button>
                ) : (
                  <Link href="/auth/login" onClick={() => setIsMenuOpen(false)}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 rounded-full font-semibold hover:shadow-md transition-all"
                    >
                      Log In
                    </motion.button>
                  </Link>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
