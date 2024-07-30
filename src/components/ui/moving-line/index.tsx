"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export const MovingLine = () => {
  const ref = useRef(null);

  // Track scroll progress, lies between 0 and 1.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  // When scroll progress reaches 1, path length becomes 1.
  const pathLengthValue = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const springPathLength = useSpring(pathLengthValue, {
    stiffness: 500,
    damping: 100,
  });

  const PATH = "M0.5 45L0.5 1566.02"; // Adjusted to start below the dashed circle

  return (
    <div className="min-h-[300px] flex flex-col items-center w-full" ref={ref}>
      <div className="relative flex items-center justify-center mb-2">
        <svg
          width="45"
          height="45"
          viewBox="0 0 45 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0"
        >
          <circle
            cx="22.5"
            cy="22.5"
            r="5.5"
            fill="currentColor"
            className="fill-primary-brand-500"
          />
          <circle
            cx="22.5"
            cy="22.5"
            r="22.5"
            fill="none"
            strokeDasharray="4 4"
            stroke="currentColor"
            className="text-primary-gray-300"
          />
        </svg>
      </div>

      <svg
        width="1"
        height="300"
        viewBox="0 0 1 1567"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <defs>
          <linearGradient
            id="paint0_linear_207_38"
            x1="1"
            y1="-102.823"
            x2="1"
            y2="1566.02"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3879E7" />
            <stop offset="1" stopColor="#3879E7" />
          </linearGradient>
        </defs>
        {/* Background path in grey */}
        <path d={PATH} stroke="#D0D5DD" strokeWidth="3" strokeLinecap="round" />
        {/* Foreground animated path */}
        <motion.path
          d={PATH}
          stroke="url(#paint0_linear_207_38)"
          strokeWidth="3"
          strokeLinecap="round"
          style={{
            pathLength: springPathLength,
          }}
        />
      </svg>
    </div>
  );
};
