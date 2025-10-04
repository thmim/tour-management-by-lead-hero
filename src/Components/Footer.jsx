import { Globe } from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 items-center text-center sm:text-left">
        
        {/* Left Section */}
        <div className="flex flex-col space-y-3">
          <div className="flex items-center justify-center sm:justify-start space-x-2">
            <Globe className="w-6 h-6 text-white" />
            <h1 className="text-3xl font-bold pb-2">TourEase</h1>
          </div>

          <p className="text-sm opacity-80 text-center sm:text-left">
            Making your journeys easier, smarter, and unforgettable.
          </p>
        </div>

        {/* Middle Section (Navigation) */}
        <nav className="flex flex-col space-y-2 text-sm font-medium">
          <Link href="/about" className="hover:underline">
            About Us
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact Us
          </Link>
          <Link href="/terms-condition" className="hover:underline">
            Terms & Conditions
          </Link>
        </nav>

        {/* Right Section (Socials + Copyright) */}
        <div className="flex flex-col items-center sm:items-end space-y-3">
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow hover:bg-blue-600 hover:text-white transition"
            >
              <FaFacebookF className="text-blue-600 hover:text-white" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow hover:bg-pink-500 hover:text-white transition"
            >
              <FaInstagram className="text-pink-500 hover:text-white" />
            </a>
            <a
              href="https://wa.me"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow hover:bg-green-500 hover:text-white transition"
            >
              <FaWhatsapp className="text-green-500 hover:text-white" />
            </a>
          </div>

          <p className="text-xs opacity-80">
            © {new Date().getFullYear()} TourEase. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
