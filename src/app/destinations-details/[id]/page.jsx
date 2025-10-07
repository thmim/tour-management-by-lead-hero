
import { notFound } from "next/navigation";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

async function getDestination(id) {
  try {
    if (!ObjectId.isValid(id)) {
      return null;
    }

    const client = await clientPromise;
    const db = client.db("destinationDB");

    const destination = await db
      .collection("destinations")
      .findOne({ _id: new ObjectId(id) });

    return destination ? JSON.parse(JSON.stringify(destination)) : null;
  } catch (error) {
    console.error("Error fetching destination:", error);
    return null;
  }
}

export default async function DestinationDetailsPage({ params }) {
  // Fix for Next.js 15 - await params
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const destination = await getDestination(id);

  if (!destination) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="relative h-96 md:h-[500px]">
            <img
              src={destination.image_url || "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800"}
              alt={destination.tour_name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                {destination.tour_name}
              </h1>
              <p className="text-lg opacity-90">📍 {destination.location}</p>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-6 border-b">
              <span className="flex items-center gap-2">
                <span className="font-semibold">Duration:</span>
                ⏱️ {destination.duration}
              </span>
              <span className="flex items-center gap-2">
                <span className="font-semibold">Max Guests:</span>
                👥 {destination.maxGuests || 15}
              </span>
            </div>

            <div className="mb-8 p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl">
              <span className="text-4xl font-bold text-orange-500">
                ${destination.price}
              </span>
              <span className="text-gray-600"> /person</span>
            </div>

            {destination.description && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">About This Tour</h2>
                <p className="text-gray-600 leading-relaxed text-lg">{destination.description}</p>
              </div>
            )}

            {destination.itinerary && destination.itinerary.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Tour Itinerary</h2>
                <div className="space-y-4">
                  {destination.itinerary.map((stop, index) => (
                    <div key={index} className="border-l-4 border-orange-500 pl-6 py-3 hover:bg-orange-50 transition rounded-r-lg">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{stop.stop_name}</h3>
                          {stop.description && <p className="text-gray-600 mt-1">{stop.description}</p>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}