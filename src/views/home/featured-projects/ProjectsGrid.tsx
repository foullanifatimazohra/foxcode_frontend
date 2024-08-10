"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import ShinyButton from "@/components/ui/shiny-button";
import { GlowCard } from "@/components/ui/glow-card";

function ProjectsGrid() {
  const t = useTranslations();

  return (
    <div>
      <div className="px-5 grid lg:grid-cols-3 md:grid-cols-2 gap-4 mx-auto mt-20 md:auto-rows-[260px]">
        {t
          .raw("home.featuredProjects.projects")
          .map((card: any, index: number) => (
            <GlowCard key={index}>
              <motion.div
                className={`p-6 bg-[#141E33] bg-opacity-90 h-full min-w-[290px] max-sm:h-[300px] rounded-lg justify-between`}
                transition={{ duration: 0.3 }}
              >
                <div className="text-start flex flex-col justify-between h-full">
                  <h4 className="text-body font-bold text-secondary-blueGray-25">
                    {card.title}
                  </h4>
                  <p className="font-normal text-primary-gray-100">
                    {card.text}
                  </p>
                </div>
              </motion.div>
            </GlowCard>
          ))}
      </div>
      <div className="my-10 flex justify-center text-center">
        <ShinyButton
          width={228}
          height={60}
          className="text-white px-6 py-4 group flex items-center space-x-2 rounded-full border-none"
        >
          <span>{t("home.featuredProjects.cta")}</span>
        </ShinyButton>
      </div>
    </div>
  );
}

export default ProjectsGrid;
