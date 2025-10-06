"use client";

import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import { FaSearch, FaMapMarkerAlt, FaUsers, FaCalendarAlt } from "react-icons/fa";
import Select from "react-select";
import useAxiosPublic from "@/Hooks/axiosPublic";


export default function AllDestHeroSection({ updateFilter }) {
  const axiosPublic = useAxiosPublic();
  const [startDate, setStartDate] = useState(null);
  const [tours, setTours] = useState([]);
  const [selectedStop, setSelectedStop] = useState(null);
  const [guests, setGuests] = useState("");

  // 🔹 Fetch destinations
  useEffect(() => {
    const fetchTours = async () => {
      try {
        const res = await axiosPublic.get("/destinations");
        const data = res.data || [];

        // ✅ create options for react-select
        const options = data.map((tour) => ({
          value: tour.itinerary[0]?.stop_name,
          label: tour.itinerary[0]?.stop_name,
        }));

        setTours(options);
      } catch (err) {
        console.error("Error fetching tours:", err);
      }
    };
    fetchTours();
  }, [axiosPublic]);

  // 🔹 Date change
  const handleDateChange = (date) => {
    setStartDate(date);
  };

  // 🔹 Handle Search
  const handleSearch = () => {
    updateFilter({
      whereTo: selectedStop?.value || "",
      date: startDate ? format(startDate, "yyyy-MM-dd") : "",
      guest: guests,
    });
  };

  return (
    <div
      className="relative h-[400px] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1522708323590-d24dbb6b0267')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative text-center w-full px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Tours & Trips
        </h1>

        {/* Search Filter */}
        <div className="bg-white rounded-lg md:rounded-4xl shadow-lg p-4 flex flex-col md:flex-row items-center gap-4 max-w-3xl mx-auto">
          {/* Where */}
          <div className="flex items-center gap-2 flex-1 pr-4">
            <FaMapMarkerAlt className="text-gray-500" size={18} />
            <Select
              options={tours}
              value={selectedStop}
              onChange={setSelectedStop}
              placeholder="Where to?"
              className="w-full"
              isSearchable
              styles={{
                control: (base) => ({
                  ...base,
                  border: "none",
                  boxShadow: "none",
                }),
                menu: (base) => ({
                  ...base,
                  backgroundColor: "white",
                  color: "black",
                }),
                option: (base, state) => ({
                  ...base,
                  backgroundColor: state.isFocused ? "#f3f4f6" : "white",
                  color: "black",
                  cursor: "pointer",
                }),
                singleValue: (base) => ({
                  ...base,
                  color: "black",
                }),
                placeholder: (base) => ({
                  ...base,
                  color: "#6b7280",
                }),
              }}
            />
          </div>

          {/* Date */}
          <div className="flex items-center gap-2 flex-1 border-r-1 border-gray-300 pr-4">
            <FaCalendarAlt className="text-gray-500" size={18} />
            <DatePicker
              selected={startDate}
              onChange={handleDateChange}
              dateFormat="yyyy-MM-dd"
              placeholderText="Select dates"
              className="w-full focus:outline-none text-gray-900"
            />
          </div>

          {/* Who */}
          <div className="flex items-center gap-2 flex-1 pr-4">
            <FaUsers className="text-gray-500" size={18} />
            <input
              type="number"
              min="1"
              placeholder="Number of guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full focus:outline-none text-gray-900"
            />
          </div>

          {/* Search Button */}
          <button
            onClick={handleSearch}
            className="btn bg-accent border-0 hover:bg-orange-400 text-white rounded-full px-4"
          >
            <FaSearch />
          </button>
        </div>
      </div>
    </div>
  );
}
