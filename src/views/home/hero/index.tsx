import React from "react";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { heroCompaniesLogos } from "@/constants";
import MagneticFramer from "@/components/ui/magnetic-framer";
import Button from "@/components/ui/Button";

import Mask from "../../../../public/assets/images/home/mask.svg";

async function Hero() {
  const t = await getTranslations();

  return (
    <section className="container py-8 flex flex-col gap-6 items-center max-sm:px-5 mx-auto">
      <h1
        className="text-h1 text-center leading-[66px] text-primary-gray-900 max-w-[20ch] font-bold"
        dangerouslySetInnerHTML={{
          __html: t.markup("home.hero.title", {
            highlight: (chunks: string) =>
              `<span class="text-primary-brand-500">${chunks}</span>`,
          }),
        }}
      />
      <p className="text-body text-primary-gray-900 font-normal leading-6 text-center max-w-[60ch]">
        {t("home.hero.paragraph")}
      </p>
      <MagneticFramer>
        <Button size="xlarge">{t("home.hero.cta")}</Button>
      </MagneticFramer>

      {maskVideo}
      {renderInfo(t)}
    </section>
  );
}

// ----------------------------------------------------------------
const maskVideo = (
  <div className="relative w-full md:min-h-[300px] h-[200px] mt-10">
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

// ----------------------------------------------------------------

const renderInfo = (t: any) => (
  <div className="flex w-full max-sm:flex-col gap-10 items-center md:justify-between mt-10">
    <div className="flex gap-4 max-sm:flex-col">
      {t.raw("home.hero.info").map((card: any, index: number) => (
        <div key={index}>
          <h3 className="font-bold text-body text-primary-gray-900">
            {card.count}
          </h3>
          <p className="text-body font-normal">{card.text}</p>
        </div>
      ))}
    </div>
    <div className="flex gap-10 max-sm:flex-col">
      {heroCompaniesLogos.map((companyLogo: any, index: number) => (
        <Image
          key={index}
          src={`/assets/images/companies/${companyLogo}`}
          alt={`Company ${index}`}
          width={110}
          height={28}
        />
      ))}
    </div>
  </div>
);
export default Hero;
