"use client";

import { useEffect, useRef } from "react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        poster="/video-poster.jpg"
      >
        <source src="https://res.cloudinary.com/dolaacjcb/video/upload/v1737100485/work_2_1_hq5rhu.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative h-full flex items-end justify-start  text-white">
        <div className="max-w-4xl px-4 sm:px-10 lg:px-40 text-center flex gap-2">
          <div className="w-2 h-8 bg-yellow-400 mx-auto mb-8" />
          <h1 className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6 text-start tracking-wider">
            ReDefining the Art of VFX and Animation
          </h1>
        </div>
      </div>
    </div>
  );
}
