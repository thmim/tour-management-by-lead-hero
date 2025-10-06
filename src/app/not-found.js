"use client";
import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion";
export default function NotFound() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-100 px-4">
            {/* Big playful 404 */}
            <motion.h1
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-9xl font-extrabold text-orange-500 animate-bounce"
            >
                404
            </motion.h1>

            {/* Funny travel caption */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-4 text-2xl font-semibold text-gray-800 text-center"
            >
                Oops! Looks like your journey went off the map 🗺️😅
            </motion.p>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-gray-500 text-center mt-2"
            >
                Don’t worry, even the best travelers get lost sometimes ✈️🧳
            </motion.p>

            {/* Floating playful travel icons */}
            <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 15, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute top-10 left-8 text-4xl"
            >
                ✈️
            </motion.div>

            <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, -10, 10, 0] }}
                transition={{ repeat: Infinity, duration: 3.5 }}
                className="absolute top-20 right-12 text-3xl"
            >
                🧳
            </motion.div>

            <motion.div
                animate={{ y: [0, -18, 0], rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4.5 }}
                className="absolute bottom-28 left-20 text-3xl"
            >
                🗺️
            </motion.div>

            <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, -15, 15, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute bottom-32 right-28 text-3xl"
            >
                ☁️
            </motion.div>

            <motion.div
                animate={{ y: [0, -12, 0], rotate: [0, 20, -20, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute top-1/2 left-1/2 text-3xl"
            >
                🧭
            </motion.div>

            <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, -20, 20, 0] }}
                transition={{ repeat: Infinity, duration: 5 }}
                className="absolute top-1/3 right-1/3 text-3xl"
            >
                ☀️
            </motion.div>

            {/* Back to home button */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-12 z-10"
            >
                <Link
                    href="/"
                    className="bg-orange-500 text-white px-6 py-3 rounded-2xl shadow-lg hover:bg-orange-600 transition-all font-medium text-lg"
                >
                    🏠 Back to Home
                </Link>
            </motion.div>
        </div>
  )
}
