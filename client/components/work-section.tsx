"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { projects } from "@/data/projects";
import { CarouselCustomSizes } from "./HomeCarousel";

export default function WorkSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: (index: number) => ({
      opacity: 0,
      y: index % 2 === 0 ? 50 : -50,
    }),
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const getColumnStyle = (index: number) => {
    if (index % 3 === 0) return "md:mt-5";
    if (index % 3 === 1) return "md:-mt-10";
    if (index % 3 === 2) return "md:mt-0";
    return "";
  };

  return (
    <section className="py-20">
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-yellow-400 text-7xl font-[200] mb-16"
        >
          OUR WORK
        </motion.h2>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects?.map((project, index) => (
            <Link href={`/projects/${project.id}`} key={project.id}>
              <motion.div
                custom={index}
                variants={itemVariants}
                className={`group relative rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ${getColumnStyle(
                  index
                )}`}
              >
                <div className="relative h-[500px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-6 left-6">
                      <p className="text-yellow-400 text-sm mb-2">
                        {project.category}
                      </p>
                      <h3 className="text-white text-xl font-bold">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CarouselCustomSizes />
      </div>
    </section>
  );
}
