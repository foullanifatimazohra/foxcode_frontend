"use client";

import { useMediaQuery } from "react-responsive";
import { useRef } from "react";
import { useLocale, useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";

function AnimatedProcess() {
  const locale: string = useLocale();
  const t = useTranslations();

  const animatedSectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: animatedSectionRef });

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  // Create a height transform based on scrollYProgress
  const dividerHeight = useTransform(scrollYProgress, [1, 0], ["0%", "100%"]);

  let sequentialNumber = 0;

  return (
    <section
      ref={animatedSectionRef}
      className="mt-[55px] border-t flex justify-between gap-4 max-sm:divide-y divide-primary-gray-200 flex-wrap max-sm:flex-col border-primary-gray-200"
    >
      {t.raw("home.agileProcess.process").map((process: any, index: number) => (
        <div key={index} className="flex-1 flex space-between relative">
          <div>
            <p className="my-8 text-[20px] font-bold">{process.title}</p>

            {process.steps.map((text: string, stepIndex: number) => {
              // Incremental X Transform for each step
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const xTransform = useTransform(
                scrollYProgress,
                [1, 0],
                locale === "ar"
                  ? [(stepIndex + 1) * -1, stepIndex * -40]
                  : [stepIndex * 0, (stepIndex + 1) * 40]
              );

              sequentialNumber += 1;

              return (
                <motion.div
                  key={stepIndex}
                  initial={{ x: 0 }}
                  className="flex w-fit gap-4 px-2 py-1 rounded-[72px] border border-primary-gray-100 items-center"
                  style={{
                    marginTop: "16px",
                    [locale === "ar" ? "marginRight" : "marginLeft"]:
                      `${stepIndex * 20}px`,
                    x: isTabletOrMobile ? 1 : xTransform,
                  }}
                >
                  <p className="h-[32px] w-[32px] flex items-center justify-center rounded-full bg-primary-gray-200">
                    {sequentialNumber}
                  </p>
                  <p className="font-medium">{text}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Static divider starting from the top */}
          {index < t.raw("home.agileProcess.process").length - 1 && (
            <motion.div
              className="absolute max-sm:hidden rtl:right-auto rtl:left-0 right-0 transform -translate-x-1/2 w-[1px] bg-primary-gray-200"
              style={{ top: 0, height: dividerHeight }}
            />
          )}
        </div>
      ))}
    </section>
  );
}

export default AnimatedProcess;
