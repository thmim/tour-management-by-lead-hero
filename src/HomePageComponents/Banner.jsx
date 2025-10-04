"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const destinations = [
    {
      name: "Cox's Bazar",
      subtitle: "EXPLORE THE LONGEST NATURAL SEA BEACH",
      image:
        "https://i.ibb.co.com/Wpx607W3/pexels-didarul-islam-2470780-4090625.jpg",
    },
    {
      name: "Khagrachhari Hills",
      subtitle: "DISCOVER THE BEAUTY OF HILLS AND LAKES",
      image: "https://i.ibb.co.com/HDQ5CQX2/pexels-nfzzz-10307912.jpg",
    },
    {
      name: "Kaptai Lake",
      subtitle: "ENJOY THE SERENITY OF THE LARGEST LAKE",
      image:
        "https://i.ibb.co.com/7NJ11d9L/rashed-kabir-v-Lmut-ili-Tg-unsplash.jpg",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % destinations.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[40vh] md:h-[50vh] lg:h-[75vh] overflow-hidden max-w-7xl mx-auto rounded-2xl">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {destinations.map((dest, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${dest.image})`,
            }}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{
              opacity: index === currentSlide ? 1 : 0,
              scale: index === currentSlide ? 1 : 1.1,
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        ))}
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-3xl"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 leading-tight">
            {destinations[currentSlide].name}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8">
            {destinations[currentSlide].subtitle}
          </p>

          <Link href="/all-destinations">
            <motion.button
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Now
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
