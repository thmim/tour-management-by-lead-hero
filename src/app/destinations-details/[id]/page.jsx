
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

  const destinationInfo = await getDestination(id);

  if (!destinationInfo) {
    notFound();
  }

  return (
      <div className="max-w-6xl mx-auto p-4 lg:p-8  mt-12">
      {/* Image Section */}
      <div className="relative w-full h-72 md:h-[420px] rounded-2xl overflow-hidden shadow-xl border">
        <img
          src={destinationInfo.image_url}
          alt={destinationInfo.tour_name}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white">{destinationInfo.tour_name}</h1>
          <p className="text-white/80 text-sm mt-1">
            {destinationInfo.tour_type} - {destinationInfo.category}
          </p>
        </div>
      </div>

      {/* Content Grid */}
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {/* Left side content */}
        <div className="md:col-span-2 space-y-6">
          {/* Quick Info */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-base-100 rounded-xl shadow-sm border">
              <p className="text-xs text-gray-500">Location</p>
              <p className="font-medium">{destinationInfo.location}</p>
            </div>
            <div className="p-4 bg-base-100 rounded-xl shadow-sm border">
              <p className="text-xs text-gray-500">Duration</p>
              <p className="font-medium">{destinationInfo.duration}</p>
            </div>
            <div className="p-4 bg-base-100 rounded-xl shadow-sm border">
              <p className="text-xs text-gray-500">Category</p>
              <p className="font-medium">{destinationInfo.category}</p>
            </div>
          </div>

          {/* Safety Info */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Safety & Advisory</h2>
            <div className="bg-base-100 rounded-xl shadow-sm border p-4">
              <p className="text-sm">{destinationInfo.safety_info.local_advisory}</p>
              <p className="text-xs mt-2 text-gray-500">
                Emergency Contact: <span className="font-medium">{destinationInfo.safety_info.emergency_contact}</span>
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Location Map</h2>
            <div className="bg-base-100 rounded-xl shadow-sm border p-4">
              {/* Map component */}
              <Map mapInfo={destinationInfo.itinerary}></Map>
              
            </div>
          </div>
        </div>

        {/* Right: Booking Card */}
        <aside className="space-y-6">
          <div className="sticky top-20 p-6 bg-base-100 rounded-xl shadow-lg border">
            <div className="flex items-center justify-between">
              <p className="text-gray-500 text-sm">Price per person</p>
              <p className="text-2xl font-bold">${destinationInfo.price}</p>
            </div>

            {/* Availability */}
            <div className="mt-4">
              <p className="font-medium mb-2">Select Date</p>
              <div className="flex flex-wrap gap-2">
                {destinationInfo.availability.length === 0 && (
                  <span className="text-gray-500 text-sm">No dates available</span>
                )}
                {destinationInfo.availability.map((date) => (
                  <button
                    key={date}
                    onClick={() => setSelectedDate(date)}
                    className={`px-3 py-1 rounded-full text-sm border transition ${selectedDate === date
                      ? "bg-primary text-white border-primary"
                      : "bg-white text-gray-700 border-gray-300 hover:border-primary"
                      }`}
                  >
                    {new Date(date).toLocaleDateString()}
                  </button>
                ))}
              </div>
            </div>

            {/* Booking Call to action */}
            <Link to="/booking">
            <button className="btn bg-gradient-to-r from-orange-400 to-red-400 w-full mt-6 text-white">Proceed to Checkout</button>
            </Link>

            {/* Transport Info */}
            <div className="mt-6 border-t pt-4 text-sm space-y-1">
              <p><span className="font-medium">Airport:</span> {destinationInfo.nearest_transport.airport}</p>
              <p><span className="font-medium">Train:</span> {destinationInfo.nearest_transport.train_station}</p>
              <p><span className="font-medium">Bus:</span> {destinationInfo.nearest_transport.bus_stop}</p>
            </div>
          </div>
        </aside>
      </div>

    </div>

  );
}