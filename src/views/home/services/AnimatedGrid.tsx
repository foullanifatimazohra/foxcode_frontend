"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { keyServices } from "@/constants";

export default function AnimatedGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number[]>([0, 2]); // Default to first and third cards

  const handleHoverStart = (index: number) => setHoveredIndex([index]);
  const handleHoverEnd = () => setHoveredIndex([0, 2]);

  const isActive = (index: number) => hoveredIndex.includes(index);

  return (
    <div className="grid md:grid-cols-4 grid-col-1 gap-8 my-[100px] flex-wrap items-center justify-center">
      {keyServices.map((service: any, index: number) => (
        <Card
          key={index}
          index={index}
          isActive={isActive(index)}
          onHoverStart={handleHoverStart}
          onHoverEnd={handleHoverEnd}
          service={service}
        />
      ))}
    </div>
  );
}

// ----------------------------------------------------------------

interface CardProps {
  isActive: boolean;
  onHoverStart: any;
  onHoverEnd: () => void;
  index: number;
  service: any;
}
const Card = ({
  isActive,
  onHoverStart,
  onHoverEnd,
  index,
  service,
}: CardProps) => {
  const t = useTranslations();

  const {
    text,
    background,
    className,
    isBackgroundVideo,
    backgroundColor,
    backgroundOverlay,
  } = service || {};

  return (
    <motion.div
      onHoverStart={() => onHoverStart(index)}
      onHoverEnd={onHoverEnd}
      animate={{
        y: isActive ? -60 : 0,
        filter: isActive ? "none" : "opacity(0.7)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`relative min-w-[280px] min-h-[300px] py-[30px] px-9 bg-contain bg-no-repeat bg-left-bottom flex rounded-lg ${className || ""}`}
      style={{
        alignItems: index % 2 === 0 ? "end" : "",
      }}
    >
      <p
        className="text-h3 z-20 font-normal max-w-[15ch] text-start leading-[34px] text-white"
        dangerouslySetInnerHTML={{
          __html: t.raw(text),
        }}
      />

      {/* Overlay */}
      {backgroundOverlay && (
        <div
          className={`absolute rounded-lg inset-0 z-10 ${backgroundOverlay}`}
        />
      )}

      {/* Background Color / Gradient */}
      {backgroundColor && (
        <div
          className={`absolute inset-0 rounded-lg z-10 ${backgroundColor || "bg-primary-brand-900"}`}
        />
      )}

      {isBackgroundVideo ? (
        <motion.video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -5,
            borderRadius: 8,
          }}
        >
          <source src={background} type="video/mp4" />
        </motion.video>
      ) : (
        <motion.img
          src={background}
          alt="Card background"
          style={{
            position: "absolute",
            top: index === 2 ? -100 : 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: index === 2 ? "contain" : "cover",
            objectPosition: "right",
            borderRadius: 8,
            zIndex: -5,
          }}
        />
      )}
    </motion.div>
  );
};
