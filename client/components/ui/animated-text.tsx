"use client";

import { motion, Variants } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  variant?: "word" | "letter";
}

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

export function AnimatedText({ 
  text, 
  className = "", 
  delay = 0,
  variant = "word" 
}: AnimatedTextProps) {
  const elements = variant === "word" ? text.split(" ") : text.split("");

  return (
    <motion.div
      className={`flex flex-wrap ${className}`}
      initial="hidden"
      animate="visible"
      transition={{
        staggerChildren: 0.05,
        delayChildren: delay,
      }}
    >
      {elements?.map((element, index) => (
        <motion.span
          key={index}
          variants={variant === "word" ? wordVariants : letterVariants}
          className="inline-block"
          style={{ marginRight: variant === "word" ? "0.25em" : "0" }}
        >
          {element}
        </motion.span>
      ))}
    </motion.div>
  );
}