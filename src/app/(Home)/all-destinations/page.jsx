"use client";

import AllDestHeroSection from "@/destinatios/AllDestHeroSection";
import AsideTourFilter from "@/destinatios/AsideTourFilter";
import DestCard from "@/destinatios/DestCard";
import { useEffect, useState, useCallback } from "react";
import { IoFilter } from "react-icons/io5";
import axios from "axios";

const AllDestinationsPage = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalData, setTotalData] = useState(0);
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    whereTo: "",
    date: "",
    guest: "",
    priceRange: [0, 300],
    types: [],
  });

  const updateFilter = useCallback((newFilter) => {
    setFilters((prev) => ({ ...prev, ...newFilter }));
    setPage(1);
  }, []);

  useEffect(() => {
    const fetchTours = async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams();

        if (filters.whereTo) params.append("whereTo", filters.whereTo);
        if (filters.date) params.append("date", filters.date);
        if (filters.guest) params.append("guest", filters.guest);

        if (filters.priceRange && filters.priceRange.length === 2) {
          params.append("minPrice", filters.priceRange[0]);
          params.append("maxPrice", filters.priceRange[1]);
        }

        if (filters.types && filters.types.length > 0) {
          params.append("types", filters.types.join(","));
        }

        params.append("page", page);
        params.append("limit", 9);

        const res = await axios.get(`/api/destinations?${params.toString()}`);

        if (res.data) {
          setDestinations(res.data.destinations || res.data || []);
          setTotalData(res.data.totalCount || res.data.length || 0);
          setTotalPages(res.data.totalPages || Math.ceil((res.data.length || 0) / 9));
        }
      } catch (error) {
        console.error("Error fetching destinations:", error);
        setDestinations([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, [
    filters.whereTo,
    filters.date,
    filters.guest,
    filters.priceRange,
    filters.types,
    page,
  ]);

  return (
    <div>
      <AllDestHeroSection updateFilter={updateFilter} />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <AsideTourFilter updateFilter={updateFilter} />

          <main className="lg:col-span-3">
            <div className="md:hidden flex justify-end mb-4">
              <label
                htmlFor="filter-drawer"
                className="btn btn-outline rounded-full btn-sm flex items-center gap-2"
              >
                <IoFilter />
                Filters
              </label>
            </div>

            {loading && (
              <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
              </div>
            )}

            {!loading && destinations.length === 0 && (
              <div className="text-center py-20">
                <p className="text-gray-500 text-lg">No destinations found</p>
              </div>
            )}

            {!loading && destinations.length > 0 && (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {destinations.map((dest) => (
                    <DestCard tour={dest} key={dest._id} />
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-4 text-sm text-gray-600 mb-5">
                  <span>
                    Showing {Math.min((page - 1) * 9 + 1, totalData)} to{" "}
                    {Math.min(page * 9, totalData)} of {totalData} Tours
                  </span>

                  <div className="join">
                    <button
                      className="join-item btn btn-sm"
                      onClick={() => setPage((p) => Math.max(1, p - 1))}
                      disabled={page === 1 || loading}
                    >
                      Previous
                    </button>

                    <button className="join-item btn btn-sm btn-disabled">
                      {page} of {totalPages || 1}
                    </button>

                    <button
                      className="join-item btn btn-sm"
                      onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                      disabled={page >= totalPages || loading}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default AllDestinationsPage;