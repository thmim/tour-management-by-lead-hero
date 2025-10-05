"use client";

import useAxiosPublic from "@/Hooks/axiosPublic";
import React, { useState, useEffect } from "react";

export default function AsideTourFilter({ updateFilter }) {
  const axiosPublic = useAxiosPublic();
  const [tours, setTours] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 300]);
  const [selectedTypes, setSelectedTypes] = useState([]);

  // 🔹 Fetch all tours for filter options
  useEffect(() => {
    const fetchTours = async () => {
      try {
        const res = await axiosPublic.get("/destinations");
        setTours(res.data || []);
      } catch (error) {
        console.error("Error fetching tours:", error);
      }
    };
    fetchTours();
  }, [axiosPublic]);

  // 🔹 Get unique tour categories
  const tourTypes = [...new Set(tours.map((t) => t.category).filter(Boolean))];

  const handleCheckboxChange = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  // 🔹 Update filter in parent whenever filters change
  useEffect(() => {
    updateFilter({ priceRange, types: selectedTypes });
  }, [priceRange, selectedTypes, updateFilter]);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Drawer Layout */}
      <div className="drawer md:drawer-open">
        <input id="filter-drawer" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content">
          {/* Main content should go here if needed */}
        </div>

        <div className="drawer-side mt-16 md:mt-0">
          <label
            htmlFor="filter-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          />

          <aside className="bg-neutral shadow rounded-r-sm p-4 w-64 md:rounded-xl h-full">
            {/* Price Range */}
            <h3 className="font-bold text-lg mb-3">Price range</h3>
            <input
              type="range"
              min="0"
              max="1000"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([0, Number(e.target.value)])}
              className="w-full"
            />
            <div className="flex justify-between text-sm mt-2">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>

            {/* Tour Types */}
            <h3 className="font-bold text-lg mt-6 mb-3">Tour Types</h3>
            {tourTypes.length > 0 ? (
              tourTypes.map((type, idx) => (
                <label
                  key={`${type}-${idx}`}
                  className="flex items-center space-x-2 mb-2"
                >
                  <input
                    type="checkbox"
                    checked={selectedTypes.includes(type)}
                    onChange={() => handleCheckboxChange(type)}
                  />
                  <span>{type}</span>
                </label>
              ))
            ) : (
              <p className="text-sm text-gray-500">No tour types available</p>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}
