import { getTranslations } from "next-intl/server";

import AnimatedProcess from "./AnimatedProcess";

async function AgileProcess() {
  const t = await getTranslations();

  return (
    <section className="container my-[100px] md:mx-auto px-2">
      <div className="max-w-[70ch]">
        <p
          className="font-medium text-primary-gray-900"
          dangerouslySetInnerHTML={{
            __html: t.raw("home.agileProcess.subtitle"),
          }}
        />
        <h2
          className="text-h3 mt-2.5 font-bold text-primary-gray-900 leading-[34px]"
          dangerouslySetInnerHTML={{
            __html: t.markup("home.agileProcess.title", {
              highlight: (chunks: string) =>
                `<span class="text-primary-gray-400">${chunks}</span>`,
            }),
          }}
        />
      </div>

      {/* strategy raws */}
      <AnimatedProcess />
    </section>
  );
}

export default AgileProcess;
