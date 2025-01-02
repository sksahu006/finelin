import OurStorySection from "@/components/about-us/OurStory";
import OurTeam from "@/components/about-us/OurTeam";
import VisionValue from "@/components/about-us/VisionValue";

export const metadata = {
  title: "ReDefine Our Story",
  description:
    "Explore ReDefine's story, fresh approach to VFX and Animation for film, episodic and multiplatform content.",
  openGraph: {
    title: "ReDefine Our Story",
    description:
      "Explore ReDefine's story, fresh approach to VFX and Animation for film, episodic and multiplatform content.",
    images: [
      "https://redefine.co/wp-content/uploads/2022/11/OurStory-Banner1.jpg",
    ],
  },
};

export default function Home() {
  return (
    <div>
      <OurStorySection />
      <VisionValue />
      <OurTeam />
    </div>
  );
}
