import React from "react";
import { getTranslations } from "next-intl/server";

import TestimonialsSwiper from "./TestimonialsSwiper";

async function Testimonials() {
  const t = await getTranslations();

  return (
    <section className="container max-sm:px-5 mx-auto my-[100px] justify-center">
      <h3
        className="text-h3 text-center font-bold text-primary-gray-900"
        dangerouslySetInnerHTML={{
          __html: t.markup("home.testimonials.title", {
            highlight: (chunks: string) =>
              `<span class="text-primary-brand-500">${chunks}</span>`,
          }),
        }}
      />

      {/* testimonials Swiper */}

      <TestimonialsSwiper />
    </section>
  );
}

export default Testimonials;
