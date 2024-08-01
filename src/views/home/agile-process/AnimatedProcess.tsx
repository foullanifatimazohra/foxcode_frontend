"use client";

import { useRef, useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import { motion, useAnimation, useInView } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2 },
  }),
};

function AnimatedProcess() {
  const controls = useAnimation();

  const locale: string = useLocale();

  const t = useTranslations();

  const ref = useRef(null);

  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      controls.start((i) => ({
        opacity: 1,
        x: 0,
        transition: { delay: i * 0.2 },
      }));
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <section
      ref={ref}
      className="mt-[55px] border-t flex justify-between gap-4 max-sm:divide-y rtl:divide-x-reverse md:divide-x divide-primary-gray-200 flex-wrap border-primary-gray-200"
    >
      {t.raw("home.agileProcess.process").map((process: any, index: number) => (
        <motion.div
          key={index}
          initial="hidden"
          animate={controls}
          custom={index}
          className="rtl:pr-3 pl-3"
          variants={cardVariants}
        >
          <p className="my-8 text-[20px] font-bold">{process.title}</p>
          {process.steps.map((text: string, stepIndex: number) => (
            <motion.div
              key={stepIndex}
              className={`flex w-fit  rtl:mr-[${stepIndex * 20}px] ml-[${stepIndex * 20}px] gap-4 px-2 py-1 rounded-[72px] border border-primary-gray-100 items-center`}
              initial="hidden"
              animate={controls}
              custom={stepIndex}
              style={{
                [locale === "ar" ? "marginRight" : "marginLeft"]:
                  `${stepIndex * 20}px`,
                marginTop: "16px",
              }}
              variants={cardVariants}
            >
              <p className="h-[32px] w-[32px] flex items-center justify-center rounded-full bg-primary-gray-200">
                {index * process.steps.length + stepIndex + 1}{" "}
                {/* Sequential Numbering */}
              </p>
              <p className="font-medium">{text}</p>
            </motion.div>
          ))}
        </motion.div>
      ))}
    </section>
  );
}

export default AnimatedProcess;
