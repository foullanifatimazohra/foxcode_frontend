import React from "react";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

import ProjectsGrid from "./ProjectsGrid";

async function FeaturedProjects() {
  const t = await getTranslations();

  return (
    <section className="my-[100px] py-[100px] relative bg-[#131F3C]">
      <Image
        src="/assets/images/home/background-image.png"
        alt="background featured project"
        fill
        className="absolute h-full !w-full top-20 left-0 right-0 object-cover"
      />
      <div className="container mx-auto max-sm:px-5">
        <div className="md:w-[70ch] text-start">
          <p
            className="font-medium text-secondary-blueGray-25"
            dangerouslySetInnerHTML={{
              __html: t.rich("home.featuredProjects.subtitle"),
            }}
          />
          <h2
            className="text-h3 mt-2.5 font-bold text-secondary-blueGray-25 leading-[34px]"
            dangerouslySetInnerHTML={{
              __html: t.markup("home.featuredProjects.title", {
                highlight: (chunks: string) =>
                  `<span class="text-primary-gray-500">${chunks}</span>`,
              }),
            }}
          />
        </div>
        <ProjectsGrid />
      </div>
    </section>
  );
}

export default FeaturedProjects;
