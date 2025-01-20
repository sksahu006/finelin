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

// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// const videos = [
//   "https://res.cloudinary.com/dprc07xle/video/upload/v1735397401/xv4garibmjrbzqtz7kkb.mp4",
//   "https://res.cloudinary.com/dolaacjcb/video/upload/v1737353906/keying_comp_-_rl28ji.mp4",
//   "https://res.cloudinary.com/dolaacjcb/video/upload/v1737354007/character_01_dvdzw7.mp4",
// ];

// export default function HeroSection() {
//   const sliderRef = useRef(null);
//   const videoRefs = useRef([]);

//   useEffect(() => {
//     gsap.to(videoRefs.current, {
//       xPercent: -100 * (videos.length - 1),
//       ease: "power1.inOut",
//       scrollTrigger: {
//         trigger: sliderRef.current,
//         start: "top top",
//         end: "+=2000",
//         scrub: true,
//         pin: true,
//       },
//     });
//   }, []);

//   return (
//     <div ref={sliderRef} className="relative w-full h-screen overflow-hidden flex">
//       {videos.map((src, index) => (
//         <video
//           key={index}
//           ref={(el) => (videoRefs.current[index] = el)}
//           autoPlay
//           muted
//           loop
//           playsInline
//           className="absolute top-0 left-0 w-full h-full object-cover"
//         >
//           <source src={src} type="video/mp4" />
//         </video>
//       ))}
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/50" />

//       {/* Content */}
//       <div className="absolute bottom-10 left-10 text-white">
//         <div className="flex items-center gap-2">
//           <div className="w-2 h-8 bg-yellow-400" />
//           <h1 className="text-3xl md:text-4xl text-yellow-400 font-semibold tracking-wider">
//             ReDefining the Art of VFX and Animation
//           </h1>
//         </div>
//       </div>
//     </div>
//   );
// }
