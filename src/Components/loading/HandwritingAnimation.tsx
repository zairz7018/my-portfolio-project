import { useState } from "react";
import { motion } from "framer-motion";
import { letterPaths } from "./svgPaths";

export function HandwritingAnimation() {
  const [animationCompleted, setAnimationCompleted] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="w-full h-screen flex items-center justify-center bg-white dark:bg-gray-900"
    >
      <svg
        viewBox="0 0 350 160"
        className="max-w-full max-h-full md:max-w-[85%] md:max-h-[70vh] ml-16 md:ml-48"
      >
        {letterPaths.map((letter, index) => (
          <motion.path
            key={letter.id}
            d={letter.path}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{
              pathLength: 0,
              opacity: 0,
              fill: "transparent",
            }}
            animate={{
              pathLength: 1,
              opacity: 1,
              fill: animationCompleted ? "#3b82f6" : "transparent",
            }}
            transition={{
              pathLength: {
                duration: 1.5,
                delay: index * 0.2,
                ease: [0.42, 0, 0.58, 1],
              },
              opacity: {
                duration: 1,
                delay: index * 0.2,
                ease: "easeInOut",
              },
              fill: {
                duration: 0.8,
                delay: 0,
                ease: "easeInOut",
              },
            }}
            className="text-blue-600 dark:text-blue-400"
            onAnimationComplete={() => {
              if (index === letterPaths.length - 1) {
                setAnimationCompleted(true);
              }
            }}
          />
        ))}
      </svg>
    </motion.div>
  );
}
