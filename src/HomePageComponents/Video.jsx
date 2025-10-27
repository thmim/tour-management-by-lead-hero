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
    height: "500",
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
      {/* Fullscreen background video */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <YouTube
            videoId={VIDEO_ID}
            opts={previewOpts}
            className="absolute top-1/2 left-1/2 w-[120%] h-[120%] -translate-x-1/2 -translate-y-1/2 scale-[1.2] pointer-events-none"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Discover the Beauty of Nature
        </h2>
        <p className="text-base md:text-lg mb-8 max-w-xl opacity-95 drop-shadow-md">
          Explore breathtaking landscapes, peaceful campsites, and unforgettable
          sunsets. Your next adventure begins here.
        </p>

        <button
          onClick={() => setOpen(true)}
          className="flex items-center justify-center w-20 h-20 bg-white/20 rounded-full border border-white/50 hover:scale-110 transition duration-300"
        >
          <FaPlay className="text-2xl text-white ml-1" />
        </button>
      </div>

      {/* Corner Texts */}
      <div className="absolute top-24 left-[10%] text-sm tracking-widest">
        CAMPING
      </div>
      <div className="absolute bottom-24 right-[15%] text-sm tracking-widest">
        HOLIDAYS
      </div>
      <div className="absolute bottom-20 left-[10%] text-sm flex items-center gap-1">
        <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span> REC
      </div>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-[90%] md:w-[70%] lg:w-[60%] rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <YouTube
              videoId={VIDEO_ID}
              opts={modalOpts}
              className="rounded-2xl"
            />
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
