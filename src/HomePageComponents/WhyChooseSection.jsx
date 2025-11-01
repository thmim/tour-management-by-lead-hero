import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function WhyChooseSection() {
  const cards = [
    { text: "Customizable Tours", rotate: "-rotate-3" },
    { text: "24/7 Customer Support", rotate: "rotate-2", primary: true },
    { text: "Best Price Guarantee", rotate: "-rotate-2" },
    { text: "Safe & Secure Booking", rotate: "rotate-1" },
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl text-base-200 font-extrabold leading-snug ">
            Why You <br />
            Choose <span className="text-orange-500">TourEase?</span>
          </h2>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-md">
            Discover seamless travel experiences with TourEase. From curated
            tour packages to 24/7 customer support, we ensure your journeys are
            unforgettable and hassle-free.
          </p>

          <button className="btn bg-orange-500 border-0 rounded-full px-8 py-3 text-white text-lg hover:scale-105 hover:shadow-lg hover:shadow-orange-500/40 transition-all duration-300">
            Book Now <FaArrowRight className="ml-2" />
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col items-start gap-7 md:pl-12 relative">
          {cards.map((item, index) => (
            <div
              key={index}
              className={`px-8 py-4 rounded-full text-lg font-medium shadow-lg transition-all duration-500 cursor-pointer hover:scale-105 ${
                item.primary
                  ? "bg-orange-500 text-white hover:shadow-orange-500/50"
                  : "bg-white text-gray-600 shadow-2xl hover:shadow-gray-700/50"
              } ${item.rotate}`}
            >
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
