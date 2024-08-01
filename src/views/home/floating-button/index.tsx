import React from "react";
import { getTranslations } from "next-intl/server";
import { Plus } from "lucide-react";
import Button from "@/components/ui/Button";

async function FloatingButton() {
  const t = await getTranslations();
  return (
    <div className="fixed bottom-4 z-20 w-full">
      <div className="flex justify-center">
        <Button
          className="!bg-black !bg-opacity-30"
          endIcon={
            <div className="bg-white p-[5px] rounded-full">
              <Plus size={20} className="text-black" />
            </div>
          }
        >
          {t("home.cta.startAProject")}
        </Button>
      </div>
    </div>
  );
}

export default FloatingButton;
