import createMiddleware from "next-intl/middleware";

import { LOCALES, DEFAULT_LOCALE, LOCALE_PREFIX } from "./global-config";

export default createMiddleware({
  locales: LOCALES,

  localePrefix: LOCALE_PREFIX,

  // Used when no locale matches
  defaultLocale: DEFAULT_LOCALE,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(ar|en)/:path*"],
};
