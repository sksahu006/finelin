import { AnimatedHeading } from "../project-detail/AnimatedHeading";

export default function VisionValue() {
  return (
    <div className="relative bg-[#2e2e2e]  text-white py-16 px-6 md:px-24">
      <div className="flex flex-col space-y-4">
        <h2 className="text-3xl  font-bold text-yellow-500">
          Our Vision
        </h2>
        <AnimatedHeading
          delay={0.2}
          className="text-white opacity-80 tracking-wider selection:bg-yellow-300 selection:text-gray-700 text-xl font-[200] leading-9 text-start"
          text="At FineLin, our vision is simple: to help bring your ideas to life through creative and meaningful visuals.
           We believe in the power of good design and storytelling to make a real impact. Our goal is to work closely with each client, no matter the size, to create visuals that connect, inspire, and leave a lasting impression. We are committed to treating every project with care, attention to detail, and a dedication to excellence."
        ></AnimatedHeading>
      </div>
    </div>
  );
}
