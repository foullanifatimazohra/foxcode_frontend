import React from "react";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { portfolioCards } from "@/constants";
import Button from "@/components/ui/Button";

// Todo : add the divider

async function Portfolio() {
  const t = await getTranslations();
  return (
    <section className="container my-[100px] md:mx-auto px-2">
      <div className="flex justify-between gap-4 items-end max-sm:flex-col">
        <div className="basis-1/2">
          <p
            className="font-medium text-primary-gray-900"
            dangerouslySetInnerHTML={{
              __html: t.raw("home.portfolio.subtitle"),
            }}
          />
          <h2
            className="text-h3 mt-2.5 font-bold text-primary-gray-900 leading-[34px]"
            dangerouslySetInnerHTML={{
              __html: t.markup("home.portfolio.title", {
                highlight: (chunks: string) =>
                  `<span class="text-primary-gray-400">${chunks}</span>`,
              }),
            }}
          />
        </div>
        <Button variant="outlined" className="w-fit">
          {t("home.portfolio.cta")}
        </Button>
      </div>

      {/* Portfolio Cards */}
      <div className="flex flex-col d gap-[100px] mt-[70px]">
        {portfolioCards.map((card: any, index: number) => (
          <div
            key={index}
            className="flex gap-5 items-center justify-between max-sm:flex-col"
          >
            <div className="basis-1/2">
              <Image
                src={card.logo}
                width={150}
                height={50}
                alt={card.title}
                className="object-contain"
              />
              <p className="font-normal mt-5 text-primary-gray-900 max-w-[45ch]">
                {t(card.text)}
              </p>
            </div>
            <Image
              src={card.backgroundImage}
              alt={card.title}
              width={600}
              height={360}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
