import React from "react";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

import CallToAction from "./call-to-action";

async function Footer() {
  const t = await getTranslations();

  return (
    <footer className="border-t border-primary-gray-200 py-12">
      <div className="container flex flex-col mx-auto max-sm:px-5">
        <div className="divide-y divide-primary-gray-200">
          <CallToAction />

          {renderFooterColumns(t)}
        </div>
        <div className="flex gap-4 max-sm:flex-col justify-between">
          <p>{t("footer.rights")}</p>
          <div className="flex gap-2">
            {t.raw("footer.countries").map((country: string, index: number) => (
              <React.Fragment key={index}>
                <span key={country}> {country}</span>
                {index < t.raw("footer.countries").length - 1 && "- "}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ----------------------------------------------------------------

const renderFooterColumns = (t: any) => (
  <div className="grid gap-10 grid-rows-1 grid-cols-1 md:grid-cols-3  py-16">
    <div>
      <Image
        src="/assets/icons/logo/logo.svg"
        alt="foxcode Logo"
        width={110}
        height={20}
      />
      <p className="text-body mt-2.5 text-primary-gray-700 max-w-[35ch]">
        {t("footer.paragraph")}
      </p>
    </div>
    <div>
      <h5 className="text-body font-bold">{t("footer.career.title")}</h5>
      <p
        className="text-body mt-2.5 text-primary-gray-700 max-w-[35ch]"
        dangerouslySetInnerHTML={{
          __html: t.markup("footer.career.paragraph", {
            b: (chunks: string) => `<b class="font-bold">${chunks}</b>`,
          }),
        }}
      />
    </div>
    <div>
      <h5 className="text-body font-bold">{t("footer.work.title")}</h5>
      <p
        className="text-body mt-2.5 text-primary-gray-700 max-w-[35ch]"
        dangerouslySetInnerHTML={{
          __html: t.markup("footer.work.paragraph", {
            b: (chunks: string) => `<b class="font-bold">${chunks}</b>`,
          }),
        }}
      />
    </div>
  </div>
);

export default Footer;
