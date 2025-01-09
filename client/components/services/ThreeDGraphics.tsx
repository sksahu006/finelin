import Image from "next/image";

export default function ThreeDGraphics() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-6 my-6">
      <div className="w-full md:w-1/2 flex flex-col items-start justify-start gap-4 h-auto">
        <h1 className="text-4xl font-bold">3D Commercials</h1>
        <p className="text-black/50 dark:text-yellow-400 text-xs sm:text-lg hover:text-black/80 dark:hover:text-yellow-300 transition-colors text-start leading-8 tracking-wider">
          Bring your ideas to life with stunning 3D visuals that captivate and
          engage. From concept development to final rendering, we craft
          immersive 3D commercials that elevate your brand and leave a lasting
          impact.
        </p>
        <p className="text-black/50 dark:text-yellow-400 text-xs sm:text-lg hover:text-black/80 dark:hover:text-yellow-300 transition-colors text-start leading-8 tracking-wider">
          We provide: Photorealistic model with 360-degree view, Commercial,
          Animation videos, Product animation videos, Industrial machine videos.
        </p>
        {/* move the button to the end of the container vertically */}
        <button className="mt-5 bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition-colors ">
          Book A Slot
        </button>
      </div>
      <div className="w-full md:w-1/2">
        <Image
          src="/3d-commercials.png"
          alt="3D Commercials"
          width={400}
          height={400}
          className="w-full rounded-2xl max-h-[400px] object-cover"
        />
      </div>
    </div>
  );
}
