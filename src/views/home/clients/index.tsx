import React from "react";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { clientsLogos, portfolioProjects } from "@/constants";
import { HeroParallax } from "@/components/ui/hero-parallax/hero-parallax";

async function Clients() {
  const t = await getTranslations();

  return (
    <section className="container max-sm:px-5 mx-auto my-[100px]">
      <h3
        className="text-h3 font-semibold text-primary-gray-900 leading-[34px]"
        dangerouslySetInnerHTML={{
          __html: t.markup("home.clients.title", {
            highlight: (chunks: string) =>
              `<span class="text-primary-brand-500">${chunks}</span>`,
          }),
        }}
      />
      {/* Clients Logos */}
      <div className="grid md:grid-cols-4 grid-cols-1 gap-8 auto-rows-[150px] my-[48px]">
        {clientsLogos.map((srcLink: string, index: number) => (
          <div
            key={index}
            className="border flex items-center justify-center border-primary-gray-200 rounded-lg p-[50px]"
          >
            <Image
              className="object-contain w-[140px] h-[60px] bg-blend-luminosity"
              src={srcLink}
              width={140}
              height={60}
              alt={`Client ${index + 1}`}
            />
          </div>
        ))}
        <div className="border flex items-center flex-col text-center justify-center border-primary-gray-200 rounded-lg p-[50px]">
          <p className="text-[40px] font-bold">
            {t("home.clients.numberOfPartners")}
          </p>
          <p className="font-medium">{t("home.clients.label")}</p>
        </div>
      </div>
      {/* Parallax Portfolio  */}
      <HeroParallax products={portfolioProjects} />
    </section>
  );
}

export default Clients;
