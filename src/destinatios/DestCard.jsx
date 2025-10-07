import Link from "next/link";
import React from "react";
import { FaStar, FaClock, FaUsers, FaMapMarkerAlt, FaRegHeart } from "react-icons/fa";


export default function DestCard({ tour }) {
  // console.log(tour);
  return (
    <Link href={tour._id ? `/destinations/${tour._id}` : '#'}>
    <div className=" rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition relative bg-neutral h-fit">
      {/* Image with hover zoom */}
      <div className="overflow-hidden">
        <img
          src={tour.image_url}
          alt={tour.tour_name}
          className="w-full h-48 object-cover transform hover:scale-110 transition duration-500"
        />
      </div>

      {/* Card Content */}
      <div className="p-4 space-y-2">
        {/* Rating + Location */}
        <div className="flex items-center text-sm text-gray-600 gap-2">
          <FaStar className="text-accent" />
          <span className="font-semibold">4.5</span>
          <span>(1)</span>
          <span className="ml-2 flex items-center gap-1">
            <FaMapMarkerAlt className="text-gray-400" />
            {tour.location}
          </span>
        </div>

        {/* Tour Name */}
        <h2 className="font-semibold text-lg line-clamp-2">
          {tour.tour_name}
        </h2>

        {/* Duration + Group size */}
        <div className="flex items-center text-gray-500 text-sm gap-4">
          <span className="flex items-center gap-1">
            <FaClock /> {tour.duration}
          </span>
          <span className="flex items-center gap-1">
            <FaUsers /> 0 – 15
          </span>
        </div>

        {/* Price */}
        <p className="text-sm">
          from <span className="font-bold text-lg">${tour.price}</span> /person
        </p>
      </div>

      {/* Save Button (top-right corner) */}
      <button className="absolute top-3 right-3 bg-white rounded-full p-2 shadow hover:bg-gray-100">
        <FaRegHeart className="text-black" />

      </button>
    </div>
    </Link>
  );
}
