"use client";

import { useState } from "react";
import Image from "next/image";
import { FaStar, FaGoogle } from "react-icons/fa";
import { SiTrustpilot } from "react-icons/si";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
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
    },
    {
      name: "Wade Warren",
      role: "Adventure Enthusiast",
      text: "Loved every bit of the journey! The guide was amazing, and the experience felt tailor-made. Highly recommend TourEase!",
      platform: "Trustpilot",
      icon: <SiTrustpilot className="text-green-400" />,
    },
    {
      name: "Jenny Wilson",
      role: "Couple Traveler",
      text: "TourEase handled everything perfectly—from hotel booking to adventure tours. It was the best trip of our lives!",
      platform: "Google",
      icon: <FaGoogle className="text-yellow-400" />,
    },
    {
      name: "Dianne Russell",
      role: "Digital Nomad",
      text: "Their platform makes trip planning effortless. I explored Bali like a local thanks to TourEase’s curated guides!",
      platform: "Google",
      icon: <FaGoogle className="text-yellow-400" />,
    },
    {
      name: "Robert Fox",
      role: "Family Vacationer",
      text: "TourEase arranged an amazing family tour in Thailand. Great support and beautiful experience overall!",
      platform: "Trustpilot",
      icon: <SiTrustpilot className="text-green-400" />,
    },
  ];

  return (
    <section className="relative w-full py-20 bg-base-100 text-white overflow-hidden">
      {/* Background Gradient */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(56,189,248,0.25), transparent 70%), #020617",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 text-center space-y-10">
        {/* Section Header */}
        <h2 className="text-4xl text-black md:text-5xl font-extrabold tracking-tight">
          Travelers <span className="text-orange-400">Love TourEase</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          See why explorers around the world trust TourEase to plan their dream journeys.
        </p>
{/* comment */}
        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          centeredSlides={true}
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="mt-12"
        >
          {reviews.map((r, i) => (
            <SwiperSlide key={i}>
              <div
                className={`rounded-2xl p-8 text-left border transition-all duration-500 transform cursor-pointer
                ${
                  activeIndex % reviews.length === i
                    ? "scale-105 bg-gradient-to-r from-orange-400 to-red-400 border-orange-400/60 shadow-2xl shadow-sky-600/30"
                    : "bg-neutral border-sky-900/20 hover:border-sky-500/40 hover:shadow-[0_0_25px_rgba(56,189,248,0.3)]"
                }`}
              >
                {/* Stars */}
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-800 leading-relaxed mb-6">{r.text}</p>

                {/* Reviewer Info */}
                <div>
                  <h4 className="font-semibold text-lg">{r.name}</h4>
                  <p className="text-gray-500 text-sm mb-3">{r.role}</p>
                </div>

                {/* Platform */}
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  {r.icon}
                  <span>Review on {r.platform}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
