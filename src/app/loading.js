"use client"
import { motion } from "framer-motion";

export default function Spinner() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">

            {/* Floating Plane */}
            <motion.div
                animate={{ x: ["-100%", "100%"], y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
                className="text-6xl"
            >
                ✈️
            </motion.div>

            {/* Loading Caption */}
            <p className="mt-6 text-gray-500 font-medium text-center">
                Loading your adventure...
            </p>

            {/* Animated Dots */}
            <div className="flex gap-2 mt-2">
                <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                    className="w-2 h-2 bg-orange-500 rounded-full"
                ></motion.span>
                <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
                    className="w-2 h-2 bg-orange-500 rounded-full"
                ></motion.span>
                <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
                    className="w-2 h-2 bg-orange-500 rounded-full"
                ></motion.span>
            </div>

        </div>
    );
}
