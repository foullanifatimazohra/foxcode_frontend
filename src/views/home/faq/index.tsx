import React from "react";
import { getTranslations } from "next-intl/server";

import Card from "./Card";

async function Faq() {
  const t = await getTranslations();

  return (
    <section className="container max-sm:px-5 mx-auto my-[100px] justify-center">
      <div className="flex max-sm:flex-col gap-[63px]">
        <h3
          className="text-h2 text-start capitalize max-w-[15ch] font-bold text-primary-gray-900"
          dangerouslySetInnerHTML={{
            __html: t.markup("home.faq.title", {
              highlight: (chunks: string) =>
                `<span class="text-primary-brand-500">${chunks}</span>`,
            }),
          }}
        />
        <div className="flex flex-col divide-y divide-primary-gray-200">
          {t.raw("home.faq.questions").map((content: any, index: number) => (
            <Card content={content} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
