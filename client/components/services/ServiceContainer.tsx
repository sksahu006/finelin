"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import GraphicService from "./GraphicService";
import ProductService from "./ProductService";
import ThreeDGraphics from "./ThreeDGraphics";
import VideoService from "./VideoService";
import VisulaService from "./VisulaService";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

type Service = {
  Component: () => JSX.Element;
  id: string;
};

const services: Service[] = [
  { Component: GraphicService, id: "graphic" },
  { Component: VideoService, id: "video" },
  { Component: ThreeDGraphics, id: "3d" },
  { Component: VisulaService, id: "visual" },
  { Component: ProductService, id: "product" },
];

export default function ServiceContainer() {
  const container = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const scrolling = useRef<boolean>(false);
  const currentIndex = useRef<number>(0);
  const isWithinContainer = useRef<boolean>(true);

  useLayoutEffect(() => {
    const sections = sectionsRef.current;

    const preventScroll = (e: WheelEvent) => {
      // Only prevent scroll when within the container
      if (isWithinContainer.current) {
        e.preventDefault();
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (scrolling.current) return;

      // Check if we're at the end and trying to scroll down
      if (currentIndex.current === sections.length - 1 && e.deltaY > 0) {
        isWithinContainer.current = false;
        return;
      }

      // Check if we're at the start and trying to scroll up
      if (currentIndex.current === 0 && e.deltaY < 0) {
        isWithinContainer.current = false;
        return;
      }

      // If we're not within the container sections, check if we should re-enter
      if (!isWithinContainer.current) {
        const containerTop = container.current?.getBoundingClientRect().top ?? 0;
        const containerBottom = container.current?.getBoundingClientRect().bottom ?? 0;
        
        if (containerTop > 0 && e.deltaY > 0) {
          isWithinContainer.current = true;
          currentIndex.current = 0;
        } else if (containerBottom < window.innerHeight && e.deltaY < 0) {
          isWithinContainer.current = true;
          currentIndex.current = sections.length - 1;
        } else {
          return;
        }
      }

      scrolling.current = true;

      if (e.deltaY > 0 && currentIndex.current < sections.length - 1) {
        currentIndex.current++;
      } else if (e.deltaY < 0 && currentIndex.current > 0) {
        currentIndex.current--;
      }

      const targetSection = sections[currentIndex.current];
      if (!targetSection) return;

      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: targetSection,
          autoKill: false
        },
        ease: "power2.inOut",
        onComplete: () => {
          scrolling.current = false;
        }
      });
    };

    let ctx = gsap.context(() => {
      sections.forEach((section) => {
        if (!section) return;

        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "bottom top",
          snap: {
            snapTo: 1,
            duration: { min: 0.2, max: 0.7 },
            delay: 0.1,
            ease: "power1.inOut"
          }
        });

        const content = section.querySelector('div');
        if (!content) return;

        gsap.fromTo(content,
          {
            y: 100,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: section,
              start: "top center",
              end: "center center",
              scrub: 1
            }
          }
        );
      });

      window.addEventListener("wheel", preventScroll, { passive: false });
      window.addEventListener("wheel", handleWheel);
    }, container);

    // Add scroll observer to detect when container is in view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          isWithinContainer.current = true;
        }
      });
    }, { threshold: 0.1 });

    if (container.current) {
      observer.observe(container.current);
    }

    return () => {
      ctx.revert();
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("wheel", handleWheel);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={container} className="relative">
    <div className="flex flex-col">
      {services?.map(({ Component, id }, index) => (
        <section
          key={id}
          ref={(el) => {
            sectionsRef.current[index] = el;
          }}
          className="h-screen w-full flex items-center justify-center"
        >
          <div className="container mx-auto px-4 h-full flex items-center">
            <Component />
          </div>
        </section>
      ))}
    </div>
  </div>
  );
}