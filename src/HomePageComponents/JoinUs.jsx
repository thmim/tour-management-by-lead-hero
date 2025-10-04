"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Users, Gift, ShieldCheck, Mail, ArrowRight } from "lucide-react";

export default function JoinUs() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage("❌ Please enter a valid email address.");
      return;
    }

    setIsLoading(true);
    setMessage("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setMessage("✅ Thanks for joining! Check your inbox for updates.");
      setEmail("");
    } catch (err) {
      setMessage("❌ Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const reasons = [
    {
      title: "Smart Trip Planning",
      desc: "Plan your journeys easily with our drag-and-drop trip planner.",
      icon: <Users className="w-4 h-4 text-indigo-500" />,
    },
    {
      title: "Exclusive Deals",
      desc: "Access discounts, reward points, and eco-friendly travel badges.",
      icon: <Gift className="w-4 h-4 text-green-500" />,
    },
    {
      title: "Safe & Reliable",
      desc: "Emergency support and trusted travel companion features.",
      icon: <ShieldCheck className="w-4 h-4 text-orange-500" />,
    },
  ];

  return (
    <section
      id="joinus"
      className="relative max-w-7xl mx-auto my-10 md:my-20 bg-cover bg-center bg-no-repeat rounded-xl overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative p-6 lg:p-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white"
        >
          <h2 className="text-3xl md:text-4xl font-medium mb-4">
            Join Our Travel Community
          </h2>
          <p className="mb-6 text-gray-200">
            Get travel tips, exclusive deals, and personalized recommendations.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-6">
                <Mail className="w-5 h-5 text-gray-400" />
              </div>
            </div>

            <motion.button
              type="submit"
              disabled={isLoading || !email.includes("@")}
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl disabled:opacity-70 disabled:cursor-not-allowed group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                  Joining...
                </>
              ) : (
                <>
                  Join TourEase Community
                  <ArrowRight className="w-4 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </motion.button>
          </form>

          {message && <p className="mt-4 text-sm text-gray-200">{message}</p>}
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid gap-6"
        >
          <h3 className="text-xl font-semibold text-white">Why Join Us?</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {reasons.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.01, y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-3 text-white shadow-lg border border-white/20 hover:border-orange-400 cursor-pointer"
              >
                <div className="mb-2">{item.icon}</div>
                <h4 className="text-lg font-medium mb-1">{item.title}</h4>
                <p className="text-sm text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
