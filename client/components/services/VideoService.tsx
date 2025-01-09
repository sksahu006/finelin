import Image from "next/image";

export default function VideoService() {
  return (
    <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-6 my-6">
      <div className="w-full md:w-1/2 flex flex-col items-start justify-start gap-4 h-auto">
        <h1 className="text-4xl font-bold">Video Editing</h1>
        <p className="text-black/50 dark:text-yellow-400 text-xs sm:text-lg hover:text-black/80 dark:hover:text-yellow-300 transition-colors text-start leading-8 tracking-wider">
          Transform raw footage into polished, professional videos that tell
          your story. Our expert editors use advanced tools to enhance visuals,
          refine transitions, and deliver content that captivates audiences and
          meets your unique vision.
        </p>
        <p className="text-black/50 dark:text-yellow-400 text-xs sm:text-lg hover:text-black/80 dark:hover:text-yellow-300 transition-colors text-start leading-8 tracking-wider">
          We provide: Short Form Video Editing: Instagram reels, YouTube shorts,
          TikTok & Many more Long Form Video Editing: Marketing & Commercial,
          Music, Travel, YouTube, Podcast, Short Films & Many more
        </p>
        {/* move the button to the end of the container vertically */}
        <button className="mt-5 bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition-colors ">
          Book A Slot
        </button>
      </div>
      <div className="w-full md:w-1/2">
        <Image
          src="/video.png"
          alt="Graphic Designing"
          width={400}
          height={400}
          className="w-full rounded-2xl max-h-[400px] object-cover"
        />
      </div>
    </div>
  );
}
