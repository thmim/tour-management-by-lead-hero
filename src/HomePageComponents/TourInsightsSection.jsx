"use client";
import React, { useState } from "react";

const tourData = [
  // Popular Tours
  {
    id: 1,
    title: "Discover the Beauty of Cox’s Bazar",
    category: "Popular Tours",
    author: "Tour Expert",
    date: "Sep 10, 2024",
    image:
      "https://images.unsplash.com/photo-1601918774946-25832a4be0a1?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    title: "Sajek Valley Adventure Trip",
    category: "Popular Tours",
    author: "Tour Expert",
    date: "Oct 2, 2024",
    image:
      "https://images.unsplash.com/photo-1614584970989-f09e7b81a2da?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    title: "Explore the Historic Sylhet",
    category: "Popular Tours",
    author: "Tour Expert",
    date: "Aug 27, 2024",
    image:
      "https://images.unsplash.com/photo-1600334129128-685c9e2d4fbb?auto=format&fit=crop&w=800&q=60",
  },

  // Travel Guides
  {
    id: 4,
    title: "Top 5 Budget-Friendly Travel Tips",
    category: "Travel Guides",
    author: "Travel Blogger",
    date: "Jul 15, 2024",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    title: "How to Plan a Perfect Mountain Trip",
    category: "Travel Guides",
    author: "Travel Blogger",
    date: "Aug 4, 2024",
    image:
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 6,
    title: "Essential Packing Checklist for Travelers",
    category: "Travel Guides",
    author: "Travel Blogger",
    date: "Jun 28, 2024",
    image:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=60",
  },

  // Customer Stories
  {
    id: 7,
    title: "A Couple’s Dream Honeymoon in Bandarban",
    category: "Customer Stories",
    author: "Traveler",
    date: "Sep 25, 2024",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 8,
    title: "Solo Trip Experience: Discovering Rangamati",
    category: "Customer Stories",
    author: "Traveler",
    date: "Oct 1, 2024",
    image:
      "https://images.unsplash.com/photo-1563245372-a91b5eaa964e?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 9,
    title: "Family Vacation Memories in Saint Martin",
    category: "Customer Stories",
    author: "Traveler",
    date: "Aug 11, 2024",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
  },
];

const tabs = ["Popular Tours", "Travel Guides", "Customer Stories"];

export default function TourInsightsSection() {
  const [activeTab, setActiveTab] = useState("Popular Tours");

  const filteredTours = tourData.filter((item) => item.category === activeTab);

  return (
    <section className="relative py-20 px-6 text-white overflow-hidden">
      {/* Background Glow */}
      <div
        className="absolute inset-0 -z-10"
      
      />

      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
          Explore Our Tour Insights
        </h2>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Discover popular destinations, expert travel guides, and inspiring
          stories from our travelers.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-10 flex-wrap gap-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full text-sm font-semibold backdrop-blur-md transition-all duration-300 ${
              activeTab === tab
                ? "bg-gradient-to-r from-orange-400 to-orange-600 text-white shadow-[0_0_25px_rgba(251,146,60,0.6)] scale-105"
                : "bg-white text-gray-500 border border-orange-500/20 hover:text-orange-300 hover:border-orange-500/50"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {filteredTours.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl bg-white shadow-[0_0_25px_rgba(251,146,60,0.2)] hover:shadow-[0_0_45px_rgba(251,146,60,0.4)] overflow-hidden transition-all duration-500 hover:-translate-y-1"
          >
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-2 text-orange-400">
                {item.title}
              </h3>
              <div className="text-sm text-gray-400">
                {item.author} • {item.date}
              </div>
              <div className="mt-4 flex justify-between text-xs text-gray-500">
                <span>Adventure</span>
                <span>Travel Pro</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-12">
        <button className="px-6 py-2 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 text-white font-medium shadow-[0_0_25px_rgba(251,146,60,0.4)] hover:shadow-[0_0_40px_rgba(251,146,60,0.6)] transition-all">
          View More Tours
        </button>
      </div>
    </section>
  );
}
