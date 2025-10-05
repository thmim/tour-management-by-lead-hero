"use client";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import Link from "next/link";
import MapComponent from "@/Components/Map";
import useAxiosPublic from "@/Hooks/axiosPublic";

const DestinationDetails = () => {
  const { id } = useParams();
  const axiosPublic=useAxiosPublic()

  const { data: destinationInfo = {}, isLoading } = useQuery({
    queryKey: ["destinationDetails", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/destinations-details/${id}`);
      return res.data;
    },
  });

  const [selectedDate, setSelectedDate] = useState(
    destinationInfo.destination?.availability?.[0] || null
  );

  if (isLoading) {
    return <p className="text-center py-20 text-gray-500 text-lg">Loading....</p>;
  }

  return (
    <div className="max-w-6xl mx-auto p-4 lg:p-8 mt-12 space-y-12">
      {/* Hero Image */}
      <div className="relative w-full h-80 md:h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
        <img
          src={destinationInfo.image_url}
          alt={destinationInfo.tour_name}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            {destinationInfo.tour_name}
          </h1>
          <p className="text-white/80 text-sm md:text-base mt-1">
            {destinationInfo.tour_type} • {destinationInfo.category}
          </p>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Left Content */}
        <div className="md:col-span-2 space-y-8">
          {/* Quick Info */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {["Location", "Duration", "Category"].map((label, idx) => {
              const value =
                label === "Location"
                  ? destinationInfo.location
                  : label === "Duration"
                  ? destinationInfo.duration
                  : destinationInfo.category;
              return (
                <div
                  key={idx}
                  className="p-5 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition"
                >
                  <p className="text-xs text-gray-400">{label}</p>
                  <p className="font-semibold text-gray-800 mt-1">{value}</p>
                </div>
              );
            })}
          </div>

          {/* Safety Info */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Safety & Advisory</h2>
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition">
              <p className="text-gray-700">{destinationInfo.safety_info.local_advisory}</p>
              <p className="text-sm mt-3 text-gray-500">
                Emergency Contact:{" "}
                <span className="font-medium">{destinationInfo.safety_info.emergency_contact}</span>
              </p>
            </div>
          </div>

          {/* Map */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Location Map</h2>
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-4 hover:shadow-lg transition">
              <MapComponent mapInfo={destinationInfo.itinerary} />
            </div>
          </div>
        </div>

        {/* Right: Booking Card */}
        <aside className="space-y-6">
          <div className="sticky top-20 p-6 bg-white rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition">
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-500 text-sm">Price per person</p>
              <p className="text-3xl font-bold text-gray-900">${destinationInfo.price}</p>
            </div>

            {/* Availability */}
            <div className="mt-4">
              <p className="font-medium mb-2 text-gray-700">Select Date</p>
              <div className="flex flex-wrap gap-2">
                {destinationInfo.availability.length === 0 ? (
                  <span className="text-gray-400 text-sm">No dates available</span>
                ) : (
                  destinationInfo.availability.map((date) => (
                    <button
                      key={date}
                      onClick={() => setSelectedDate(date)}
                      className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                        selectedDate === date
                          ? "bg-gradient-to-r from-orange-400 to-red-400 text-white border-transparent"
                          : "bg-gray-50 text-gray-800 border-gray-300 hover:border-orange-400 hover:text-orange-500"
                      }`}
                    >
                      {new Date(date).toLocaleDateString(undefined, {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </button>
                  ))
                )}
              </div>
            </div>

            {/* Booking Button */}
            <Link href="/booking">
              <button className="mt-6 w-full py-3 bg-gradient-to-r from-orange-400 to-red-400 text-white font-semibold rounded-xl shadow hover:shadow-lg transition">
                Proceed to Checkout
              </button>
            </Link>

            {/* Transport Info */}
            <div className="mt-6 border-t pt-4 text-sm text-gray-600 space-y-1">
              <p>
                <span className="font-medium text-gray-800">Airport:</span> {destinationInfo.nearest_transport.airport}
              </p>
              <p>
                <span className="font-medium text-gray-800">Train:</span> {destinationInfo.nearest_transport.train_station}
              </p>
              <p>
                <span className="font-medium text-gray-800">Bus:</span> {destinationInfo.nearest_transport.bus_stop}
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default DestinationDetails;
