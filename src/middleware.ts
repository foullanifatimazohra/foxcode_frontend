import createMiddleware from "next-intl/middleware";

import { DEFAULT_LOCALE, localePrefix } from "./global-config";

export default createMiddleware({
  locales: ["en", "ar"],

  localePrefix: localePrefix,

  // Used when no locale matches
  defaultLocale: DEFAULT_LOCALE,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(ar|en)/:path*"],
};
