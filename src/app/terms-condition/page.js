

const TermsAndConditions = ({ lastUpdated }) => {
  return (
    <div className="max-w-4xl mt-16 mb-4 mx-auto p-10 bg-gradient-to-b from-orange-50 to-white rounded-2xl shadow-2xl border border-orange-200">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-orange-600 tracking-wide drop-shadow-sm">
          Terms & Conditions
        </h1>
        <p className="text-gray-600 text-sm mt-3 italic">
          For TourEase — Last Updated: {lastUpdated}
        </p>
      </div>

      {/* Section 1 */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-orange-500 mb-3">1. Acceptance of Terms</h2>
        <p className="text-gray-700 leading-relaxed">
          By booking a trip or using any services through{" "}
          <span className="font-semibold text-orange-600">TourEase</span>, you agree to comply
          with and be bound by these Terms & Conditions. If you do not agree, you may not access
          our services.
        </p>
      </section>

      {/* Section 2 */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-orange-500 mb-3">2. Booking & Payments</h2>
        <p className="text-gray-700 leading-relaxed">
          All bookings are subject to availability. Full or partial payments may be required to
          confirm reservations. Prices are subject to change based on availability, seasonal demand,
          and third-party suppliers.
        </p>
      </section>

      {/* Section 3 */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-orange-500 mb-3">3. Cancellations & Refunds</h2>
        <p className="text-gray-700 leading-relaxed">
          Cancellation policies vary depending on the service provider.{" "}
          <span className="font-semibold text-orange-600">TourEase</span> will make every effort
          to secure refunds when eligible, but we are not responsible for third-party policies.
          Please review cancellation details before confirming a booking.
        </p>
      </section>

      {/* Section 4 */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-orange-500 mb-3">4. Travel Requirements</h2>
        <p className="text-gray-700 leading-relaxed">
          Travelers are responsible for ensuring they have valid passports, visas, health documents,
          and insurance. <span className="font-semibold text-orange-600">TourEase</span> is not
          liable for denied boarding, entry restrictions, or additional costs arising from
          non-compliance.
        </p>
      </section>

      {/* Section 5 */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-orange-500 mb-3">5. Limitation of Liability</h2>
        <p className="text-gray-700 leading-relaxed">
          While we strive to provide seamless travel experiences,{" "}
          <span className="font-semibold text-orange-600">TourEase</span> is not liable for delays,
          accidents, natural disasters, or events beyond our control. Our responsibility is limited
          to the value of services booked through us.
        </p>
      </section>

      {/* Section 6 */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-orange-500 mb-3">6. Changes to Terms</h2>
        <p className="text-gray-700 leading-relaxed">
          <span className="font-semibold text-orange-600">TourEase</span> reserves the right to
          update or modify these Terms & Conditions at any time. Continued use of our services
          constitutes acceptance of the updated terms.
        </p>
      </section>

      {/* Footer */}
      <div className="border-t border-orange-200 pt-6 mt-10 text-center text-sm text-gray-600">
        <p>
          Have questions? Contact us at{" "}
          <a
            href="mailto:support@tourease.com"
            className="text-orange-600 font-semibold hover:underline"
          >
            support@tourease.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;