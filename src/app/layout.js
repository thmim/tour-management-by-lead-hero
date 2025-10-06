import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import AuthProvider from "@/context/AuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TourEase - Your Travel Companion",
  description: "Plan and book your perfect tour with TourEase",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme='light'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#F4F7FB]`}
      >
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}


