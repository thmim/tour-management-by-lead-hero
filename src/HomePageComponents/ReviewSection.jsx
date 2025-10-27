"use client";

import { useState } from "react";
import Image from "next/image";
import { FaStar, FaGoogle } from "react-icons/fa";
import { SiTrustpilot } from "react-icons/si";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";

export default function ReviewSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews = [
    {
      name: "Katie Johnson",
      role: "Traveler from USA",
      text: "TourEase made our Maldives trip unforgettable! Their quick responses and personalized itinerary made everything smooth and stress-free.",
      platform: "Google",
      icon: <FaGoogle className="text-yellow-400" />,
      avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    {
      name: "Wade Warren",
      role: "Adventure Enthusiast",
      text: "Loved every bit of the journey! The guide was amazing, and the experience felt tailor-made. Highly recommend TourEase!",
      platform: "Trustpilot",
      icon: <SiTrustpilot className="text-green-400" />,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Jenny Wilson",
      role: "Couple Traveler",
      text: "TourEase handled everything perfectly—from hotel booking to adventure tours. It was the best trip of our lives!",
      platform: "Google",
      icon: <FaGoogle className="text-yellow-400" />,
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
    },
    {
      name: "Dianne Russell",
      role: "Digital Nomad",
      text: "Their platform makes trip planning effortless. I explored Bali like a local thanks to TourEase’s curated guides!",
      platform: "Google",
      icon: <FaGoogle className="text-yellow-400" />,
      avatar: "https://randomuser.me/api/portraits/women/50.jpg",
    },
    {
      name: "Robert Fox",
      role: "Family Vacationer",
      text: "TourEase arranged an amazing family tour in Thailand. Great support and beautiful experience overall!",
      platform: "Trustpilot",
      icon: <SiTrustpilot className="text-green-400" />,
      avatar: "https://randomuser.me/api/portraits/men/20.jpg",
    },
  ];

  return (
    <section className="relative w-full py-20 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-5">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black">
          Travelers <span className="text-orange-500">Love TourEase</span>
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          See why explorers around the world trust TourEase to plan their dream journeys.
        </p>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop={true}
          centeredSlides={true}
          slidesPerView={1.2}
          spaceBetween={40}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="mt-14"
        >
          {reviews.map((r, i) => {
            const isActive = activeIndex % reviews.length === i;
            return (
              <SwiperSlide key={i} className="flex justify-center">
                <motion.div
                  animate={{
                    scale: isActive ? 1.05 : 0.9,
                    opacity: isActive ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className={`h-[300px] w-[300px] md:w-[320px] flex flex-col justify-between rounded-2xl p-6 text-left border shadow-md transition-all duration-500
                    ${
                      isActive
                        ? "bg-white/10 border-orange-400/80 shadow-orange-200/50 backdrop-blur-md"
                        : "bg-white/5 border-gray-300/20 backdrop-blur-sm"
                    }`}
                >
                  {/* Stars */}
                  <div className="flex text-yellow-400 mb-3">
                    {[...Array(5)].map((_, index) => (
                      <FaStar key={index} size={14} />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p
                    className={`leading-relaxed mb-4 text-[15px] ${
                      isActive ? "text-gray-900" : "text-gray-700"
                    }`}
                  >
                    “{r.text.length > 120 ? r.text.slice(0, 120) + "..." : r.text}”
                  </p>

                  {/* Reviewer Info */}
                  <div className="flex items-center gap-3 mt-auto">
                    <Image
                      src={r.avatar}
                      alt={r.name}
                      width={48}
                      height={48}
                      className="rounded-full border border-gray-300"
                    />
                    <div>
                      <h4
                        className={`font-semibold text-base ${
                          isActive ? "text-gray-900" : "text-gray-800"
                        }`}
                      >
                        {r.name}
                      </h4>
                      <p className="text-gray-500 text-xs">{r.role}</p>
                      <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                        {r.icon}
                        <span>on {r.platform}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
