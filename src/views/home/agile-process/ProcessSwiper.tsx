"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

function ProcessSlider() {
  const t = useTranslations();
  return (
    <Swiper
      spaceBetween={60}
      slidesPerView="auto"
      scrollbar={{ draggable: true }}
      className="my-[100px] min-h-screen overflow-visible lg:!pt-[100px]"
    >
      {t.raw("home.agileProcess.cards").map((card: any, index: number) => (
        <SwiperSlide key={index} className="!h-auto md:!w-fit">
          <div className="h-fit w-full items-start lg:min-w-[1200px] text-start rounded-lg p-5 overflow-visible">
            <div className="max-w-[70ch] h-full z-10 md:p-[82px] flex flex-col gap-[42px]">
              <div
                className="text-[40px] font-bold text-white capitalize"
                dangerouslySetInnerHTML={{
                  __html: t.markup(card.title, {
                    highlight: (chunks: string) =>
                      `<span class="text-primary-brand-500">${chunks}</span>`,
                  }),
                }}
              />

              <p
                className="font-normal text-primary-error-25 leading-[22px]"
                dangerouslySetInnerHTML={{
                  __html: t(card.content),
                }}
              />
              {card.cta && (
                <HoverBorderGradient
                  containerClassName="rounded-full border-none"
                  as="button"
                  className="border-white bg-[#131F3C] text-white radius-[100px] group px-5 py-3 flex items-center space-x-2"
                >
                  <motion.div
                    className="sparkles group-hover:block"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                  />
                  <span>{t(card.cta)}</span>
                </HoverBorderGradient>
              )}
              {card.logos && (
                <div className="flex md:flex-row flex-col gap-4">
                  {card.logos.map((logo: string, index: number) => (
                    <Image
                      key={index}
                      src={logo}
                      alt={`image ${index}`}
                      height={20}
                      width={130}
                      className="contain"
                    />
                  ))}
                </div>
              )}
            </div>

            {card.image && (
              <>
                <div className="absolute h-full w-full top-0 left-0 rounded-lg z-[-1] bg-[#131F3C]" />
                <Image
                  src={card.image}
                  width={480}
                  height={650}
                  alt="background image"
                  className="absolute h-full top-[-100px] bottom-[10] right-0 rtl:right-auto rtl:left-0 rounded-lg z-[-1] object-cover"
                />
              </>
            )}
            {card.backgroundVideo && (
              <>
                <div className="absolute h-full w-full top-0 left-0 rounded-lg z-[-1] slider-gradient" />
                <motion.video
                  autoPlay
                  loop
                  muted
                  style={{
                    position: "absolute",
                    borderRadius: "8px",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: -2,
                    opacity: 1,
                  }}
                >
                  <source src={card.backgroundVideo} type="video/mp4" />
                </motion.video>
              </>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ProcessSlider;
