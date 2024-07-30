import React from "react";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Button from "@/components/ui/Button";

import Mask from "../../../public/assets/images/home/mask.svg";
async function Hero() {
  const t = await getTranslations();

  return (
    <section className="container py-8 flex flex-col gap-6 items-center px-2 md:mx-auto h-screen">
      <h1
        className="text-h1 text-center text-primary-gray-900 max-w-[25ch] font-bold"
        dangerouslySetInnerHTML={{
          __html: t.markup("home.hero.title", {
            highlight: (chunks: string) =>
              `<span class="text-primary-brand-500">${chunks}</span>`,
          }),
        }}
      />
      <p className="text-body text-primary-gray-900 text-center max-w-[60ch]">
        {t("home.hero.paragraph")}
      </p>
      <Button size="xlarge">{t("home.hero.cta")}</Button>
      {maskVideo}
    </section>
  );
}

const maskVideo = (
  <div className="relative w-full h-full">
    <video
      className="absolute top-0 left-0 w-full h-full object-fill"
      style={{
        WebkitMaskImage: `url("/assets/images/home/mask.svg")`, // cross-browser compatibility
        maskImage: `url("/assets/images/home/mask.svg")`,
        maskSize: "100% 100%",
        maskPosition: "center",
      }}
      autoPlay
      muted
      loop
    >
      <source src="/assets/videos/mask-video.mp4" type="video/mp4" />
    </video>
    <Image src={Mask} fill alt="mask Video" className="hidden" />
  </div>
);

export default Hero;
