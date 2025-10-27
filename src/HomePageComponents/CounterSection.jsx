 "use client" 
import React from "react";
import CountUp from "react-countup";
import { FaSmile, FaMapMarkerAlt, FaStar, FaPlane } from "react-icons/fa";

export default function CounterSection() {
  return (
    <section className="my-10 md:mb-40  text-center relative overflow-hidden">
      <h3 className="text-sm md:text-lg text-accent tracking-widest font-medium uppercase">
        Our Achievements
      </h3>
      <h2 className="text-3xl md:text-4xl font-medium mt-2">
        Trusted by Thousands of Happy Travelers
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto mt-4">
        Over the years, TourEase has proudly guided thousands of travelers across
        stunning destinations worldwide. With countless successful tours, satisfied
        customers, and growing global recognition, our numbers speak for themselves.
        Here’s a glimpse of what we’ve achieved together.
      </p>


      {/* Stats */}
      <div className="relative mt-16 grid grid-cols-2 md:grid-cols-4 md:gap-16 gap-10">
        {/* Happy Traveller */}
        <div className="flex md:relative flex-col mb-1 items-center">
          <CountUp
            start={0}
            end={500}
            duration={3}
            separator=","
            suffix="+"
            className="text-5xl font-semibold  md:mt-8"
          />
          <span className=" text-gray-600">Happy Traveller</span>
          <div className="mt-3 z-50  bg-[#DACFDE] rounded-full w-fit p-2">
            <FaSmile className="text-purple-500 text-3xl" />
          </div>
        </div>

        {/* Destinations */}
        <div className="flex flex-col md:relative items-center">
          <CountUp
            start={0}
            end={240}
            duration={3}
            separator=","
            className="text-5xl font-semibold  md:mt-10"
          />
          <span className="text-gray-600">Destinations</span>
          <div className="mt-3 z-50 bg-[#F8C1B6] rounded-full w-fit p-2">
            <FaMapMarkerAlt className="text-red-400 text-3xl" />
          </div>
        </div>

        {/* 5* Rating */}
        <div className="flex md:relative flex-col items-center">
          <CountUp
            start={0}
            end={98}
            duration={3}
            suffix="%"
            className="text-5xl font-semibold  md:mt-10"
          />
          <span className="text-gray-600">5* rating</span>
          <div className="mt-3 z-50 bg-[#FFF8B8] rounded-full w-fit p-2">
            <FaStar className="text-yellow-400 text-3xl" />
          </div>
        </div>

        {/* Trips and Tours */}
        <div className="flex flex-col items-center">
          <CountUp
            start={0}
            end={850}
            duration={3}
            suffix="+"
            className="text-5xl font-semibold  md:mt-6"
          />
          <span className=" text-gray-600">Trips and Tours</span>
          <div className="mt-3 z-50 bg-[#E6F4EC] rounded-full w-fit p-2">
            <FaPlane className="text-green-400 text-3xl" />
          </div>
        </div>
      </div>

      {/* Wave Dotted Line */}
      <svg
        className="absolute hidden  md:block lg:block h-24 left-0 right-0 mx-auto -bottom-7 w-full  z-10"
        viewBox="0 0 500 100"
        preserveAspectRatio="none"
      >
        <path
          d="M0,50 
             Q 50,20 100,50 
             T 200,50 
             T 300,50 
             T 400,50 
             T 500,50"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="6,6"
          fill="transparent"
        />
      </svg>
    </section>
  );
}