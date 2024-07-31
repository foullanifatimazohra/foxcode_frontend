"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import { motion } from "framer-motion";
import { playGroundsCardsIcons } from "@/constants";
import Button from "@/components/ui/Button";

function ServicesGrid() {
  const [openCardIndex, setOpenCardIndex] = useState<number | null>(null);

  const t = useTranslations();

  const services = t.raw("home.playgrounds.services");

  // Add icons to services
  const servicesWithIcons = services.map((service: any, index: number) => ({
    ...service,
    icon: playGroundsCardsIcons[index % playGroundsCardsIcons.length], // Assign an icon
  }));

  const handleToggle = (index: number) => {
    setOpenCardIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  // Split services into two columns
  const firstColumnServices = servicesWithIcons.filter(
    (_: any, i: number) => i % 2 === 0
  );
  const secondColumnServices = servicesWithIcons.filter(
    (_: any, i: number) => i % 2 !== 0
  );

  return (
    <div className="md:grid grid-cols-2 gap-4 max-w-full my-16">
      {/* First Column */}
      <div className="flex flex-col gap-4">
        {firstColumnServices.map((service: any, index: number) => (
          <motion.div key={index} layout>
            <Card
              isOpen={openCardIndex === index * 2}
              onToggle={() => handleToggle(index * 2)}
              service={service}
            />
          </motion.div>
        ))}
      </div>

      {/* Second Column */}
      <div className="flex flex-col gap-4">
        {secondColumnServices.map((service: any, index: number) => (
          <motion.div key={index + 1} layout>
            <Card
              isOpen={openCardIndex === index * 2 + 1}
              onToggle={() => handleToggle(index * 2 + 1)}
              service={service}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

interface CardProps {
  isOpen: boolean;
  onToggle: () => void;
  service: any;
}

const Card: React.FC<CardProps> = ({ isOpen = false, onToggle, service }) => {
  const { icon, title, text, items } = service || {};
  return (
    <motion.div
      layout
      className={`relative rounded-lg ${!isOpen ? "!bg-primary-gray-100" : "h-auto"} p-8`}
    >
      <div className="flex z-10 justify-between items-start">
        <Image alt="icon" src={icon} width={64} height={64} />

        <motion.div whileHover={{ rotate: !isOpen ? 90 : 0 }}>
          <Button
            className="bg-white hover:bg-primary-gray-25 border-primary-gray-300 !p-3"
            onClick={onToggle}
          >
            {isOpen ? (
              <Minus size={20} className="text-black" />
            ) : (
              <Plus size={20} className="text-black" />
            )}
          </Button>
        </motion.div>
      </div>

      <h4
        className={`mt-6 font-bold text-[20px] ${isOpen ? "text-white" : "text-primary-gray-900"}`}
      >
        {title}
      </h4>
      <p className={`mt-4 ${isOpen ? "text-white" : "text-primary-gray-500"}`}>
        {text}
      </p>

      {isOpen && (
        <ul className="grid grid-cols-2 gap-3 list-disc list-inside text-white mt-[42px]">
          {items.map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}

      {isOpen && (
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
            zIndex: -1,
            opacity: 0.5,
          }}
        >
          <source
            src="/assets/videos/background-services.mp4"
            type="video/mp4"
          />
        </motion.video>
      )}
    </motion.div>
  );
};

export default ServicesGrid;
