import { getTranslations } from "next-intl/server";
import Button from "@/components/ui/Button";

async function CallToAction() {
  const t = await getTranslations();

  return (
    <div className="flex flex-col gap-4 max-w-[86ch] mb-24">
      <h3 className="text-h1 font-bold">{t("footer.cta.title")}</h3>
      <p
        className="text-body font-normal text-primary-gray-700"
        dangerouslySetInnerHTML={{
          __html: t.markup("footer.cta.paragraph", {
            b: (chunks) => `<b class="font-bold">${chunks}</b>`,
          }),
        }}
      />
      <div className="flex flex-wrap gap-5">
        <Button>{t("footer.cta.contactUs")}</Button>
        <Button
          variant="outlined"
          className="!text-primary-brand-500 !border-primary-brand-500"
        >
          {t("footer.cta.freeQuotation")}
        </Button>
      </div>
    </div>
  );
}

export default CallToAction;
