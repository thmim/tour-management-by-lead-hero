import { Geist_Mono, Raleway } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/context/AuthProvider";


const raleway = Raleway({
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
      <body className={`${raleway.variable} ${geistMono.variable} antialiased`}>
        <AuthProvider>
                  
          {children}
       
        </AuthProvider>
      </body>
    </html>
  );
}
