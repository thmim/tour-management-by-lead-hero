import { Geist_Mono, Raleway } from "next/font/google";
import "./globals.css";
import Footer from "@/Components/Footer";
import ClientProvider from "@/Components/ClientProvider"; // new

const geistSans = Raleway({
  variable: "--font-raleway",
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
    <html lang="en" data-theme="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-base-100`}
      >
        <ClientProvider>
          {children}
        </ClientProvider>
        <Footer />
      </body>
    </html>
  );
}


