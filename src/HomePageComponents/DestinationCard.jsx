"use client";

import React, { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";

// Helper to validate image URLs
const safeImage = (url) => {
  if (!url) return "/placeholder-tour.jpg"; // fallback if missing
  try {
    const parsed = new URL(url); // throws if invalid
    return parsed.href;
  } catch {
    return "/placeholder-tour.jpg"; // fallback if invalid
  }
};

export default function DestinationCard() {
  const scrollRef = useRef(null);
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        setLoading(true);
        const res = await axios.get("/api/destinations?limit=12");
        setDestinations(res.data.destinations || res.data || []);
        setError(null);
      } catch (err) {
        console.error("Error fetching destinations:", err);
        setError("Failed to load destinations");
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="px-4 py-10 md:py-20 relative">
      <p className="text-sm md:text-lg mb-2 text-accent text-center md:text-left">
        BEST DESTINATIONS
      </p>
      <h2 className="text-3xl lg:text-4xl font-medium md:mb-12 text-center md:text-left">
        Discover your next dream destinations
      </h2>

      {/* Arrow Buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-20 bg-base-100 shadow-md rounded-full p-1 sm:p-2 hover:bg-gray-300"
        aria-label="Scroll left"
      >
        <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-20 bg-base-100 shadow-md rounded-full p-1 sm:p-2 hover:bg-gray-300"
        aria-label="Scroll right"
      >
        <ChevronRight size={20} className="sm:w-6 sm:h-6" />
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="overflow-x-auto overflow-y-hidden scrollbar-hide px-2 sm:px-6 lg:px-10 py-8"
      >
        <div className="flex gap-4 sm:gap-6">
          {loading ? (
            Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-[300px] sm:h-[360px] lg:h-[400px] rounded-2xl overflow-hidden shadow-lg flex-shrink-0 bg-gray-200 animate-pulse"
              />
            ))
          ) : error ? (
            <p className="text-center w-full text-red-500">{error}</p>
          ) : destinations.length === 0 ? (
            <p className="text-center w-full text-gray-500">No destinations available</p>
          ) : (
            destinations.map((dest, index) => (
              <Link
                href={`/destinations-details/${dest._id}`}
                key={dest._id}
                className={`relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-[300px] sm:h-[360px] lg:h-[400px] rounded-2xl overflow-hidden shadow-lg cursor-pointer group flex-shrink-0 transition-transform
                  ${index % 2 === 0
                    ? "translate-y-4 sm:translate-y-8"
                    : "-translate-y-4 sm:-translate-y-8"
                  }`}
              >
                {/* Background Image */}
                <div className="relative w-full h-full">
                  <Image
                    src={safeImage(dest.image_url)}
                    alt={dest.tour_name || "Destination"}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-2xl"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />

                </div>

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition duration-300 rounded-2xl"></div>

                {/* Content */}
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white z-10">
                  <h3 className="text-sm sm:text-lg font-semibold">{dest.tour_name}</h3>
                  <p className="text-xs sm:text-sm">{dest.tour_type || dest.category}</p>
                </div>

                {/* Arrow Icon */}
                <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 z-10">
                  <span className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 text-white transition duration-300">
                    ➜
                  </span>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
