import React from "react";
import { getTranslations } from "next-intl/server";

async function Clients() {
  const t = await getTranslations();

  return (
    <section className="container my-[100px] md:mx-auto px-2">
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

      {/***
       * bank-muskat
       * data-park
       * omran-group
       * bank-dofar
       * oman-oil
       * world-health-organization
       * ministry-of-finance-1
       * intaji
       * oman-business
       * akzo-nobel
       * oman-adventure
       * duqm
       * atanahotels3
       * expo-dubai
       *
       *
       */}
    </section>
  );
}

export default Clients;
