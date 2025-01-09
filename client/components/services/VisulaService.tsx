import Image from "next/image";

export default function VisulaService() {
  return (
    <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-6 my-6">
      <div className="w-full md:w-1/2 flex flex-col items-start justify-start gap-4 h-auto">
        <h1 className="text-4xl font-bold">VFX (Visual Effects)</h1>
        <p className="text-black/50 dark:text-yellow-400 text-xs sm:text-lg hover:text-black/80 dark:hover:text-yellow-300 transition-colors text-start leading-8 tracking-wider">
          Enhance your content with cutting-edge visual effects that add depth,
          realism, and creativity. Our VFX experts specialize in post-production
          techniques, including compositing, CGI, and motion tracking, to create
          extraordinary visual experiences.
        </p>
        <p className="text-black/50 dark:text-yellow-400 text-xs sm:text-lg hover:text-black/80 dark:hover:text-yellow-300 transition-colors text-start leading-8 tracking-wider">
          We provide: Rotoscoping, Tracking, Paint, Keying, Composition.
        </p>
        {/* move the button to the end of the container vertically */}
        <button className="mt-5 bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition-colors ">
          Book A Slot
        </button>
      </div>
      <div className="w-full md:w-1/2">
        <Image
          src="/vfx.png"
          alt="VFX"
          width={400}
          height={400}
          className="w-full rounded-2xl max-h-[400px] object-cover"
        />
      </div>
    </div>
  );
}
