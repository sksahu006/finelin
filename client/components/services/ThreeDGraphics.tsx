// import { useRef, useState } from "react";
// import { AnimatePresence, motion } from "motion/react";
// import { Mail } from "lucide-react";
// import Image from "next/image";
// import { Cursor } from "../ui/cursor";
// import { useRouter } from "next/navigation";

// export default function ThreeDGraphics() {
//   const [isHovering, setIsHovering] = useState(false);
//   const buttonRef = useRef<HTMLButtonElement>(null);
//   const router = useRouter();

//   const handlePositionChange = (x: number, y: number) => {
//     if (buttonRef.current) {
//       const rect = buttonRef.current.getBoundingClientRect();
//       const isInside =
//         x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
//       setIsHovering(isInside);
//     }
//   };

//   return (
//     <div className="relative flex flex-col md:flex-row justify-between items-center gap-6 my-6">
//       <Cursor
//         attachToParent
//         variants={{
//           initial: { scale: 0.3, opacity: 0 },
//           animate: { scale: 1, opacity: 1 },
//           exit: { scale: 0.3, opacity: 0 },
//         }}
//         springConfig={{
//           bounce: 0.001,
//         }}
//         transition={{
//           ease: "easeInOut",
//           duration: 0.15,
//         }}
//         onPositionChange={handlePositionChange}
//       >
//         <motion.div
//           animate={{
//             width: isHovering ? 80 : 16,
//             height: isHovering ? 32 : 16,
//           }}
//           className="flex items-center justify-center rounded-[24px] bg-gray-500/40 backdrop-blur-md dark:bg-gray-300/40"
//         >
//           <AnimatePresence>
//             {isHovering && (
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.6 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.6 }}
//                 className="inline-flex w-full items-center justify-center"
//               >
//                 <div className="inline-flex items-center text-sm text-white dark:text-black">
//                   Click <Mail className="ml-1 h-4 w-4" />
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </motion.div>
//       </Cursor>

//       <div className="w-full md:w-1/2 flex flex-col items-start justify-start gap-4 h-auto">
//         <h1 className="text-4xl font-bold">3D Commercials</h1>
//         <p className="text-black/50 dark:text-yellow-400 text-xs sm:text-lg hover:text-black/80 dark:hover:text-yellow-300 transition-colors text-start leading-8 tracking-wider">
//           Bring your ideas to life with stunning 3D visuals that captivate and
//           engage. From concept development to final rendering, we craft
//           immersive 3D commercials that elevate your brand and leave a lasting
//           impact.
//         </p>
//         <p className="text-black/50 dark:text-yellow-400 text-xs sm:text-lg hover:text-black/80 dark:hover:text-yellow-300 transition-colors text-start leading-8 tracking-wider">
//           We provide: Photorealistic model with 360-degree view, Commercial,
//           Animation videos, Product animation videos, Industrial machine videos.
//         </p>
//         {/* move the button to the end of the container vertically */}
//         <button
//           onClick={() => router.push("/contact")}
//           ref={buttonRef}
//           className="mt-5 bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition-colors "
//         >
//           Book A Slot
//         </button>
//       </div>
//       <div className="w-full md:w-1/2">
//         <Image
//           src="/3d-commercials.png"
//           alt="3D Commercials"
//           width={400}
//           height={400}
//           className="w-full rounded-2xl max-h-[400px] object-cover"
//         />
//       </div>
//     </div>
//   );
// }


import { useRef } from "react";
import { motion } from "motion/react";
import { Mail } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ThreeDGraphics() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  return (
    <div className="relative flex flex-col md:flex-row justify-between items-center gap-6 my-6">
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
        <button
          ref={buttonRef}
          onClick={() => router.push("/contact")}
          className="mt-5 bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition-colors"
        >
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
