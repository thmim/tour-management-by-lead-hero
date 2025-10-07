// StepProcess.jsx
import React from "react";
import step1 from "../../public/images/step1.png";
import step2 from "../../public/images/step2.png";
import step3 from "../../public/images/step3.png";

const steps = [
  {
    id: 1,
    title: "Select tour & Fill information",
    desc: "Browse through our wide range of exciting tours, pick the one that matches your interests, and fill out the booking form with your details to get started.",
    img: "/images/step1.png",
    step: "Step 01",
  },
  {
    id: 2,
    title: "Process payment",
    desc: "Complete your booking safely and quickly through our secure online payment system. Multiple payment options are available for your convenience.",
    img: "/images/step2.png",
    step: "Step 02",
  },
  {
    id: 3,
    title: "Get confirmation & Enjoy the trip!",
    desc: "Once your payment is successful, you’ll instantly receive a booking confirmation along with all the necessary details. Now pack your bags and get ready for the adventure!",
    img: "/images/step3.png",
    step: "Step 03",
  },
];

export default function StepProcess() {
  return (
    <section className="py-10 md:py-20 bg-base-100">
      <div className="text-center mb-12">
        <h4 className="text-accent font-semibold uppercase">
          Step by Step Process
        </h4>
        <h2 className="text-3xl md:text-4xl font-medium mt-2">
          How To Book Your Adventure?
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto px-6">
        {steps.map((step) => (
          <div
            key={step.id}
            className="text-center flex flex-col items-center shadow-lg p-6 rounded-2xl hover:shadow-orange-200 transition-shadow duration-300"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={step.img}
                alt={step.title}
                className="w-64 h-64 object-contain mx-auto"
              />
              <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded">
                {step.step}
              </span>
            </div>

            {/* Title & Description */}
            <h3 className="text-xl font-bold mt-6">{step.title}</h3>
            <p className="text-gray-400 mt-3">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
