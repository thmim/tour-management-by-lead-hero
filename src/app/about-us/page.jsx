export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20 text-center">
      {/* Title */}
      <h1 className="text-5xl font-extrabold text-orange-500 mb-6 tracking-tight">
        About <span className="text-gray-800">Tourease</span>
      </h1>

      {/* Divider */}
      <div className="w-20 h-1 bg-orange-400 mx-auto mb-10 rounded-full"></div>

      {/* Main Description */}
      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        Welcome to <span className="font-semibold text-orange-600">Tourease</span>, your trusted platform to discover
        amazing destinations and book stays with ease. Whether it’s a cozy apartment,
        a luxury villa, or a unique homestay — we make it effortless to find the perfect spot.
      </p>

      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        Our mission is to connect travelers with verified hosts and authentic experiences.
        Every listing is curated to ensure comfort, safety, and an unforgettable stay.
        With Tourease, planning your next adventure is simple, fast, and reliable.
      </p>

      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        From solo trips to family vacations, Tourease helps you explore the world
        without hassle. Browse, book, and enjoy your journey — all from one platform.
      </p>

      <p className="text-gray-700 text-lg leading-relaxed">
        Your next adventure is waiting. Let Tourease guide you there.
      </p>

    </div>
  );
}
