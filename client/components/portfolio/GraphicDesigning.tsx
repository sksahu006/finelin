
"use client";

import React from "react";
import { InfiniteSlider } from "../ui/infinite-slider";
import { Tilt } from "../ui/tilt";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Image, Monitor, Palette, PenTool, Printer } from "lucide-react";

const GraphicDesigning = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-8 p-8 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <Card className="w-full rounded-[20px] lg:w-[45%] p-6 text-foreground bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-black/90">
        <CardHeader>
          <CardTitle className="text-4xl font-bold mb-2 text-yellow-300 hover:text-yellow-500 transition-all duration-300">
            Graphic Designing
          </CardTitle>
          <CardDescription className="text-lg text-neutral-300 hover:text-white transition-all duration-300">
            Explore our diverse portfolio showcasing innovative and creative
            design projects. From logo design to full branding solutions, our
            work spans across various industries.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-neutral-300 hover:text-white transition-all duration-300">
          <ul className="grid grid-cols-2 gap-4 my-6">
            {[
              {
                icon: <PenTool className="w-5 h-5 mr-2" />,
                text: "Logo Design",
              },
              {
                icon: <Palette className="w-5 h-5 mr-2" />,
                text: "Brand Identity",
              },
              {
                icon: <Printer className="w-5 h-5 mr-2" />,
                text: "Print Design",
              },
              {
                icon: <Image className="w-5 h-5 mr-2" />,
                text: "Illustrations",
              },
              {
                icon: <Monitor className="w-5 h-5 mr-2" />,
                text: "Web Design",
              },
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                <Badge variant="outline" className="mr-2 transform-cpu hover:-translate-y-2 hover:scale-110 duration-500 transition-all">
                  {item.icon}
                </Badge>
                {item.text}
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full sm:w-auto text-yellow-300 hover:text-yellow-400 transition-all duration-500 transform hover:translate-x-2 origin-left">
            View Projects
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </CardFooter>
      </Card>
      <div className="w-full lg:w-[55%] overflow-hidden rounded-xl shadow-2xl bg-black/90">
        <div className="h-[600px] relative">
          {/* <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10"></div> */}
          <InfiniteSlider
            direction="vertical"
            duration={30}
            className="transform rotate-[-10deg] scale-110 translate-x-[50%]"
          >
            {[...Array(6)].map((_, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <Tilt
                  springOptions={{ mass: 3, stiffness: 600, damping: 20 }}
                  rotationFactor={25}
                  isRevese
                >
                  <img
                    src={`https://picsum.photos/400/400?random=${index * 2}`}
                    alt={`Design example ${index * 2}`}
                    className="aspect-square w-60 rounded-[16px] object-cover"
                  />
                </Tilt>
                <Tilt
                  springOptions={{ mass: 3, stiffness: 600, damping: 20 }}
                  rotationFactor={25}
                  isRevese
                >
                  <img
                    src={`https://picsum.photos/400/400?random=${
                      index * 2 + 1
                    }`}
                    alt={`Design example ${index * 2 + 1}`}
                    className="aspect-square w-60 rounded-[16px] object-cover"
                  />
                </Tilt>
              </div>
            ))}
          </InfiniteSlider>
        </div>
        {/* <div className="absolute bottom-10 left-0 right-0 p-6 bg-gradient-to-t from-gray-900 to-transparent">
          <p className="text-white text-xl font-semibold flex items-center">
            <Palette className="mr-2" /> Inspiring Designs, Endless Possibilities
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default GraphicDesigning;
