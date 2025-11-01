export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20 text-center">
      {/* Title */}
      <h1 className="text-5xl font-extrabold text-orange-500 mb-6 tracking-tight">
        About <span className="text-gray-800">TourEase</span>
      </h1>

      {/* Divider */}
      <div className="w-20 h-1 bg-orange-400 mx-auto mb-10 rounded-full"></div>

      {/* Main Description */}
      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        <span className="font-semibold text-orange-600">TourEase</span> is an AI-powered travel management platform that helps you discover destinations, plan trips efficiently, and book tours effortlessly. Whether you’re looking for a cozy apartment, a luxury villa, or a unique local experience, we make every trip seamless and enjoyable.
      </p>

      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        Our smart AI system analyzes your preferences, budget, and interests to suggest the perfect destinations. Solo travelers can also find compatible companions through our Travel Companion Match, ensuring safety and fun along the way.
      </p>

      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        From eco-friendly travel options to connecting with local businesses, TourEase brings together everything you need for a memorable journey. all in one platform.
      </p>

      <p className="text-gray-700 text-lg leading-relaxed">
        Let TourEase guide your next adventure and make exploring the world simple, safe, and unforgettable.
      </p>
    </div>
  );
}
