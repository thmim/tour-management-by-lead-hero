"use client";
import React, { useState } from "react";
import YouTube from "react-youtube";
import { FaPlay } from "react-icons/fa";

export default function Video() {
  const [open, setOpen] = useState(false);
  const VIDEO_ID = "1ocqqSeUrMo"; // Replace with your video ID

  const previewOpts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
      mute: 1,
      loop: 1,
      playlist: VIDEO_ID,
      controls: 0,
      modestbranding: 1,
      rel: 0,
      disablekb: 1,
      fs: 0,
      iv_load_policy: 3,
      playsinline: 1,
    },
  };

  const modalOpts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
      controls: 1,
      modestbranding: 1,
      rel: 0,
    },
  };

  return (
    <section className="relative w-full h-screen overflow-hidden text-white">
      {/* Fullscreen Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <YouTube
            videoId={VIDEO_ID}
            opts={previewOpts}
            className="absolute top-1/2 left-1/2 w-[150%] sm:w-[130%] h-[150%] sm:h-[130%] -translate-x-1/2 -translate-y-1/2 scale-[1.2] sm:scale-[1.1] pointer-events-none"
          />
        </div>
      </div>

      {/* Overlay Gradient for better text contrast */}
      <div className="absolute inset-0 bg-black/30 sm:bg-black/20" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 drop-shadow-lg leading-tight">
          Discover the Beauty of Nature
        </h2>
        <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-xs sm:max-w-xl opacity-95 drop-shadow-md">
          Explore breathtaking landscapes, peaceful campsites, and unforgettable
          sunsets. Your next adventure begins here.
        </p>

        <button
          onClick={() => setOpen(true)}
          className="flex items-center justify-center w-14 h-14 sm:w-20 sm:h-20 bg-white/25 rounded-full border border-white/50 hover:scale-110 transition duration-300"
        >
          <FaPlay className="text-lg sm:text-2xl text-white ml-1" />
        </button>
      </div>

      {/* Corner Texts */}
      <div className="absolute top-16 sm:top-24 left-[8%] text-xs sm:text-sm tracking-widest opacity-90">
        CAMPING
      </div>
      <div className="absolute bottom-20 sm:bottom-24 right-[10%] text-xs sm:text-sm tracking-widest opacity-90">
        HOLIDAYS
      </div>
      <div className="absolute bottom-16 sm:bottom-20 left-[8%] text-xs sm:text-sm flex items-center gap-1 opacity-90">
        <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span> REC
      </div>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 px-2"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full sm:w-[90%] md:w-[70%] lg:w-[60%] aspect-video rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <YouTube videoId={VIDEO_ID} opts={modalOpts} className="w-full h-full" />
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 bg-black/60 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
