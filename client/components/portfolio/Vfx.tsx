"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Vfx = () => {
  const loaderRef = useRef<HTMLDivElement>(null);
  const demoWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const showDemo = () => {
      if (document.body) document.body.style.overflow = "auto";
      if (document.scrollingElement) document.scrollingElement.scrollTo(0, 0);
      gsap.to(loaderRef.current, { autoAlpha: 0 });

      gsap.utils.toArray(".demo-section").forEach((section: any, i: number) => {
        const wrapper = section.querySelector(".wrapper");
        const [x, xEnd] = [ wrapper.scrollWidth * -1, 0];

        gsap.fromTo(
          wrapper,
          { x },
          {
            x: xEnd,
            scrollTrigger: {
              trigger: section,
              start: "center center",
              end: () => `+=${wrapper.scrollWidth - section.offsetWidth}`,
              scrub: 0.5,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true, 
            },
            duration: 2,
            ease: "power2.inOut",
          }
        );
      });
    };

    // Simulate image loading
    const loader = loaderRef.current?.querySelector(".loader--text");
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      if (loader) loader.textContent = `${progress}%`;
      if (progress >= 100) {
        clearInterval(interval);
        showDemo();
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        ref={loaderRef}
        className="fixed inset-0 bg-yellow-400 text-white flex items-center justify-center z-50"
      >
        <div>
          <h1 className="text-5xl">Loading</h1>
          <h2 className="loader--text text-2xl">0% </h2>
        </div>
      </div>

      <div ref={demoWrapperRef} className="demo-wrapper my-4">
        <section className="demo-section overflow-hidden">
          <div className="wrapper whitespace-nowrap">
            <h2 className="text-[clamp(6rem,13vw,14rem)] leading-none font-black inline-block">
              Vfx Projects Completed
            </h2>
          </div>
        </section>

        {[...Array(3)].map((_, i) => (
          <section key={i} className="demo-section overflow-hidden">
            <div className="wrapper flex">
              {[...Array(6)].map((_, j) => (
                <div
                  key={j}
                  className="w-[clamp(500px,60vw,800px)] flex-shrink-0 p-4 hover:-translate-y-2 translate-y-1  transform duration-300 cursor-pointer"
                >
                  <Image
                    src={`https://picsum.photos/seed/${i * 8 + j}/1240/874`}
                    alt={`Random image ${i}-${j}`}
                    width={1240}
                    height={874}
                    className="w-full h-96 aspect-video rounded-[16px] shadow-lg"
                  />
                </div>
              ))}
            </div>
          </section>
        ))}

        <section className="demo-section overflow-hidden">
          <div className="wrapper whitespace-nowrap">
            <h2 className="text-[clamp(8rem,15vw,16rem)] leading-none font-black inline-block">
              Aditya Kumar Dash
            </h2>
          </div>
        </section>
      </div>
    </>
  );
};

export default Vfx;
