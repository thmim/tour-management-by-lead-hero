import Link from "next/link";
import { FaStar, FaClock, FaUsers, FaMapMarkerAlt, FaRegHeart } from "react-icons/fa";

export default function DestCard({ tour }) {
  if (!tour?._id) return null;

  return (
    <Link href={`/destinations-details/${tour._id}`} className="flex flex-col flex-1">
      <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition relative bg-white flex flex-col flex-1 cursor-pointer">
        {/* Image */}
        <div className="overflow-hidden h-48">
          <img
            src={tour.image_url || "/placeholder-tour.jpg"}
            alt={tour.tour_name || "Tour"}
            className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
          />
        </div>

        {/* Card Content */}
        <div className="p-4 flex flex-col justify-between flex-1">
          {/* Rating + Location */}
          <div className="flex items-center text-sm text-gray-600 gap-2 flex-wrap">
            <FaStar className="text-yellow-500" />
            <span className="font-semibold">{tour.rating || "4.5"}</span>
            <span>({tour.reviews || "0"})</span>
            <span className="ml-2 flex items-center gap-1">
              <FaMapMarkerAlt className="text-gray-400" />
              {tour.location || "Unknown"}
            </span>
          </div>

          {/* Tour Name */}
          <h2 className="font-semibold text-lg line-clamp-2 text-gray-800 mt-1 flex-1">
            {tour.tour_name}
          </h2>

          {/* Duration + Group size */}
          <div className="flex items-center text-gray-500 text-sm gap-4 mt-2">
            <span className="flex items-center gap-1">
              <FaClock /> {tour.duration || "N/A"}
            </span>
            <span className="flex items-center gap-1">
              <FaUsers /> {tour.maxGuests ? `0 – ${tour.maxGuests}` : "0 – 15"}
            </span>
          </div>

          {/* Price */}
          <p className="text-sm text-gray-600 mt-2">
            from{" "}
            <span className="font-bold text-lg text-orange-500">
              ${tour.price || "0"}
            </span>{" "}
            /person
          </p>
        </div>

        {/* Save Button */}
        <button
          className="absolute top-3 right-3 bg-white rounded-full p-2 shadow hover:bg-gray-100 transition"
          onClick={(e) => {
            e.preventDefault();
            // Add to favorites logic
          }}
        >
          <FaRegHeart className="text-gray-600 hover:text-red-500" />
        </button>
      </div>
    </Link>
  );
}
