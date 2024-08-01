import React from "react";
import { getTranslations } from "next-intl/server";
import Button from "@/components/ui/Button";

import ServicesGrid from "./ServicesGrid";

async function PlayGrounds() {
  const t = await getTranslations();

  return (
    <section className="container max-sm:px-5 mx-auto my-[100px]">
      <div className="flex justify-between gap-4 items-end max-sm:flex-col">
        <div className="basis-1/2">
          <p
            className="font-medium text-primary-gray-900"
            dangerouslySetInnerHTML={{
              __html: t.raw("home.playgrounds.subtitle"),
            }}
          />
          <h2
            className="text-h3 mt-2.5 font-bold text-primary-gray-900 leading-[34px]"
            dangerouslySetInnerHTML={{
              __html: t.markup("home.playgrounds.title", {
                highlight: (chunks: string) =>
                  `<span class="text-primary-gray-400">${chunks}</span>`,
              }),
            }}
          />
        </div>
        <Button variant="outlined" className="w-fit">
          {t("home.playgrounds.cta")}
        </Button>
      </div>
      <ServicesGrid />
    </section>
  );
}

export default PlayGrounds;
