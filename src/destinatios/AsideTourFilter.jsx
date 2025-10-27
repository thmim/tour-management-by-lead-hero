"use client";

import { useState, useEffect } from "react";
import axios from "axios";

export default function AsideTourFilter({ updateFilter }) {
  const [tours, setTours] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 300]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all tours for filter options
  useEffect(() => {
    const fetchTours = async () => {
      try {
        setLoading(true);
        const res = await axios.get("/api/destinations");
        setTours(res.data.destinations || res.data || []);
      } catch (error) {
        console.error("Error fetching tours:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTours();
  }, []);

  // Get unique tour categories
  const tourTypes = [...new Set(tours.map((t) => t.category).filter(Boolean))];

  const handleCheckboxChange = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  // Update filters when price or types change
  useEffect(() => {
    updateFilter({
      priceRange,
      types: selectedTypes
    });
  }, [priceRange, selectedTypes]);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="drawer md:drawer-open">
        <input id="filter-drawer" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content">
          {/* Main content - empty for filter */}
        </div>

        <div className="drawer-side mt-16 md:mt-0 z-40">
          <label
            htmlFor="filter-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          />

          <aside className="bg-white shadow rounded-r-sm p-6 w-64 md:rounded-xl min-h-screen md:min-h-0">
            {/* Price Range */}
            <div className="mb-6">
              <h3 className="font-bold text-lg mb-3 text-gray-800">Price Range</h3>
              <input
                type="range"
                min="0"
                max="1000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, Number(e.target.value)])}
                className="range range-sm range-primary w-full"
              />
              <div className="flex justify-between text-sm mt-2 text-gray-600">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>

            {/* Tour Types */}
            <div>
              <h3 className="font-bold text-lg mb-3 text-gray-800">Tour Types</h3>

              {loading ? (
                <div className="space-y-2">
                  <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
                </div>
              ) : tourTypes.length > 0 ? (
                <div className="space-y-2">
                  {tourTypes.map((type, idx) => (
                    <label
                      key={`${type}-${idx}`}
                      className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-2 rounded transition"
                    >
                      <input
                        type="checkbox"
                        checked={selectedTypes.includes(type)}
                        onChange={() => handleCheckboxChange(type)}
                        className="checkbox checkbox-sm checkbox-primary"
                      />
                      <span className="text-gray-700">{type}</span>
                    </label>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-500">No tour types available</p>
              )}
            </div>

            {/* Clear Filters Button */}
            <button
              onClick={() => {
                setPriceRange([0, 300]);
                setSelectedTypes([]);
              }}
              className="mt-6 w-full btn btn-sm btn-outline"
            >
              Clear Filters
            </button>
          </aside>
        </div>
      </div>
    </div>
  );
}