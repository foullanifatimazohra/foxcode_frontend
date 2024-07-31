import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { MovingLine } from "@/components/ui/moving-line";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

async function About() {
  const t = await getTranslations();

  return (
    <section className="flex justify-center gap-4 items-center my-[100px] text-center flex-col">
      <p
        className="text-body mt-2.5 font-normal text-primary-gray-900 max-w-[50ch]"
        dangerouslySetInnerHTML={{
          __html: t.markup("home.about.paragraph", {
            b: (chunks: string) => `<b class="font-bold">${chunks}</b>`,
          }),
        }}
      />

      <MovingLine />

      {renderDigitalExperience(t)}
    </section>
  );
}

const renderDigitalExperience = (t: any) => (
  <div className="flex flex-col gap-4 items-center">
    <h2
      className="text-h2 text-center leading-[66px] text-primary-gray-900 font-bold"
      dangerouslySetInnerHTML={{
        __html: t.markup("home.about.experience.title", {
          highlight: (chunks: string) =>
            `<span class="text-primary-brand-500">${chunks}</span>`,
        }),
      }}
    />
    <p className="text-body text-primary-gray-900 font-normal leading-6 text-center max-w-[60ch]">
      {t("home.about.experience.paragraph")}
    </p>
    {renderBentoGrid(t)}
  </div>
);

const renderBentoGrid = (t: any) => (
  <BentoGrid className="px-5 mx-auto mt-20 md:auto-rows-[12rem]">
    {t.raw("home.about.cards").map((card: any, index: number) => (
      <BentoGridItem
        key={index}
        className={`relative min-w-[290px] max-sm:h-[300px] bg-primary-gray-25 p-6 border-primary-gray-200 rounded-lg justify-end  ${index === 0 ? "md:row-span-2" : ""}`}
      >
        <div className="text-start">
          {index === 0 && (
            <Image
              src="/assets/images/home/card-image.png"
              width={300}
              height={40}
              alt={card.text}
              className="absolute top-10 left-0 right-0"
            />
          )}
          <h4 className="text-[40px] font-bold text-primary-gray-900">
            {card.count}
          </h4>
          <p className="font-normal text-primary-gray-900">{card.text}</p>
        </div>
      </BentoGridItem>
    ))}
  </BentoGrid>
);

export default About;
