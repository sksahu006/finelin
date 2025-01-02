import { AnimatedHeading } from "../project-detail/AnimatedHeading";
import { TextEffect } from "../ui/text-effect";

export default function OurTeam() {
  return (
    <div className="relative bg-[#2e2e2e]  text-white py-16 px-6 md:px-24">
      <div className="flex flex-col space-y-4">
        <h2 className="text-3xl  font-bold text-yellow-500">Our Team</h2>
        <TextEffect
          per="char"
          preset="fade"
          delay={0.1}
          className="text-white opacity-80 tracking-wider selection:bg-yellow-300 selection:text-gray-700 text-xl font-[200] leading-9 text-start"
        >
          Our talented team of designers, developers, and artists work
          tirelessly to bring your vision to life. From concept to completion,
          we are committed to delivering exceptional results that exceed your
          expectations.
        </TextEffect>
        <TextEffect
          per="char"
          preset="fade"
          delay={0.1}
          className="text-white opacity-80 tracking-wider selection:bg-yellow-300 selection:text-gray-700 text-xl font-[200] leading-9 text-start"
        >
          At FineLin, we believe in the power of collaboration and
          communication. Our team works closely with you, understanding your
          goals and objectives, and ensuring that we deliver the best possible
          outcome for your project.
        </TextEffect>
      </div>
    </div>
  );
}
