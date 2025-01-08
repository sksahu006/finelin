"use client";
import GraphicDesigning from "@/components/portfolio/GraphicDesigning";
import Vfx from "@/components/portfolio/Vfx";
import VideoEditing from "@/components/portfolio/VideoEditing";

export default function Portfolio() {
  return (
    <>
      <h1 className="mt-28"></h1>
      <div id="video-editing" className="section">
        <VideoEditing />{" "}
      </div>{" "}
      <div id="graphic-design" className="section">
        {" "}
        <GraphicDesigning />{" "}
      </div>{" "}
      <div id="vfx" className="section">
        {" "}
        <Vfx />{" "}
      </div>
    </>
  );
}
