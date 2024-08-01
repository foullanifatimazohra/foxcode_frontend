import type { Metadata } from "next";

import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

import "../globals.css";

export const metadata: Metadata = {
  title:
    "Foxcode | Leading Digital Startup in Oman | Innovative Solutions for Top Clients",
  description:
    "Foxcode is Oman's premier digital startup, delivering cutting-edge solutions for a diverse range of high-profile clients. Specializing in innovative digital strategies, we help businesses thrive in the digital era. Discover how our expertise can drive your success.",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
