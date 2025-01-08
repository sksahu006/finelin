"use client";

import { motion, useInView } from "framer-motion";
import { projects } from "@/data/projects";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { AnimatedHeading } from "./AnimatedHeading";
import { TextEffect } from "../ui/text-effect";

export default function ProjectDetailClient({ id }: { id: string }) {
  const project = projects?.find((p) => p.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });

  return (
    <>
      <div className="min-h-screen bg-white text-black">
        {/* Hero Section */}
        <div className="relative h-[70vh] w-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2c2f2f] to-transparent" />
          <Link
            href="/"
            className="absolute top-8 left-8 flex items-center text-black hover:text-[#cfb406] transition-colors"
          >
            <ArrowLeft className="mr-2" />
            Back to Projects
          </Link>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 mb-12">
              {/* Image Section */}
              <div className="w-full md:w-1/3">
                <div className="relative w-full mb-4 aspect-[3/4]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover rounded-md custom-shadow"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="flex flex-col space-y-8 md:w-2/5">
                <AnimatedHeading
                  text={project.status || "In Production"}
                  className="text-gray-300 text-md font-[200]"
                  delay={0.2}
                />

                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="bg-yellow-400 w-2 h-8 mr-4"></div>
                    <AnimatedHeading
                      text={project.title}
                      className="text-gray-400 text-4xl tracking-wider font-semibold"
                      delay={0.4}
                    />
                  </div>
                </div>

                <div className="space-y-2 tracking-wider">
                  <AnimatedHeading
                    text="Writer & Director"
                    className="text-black text-2xl font-normal"
                    delay={0.6}
                  />
                  <AnimatedHeading
                    text={project.director || ""}
                    className="text-black text-base"
                    delay={0.7}
                  />
                </div>

                <div className="space-y-2 tracking-wider">
                  <AnimatedHeading
                    text="Production Company"
                    className="text-black text-2xl font-normal"
                    delay={0.8}
                  />
                  <AnimatedHeading
                    text={project.productionCompanies?.join(", ") || ""}
                    className="text-black text-base"
                    delay={0.9}
                  />
                </div>

                <div className="space-y-2 tracking-wider">
                  <AnimatedHeading
                    text="VFX Supervisor"
                    className="text-black text-2xl font-normal"
                    delay={1.0}
                  />
                  <AnimatedHeading
                    text={project.vfxSupervisor || "N/A"}
                    className="text-black text-base"
                    delay={1.1}
                  />
                </div>

                <div className="space-y-2 tracking-wider">
                  <AnimatedHeading
                    text="VFX Producers"
                    className="text-black text-2xl font-normal"
                    delay={1.2}
                  />
                  <AnimatedHeading
                    text={project.vfxProducers?.join(", ") || "N/A"}
                    className="text-black text-base"
                    delay={1.3}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
          <div className="flex flex-col gap-4">
            <motion.div
              ref={ref1}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView1 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              {/* <AnimatedHeading
                text="William Tell is written and directed by Nick Hamm, adapted from Friedrich Schiller's world renowned classical play."
                className="text-black tracking-wider selected:bg-yellow-300 text-2xl font-light leading-9 text-start"
                delay={0.2}
              /> */}
            </motion.div>

            <motion.div
              ref={ref2}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <AnimatedHeading
                text="The narrative unfolds in the 14th Century amidst the waning days of the Holy Roman Empire where Europe's nations fiercely vie for supremacy and the ambitious Austrians, desiring more land, encroach upon Switzerland, a serene and pastoral nation."
                className="text-black tracking-wider selected:bg-yellow-300 text-2xl font-light leading-9 text-start"
                delay={0.3}
              />
            </motion.div>

            <motion.div
              ref={ref3}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView3 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <AnimatedHeading
                text="Amidst this backdrop, William Tell, a formerly peaceful hunter, finds himself forced to take action as his family and homeland come under dire threat from the oppressive Austrian King and his ruthless warlords. Leading his fellow countrymen, Tell embarks on a courageous rebellion, seeking to defend their liberty and stand against the tyrannical forces that seek to subjugate them."
                className="text-black tracking-wider selected:bg-yellow-300 text-2xl font-light leading-9 text-start"
                delay={0.4}
              />
            </motion.div>
          </div>
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-7xl flex justify-center mx-auto px-4 sm:px-6 lg:px-8 my-16"
          >
            <iframe
              width="70%"
              height="500"
              src="https://www.youtube.com/embed/h3fqD6IprIA?si=_-hba4g90tdJh9sM"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              style={{
                border: "none",
                boxShadow: "15px 14.5px 1px 1.5px #171717",
                opacity: "0.8",
              }}
            ></iframe>
          </motion.div>
        </div>
      </div>
    </>
  );
}