import React from "react";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { portfolioCards } from "@/constants";
import Button from "@/components/ui/Button";

async function Portfolio() {
  const t = await getTranslations();
  return (
    <section className="container max-sm:px-5 mx-auto my-[100px]">
      <div className="flex justify-between gap-4 items-end flex-col lg:flex-row">
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
      <div className="flex flex-col gap-[100px] mt-[70px]">
        {portfolioCards.map((card: any, index: number) =>
          portfolioCard(index, card, t, index > 0)
        )}
      </div>
    </section>
  );
}

function portfolioCard(
  index: number,
  card: any,
  t: any,
  displayDivider: boolean
): React.JSX.Element {
  const { logo, text, backgroundImage, title } = card || {};
  return (
    <div
      key={index}
      className="flex gap-5 justify-between flex-col lg:flex-row"
    >
      <div
        className={`basis-1/2 py-[64px] max-w-[50ch] ${displayDivider ? "border-t border-primary-gray-200" : ""}`}
      >
        <Image
          src={logo}
          width={150}
          height={50}
          alt={title}
          className="object-contain"
        />
        <p className="font-normal mt-5 text-primary-gray-900 max-w-[45ch]">
          {t(text)}
        </p>
      </div>
      <Image
        src={backgroundImage}
        alt={title}
        width={600}
        height={360}
        className="object-contain"
      />
    </div>
  );
}
//----------------------------------------------------------------

export default Portfolio;
