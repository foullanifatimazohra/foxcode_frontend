import React from "react";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

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
      <div className="grid relative justify-center my-[200px] items-center py-8 px-10 rounded-lg lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 bg-primary-gray-900">
        {t.raw("home.faq.info").map((card: any, index: number) => (
          <div key={index}>
            <h3 className="font-bold text-h2 text-white">{card.count}</h3>
            <p className="font-normal text-white">{card.text}</p>
          </div>
        ))}
        <Image
          src="/assets/images/home/background-faq.png"
          width={140}
          height={300}
          alt="background Image"
          className="absolute top-0 right-0 w-auto object-contain"
        />
      </div>
    </section>
  );
}

export default Faq;
