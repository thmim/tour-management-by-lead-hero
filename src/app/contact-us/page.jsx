import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 flex items-center justify-center px-6 py-16">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12 bg-white shadow-lg rounded-3xl p-10">
        
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-6">
            Get in <span className="text-gray-800">Touch</span>
          </h1>

          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Have a question, need help with your booking, or want to share feedback? 
            Our friendly Tourease team is always here to make your travel experience 
            smooth, safe, and unforgettable.
          </p>
{/* commit */}
          <div className="text-gray-700 text-lg space-y-3">
            <p>
              <span className="font-semibold">📧 Email:</span> support@tourease.com
            </p>
            <p>
              <span className="font-semibold">📞 Phone:</span> +880 1234 567890
            </p>
            <p>
              <span className="font-semibold">📍 Address:</span> 123 Tourease Street, Dhaka
            </p>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <Image
            src="/images/contact-us.jpg"
            alt="Travel Illustration"
            width={380}
            height={380}
            className="transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}
