"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useTranslations } from "next-intl";
function TestimonialsSwiper() {
  const t = useTranslations();

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      scrollbar={{ draggable: true }}
      className="my-[55px]"
    >
      {t.raw("home.testimonials.cards").map((card: any, index: number) => (
        <SwiperSlide key={index}>
          <div className=" flex items-center gap-2 flex-col max-w-[800px] text-center bg-primary-gray-25 border border-primary-gray-300 rounded-lg p-5 r">
            <p className="font-medium text-[18px] leading-[22px]">
              {card.content}
            </p>
            <p className="text-primary-brand-500 font-bold mt-3">{card.name}</p>
            <p className="text-primary-gray-500 max-w-[20ch]">
              {card.jobPosition}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default TestimonialsSwiper;
