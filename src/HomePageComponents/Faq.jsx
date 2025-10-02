"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HelpCircle,
  Plus,
  Zap,
  Users,
  CreditCard,
  Shield,
  Calendar,
  Globe,
} from "lucide-react";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState("general");

  const categories = [
    { id: "general", name: "General", icon: Globe, color: "from-orange-500 to-red-500" },
    { id: "booking", name: "Booking", icon: Calendar, color: "from-orange-500 to-red-500" },
    { id: "payment", name: "Payment", icon: CreditCard, color: "from-orange-500 to-red-500" },
    { id: "safety", name: "Safety", icon: Shield, color: "from-orange-500 to-red-500" },
  ];

  const faqData = {
    general: [
      {
        question: "What is TourEase and how does it work?",
        answer:
          "TourEase is an AI-powered travel management platform that helps you discover destinations, plan trips, book tours, and connect with fellow travelers.",
      },
      {
        question: "How does the Smart Destination Recommender work?",
        answer:
          "Our AI system analyzes your travel preferences, budget, and interests to suggest the perfect destinations for you.",
      },
      {
        question: "Can I find travel companions on TourEase?",
        answer:
          "Yes! Our Travel Companion Match feature connects solo travelers with compatible companions based on interests, age, and destinations.",
      },
    ],
    booking: [
      {
        question: "How do I book a tour through TourEase?",
        answer:
          "Browse destinations, select your preferred tour, choose dates and group size, then proceed to checkout.",
      },
      {
        question: "Can I modify or cancel my booking?",
        answer:
          "Yes, you can modify bookings up to 48 hours before departure. Cancellation policies depend on the tour operator.",
      },
      {
        question: "What's included in the tour packages?",
        answer:
          "Packages include accommodations, guided tours, transportation, and some meals. Details are listed for each tour.",
      },
    ],
    payment: [
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept credit cards, PayPal, bank transfers, and mobile payments. All transactions are secure and encrypted.",
      },
      {
        question: "How does the cost splitting feature work?",
        answer:
          "Our Budget Calculator divides trip costs among group members and lets you track who has paid.",
      },
      {
        question: "Are there any hidden fees?",
        answer:
          "No hidden fees! All costs are shown before payment, including taxes, service fees, and optional add-ons.",
      },
    ],
    safety: [
      {
        question: "How do you ensure traveler safety?",
        answer:
          "We offer 24/7 emergency support, verified contacts, real-time alerts, and travel insurance options.",
      },
      {
        question: "What if there's an emergency during my trip?",
        answer:
          "Our Emergency Support connects you with local services, hospitals, police, and evacuation assistance.",
      },
      {
        question: "How are local guides verified?",
        answer:
          "All guides undergo background checks, certification verification, and regular performance reviews.",
      },
    ],
  };

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-10 md:py-20 relative overflow-hidden">
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center lg:mb-16 mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-medium mb-6"
          >
            <span className="text-accent text-sm md:text-lg mb-2 block">FAQS</span>
            <span className="block bg-clip-text">Frequently Asked Questions</span>
          </motion.h2>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setActiveIndex(null);
                }}
                onMouseEnter={() => setHoveredCategory(category.id)}
                onMouseLeave={() => setHoveredCategory(null)}
                className={`relative px-6 py-3 rounded-2xl font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === category.id
                    ? "text-white shadow-lg transform scale-105"
                    : "bg-white/70 text-gray-700 hover:bg-white/90 border border-white/50"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {activeCategory === category.id && (
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-2xl`}
                    layoutId="activeCategory"
                    initial={false}
                    transition={{ duration: 0.3 }}
                  />
                )}
                <div className="relative z-10 flex items-center gap-2">
                  <IconComponent className="w-5 h-5" />
                  {category.name}
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              {faqData[activeCategory].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/70 backdrop-blur-lg rounded-2xl border border-white/50 shadow-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-2 py-2 md:px-6 md:py-6 text-left flex items-center justify-between hover:bg-white/50 transition-colors duration-300 group"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-12 h-12 bg-gradient-to-r from-accent-500/20 to-red-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <HelpCircle className="w-6 h-6 text-accent" />
                      </div>
                      <h3 className="font-semibold text-gray-900 text-lg group-hover:text-accent transition-colors duration-300">
                        {faq.question}
                      </h3>
                    </div>
                    <motion.div
                      animate={{ rotate: activeIndex === index ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center"
                    >
                      <Plus className="w-4 h-4 text-white" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <div className="lg:pl-16">
                            <p className="text-gray-700 mb-4 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
