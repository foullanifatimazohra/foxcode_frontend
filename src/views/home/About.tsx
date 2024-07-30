import { getTranslations } from "next-intl/server";

async function About() {
  const t = await getTranslations();

  return (
    <section className="flex justify-center items-center my-5 text-center flex-col">
      <p
        className="text-body mt-2.5 font-normal text-primary-gray-900 max-w-[50ch]"
        dangerouslySetInnerHTML={{
          __html: t.markup("home.about.paragraph", {
            b: (chunks: string) => `<b class="font-bold">${chunks}</b>`,
          }),
        }}
      />
      {renderDigitalExperience(t)}
    </section>
  );
}

const renderDigitalExperience = (t: any) => (
  <div>
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
  </div>
);

export default About;
