"use client";

import AllDestHeroSection from "@/destinatios/AllDestHeroSection";
import AsideTourFilter from "@/destinatios/AsideTourFilter";
import DestCard from "@/destinatios/DestCard";
import useAxiosPublic from "@/Hooks/axiosPublic";

import { useEffect, useState } from "react";
import { IoFilter } from "react-icons/io5";

const AllDestinationsPage = () => {
  const axiosPublic = useAxiosPublic();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalData, setTotalData] = useState(0);
  const [destinations, setDestinations] = useState([]);
  const [filters, setFilters] = useState({
    whereTo: "",
    date: "",
    guest: "",
    priceRange: [0, 300],
    types: [],
  });

  const updateFilter = (newFilter) => {
    setFilters((prev) => ({ ...prev, ...newFilter }));
  };

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const params = new URLSearchParams();

        // pagination
        params.append("page", page);

        // hero filters
        if (filters.whereTo) params.append("whereTo", filters.whereTo);
        if (filters.date) params.append("date", filters.date);
        if (filters.guest) params.append("guest", filters.guest);

        // aside filters
        if (filters.priceRange) {
          params.append("minPrice", filters.priceRange[0]);
          params.append("maxPrice", filters.priceRange[1]);
        }

        if (filters.types.length > 0) {
          params.append("types", filters.types.join(","));
        }

        const res = await axiosPublic.get(`/all-destinations?${params.toString()}`);

        setTotalData(res.data.totalCount || 0);
        setTotalPages(Math.ceil(res.data.totalCount / 9));
        setDestinations(res.data.destinations || []);
      } catch (error) {
        console.error("Error fetching destinations:", error);
      }
    };

    fetchTours();
  }, [filters.whereTo,
    filters.date,
    filters.guest,
    filters.priceRange,
    filters.types,
    page,
    axiosPublic,]);

  return (
    <div>
      {/* Hero Section */}
      <AllDestHeroSection updateFilter={updateFilter} />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <AsideTourFilter updateFilter={updateFilter} />

          <main className="lg:col-span-3">
            {/* Mobile filter button */}
            <div className="md:hidden flex justify-end mb-4">
              <label
                htmlFor="filter-drawer"
                className="btn btn-outline rounded-full btn-sm flex items-center gap-2"
              >
                <IoFilter />
                Filters
              </label>
            </div>

            {/* Destinations grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {destinations.map((dest) => (
                <DestCard tour={dest} key={dest._id} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-4 text-sm text-gray-600 mb-5">
              <span>
                Showing {(page - 1) * 9 + 1} to{" "}
                {Math.min(page * 9, destinations.length + (page - 1) * 9)} of{" "}
                {totalData} Tours
              </span>

              <div className="join mt-4">
                <button
                  className="join-item btn btn-sm"
                  onClick={() => setPage(page - 1)}
                  disabled={page === 1}
                >
                  Previous
                </button>

                <button className="join-item btn btn-sm btn-disabled">
                  {page} of {totalPages}
                </button>

                <button
                  className="join-item btn btn-sm"
                  onClick={() => setPage(page + 1)}
                  disabled={page === totalPages}
                >
                  Next
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AllDestinationsPage;
