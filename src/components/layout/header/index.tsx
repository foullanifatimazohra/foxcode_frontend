"use client";

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { Moon, Languages } from "lucide-react";
import { Link, usePathname } from "@/navigation";
import { useBoolean } from "@/hooks/use-boolean";
import Button from "@/components/ui/Button";

function Header() {
  const openNavigation = useBoolean();

  const t = useTranslations();

  const pathname = usePathname();

  const locale = useLocale();

  return (
    <header className="py-5 border-b border-primary-gray-200">
      <div className="container mx-auto max-sm:px-5 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/assets/icons/logo/logo.svg"
            alt="foxcode Logo"
            width={110}
            height={20}
          />
        </Link>
        <div className="flex gap-4">
          <nav
            className={`${
              openNavigation.value ? "flex" : "hidden"
            } fixed top-[5rem] left-0 right-0 bottom-0 bg-white z-10 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
          >
            <div className="gap-4 relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
              <Button variant="text" className="px-0" aria-label="Moon">
                <Moon />
              </Button>
              <Button variant="outlined">
                {t("header.buttons.getInTouch")}
              </Button>
              <Button
                variant="outlined"
                startIcon={<Languages />}
                href={pathname}
                locale={locale === "ar" ? "en" : "ar"}
              >
                {locale === "ar" ? "EN" : "AR"}
              </Button>
            </div>
          </nav>

          <Button
            variant="primary"
            onClick={openNavigation.onToggle}
            className="!p-[12px]"
            aria-label="Menu"
          >
            <Image
              src="/assets/icons/menu.svg"
              alt="menu"
              height={20}
              width={20}
            />
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
