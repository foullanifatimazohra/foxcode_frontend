"use client";

import { MouseEvent } from "react";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";

interface GlowCardProps {
  children: React.ReactNode;
}

export const GlowCard = ({ children }: GlowCardProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const onHandleMouseMove = ({
    clientX,
    clientY,
    currentTarget,
  }: MouseEvent) => {
    // Get the size and position of the current target relative to the viewport
    const bounds = currentTarget.getBoundingClientRect();

    // Set mouse position relative to the bounds of the element
    mouseX.set(clientX - bounds.left);
    mouseY.set(clientY - bounds.top);
  };

  return (
    <div
      className="relative p-0.5 h-full rounded-lg group"
      onMouseMove={onHandleMouseMove}
    >
      {/* Background Border Effect */}
      <motion.div
        className="absolute inset-0 rounded-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        transition={{ type: "tween", ease: "backOut" }}
        style={{
          maskImage: useMotionTemplate`radial-gradient(circle at ${mouseX}px ${mouseY}px, white 20%, transparent 30%)`,
          WebkitMaskImage: useMotionTemplate`radial-gradient(circle at ${mouseX}px ${mouseY}px, white 20%, transparent 30%)`,
          background: useMotionTemplate`radial-gradient(200px circle at ${mouseX}px ${mouseY}px, white 0%, transparent 60%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full rounded-lg">{children}</div>
    </div>
  );
};
