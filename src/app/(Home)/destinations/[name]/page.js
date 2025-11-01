import clientPromise from "@/lib/mongodb";
import Image from "next/image";
import React from "react";

// ✅ Function to fetch tours by region name
const getToursByRegion = async (region) => {
  try {
    const client = await clientPromise;
    const db = client.db("destinationDB");

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
  const regionName = decodeURIComponent(name.replace(/-/g, " "));

  const toursInRegion = await getToursByRegion(regionName);

  const destinations = [
    { name: "Chattogram Division", image: "https://i.ibb.co/6Fsk5rM/bandarban-hills.jpg" },
    { name: "Dhaka Division", image: "https://i.ibb.co/nRJPnHz/sonargaon.jpg" },
    { name: "Sylhet Division", image: "https://i.ibb.co/1nYb2tH/tea-garden.jpg" },
    { name: "Khulna Division", image: "https://i.ibb.co/GV8Zh9C/sundarban1.jpg" },
    { name: "Barisal Division", image: "https://i.ibb.co/2W5VqYr/kuakata1.jpg" },
    { name: "Rajshahi Division", image: "https://i.ibb.co.com/TD0MVj2Z/unnamed.jpg" },
    { name: "Rangpur Division", image: "https://i.ibb.co/LNBrTnt/tajhat-palace.jpg" },
    { name: "Mymensingh Division", image: "https://i.ibb.co/xCjkr3F/mymensingh-town-hall.jpg" },
  ];

  const destinationInfo = destinations.find(
    (dest) => dest.name.toLowerCase() === regionName.toLowerCase()
  );

  return (
    <div className="flex flex-col">
      {/* 🌄 Region Banner */}
      {destinationInfo && (
        <div className="relative w-full h-[60vh] rounded-b-3xl overflow-hidden shadow-lg">
          <Image
            src={destinationInfo.image}
            alt={destinationInfo.name}
            fill
            className="object-cover brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg text-center">
              {destinationInfo.name}
            </h1>
          </div>
        </div>
      )}

      {/* 🧭 Tour List Section */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
          Explore Popular Tours in {regionName}
        </h2>

        {toursInRegion.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {toursInRegion.map((tour) => (
              <div
                key={tour._id}
                className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all bg-white"
              >
                {tour.image && (
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-5 space-y-2">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {tour.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    🗺️ {tour.location}
                  </p>
                  <p className="text-xs text-gray-500">
                    Region: {tour.destination_region}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center mt-10">
            <p className="text-gray-500 text-lg">
              No tours found for this region. Please check back later!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
