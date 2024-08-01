"use client";

import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

function FeaturedProjects() {
  const t = useTranslations();

  return (
    <section className="my-[100px] py-[100px] relative bg-[#131F3C]">
      <Image
        src="/assets/images/home/background-image.png"
        alt="background featured project"
        fill
        className="absolute h-full !w-full top-20 left-0 right-0 object-cover"
      />
      <div className="container mx-auto max-sm:px-5">
        <div className="md:w-[70ch] text-start">
          <p
            className="font-medium text-secondary-blueGray-25"
            dangerouslySetInnerHTML={{
              __html: t.rich("home.featuredProjects.subtitle"),
            }}
          />
          <h2
            className="text-h3 mt-2.5 font-bold text-secondary-blueGray-25 leading-[34px]"
            dangerouslySetInnerHTML={{
              __html: t.markup("home.featuredProjects.title", {
                highlight: (chunks: string) =>
                  `<span class="text-primary-gray-500">${chunks}</span>`,
              }),
            }}
          />
        </div>
        <div className="px-5 grid md:grid-cols-3 gap-4 mx-auto mt-20 md:auto-rows-[260px]">
          {t
            .raw("home.featuredProjects.projects")
            .map((card: any, index: number) => (
              <motion.div
                key={index}
                className={`card-gradient p-6 relative min-w-[290px] max-sm:h-[300px] rounded-lg justify-between`}
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
            ))}
        </div>

        <div className="my-10 flex justify-center text-center">
          <HoverBorderGradient
            containerClassName="rounded-full border-none"
            as="button"
            className="bg-[#131F3C] text-white radius-[100px] group px-10 py-5 flex items-center space-x-2"
          >
            <motion.div
              className="sparkles group-hover:block"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity, repeatType: "loop" }}
            />
            <span>{t("home.featuredProjects.cta")}</span>
          </HoverBorderGradient>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;
