import clientPromise from "@/lib/mongodb";
import React from "react";

// ✅ Function to fetch tours by region name
const getToursByRegion = async (region) => {
  try {
    const client = await clientPromise;
    const db = client.db("destinationDB");

    // Case-insensitive match for destination_region
    const tours = await db
      .collection("tours")
      .find({
        destination_region: { $regex: new RegExp(`^${region}$`, "i") },
      })
      .toArray();

    return tours;
  } catch (error) {
    console.error("Error fetching tours by region:", error);
    return [];
  }
};

// ✅ Page Component
const Page = async ({ params }) => {
  const { name } = params;

  // Decode the region name (handle hyphen or URL encoding)
  const regionName = decodeURIComponent(name.replace(/-/g, " "));

  console.log("Region from params:", regionName);

  const toursInRegion = await getToursByRegion(regionName);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6 capitalize">
        Tours in {regionName}
      </h1>

      {toursInRegion.length > 0 ? (
        <ul className="space-y-4">
          {toursInRegion.map((tour) => (
            <li
              key={tour._id}
              className="border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all"
            >
              <h2 className="text-lg font-semibold">{tour.title}</h2>
              <p className="text-sm text-gray-600">
                Region: {tour.destination_region}
              </p>
              <p className="text-sm text-gray-600">
                Location: {tour.location}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 mt-6">
          No tours found for this region.
        </p>
      )}
    </div>
  );
};

export default Page;
