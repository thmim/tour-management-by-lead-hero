import Marquee from "react-fast-marquee";

export default function LatestTour() {
  const row1 = [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60", // Beach
    "https://images.unsplash.com/photo-1518684079-7c11b5291f2d?auto=format&fit=crop&w=800&q=60", // Mountains
    "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=60", // City
    "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=800&q=60", // Forest
  ];

  const row2 = [
    "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=800&q=60", // Desert
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60", // Beach
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=60", // Lake
    "https://images.unsplash.com/photo-1518684079-7c11b5291f2d?auto=format&fit=crop&w=800&q=60", // Mountains
  ];

  const row3 = [
    "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=800&q=60", // Forest
    "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=60", // City
    "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=800&q=60", // Desert
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=60", // Lake
  ];

  const renderRow = (images, reverse = false) => (
    <Marquee
      direction={reverse ? "right" : "left"}
      pauseOnHover={true}
      speed={35}
      gradient={true}
      gradientColor={[11, 0, 26]}
      gradientWidth={100}
      className="py-6 overflow-hidden"
    >
      {images.map((src, i) => (
        <div
          key={i}
          className="w-[340px] min-w-[340px] mx-4 rounded-2xl overflow-hidden relative shadow-2xl transition-all duration-300 hover:scale-[1.05] hover:shadow-purple-600/50 group"
        >
          <img
            src={src}
            alt={`tour-${i}`}
            className="w-full h-[220px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent group-hover:from-purple-800/40 transition-all duration-300"></div>
          <div className="absolute bottom-0 p-4 z-10">
            <p className="text-xs text-gray-300">Tour Package</p>
            <h3 className="font-semibold text-lg">Exciting Destination</h3>
          </div>
        </div>
      ))}
    </Marquee>
  );

  return (
    <section className="w-full py-20   overflow-hidden">
      <div className=" mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-3">Latest Tours</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore our latest travel destinations. Hover on each tour to preview!
          </p>
        </div>

        {/* Marquee Rows */}
        <div className="space-y-10 overflow-hidden">
          {renderRow(row1, false)} {/* left to right */}
          {renderRow(row2, true)}  {/* right to left */}
          {renderRow(row3, false)} {/* left to right */}
        </div>
      </div>
    </section>
  );
}
