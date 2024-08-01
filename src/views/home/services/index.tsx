import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { industries } from "@/constants";
import Button from "@/components/ui/Button";

import AnimatedGrid from "./AnimatedGrid";

async function Services() {
  const t = await getTranslations();

  return (
    <section className="container max-sm:px-5 mx-auto my-[100px]">
      <h3
        className="text-h3 font-bold text-primary-gray-900"
        dangerouslySetInnerHTML={{
          __html: t.rich("home.services.title"),
        }}
      />
      <AnimatedGrid />
      <p
        className="text-h3 font-bold text-primary-gray-900 max-w-[40ch] mt-[100px]"
        dangerouslySetInnerHTML={{
          __html: t.markup("home.services.content", {
            highlight: (chunks: string) =>
              `<span class="text-primary-gray-400">${chunks}</span>`,
          }),
        }}
      />

      <div className="flex flex-wrap gap-[32px] md:max-w-[1100px] justify-center mb-16 mt-10">
        {industries.map((industry: any, index: any) => (
          <div
            key={index}
            className="flex gap-4 pl-1 pr-4 py-1 rounded-[72px] bg-primary-gray-100 items-center"
          >
            <Image
              src={industry.image}
              alt={t(industry.text)}
              width={52}
              height={52}
              className="object-cover h-[52px] w-[52px] rounded-full"
            />
            <p className="font-medium">{t(industry.text)}</p>
          </div>
        ))}
      </div>

      <p
        className="text-body font-normal text-primary-gray-900 max-w-[50ch]"
        dangerouslySetInnerHTML={{
          __html: t.raw("home.services.question"),
        }}
      />
      <Button size="xlarge" className="mt-6">
        {t("home.services.cta")}
      </Button>
    </section>
  );
}

export default Services;
