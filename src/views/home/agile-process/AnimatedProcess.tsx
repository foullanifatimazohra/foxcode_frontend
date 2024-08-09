"use client";

import { useRef } from "react";
import { useLocale, useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";

function AnimatedProcess() {
  const locale: string = useLocale();

  const t = useTranslations();

  const animatedSectionRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: animatedSectionRef });

  let sequentialNumber = 0;

  return (
    <section
      ref={animatedSectionRef}
      className="mt-[55px] border-t flex justify-between gap-4 max-sm:divide-y rtl:divide-x-reverse md:divide-x divide-primary-gray-200 flex-wrap border-primary-gray-200"
    >
      {t.raw("home.agileProcess.process").map((process: any, index: number) => (
        <motion.div key={index} className="rtl:pr-3 pl-3 flex-1">
          <p className="my-8 text-[20px] font-bold">{process.title}</p>
          {process.steps.map((text: string, stepIndex: number) => {
            // Incremental X Transform for each step
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const xTransform = useTransform(
              scrollYProgress,
              [1, 0],
              locale === "ar"
                ? [(stepIndex + 1) * -1, stepIndex * -30] // Reversed for RTL
                : [stepIndex * 0, (stepIndex + 1) * 30] // Normal for LTR
            );

            sequentialNumber = sequentialNumber + 1;

            return (
              <motion.div
                key={stepIndex}
                initial={{ x: 0 }}
                className={`flex w-fit gap-4 px-2 py-1 rounded-[72px] border border-primary-gray-100 items-center`}
                style={{
                  marginTop: "16px",
                  [locale === "ar" ? "marginRight" : "marginLeft"]:
                    `${stepIndex * 20}px`,
                  x: xTransform,
                }}
              >
                <p className="h-[32px] w-[32px] flex items-center justify-center rounded-full bg-primary-gray-200">
                  {sequentialNumber}
                </p>
                <p className="font-medium">{text}</p>
              </motion.div>
            );
          })}
        </motion.div>
      ))}
    </section>
  );
}

export default AnimatedProcess;
