"use client";
import { useEffect } from "react";

const ScrollHandler = () => {
  useEffect(() => {
    const handleAnchorClick = (event: any) => {
      if (event.target.tagName === "A" && event.target.href.includes("#")) {
        event.preventDefault();
        const targetId = event.target.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: "smooth",
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return null;
};

export default ScrollHandler;
