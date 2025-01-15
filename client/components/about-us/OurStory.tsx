"use client";
import React from "react";
import { AnimatedHeading } from "../project-detail/AnimatedHeading";

const OurStorySection = () => {
  return (
    <section className="relative bg-gray-100">
      {/* Hero Image Container with specified height*/}
      <div className="relative h-[500px]">
        {/* Hero Image Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('Aboutus.png')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div className="relative px-6 py-24 md:px-24 flex justify-start items-center">
          <div className="flex flex-col space-y-4">
            <div className=" text-yellow-500  text-4xl font-bold border-l-4 border-yellow-500 pl-2">
              Our Story
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative  text-black py-16 px-6 sm:px-10 md:px-40 grid md:grid-cols-2 gap-10">
        {/* Text Content */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-3xl  font-bold text-yellow-500">
            Welcome to FineLin!
          </h2>
          <AnimatedHeading
            delay={0.1}
            className="text-gray-900 opacity-80 tracking-wider selection:bg-yellow-300 selection:text-gray-700 text-xl font-[200] leading-9 text-start"
            text="At FineLin, we specialize in creating powerful visuals that tell your story and leave a lasting impression.With over four years of experience in Graphic Design, Video Editing, 3D Visualization,VFX, Animation, and Product Shoots, we’ve had the privilege of working with startups and established brands across various industries."
          ></AnimatedHeading>
        </div>

        {/* Video Embed */}
        <div className="relative aspect-video">
          <div
            className=" absolute inset-0 flex justify-center items-center cursor-pointer"
            // onClick={() =>
            //   window.open(
            //     "https://www.youtube.com/watch?v=cUGOK7pHwJs",
            //     "_blank"
            //   )
            // }
          >
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="w-16 h-16 rounded-full bg-yellow-500 flex justify-center items-center text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z"
                />
              </svg>
            </div>
          </div>
          <img
            src="about.png"
            alt="video"
            className="w-full h-full object-cover  custom-shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
