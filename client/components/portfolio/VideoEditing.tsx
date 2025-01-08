import React, { useEffect, useState, useRef } from "react";
import { InfiniteSlider } from "../ui/infinite-slider";
import useMouseDirectionOnHover from "@/hooks/useMouseDirection";
import { Tilt } from "../ui/tilt";

const VideoEditing = () => {
  const sliderRef = useRef(null);
  const isMovingLeft = useMouseDirectionOnHover(sliderRef);
  const [reverse, setReverse] = useState(isMovingLeft);

  useEffect(() => {
    setReverse(isMovingLeft);
  }, [isMovingLeft]);

  return (
    <div className="my-6" ref={sliderRef}>
      <h1 className="text-4xl font-bold tracking-wider text-yellow-400 hover:text-yellow-500 transition-all duration-300">Video Editing</h1>
      <InfiniteSlider
        // reverse={reverse}
        durationOnHover={60}
        gap={24}
        className="py-10"
      >
        <Tilt rotationFactor={15} isRevese>
          <img
            src="https://i.scdn.co/image/ab67616d00001e02ad24c5e36ddcd1957ad35677"
            alt="Dean blunt - Black Metal 2"
            className="h-96 aspect-video w-full rounded-[16px] object-cover transform transition-transform hover:scale-110 hover:translate-y-2"
          />
        </Tilt>
        <Tilt rotationFactor={15} isRevese>
        <img
          src="https://i.scdn.co/image/ab67616d00001e02af73f776b92d4614152fb141"
          alt="Jungle Jack - JUNGLE DES ILLUSIONS VOL 2"
          className="h-96 aspect-video w-full rounded-[16px] object-cover transform transition-transform hover:scale-110 hover:translate-y-2"
        />
        </Tilt>
        <Tilt rotationFactor={15} isRevese>
        <img
          src="https://i.scdn.co/image/ab67616d00001e02ecdb8f824367a53468100faf"
          alt="Yung Lean - Stardust"
          className="h-96 aspect-video w-full rounded-[16px] object-cover transform transition-transform hover:scale-110 hover:translate-y-2"
        />
        </Tilt>
        <Tilt rotationFactor={15} isRevese>
        <img
          src="https://i.scdn.co/image/ab67616d00001e021624590458126fc8b8c64c2f"
          alt="Lana Del Rey - Ultraviolence"
          className="h-96 aspect-video w-full rounded-[16px] object-cover transform transition-transform hover:scale-110 hover:translate-y-2"
        />
        </Tilt>
        <Tilt rotationFactor={15} isRevese>
        <img
          src="https://i.scdn.co/image/ab67616d00001e020dcf0f3680cff56fe5ff2288"
          alt="A$AP Rocky - Tailor Swif"
          className="h-96 aspect-video w-full rounded-[16px] object-cover transform transition-transform hover:scale-110 hover:translate-y-2"
        />
        </Tilt>
        <Tilt rotationFactor={15} isRevese>
        <img
          src="https://i.scdn.co/image/ab67616d00001e02bc1028b7e9cd2b17c770a520"
          alt="Midnight Miami (feat Konvy) - Nino Paid, Konvy"
          className="h-96 aspect-video w-full rounded-[16px] object-cover transform transition-transform hover:scale-110 hover:translate-y-2"
        />
        </Tilt>
      </InfiniteSlider>
    </div>
  );
};

export default VideoEditing;
